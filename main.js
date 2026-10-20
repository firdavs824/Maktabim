import { loadData, saveData } from './data.js';
import { getLang, setLang, t } from './i18n.js';
import { renderDashboardView } from './components/dashboardView.js';
import { renderLeadsView } from './components/leadsView.js';
import { renderStudentsView } from './components/studentsView.js';
import { renderClassesView } from './components/classesView.js';
import { renderPaymentsView } from './components/paymentsView.js';
import { renderAttendanceView } from './components/attendanceView.js';
import { renderReportsView } from './components/reportsView.js';

// Application State
class MaktabCRM {
  constructor() {
    this.data = loadData();
    this.currentTab = 'dashboard';
    
    // Theme & Language State
    this.currentTheme = localStorage.getItem('maktab_crm_theme') || 'light';
    this.currentLang = getLang();

    // View-specific state
    this.leadFilterQuery = '';
    this.leadMobileCol = 'all';
    this.draggedLeadId = null;

    this.studentSearchQuery = '';
    this.studentActiveFilter = 'all';
    this.selectedStudentClass = null;
    this.selectedStudentId = this.data.students?.[0]?.id || null;

    this.attendanceSubTab = 'classes';
    this.activeAttendanceClassId = null;
    this.tempAttendanceMap = {}; // studentId -> 'present' | 'absent' | 'excused'

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.updateLangLabels();
    this.updateStaticTranslations();
    this.bindNavigation();
    this.bindThemeAndLangControls();
    this.switchTab(this.currentTab);
  }

  // Bind Theme & Language buttons
  bindThemeAndLangControls() {
    const mobileTheme = document.getElementById('mobile-theme-btn');
    const desktopTheme = document.getElementById('desktop-theme-btn');
    const mobileLang = document.getElementById('mobile-lang-btn');
    const desktopLang = document.getElementById('desktop-lang-btn');

    if (mobileTheme) mobileTheme.addEventListener('click', () => this.toggleTheme());
    if (desktopTheme) desktopTheme.addEventListener('click', () => this.toggleTheme());
    if (mobileLang) mobileLang.addEventListener('click', () => this.toggleLanguage());
    if (desktopLang) desktopLang.addEventListener('click', () => this.toggleLanguage());
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('maktab_crm_theme', this.currentTheme);
    this.applyTheme(this.currentTheme);
    const msg = this.currentTheme === 'dark' 
      ? (this.currentLang === 'ru' ? 'Тёмная тема включена' : 'Qorong\'u rejim yoqildi')
      : (this.currentLang === 'ru' ? 'Светлая тема включена' : 'Yorug\' rejim yoqildi');
    this.showToast(msg, 'info');
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = theme === 'dark' ? '☀️' : '🌙';
    document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'uz' ? 'ru' : 'uz';
    setLang(this.currentLang);
    this.updateLangLabels();
    this.updateStaticTranslations();
    this.renderCurrentView();
    const msg = this.currentLang === 'ru' ? 'Язык изменён: Русский' : 'Til o\'zgartirildi: O\'zbekcha';
    this.showToast(msg, 'info');
  }

  updateLangLabels() {
    const label = this.currentLang.toUpperCase();
    document.querySelectorAll('.lang-text').forEach(el => el.textContent = label);
  }

  updateStaticTranslations() {
    // Brand subtitle
    const brandSub = document.querySelector('.brand-text span');
    if (brandSub) brandSub.textContent = t('brandSubtitle');
    
    // User info
    const directorName = document.querySelector('.user-name');
    if (directorName) directorName.textContent = t('director');

    const directorRole = document.querySelector('.user-role');
    if (directorRole) directorRole.textContent = t('adminRole');

    // Desktop nav items
    const desktopNavMap = {
      'dashboard': t('dashboard'),
      'leads': t('leads'),
      'students': t('students'),
      'classes': t('classes'),
      'payments': t('payments'),
      'attendance': t('attendance'),
      'reports': t('reports'),
    };
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      const tab = btn.dataset.tab;
      const span = btn.querySelector('span');
      if (tab && span && desktopNavMap[tab]) {
        span.textContent = desktopNavMap[tab];
      }
    });

    // Mobile bottom nav items
    const mobileNavMap = {
      'dashboard': t('mainTab'),
      'leads': t('leads').split(' ')[0],
      'students': t('studentTab'),
      'payments': t('payments'),
    };
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      const tab = btn.dataset.tab;
      const span = btn.querySelector('span');
      if (tab && span && mobileNavMap[tab]) {
        span.textContent = mobileNavMap[tab];
      }
    });
    const moreBtnSpan = document.querySelector('#mobile-more-btn span');
    if (moreBtnSpan) moreBtnSpan.textContent = t('menu');
  }

  // Bind sidebar and mobile bottom nav click events
  bindNavigation() {
    // Desktop sidebar nav
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        if (tab) this.switchTab(tab);
      });
    });

    // Mobile bottom nav
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab) {
          this.switchTab(tab);
        }
      });
    });

    // Mobile hamburger menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMoreBtn = document.getElementById('mobile-more-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebar = document.getElementById('sidebar');

    const toggleSidebar = () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('active');
    };

    const closeSidebar = () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    };

    if (mobileToggle) mobileToggle.addEventListener('click', toggleSidebar);
    if (mobileMoreBtn) mobileMoreBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Brand logo returns to dashboard
    const brandBtn = document.getElementById('brand-logo-btn');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => this.switchTab('dashboard'));
    }

    // Close modal on escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });

    // Close modal on backdrop click
    const modalHost = document.getElementById('modal-container');
    if (modalHost) {
      modalHost.addEventListener('click', (e) => {
        if (e.target === modalHost) {
          this.closeModal();
        }
      });
    }
  }

  // Switch between tabs
  switchTab(tabName) {
    this.currentTab = tabName;

    // Update active class in desktop sidebar
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update active class in mobile bottom nav
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Close mobile drawer if opened
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');

    // Scroll to top
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;

    this.renderCurrentView();
  }

  // Render content of current view into #view-container
  renderCurrentView() {
    const container = document.getElementById('view-container');
    if (!container) return;

    switch (this.currentTab) {
      case 'dashboard':
        container.innerHTML = renderDashboardView(this.data);
        break;
      case 'leads':
        container.innerHTML = renderLeadsView(this.data, this.leadFilterQuery, this.leadMobileCol);
        break;
      case 'students':
        container.innerHTML = renderStudentsView(this.data, this.studentActiveFilter, this.studentSearchQuery, this.selectedStudentClass, this.selectedStudentId);
        break;
      case 'classes':
        container.innerHTML = renderClassesView(this.data);
        break;
      case 'payments':
        container.innerHTML = renderPaymentsView(this.data);
        break;
      case 'attendance':
        container.innerHTML = renderAttendanceView(this.data, this.attendanceSubTab);
        break;
      case 'reports':
        container.innerHTML = renderReportsView(this.data);
        break;
      default:
        container.innerHTML = renderDashboardView(this.data);
    }
  }

  // ==========================================
  // LEADS (QABUL) CONTROLLERS & KANBAN
  // ==========================================
  filterLeads(query) {
    this.leadFilterQuery = query;
    const container = document.getElementById('view-container');
    if (this.currentTab === 'leads' && container) {
      container.innerHTML = renderLeadsView(this.data, this.leadFilterQuery, this.leadMobileCol);
    }
  }

  switchLeadMobileCol(col) {
    this.leadMobileCol = col;
    this.renderCurrentView();
  }

  switchMobileLeadCol(col) {
    this.switchLeadMobileCol(col);
  }

  handleDragStart(e, leadId) {
    this.draggedLeadId = leadId;
    e.dataTransfer.setData('text/plain', leadId);
    e.dataTransfer.effectAllowed = 'move';
    if (e.target) e.target.classList.add('is-dragging');
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const col = e.currentTarget;
    if (col && !col.classList.contains('drag-over')) {
      col.classList.add('drag-over');
    }
  }

  handleDrop(e, targetStage) {
    e.preventDefault();
    document.querySelectorAll('.kanban-col').forEach(c => c.classList.remove('drag-over'));
    document.querySelectorAll('.lead-card').forEach(c => c.classList.remove('is-dragging'));

    const leadId = e.dataTransfer.getData('text/plain') || this.draggedLeadId;
    if (!leadId) return;

    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead && lead.stage !== targetStage) {
      lead.stage = targetStage;
      saveData(this.data);
      this.renderCurrentView();

      const stageLabels = {
        'yangi': 'Yangi so\'rovlar',
        'boglanildi': 'Bog\'lanildi',
        'suhbat': 'Suhbat va test',
        'shartnoma': 'Shartnoma imzolandi'
      };
      this.showToast(`"${lead.name}" -> ${stageLabels[targetStage] || targetStage} bosqichiga o'tkazildi!`, 'success');
    }
    this.draggedLeadId = null;
  }

  openLeadDetails(leadId) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (!lead) return;

    const stageOptions = [
      { id: 'yangi', label: '1. Yangi so\'rov' },
      { id: 'boglanildi', label: '2. Bog\'lanildi' },
      { id: 'suhbat', label: '3. Suhbat / test' },
      { id: 'shartnoma', label: '4. Shartnoma (Qabul)' }
    ];

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${lead.name}</h3>
            <p>${lead.grade} &bull; ${lead.source} orqali kelgan</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="Yopish">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form-grid">
            <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 2px;">Ota-onasi:</div>
              <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">${lead.parent}</div>
              <div style="font-size: 13.5px; color: var(--primary); font-weight: 600; margin-top: 4px;">
                <a href="tel:${lead.phone}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 6px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  ${lead.phone} (Qo'ng'iroq qilish)
                </a>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Bosqichni o'zgartirish</label>
              <select class="form-select" id="lead-stage-select" onchange="window.app.updateLeadStage('${lead.id}', this.value)">
                ${stageOptions.map(opt => `
                  <option value="${opt.id}" ${lead.stage === opt.id ? 'selected' : ''}>${opt.label}</option>
                `).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Qo'shimcha izoh / Tarix</label>
              <textarea class="form-textarea" id="lead-note-input" rows="3">${lead.note || ''}</textarea>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); padding-top: 8px; border-top: 1px solid var(--border-subtle);">
              <span>Menejer: <strong>${lead.manager}</strong></span>
              <span>Sana: ${lead.date}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 14px 20px;">
          <button class="btn btn-secondary" onclick="window.app.deleteLead('${lead.id}')" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3); padding: 8px 12px; font-size: 13px;">
            O'chirish
          </button>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.closeModal()" style="padding: 8px 14px; font-size: 13px;">Bekor qilish</button>
            <button class="btn btn-primary" onclick="window.app.saveLeadNotes('${lead.id}')" style="padding: 8px 18px; font-size: 13px;">Saqlash</button>
          </div>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  updateLeadStage(leadId, newStage) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead) {
      lead.stage = newStage;
      saveData(this.data);
      this.renderCurrentView();
      this.showToast(`Bosqich yangilandi: ${newStage}`, 'info');
    }
  }

  saveLeadNotes(leadId) {
    const noteEl = document.getElementById('lead-note-input');
    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead && noteEl) {
      lead.note = noteEl.value.trim();
      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast('Ma\'lumotlar saqlandi!', 'success');
    }
  }

  deleteLead(leadId) {
    if (confirm('Ushbu arizani o\'chirishga ishonchingiz komilmi?')) {
      this.data.leads = this.data.leads.filter(l => l.id !== leadId);
      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast('Ariza o\'chirildi', 'info');
    }
  }

  openNewLeadModal() {
    this.openModal('addLead');
  }

  toggleLeadFilterModal() {
    this.showToast('Barcha manbalar faol', 'info');
  }

  // ==========================================
  // STUDENTS CONTROLLERS
  // ==========================================
  filterStudentsSearch(query) {
    this.studentSearchQuery = query;
    const container = document.getElementById('view-container');
    if (this.currentTab === 'students' && container) {
      container.innerHTML = renderStudentsView(this.data, this.studentActiveFilter, this.studentSearchQuery, this.selectedStudentClass, this.selectedStudentId);
    }
  }

  filterStudentsPill(filter) {
    this.studentActiveFilter = filter;
    if (filter === 'all') {
      this.selectedStudentClass = null;
    } else if (filter === '1-sinf') {
      this.selectedStudentClass = '1-A';
    } else if (filter === '2-sinf') {
      this.selectedStudentClass = '2-A';
    } else if (filter === '3-sinf') {
      this.selectedStudentClass = '3-A';
    } else if (filter === '4-sinf') {
      this.selectedStudentClass = '4-B';
    } else if (filter === '5-sinf') {
      this.selectedStudentClass = '5-A';
    } else if (filter === 'debt') {
      this.selectedStudentClass = null;
    } else {
      this.selectedStudentClass = null;
    }
    this.renderCurrentView();
  }

  setStudentFilter(filter) {
    this.filterStudentsPill(filter);
  }

  selectStudentClass(className) {
    this.selectedStudentClass = className;
    if (className) {
      const grade = className.charAt(0);
      this.studentActiveFilter = `${grade}-sinf`;
    } else {
      this.studentActiveFilter = 'all';
    }
    this.renderCurrentView();
  }

  selectStudent(studentId) {
    this.selectedStudentId = studentId;
    this.renderCurrentView();
  }

  openNewStudentModal() {
    this.openModal('addStudent');
  }

  openQuickPayModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const defaultAmount = std.debtAmount > 0 ? std.debtAmount : (std.monthlyFee || 3000000);

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>To'lov qabul qilish</h3>
            <p>${std.name} (${std.sinf} sinf)</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="quick-pay-form" onsubmit="window.app.saveQuickPayment(event, '${std.id}')">
          <div class="modal-body">
            <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 13px;">
                <span style="color: var(--text-muted);">Oylik to'lov:</span>
                <span style="font-weight: 600; color: var(--text-main);">${std.monthlyFee?.toLocaleString('ru-RU') || '3 000 000'} so'm</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 13px;">
                <span style="color: var(--text-muted);">Hozirgi qarz:</span>
                <span style="font-weight: 700; color: ${std.debtAmount > 0 ? '#dc2626' : '#10b981'};">${std.debtAmount?.toLocaleString('ru-RU') || '0'} so'm</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">To'lov summasi (so'm) <span class="req">*</span></label>
              <input type="number" class="form-control" id="quick-pay-amount" value="${defaultAmount}" required min="10000" step="10000" />
            </div>

            <div class="form-group">
              <label class="form-label">To'lov turi <span class="req">*</span></label>
              <select class="form-select" id="quick-pay-method" required>
                <option value="Naqd">Naqd pul</option>
                <option value="Karta (Payme/Click)">Karta (Payme / Click)</option>
                <option value="Bank o'tkazmasi">Bank o'tkazmasi</option>
              </select>
            </div>
          </div>

          <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
            <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
            <button type="submit" class="btn btn-primary">To'lovni tasdiqlash</button>
          </div>
        </form>
      </div>
    `;

    this.showModalContent(content);
  }

  saveQuickPayment(e, studentId) {
    e.preventDefault();
    const amount = Number(document.getElementById('quick-pay-amount').value);
    const method = document.getElementById('quick-pay-method').value;
    const std = this.data.students.find(s => s.id === studentId);
    if (!std || !amount) return;

    std.paidAmount = (std.paidAmount || 0) + amount;
    std.debtAmount = Math.max(0, (std.debtAmount || 0) - amount);

    if (std.debtAmount <= 0) {
      std.paymentStatus = "To'langan";
      std.paymentStatusCode = 'paid';
    } else {
      std.paymentStatus = "Qisman";
      std.paymentStatusCode = 'partial';
    }

    if (!this.data.payments) this.data.payments = [];
    this.data.payments.unshift({
      id: `tx-${Date.now()}`,
      studentName: std.name,
      sinf: std.sinf,
      amount: amount,
      method: method,
      date: new Date().toLocaleDateString('uz-UZ'),
      status: "Tasdiqlangan"
    });

    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`To'lov qabul qilindi: ${amount.toLocaleString('ru-RU')} so'm (${std.name})`, 'success');
  }

  openStudentDetailsModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>O'quvchi ma'lumotlari</h3>
            <p>${std.name} — ${std.sinf} sinf</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #fff; font-weight: 700; font-size: 18px; display: flex; align-items: center; justify-content: center;">
              ${std.initials || 'OQ'}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: var(--text-main);">${std.name}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${std.sinf} sinf • Tug'ilgan sana: ${std.birthDate || '—'}</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13.5px;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${std.parentRole || 'Ota-onasi'}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${std.parentName}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">Telefon:</span>
              <a href="tel:${std.phone}" style="font-weight: 600; color: var(--primary); text-decoration: none;">${std.phone}</a>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">Sinf rahbari:</span>
              <span style="font-weight: 600; color: var(--text-main);">${std.homeroomTeacher || '—'}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">To'lov holati:</span>
              <span style="font-weight: 700; color: ${std.paymentStatusCode === 'paid' ? '#10b981' : (std.paymentStatusCode === 'partial' ? '#d97706' : '#dc2626')};">
                ${std.paymentStatus} (${(std.debtAmount || 0) > 0 ? 'Qarz: ' + std.debtAmount.toLocaleString('ru-RU') + ' so\'m' : 'To\'liq'})
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 4px;">
              <span style="color: var(--text-muted);">Davomat ko'rsatkichi:</span>
              <span style="font-weight: 600; color: var(--text-main);">${std.attendance || '95%'}</span>
            </div>
          </div>

          <!-- Documents Checklist -->
          <div style="margin-top: 20px;">
            <div style="font-weight: 600; font-size: 13.5px; margin-bottom: 10px; color: var(--text-main);">Hujjatlar to'plami:</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>Tug'ilganlik haqida guvohnoma</span>
                <span style="color: #10b981; font-weight: 600;">✓ Yuklangan</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>Tibbiy ma'lumotnoma (086-shakl)</span>
                <span style="color: ${std.docs?.medicalReport !== false ? '#10b981' : '#dc2626'}; font-weight: 600;">
                  ${std.docs?.medicalReport !== false ? '✓ Yuklangan' : '✕ Yetishmaydi'}
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>Ta'lim shartnomasi</span>
                <span style="color: #10b981; font-weight: 600;">✓ Imzolangan</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">Yopish</button>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.openEditStudentModal('${std.id}')">Tahrirlash</button>
            <button class="btn btn-primary" onclick="window.app.openQuickPayModal('${std.id}')">To'lov qabul qilish</button>
          </div>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  openEditStudentModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>O'quvchini tahrirlash</h3>
            <p>${std.name}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="edit-student-form" onsubmit="window.app.saveStudentEdit(event, '${std.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">O'quvchi F.I.SH <span class="req">*</span></label>
                <input type="text" class="form-control" id="edit-std-name" value="${std.name}" required />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Sinf <span class="req">*</span></label>
                  <select class="form-select" id="edit-std-sinf" required>
                    ${this.data.classes.map(c => `
                      <option value="${c.name}" ${std.sinf === c.name ? 'selected' : ''}>${c.name}</option>
                    `).join('')}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Tug'ilgan sana</label>
                  <input type="text" class="form-control" id="edit-std-bdate" value="${std.birthDate || ''}" placeholder="12.03.2017" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Ota/Ona ismi <span class="req">*</span></label>
                  <input type="text" class="form-control" id="edit-std-parent" value="${std.parentName}" required />
                </div>

                <div class="form-group">
                  <label class="form-label">Telefon raqam <span class="req">*</span></label>
                  <input type="tel" class="form-control" id="edit-std-phone" value="${std.phone}" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Oylik to'lov summasi (so'm)</label>
                <input type="number" class="form-control" id="edit-std-fee" value="${std.monthlyFee || 3000000}" step="100000" />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
            <button type="submit" class="btn btn-primary">Saqlash</button>
          </div>
        </form>
      </div>
    `;

    this.showModalContent(content);
  }

  saveStudentEdit(e, studentId) {
    e.preventDefault();
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    std.name = document.getElementById('edit-std-name').value.trim();
    std.sinf = document.getElementById('edit-std-sinf').value;
    std.gradeLevel = std.sinf.split('-')[0] + '-sinf';
    std.birthDate = document.getElementById('edit-std-bdate').value.trim();
    std.parentName = document.getElementById('edit-std-parent').value.trim();
    std.phone = document.getElementById('edit-std-phone').value.trim();
    std.monthlyFee = Number(document.getElementById('edit-std-fee').value) || 3000000;

    // recalculate initials
    const parts = std.name.split(' ');
    std.initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();

    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast('O\'quvchi ma\'lumotlari yangilandi', 'success');
  }

  openStudentPaymentModal(studentId) {
    this.openModal('addPayment', { studentId });
  }

  exportStudentsCSV() {
    const rows = [
      ["F.I.SH", "Sinf", "Ota-onasi", "Telefon", "Oylik to'lov", "To'langan", "Qarzdorlik", "Davomat"],
      ...this.data.students.map(s => [
        `"${s.name}"`,
        `"${s.sinf}"`,
        `"${s.parentName}"`,
        `"${s.phone}"`,
        s.monthlyFee || 3000000,
        s.paidAmount || 0,
        s.debtAmount || 0,
        `"${s.attendance || '95%'}"`
      ])
    ];

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `oquvchilar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast("O'quvchilar ro'yxati (.csv) yuklab olindi", 'success');
  }

  // ==========================================
  // PAYMENTS CONTROLLER
  // ==========================================
  exportPaymentsToCSV() {
    const rows = [
      ["O'quvchi", "Sinf", "Oylik to'lov", "To'langan", "Qoldiq qarz", "Holat"],
      ...this.data.students.map(s => [
        `"${s.name}"`,
        `"${s.sinf}"`,
        s.monthlyFee || 3000000,
        s.paidAmount || 0,
        s.debtAmount || 0,
        `"${s.paymentStatus}"`
      ])
    ];

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tolovlar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast("To'lovlar hisoboti (.csv) yuklab olindi", 'success');
  }

  // ==========================================
  // ATTENDANCE (DAVOMAT) CONTROLLERS
  // ==========================================
  switchAttendanceSubTab(subTab) {
    this.attendanceSubTab = subTab;
    this.renderCurrentView();
  }

  openAttendanceModal(classId) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (!cls) return;

    this.activeAttendanceClassId = classId;
    // Filter students belonging to this class
    const classStudents = this.data.students.filter(s => s.sinf === cls.name);
    
    // Fill tempAttendanceMap
    this.tempAttendanceMap = {};
    classStudents.forEach(s => {
      this.tempAttendanceMap[s.id] = 'present'; // default present
    });

    const content = `
      <div class="modal-dialog modal-lg">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>Davomat belgilash — ${cls.name} sinfi</h3>
            <p>${this.data.currentDateText} &bull; Sinf rahbari: ${cls.teacherName}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">O'quvchilar ro'yxati (${classStudents.length} nafar)</span>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="window.app.markAllAttendance('present')">
                Hammasi keldi
              </button>
            </div>
          </div>

          <div id="attendance-students-list">
            ${classStudents.length === 0 ? `
              <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13.5px;">
                Ushbu sinfga biriktirilgan o'quvchilar topilmadi. O'quvchilar bo'limidan biriktirishingiz mumkin.
              </div>
            ` : classStudents.map(s => `
              <div class="attendance-student-row" id="att-row-${s.id}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="cell-user-avatar" style="width: 32px; height: 32px; font-size: 11px;">${s.initials}</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text-main);">${s.name}</div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${s.parentName} &bull; ${s.phone}</div>
                  </div>
                </div>

                <div class="att-actions-btn-group">
                  <button 
                    type="button"
                    class="att-btn present active" 
                    id="btn-pres-${s.id}"
                    onclick="window.app.setStudentAttendance('${s.id}', 'present')"
                  >
                    Keldi
                  </button>
                  <button 
                    type="button"
                    class="att-btn absent" 
                    id="btn-abs-${s.id}"
                    onclick="window.app.setStudentAttendance('${s.id}', 'absent')"
                  >
                    Kelmadi
                  </button>
                  <button 
                    type="button"
                    class="att-btn excused" 
                    id="btn-exc-${s.id}"
                    onclick="window.app.setStudentAttendance('${s.id}', 'excused')"
                  >
                    Sababli
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
          <button class="btn btn-primary" onclick="window.app.saveClassAttendance('${cls.id}')">
            Davomatni saqlash
          </button>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  setStudentAttendance(studentId, status) {
    this.tempAttendanceMap[studentId] = status;

    const row = document.getElementById(`att-row-${studentId}`);
    if (!row) return;

    row.querySelectorAll('.att-btn').forEach(btn => btn.classList.remove('active'));
    if (status === 'present') document.getElementById(`btn-pres-${studentId}`)?.classList.add('active');
    if (status === 'absent') document.getElementById(`btn-abs-${studentId}`)?.classList.add('active');
    if (status === 'excused') document.getElementById(`btn-exc-${studentId}`)?.classList.add('active');
  }

  markAllAttendance(status) {
    Object.keys(this.tempAttendanceMap).forEach(stdId => {
      this.setStudentAttendance(stdId, status);
    });
  }

  saveClassAttendance(classId) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (!cls) return;

    let presentCount = 0;
    const total = Object.keys(this.tempAttendanceMap).length;

    Object.values(this.tempAttendanceMap).forEach(st => {
      if (st === 'present') presentCount++;
    });

    cls.attendanceStatus = 'Belgilangan';
    cls.todayPresent = presentCount;
    cls.todayTotal = total || cls.currentStudents;

    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`${cls.name} sinf davomati muvaffaqiyatli saqlandi! (${presentCount}/${total || cls.currentStudents} keldi)`, 'success');
  }

  // ==========================================
  // GENERAL MODAL DISPATCHER
  // ==========================================
  openModal(type, params = {}) {
    let content = '';

    switch (type) {
      case 'addLead':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>Yangi ariza (Lead) qo'shish</h3>
                <p>Qabul bo'limi uchun yangi murojaat</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateLead(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">Bola F.I.SH <span class="req">*</span></label>
                    <input type="text" class="form-control" id="lead-name" placeholder="Masalan: Sardor Yusupov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Sinf <span class="req">*</span></label>
                      <select class="form-select" id="lead-grade" required>
                        <option value="1-sinf">1-sinf</option>
                        <option value="2-sinf">2-sinf</option>
                        <option value="3-sinf">3-sinf</option>
                        <option value="4-sinf">4-sinf</option>
                        <option value="5-sinf">5-sinf</option>
                        <option value="6-sinf">6-sinf</option>
                        <option value="7-sinf">7-sinf</option>
                        <option value="8-sinf">8-sinf</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">Manba <span class="req">*</span></label>
                      <select class="form-select" id="lead-source" required>
                        <option value="Instagram">Instagram</option>
                        <option value="Telegram">Telegram</option>
                        <option value="Sayt">Sayt</option>
                        <option value="Tavsiya">Tavsiya</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Ota/Ona ismi <span class="req">*</span></label>
                      <input type="text" class="form-control" id="lead-parent" placeholder="Masalan: Ota: Dilshod Karimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Telefon raqam <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="lead-phone" placeholder="+998 90 123 45 67" required />
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Qo'shimcha izoh</label>
                    <textarea class="form-textarea" id="lead-note" placeholder="Qaysi fanga qiziqadi, qachon keladi..."></textarea>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
                <button type="submit" class="btn btn-primary">+ Ariza qo'shish</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addStudent':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>Yangi o'quvchi qo'shish</h3>
                <p>Maktab kontingentiga rasmiy ro'yxatga olish</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateStudent(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">O'quvchi to'liq F.I.SH <span class="req">*</span></label>
                    <input type="text" class="form-control" id="new-std-name" placeholder="Masalan: Farhod Alimov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Sinfni tanlang <span class="req">*</span></label>
                      <select class="form-select" id="new-std-class" required>
                        ${this.data.classes.map(c => `<option value="${c.name}">${c.name} (${c.teacherName})</option>`).join('')}
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">Tug'ilgan sana</label>
                      <input type="text" class="form-control" id="new-std-birth" placeholder="15.05.2016" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Ota/Ona ismi <span class="req">*</span></label>
                      <input type="text" class="form-control" id="new-std-parent" placeholder="Ota: Akmal Alimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Telefon raqam <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="new-std-phone" placeholder="+998 90 555 44 33" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Oylik to'lov summasi (so'm)</label>
                      <input type="number" class="form-control" id="new-std-fee" value="3000000" step="100000" />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Dastlabki to'lov holati</label>
                      <select class="form-select" id="new-std-status">
                        <option value="paid">To'langan</option>
                        <option value="partial">Qisman to'langan</option>
                        <option value="debt" selected>Kutilmoqda (Qarzdor)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
                <button type="submit" class="btn btn-primary">O'quvchini qabul qilish</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addPayment':
        const defaultStdId = params.studentId || (this.data.students[0]?.id);
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>To'lov qabul qilish</h3>
                <p>Oylik o'qish to'lovi qabuli va chek chiqarish</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreatePayment(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">O'quvchini tanlang <span class="req">*</span></label>
                    <select class="form-select" id="pay-student-select" required onchange="window.app.onPaymentStudentChange(this.value)">
                      ${this.data.students.map(s => `
                        <option value="${s.id}" ${s.id === defaultStdId ? 'selected' : ''}>
                          ${s.name} (${s.sinf}) - Qoldiq qarz: ${(s.debtAmount || 0).toLocaleString('uz-UZ')} so'm
                        </option>
                      `).join('')}
                    </select>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">To'lov summasi (so'm) <span class="req">*</span></label>
                      <input type="number" class="form-control" id="pay-amount" value="3000000" step="50000" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">To'lov turi <span class="req">*</span></label>
                      <select class="form-select" id="pay-method" required>
                        <option value="Payme">Payme</option>
                        <option value="Click">Click</option>
                        <option value="Naqd">Naqd pul</option>
                        <option value="Bank o'tkazmasi">Bank o'tkazmasi</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">To'lov maqsadi / Izoh</label>
                    <input type="text" class="form-control" id="pay-comment" value="Oktyabr 2026 oylik to'lovi" />
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
                <button type="submit" class="btn btn-primary">To'lovni tasdiqlash &rarr;</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addClass':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>Yangi sinf ochish</h3>
                <p>2026–2027 o'quv yili uchun sinf kiritish</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateClass(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Sinf nomi <span class="req">*</span></label>
                      <input type="text" class="form-control" id="cls-name" placeholder="Masalan: 6-A" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Xona raqami <span class="req">*</span></label>
                      <input type="text" class="form-control" id="cls-room" placeholder="Masalan: 25-xona" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Sinf rahbari <span class="req">*</span></label>
                      <select class="form-select" id="cls-teacher" required>
                        ${this.data.teachers.map(t => `<option value="${t.name}">${t.name} (${t.subject})</option>`).join('')}
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">Maksimal sig'imi</label>
                      <input type="number" class="form-control" id="cls-capacity" value="22" max="30" min="10" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
                <button type="submit" class="btn btn-primary">Sinfni yaratish</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addTeacher':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>O'qituvchi qo'shish</h3>
                <p>Yangi pedagogik xodimni ro'yxatga olish</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateTeacher(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">O'qituvchi F.I.SH <span class="req">*</span></label>
                    <input type="text" class="form-control" id="tch-name" placeholder="Masalan: Jahongir Qosimov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Dars beradigan fani <span class="req">*</span></label>
                      <input type="text" class="form-control" id="tch-subject" placeholder="Masalan: Fizika" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Haftalik yuklama (soat)</label>
                      <input type="number" class="form-control" id="tch-hours" value="18" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Telefon raqam <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="tch-phone" placeholder="+998 90 777 66 55" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Biriktirilgan sinflar</label>
                      <input type="text" class="form-control" id="tch-classes" placeholder="Masalan: 5-A, 6-A" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
                <button type="submit" class="btn btn-primary">O'qituvchini qo'shish</button>
              </div>
            </form>
          </div>
        `;
        break;

      default:
        return;
    }

    this.showModalContent(content);
  }

  showModalContent(html) {
    const host = document.getElementById('modal-container');
    if (!host) return;
    host.innerHTML = html;
    host.classList.add('open');
    host.classList.add('active');
    
    // Close on backdrop click
    host.onclick = (e) => {
      if (e.target === host) {
        this.closeModal();
      }
    };
  }

  closeModal() {
    const host = document.getElementById('modal-container');
    if (host) {
      host.classList.remove('open');
      host.classList.remove('active');
      host.innerHTML = '';
      host.onclick = null;
    }
  }

  // ==========================================
  // FORM SUBMIT HANDLERS
  // ==========================================
  handleCreateLead(e) {
    e.preventDefault();
    const name = document.getElementById('lead-name').value.trim();
    const grade = document.getElementById('lead-grade').value;
    const source = document.getElementById('lead-source').value;
    const parent = document.getElementById('lead-parent').value.trim();
    const phone = document.getElementById('lead-phone').value.trim();
    const note = document.getElementById('lead-note').value.trim();

    let sourceColor = 'blue';
    if (source === 'Instagram') sourceColor = 'pink';
    else if (source === 'Tavsiya') sourceColor = 'green';
    else if (source === 'Sayt') sourceColor = 'orange';

    const newLead = {
      id: 'lead-' + Date.now(),
      name,
      grade,
      parent,
      phone,
      source,
      sourceColor,
      date: 'Bugun',
      manager: 'DR',
      stage: 'yangi',
      note
    };

    this.data.leads.unshift(newLead);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi so'rov ("${name}") qabul qilindi!`, 'success');
  }

  handleCreateStudent(e) {
    e.preventDefault();
    const name = document.getElementById('new-std-name').value.trim();
    const sinf = document.getElementById('new-std-class').value;
    const birthDate = document.getElementById('new-std-birth').value.trim() || '01.01.2017';
    const parentName = document.getElementById('new-std-parent').value.trim();
    const phone = document.getElementById('new-std-phone').value.trim();
    const monthlyFee = Number(document.getElementById('new-std-fee').value) || 3000000;
    const status = document.getElementById('new-std-status').value;

    const parts = name.split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();

    let paymentStatus = 'Qarzdor';
    let paidAmount = 0;
    let debtAmount = monthlyFee;
    if (status === 'paid') {
      paymentStatus = 'To\'langan';
      paidAmount = monthlyFee;
      debtAmount = 0;
    } else if (status === 'partial') {
      paymentStatus = 'Qisman';
      paidAmount = monthlyFee / 2;
      debtAmount = monthlyFee / 2;
    }

    const cls = this.data.classes.find(c => c.name === sinf);
    if (cls) {
      cls.currentStudents = (cls.currentStudents || 0) + 1;
    }

    const newStd = {
      id: 'std-' + Date.now(),
      initials,
      name,
      parentName,
      parentRole: 'Ota/Ona',
      motherName: parentName,
      sinf,
      gradeLevel: sinf.split('-')[0] + '-sinf',
      phone,
      paymentStatus,
      paymentStatusCode: status,
      attendance: '100%',
      birthDate,
      homeroomTeacher: cls?.teacherName || 'Bosh o\'qituvchi',
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee,
      paidAmount,
      debtAmount
    };

    this.data.students.unshift(newStd);
    this.selectedStudentId = newStd.id;
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi o'quvchi "${name}" muvaffaqiyatli qo'shildi!`, 'success');
  }

  handleCreatePayment(e) {
    e.preventDefault();
    const studentId = document.getElementById('pay-student-select').value;
    const amount = Number(document.getElementById('pay-amount').value) || 0;
    const method = document.getElementById('pay-method').value;
    const comment = document.getElementById('pay-comment').value.trim();

    const std = this.data.students.find(s => s.id === studentId);
    if (std) {
      std.paidAmount = (std.paidAmount || 0) + amount;
      std.debtAmount = Math.max(0, (std.debtAmount || std.monthlyFee) - amount);

      if (std.debtAmount === 0) {
        std.paymentStatus = 'To\'langan';
        std.paymentStatusCode = 'paid';
      } else {
        std.paymentStatus = 'Qisman';
        std.paymentStatusCode = 'partial';
      }

      // Add to transactions
      if (!this.data.paymentTransactions) this.data.paymentTransactions = [];
      this.data.paymentTransactions.unshift({
        id: 'tx-' + Date.now(),
        studentName: std.name,
        sinf: std.sinf,
        amount,
        method,
        date: new Date().toLocaleDateString('uz-UZ'),
        status: 'Tasdiqlangan'
      });

      // Update summary
      if (this.data.paymentsSummary) {
        this.data.paymentsSummary.monthlyRevenue += amount;
        this.data.paymentsSummary.expectedRevenue = Math.max(0, this.data.paymentsSummary.expectedRevenue - amount);
      }

      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast(`${std.name} uchun ${amount.toLocaleString('uz-UZ')} so'm to'lov qabul qilindi! (${method})`, 'success');
    }
  }

  handleCreateClass(e) {
    e.preventDefault();
    const name = document.getElementById('cls-name').value.trim();
    const room = document.getElementById('cls-room').value.trim();
    const teacherName = document.getElementById('cls-teacher').value;
    const capacity = Number(document.getElementById('cls-capacity').value) || 22;

    const parts = teacherName.split(' ');
    const teacherInitials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : teacherName.slice(0, 2).toUpperCase();

    const newCls = {
      id: 'cls-' + Date.now(),
      name,
      room,
      teacherName,
      teacherInitials,
      currentStudents: 0,
      capacity,
      attendanceStatus: 'Belgilanmagan',
      todayPresent: 0,
      todayTotal: 0
    };

    this.data.classes.push(newCls);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi "${name}" sinfi yaratildi!`, 'success');
  }

  handleCreateTeacher(e) {
    e.preventDefault();
    const name = document.getElementById('tch-name').value.trim();
    const subject = document.getElementById('tch-subject').value.trim();
    const phone = document.getElementById('tch-phone').value.trim();
    const weeklyHours = Number(document.getElementById('tch-hours').value) || 18;
    const classes = document.getElementById('tch-classes').value.trim() || '1-sinf';

    const parts = name.split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();

    const newTch = {
      id: 'tch-' + Date.now(),
      initials,
      name,
      subject,
      classes,
      weeklyHours,
      phone
    };

    this.data.teachers.push(newTch);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`O'qituvchi "${name}" muvaffaqiyatli kiritildi!`, 'success');
  }

  // ==========================================
  // TOAST SYSTEM
  // ==========================================
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    let iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;
    if (type === 'info') {
      iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div style="font-size: 13.5px; font-weight: 500; color: var(--text-main); line-height: 1.35;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, 3200);
  }
}

// Global App Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new MaktabCRM();
});
