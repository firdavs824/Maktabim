(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={currentAcademicYear:`2026–2027 o'quv yili`,currentDateText:`Bugun, 15 oktyabr 2026`,leads:[{id:`lead-1`,name:`Aziza Karimova`,grade:`3-sinf`,parent:`Ota: Dilshod Karimov`,phone:`+998 90 000 00 01`,source:`Instagram`,sourceColor:`pink`,date:`15 okt`,manager:`SN`,stage:`yangi`,note:`Matematika chuqurlashtirilgan guruhga qiziqmoqda`},{id:`lead-2`,name:`Sardor Yusupov`,grade:`1-sinf`,parent:`Ona: Nilufar Yusupova`,phone:`+998 91 000 00 02`,source:`Telegram`,sourceColor:`blue`,date:`15 okt`,manager:`SN`,stage:`yangi`,note:`Tayyorlov guruhida o'qigan`},{id:`lead-3`,name:`Madina Rahimova`,grade:`5-sinf`,parent:`Ona: Gulnora Rahimova`,phone:`+998 93 000 00 03`,source:`Tavsiya`,sourceColor:`green`,date:`14 okt`,manager:`BA`,stage:`yangi`,note:`Ingliz tili imtihonidan o'tishi kerak`},{id:`lead-4`,name:`Jasur Toshmatov`,grade:`7-sinf`,parent:`Ota: Anvar Toshmatov`,phone:`+998 94 000 00 04`,source:`Instagram`,sourceColor:`pink`,date:`14 okt`,manager:`BA`,stage:`yangi`,note:`Dasturlash to'garagiga qatnashish niyati bor`},{id:`lead-5`,name:`Omina Qodirova`,grade:`2-sinf`,parent:`Ona: Zilola Qodirova`,phone:`+998 90 000 00 05`,source:`Sayt`,sourceColor:`orange`,date:`13 okt`,manager:`SN`,stage:`boglanildi`,note:`Maktab binosini ko'rishga kelmoqchi`},{id:`lead-6`,name:`Behruz Aliyev`,grade:`4-sinf`,parent:`Ota: Rustam Aliyev`,phone:`+998 97 000 00 06`,source:`Telegram`,sourceColor:`blue`,date:`12 okt`,manager:`BA`,stage:`boglanildi`,note:`To'lov shartlari bo'yicha ma'lumot berildi`},{id:`lead-7`,name:`Laylo Sodiqova`,grade:`1-sinf`,parent:`Ona: Feruza Sodiqova`,phone:`+998 99 000 00 07`,source:`Tavsiya`,sourceColor:`green`,date:`12 okt`,manager:`SN`,stage:`boglanildi`,note:`Shartnoma loyihasi yuborildi`},{id:`lead-8`,name:`Umar Nazarov`,grade:`6-sinf`,parent:`Ota: Botir Nazarov`,phone:`+998 90 000 00 08`,source:`Instagram`,sourceColor:`pink`,date:`10 okt`,manager:`BA`,stage:`suhbat`,note:`Psixolog suhbati 18-oktabr soat 14:00 ga belgilangan`},{id:`lead-9`,name:`Sevinch Xolmatova`,grade:`3-sinf`,parent:`Ona: Dilfuza Xolmatova`,phone:`+998 91 000 00 09`,source:`Tavsiya`,sourceColor:`green`,date:`9 okt`,manager:`SN`,stage:`suhbat`,note:`Mantiqiy test natijasi: 92/100`},{id:`lead-10`,name:`Abdulloh Ergashev`,grade:`8-sinf`,parent:`Ota: Sherzod Ergashev`,phone:`+998 93 000 00 10`,source:`Telegram`,sourceColor:`blue`,date:`8 okt`,manager:`SN`,stage:`suhbat`,note:`Fizika-matematika yo'nalishi bo'yicha suhbat`},{id:`lead-11`,name:`Nodira Ismoilova`,grade:`2-sinf`,parent:`Ona: Mohira Ismoilova`,phone:`+998 94 000 00 11`,source:`Tavsiya`,sourceColor:`green`,date:`7 okt`,manager:`SN`,stage:`shartnoma`,note:`Barcha hujjatlar topshirildi, 1-to'lov kutilmoqda`},{id:`lead-12`,name:`Islom Haydarov`,grade:`5-sinf`,parent:`Ota: Ulug'bek Haydarov`,phone:`+998 97 000 00 12`,source:`Instagram`,sourceColor:`pink`,date:`6 okt`,manager:`BA`,stage:`shartnoma`,note:`Shartnoma 2 nusxada imzolandi`},{id:`lead-13`,name:`Zuhra Malikova`,grade:`1-sinf`,parent:`Ona: Nargiza Malikova`,phone:`+998 90 123 45 67`,source:`Sayt`,sourceColor:`orange`,date:`5 okt`,manager:`SN`,stage:`shartnoma`,note:`Tayyorgarlik kursi yakunlangan`},{id:`lead-14`,name:`Kamronbek Valiyev`,grade:`4-sinf`,parent:`Ota: Alisher Valiyev`,phone:`+998 93 456 78 90`,source:`Telegram`,sourceColor:`blue`,date:`4 okt`,manager:`BA`,stage:`boglanildi`,note:`Qayta qo'ng'iroq 22-oktabr`}],students:[{id:`std-1`,initials:`AK`,name:`Aziza Karimova`,parentName:`Dilshod Karimov`,parentRole:`Ota`,motherName:`Madina Karimova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 90 000 00 01`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`96%`,birthDate:`12.03.2017`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-2`,initials:`SY`,name:`Sardor Yusupov`,parentName:`Nilufar Yusupova`,parentRole:`Ona`,motherName:`Nilufar Yusupova`,sinf:`1-B`,gradeLevel:`1-sinf`,phone:`+998 91 000 00 02`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`92%`,birthDate:`05.08.2019`,homeroomTeacher:`Feruza Karimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:15e5,debtAmount:15e5},{id:`std-3`,initials:`MR`,name:`Madina Rahimova`,parentName:`Gulnora Rahimova`,parentRole:`Ona`,motherName:`Gulnora Rahimova`,sinf:`5-A`,gradeLevel:`5-sinf`,phone:`+998 93 000 00 03`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`98%`,birthDate:`21.11.2015`,homeroomTeacher:`Sherzod Jalilov`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:35e5,paidAmount:35e5,debtAmount:0},{id:`std-4`,initials:`JT`,name:`Jasur Toshmatov`,parentName:`Anvar Toshmatov`,parentRole:`Ota`,motherName:`Nargiza Toshmatova`,sinf:`7-B`,gradeLevel:`7-sinf`,phone:`+998 94 000 00 04`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`84%`,birthDate:`14.06.2013`,homeroomTeacher:`Botir Mirzayev`,docs:{birthCertificate:!0,medicalReport:!1,contract:!0},monthlyFee:35e5,paidAmount:0,debtAmount:35e5},{id:`std-5`,initials:`OQ`,name:`Omina Qodirova`,parentName:`Zilola Qodirova`,parentRole:`Ona`,motherName:`Zilola Qodirova`,sinf:`2-A`,gradeLevel:`2-sinf`,phone:`+998 90 000 00 05`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`100%`,birthDate:`09.04.2018`,homeroomTeacher:`Zilola Rahimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-6`,initials:`BA`,name:`Behruz Aliyev`,parentName:`Rustam Aliyev`,parentRole:`Ota`,motherName:`Nasiba Aliyeva`,sinf:`4-B`,gradeLevel:`4-sinf`,phone:`+998 97 000 00 06`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`90%`,birthDate:`18.01.2016`,homeroomTeacher:`Gulnora Tursunova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:2e6,debtAmount:1e6},{id:`std-7`,initials:`LS`,name:`Laylo Sodiqova`,parentName:`Feruza Sodiqova`,parentRole:`Ona`,motherName:`Feruza Sodiqova`,sinf:`1-A`,gradeLevel:`1-sinf`,phone:`+998 99 000 00 07`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`95%`,birthDate:`30.09.2019`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-8`,initials:`UN`,name:`Umar Nazarov`,parentName:`Botir Nazarov`,parentRole:`Ota`,motherName:`Gulchehra Nazarova`,sinf:`6-A`,gradeLevel:`6-sinf`,phone:`+998 90 000 00 08`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`81%`,birthDate:`02.02.2014`,homeroomTeacher:`Laylo Qodirova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:35e5,paidAmount:0,debtAmount:35e5},{id:`std-9`,initials:`TM`,name:`Temur Mahmudov`,parentName:`Farrux Mahmudov`,parentRole:`Ota`,motherName:`Dildora Mahmudova`,sinf:`1-A`,gradeLevel:`1-sinf`,phone:`+998 93 111 22 33`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`94%`,birthDate:`15.04.2019`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:15e5,debtAmount:15e5},{id:`std-10`,initials:`DE`,name:`Diyora Ergasheva`,parentName:`Shahnoza Ergasheva`,parentRole:`Ona`,motherName:`Shahnoza Ergasheva`,sinf:`1-A`,gradeLevel:`1-sinf`,phone:`+998 97 222 33 44`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`88%`,birthDate:`20.10.2019`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!1,contract:!0},monthlyFee:3e6,paidAmount:0,debtAmount:3e6},{id:`std-11`,initials:`FR`,name:`Fotima Rasulova`,parentName:`Iroda Rasulova`,parentRole:`Ona`,motherName:`Iroda Rasulova`,sinf:`1-B`,gradeLevel:`1-sinf`,phone:`+998 90 333 44 55`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`98%`,birthDate:`11.07.2019`,homeroomTeacher:`Feruza Karimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-12`,initials:`JA`,name:`Jasur Alimov`,parentName:`Bobur Alimov`,parentRole:`Ota`,motherName:`Barno Alimova`,sinf:`1-B`,gradeLevel:`1-sinf`,phone:`+998 91 444 55 66`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`85%`,birthDate:`25.02.2019`,homeroomTeacher:`Feruza Karimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:0,debtAmount:3e6},{id:`std-13`,initials:`SI`,name:`Shavkat Ismoilov`,parentName:`Otabek Ismoilov`,parentRole:`Ota`,motherName:`Gulbahor Ismoilova`,sinf:`2-A`,gradeLevel:`2-sinf`,phone:`+998 94 555 66 77`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`91%`,birthDate:`14.05.2018`,homeroomTeacher:`Zilola Rahimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:2e6,debtAmount:1e6},{id:`std-14`,initials:`MY`,name:`Mohira Yoqubova`,parentName:`Dilfuza Yoqubova`,parentRole:`Ona`,motherName:`Dilfuza Yoqubova`,sinf:`2-A`,gradeLevel:`2-sinf`,phone:`+998 95 666 77 88`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`82%`,birthDate:`30.08.2018`,homeroomTeacher:`Zilola Rahimova`,docs:{birthCertificate:!0,medicalReport:!1,contract:!0},monthlyFee:3e6,paidAmount:0,debtAmount:3e6},{id:`std-15`,initials:`KS`,name:`Kamron Shukurov`,parentName:`Jamshid Shukurov`,parentRole:`Ota`,motherName:`Nodira Shukurova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 90 777 88 99`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`93%`,birthDate:`19.03.2017`,homeroomTeacher:`Madina Aliyeva`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:15e5,debtAmount:15e5},{id:`std-16`,initials:`ZS`,name:`Zilola Sharipova`,parentName:`Ulug'bek Sharipov`,parentRole:`Ota`,motherName:`Gulchehra Sharipova`,sinf:`4-B`,gradeLevel:`4-sinf`,phone:`+998 93 888 99 00`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`97%`,birthDate:`12.09.2016`,homeroomTeacher:`Gulnora Tursunova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-17`,initials:`BM`,name:`Bobur Mirzayev`,parentName:`Botir Mirzayev`,parentRole:`Ota`,motherName:`Zuhra Mirzayeva`,sinf:`5-A`,gradeLevel:`5-sinf`,phone:`+998 97 999 00 11`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`80%`,birthDate:`05.12.2015`,homeroomTeacher:`Sherzod Jalilov`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:35e5,paidAmount:0,debtAmount:35e5}],classes:[{id:`cls-1a`,name:`1-A`,room:`12-xona`,teacherName:`Nodira Saidova`,teacherInitials:`NS`,currentStudents:18,capacity:20,attendanceStatus:`Belgilangan`,todayPresent:17,todayTotal:18},{id:`cls-1b`,name:`1-B`,room:`14-xona`,teacherName:`Feruza Karimova`,teacherInitials:`FK`,currentStudents:16,capacity:20,attendanceStatus:`Belgilangan`,todayPresent:15,todayTotal:16},{id:`cls-2a`,name:`2-A`,room:`21-xona`,teacherName:`Zilola Rahimova`,teacherInitials:`ZR`,currentStudents:19,capacity:22,attendanceStatus:`Belgilanmagan`,todayPresent:0,todayTotal:19},{id:`cls-3a`,name:`3-A`,room:`23-xona`,teacherName:`Madina Aliyeva`,teacherInitials:`MA`,currentStudents:22,capacity:22,attendanceStatus:`Belgilangan`,todayPresent:19,todayTotal:22},{id:`cls-4b`,name:`4-B`,room:`31-xona`,teacherName:`Gulnora Tursunova`,teacherInitials:`GT`,currentStudents:17,capacity:22,attendanceStatus:`Belgilanmagan`,todayPresent:0,todayTotal:17},{id:`cls-5a`,name:`5-A`,room:`33-xona`,teacherName:`Sherzod Jalilov`,teacherInitials:`SJ`,currentStudents:20,capacity:24,attendanceStatus:`Belgilangan`,todayPresent:18,todayTotal:20}],teachers:[{id:`tch-1`,initials:`NS`,name:`Nodira Saidova`,subject:`Boshlang'ich sinf`,classes:`1-A`,weeklyHours:24,phone:`+998 90 111 22 33`},{id:`tch-2`,initials:`SJ`,name:`Sherzod Jalilov`,subject:`Matematika`,classes:`5-A, 6-A, 7-B`,weeklyHours:20,phone:`+998 91 222 33 44`},{id:`tch-3`,initials:`AX`,name:`Aziza Xolmatova`,subject:`Ingliz tili`,classes:`1-A dan 5-A gacha`,weeklyHours:22,phone:`+998 93 333 44 55`},{id:`tch-4`,initials:`BM`,name:`Botir Mirzayev`,subject:`Informatika`,classes:`4-B, 5-A, 6-A`,weeklyHours:14,phone:`+998 94 444 55 66`},{id:`tch-5`,initials:`LQ`,name:`Laylo Qodirova`,subject:`Ona tili va adabiyot`,classes:`5-A, 6-A`,weeklyHours:18,phone:`+998 97 555 66 77`}],paymentsSummary:{monthlyRevenue:486e5,expectedRevenue:189e5,debtorFamilies:6},paymentTransactions:[{id:`tx-1`,studentName:`Aziza Karimova`,sinf:`3-A`,amount:3e6,method:`Payme`,date:`14.10.2026`,status:`Tasdiqlangan`},{id:`tx-2`,studentName:`Madina Rahimova`,sinf:`5-A`,amount:35e5,method:`Click`,date:`12.10.2026`,status:`Tasdiqlangan`},{id:`tx-3`,studentName:`Behruz Aliyev`,sinf:`4-B`,amount:2e6,method:`Naqd`,date:`10.10.2026`,status:`Tasdiqlangan`},{id:`tx-4`,studentName:`Omina Qodirova`,sinf:`2-A`,amount:3e6,method:`Bank o'tkazmasi`,date:`09.10.2026`,status:`Tasdiqlangan`}]},t=`maktab_crm_data_v2`;function n(){try{let e=localStorage.getItem(t);if(e)return JSON.parse(e)}catch(e){console.error(`Failed to load local storage data`,e)}return e}function r(e){try{localStorage.setItem(t,JSON.stringify(e))}catch(e){console.error(`Failed to save to local storage`,e)}}var i={uz:{brandName:`Maktab CRM`,brandSubtitle:`Xususiy maktab`,director:`Direktor`,adminRole:`Admin huquqi`,academicYear:`2026–2027 o'quv yili`,todayDate:`Bugun, 20 oktyabr 2026`,dashboard:`Boshqaruv paneli`,leads:`Qabul (leadlar)`,students:`O'quvchilar`,classes:`Sinflar va o'qituvchilar`,payments:`To'lovlar`,attendance:`Davomat`,reports:`Hisobotlar`,menu:`Menyu`,mainTab:`Asosiy`,studentTab:`O'quvchi`,dashTitle:`Boshqaruv paneli`,dashSubtitle:`2026–2027 o'quv yili ko'rsatkichlari`,totalStudents:`Jami o'quvchilar`,activeStudents:`faol o'quvchi`,monthRevenue:`Shu oy tushum`,revenuePlan:`72% reja`,attendanceRate:`Bugungi davomat`,attendancePresent:`112 tadan 106 nafari keldi`,totalLeads:`Qabul arizalari`,newRequestsThisWeek:`bu hafta 5 yangi`,generalReport:`Umumiy hisobot`,newRequest:`Yangi so'rov`,admissionFunnel:`Qabul voronkasi`,viewAll:`Barchasini ko'rish →`,stageNewRequests:`1. Yangi so'rovlar`,stageContacted:`2. Bog'lanildi & ma'lumot berildi`,stageInterview:`3. Suhbat va test jarayonida`,stageContract:`4. Shartnoma imzolandi (Qabul)`,requestsCount:`ta ariza`,countUnits:`ta`,monthPlanRevenue:`Oktyabr oyi to'lovlar rejasi`,expectedRevenue:`Kutilayotgan`,debtorFamiliesCount:`ta qarzdor oila`,todayTasks:`Bugungi vazifalar va eslatmalar`,psychologistInterview:`14:00 - Psixolog suhbati`,psychologistDesc:`Umar Nazarov (6-sinf) ota-onasi bilan testga keladi`,unmarkedAttendance:`2-A va 4-B sinflar davomati`,unmarkedAttendanceDesc:`Bugungi davomat hali belgilanmagan. O'qituvchilarga eslatma yuborish kerak.`,paymentReminders:`To'lov eslatmalari (SMS)`,paymentRemindersDesc:`Oylik to'lov muddati o'tgan 6 ta oilaga avtomatik eslatma yuborish.`,roomCapacityTitle:`Sinflar xonasi to'liqligi`,totalClassesCount:`Jami 6 sinf`,capacityRecommendation:`Hozirda eng to'la sinf: 3-A (22/22). Yangi o'quvchilar 1-B yoki 5-A ga qabul qilinishi tavsiya etiladi.`,leadsTitle:`Qabul (leadlar)`,leadsSubtitle:`Kelgan arizalar va murojaatlar`,searchLeadPlaceholder:`Ism yoki telefon bo'yicha qidirish`,filterBtn:`Filtr`,all:`Hammasi`,yangi:`Yangi`,boglanildi:`Bog'lanildi`,suhbat:`Suhbat`,shartnoma:`Shartnoma`,addLeadInCol:`+ Qo'shish`,newLeadModalTitle:`Yangi ariza (Lead) qo'shish`,childFullName:`Bola F.I.SH`,gradeSelect:`Sinf`,sourceSelect:`Manba`,parentNameLabel:`Ota/Ona ismi`,phoneLabel:`Telefon raqam`,notesLabel:`Qo'shimcha izoh`,cancel:`Bekor qilish`,save:`Saqlash`,delete:`O'chirish`,changeStage:`Bosqichni o'zgartirish`,studentsTitle:`O'quvchilar`,studentsSubtitle:`Barcha sinflar bo'yicha o'quvchilar bazasi`,searchStudentPlaceholder:`Ism yoki telefon bo'yicha qidirish`,exportCsv:`Excelga (.csv)`,addStudent:`O'quvchi qo'shish`,debtorsOnly:`Qarzdorlar`,personalInfo:`Shaxsiy ma'lumotlar`,monthlyPayment:`Oylik to'lov`,paidSoFar:`To'langan`,debtRemaining:`Qoldiq qarz`,statusPaid:`To'langan`,statusPartial:`Qisman`,statusDebt:`Qarzdor`,acceptPaymentBtn:`To'lov qabul qilish`,editStudentBtn:`Tahrirlash`,homeroomTeacherLabel:`Sinf rahbari`,birthDateLabel:`Tug'ilgan sana`,phoneText:`Telefon`,requiredDocs:`Hujjatlar to'plami`,docBirthCert:`Tug'ilganlik haqida guvohnoma`,docMedReport:`Tibbiy ma'lumotnoma (086)`,docContract:`Ikki tomonlama shartnoma`,classesTitle:`Sinflar va o'qituvchilar`,classesSubtitle:`Sinflar va pedagogik jamoa`,addTeacherBtn:`+ O'qituvchi`,addClassBtn:`+ Yangi sinf`,classesSection:`Sinflar`,teachersSection:`O'qituvchilar jamoasi`,studentsInClass:`O'quvchilar`,roomText:`xona`,teacherColName:`O'qituvchi`,teacherColSubject:`Fani`,teacherColClasses:`Biriktirilgan sinflar`,teacherColHours:`Haftalik soat`,teacherColPhone:`Telefon`,paymentsTitle:`To'lovlar`,paymentsSubtitle:`Oktyabr 2026, oylik to'lovlar holati`,kpiRevenueMonth:`Shu oy tushum`,kpiExpectedRevenue:`Kutilayotgan to'lovlar`,kpiDebtors:`Qarzdor oilalar`,colStudent:`O'quvchi`,colClass:`Sinf`,colFee:`Oylik to'lov`,colPaid:`To'langan`,colBalance:`Qoldiq`,colStatus:`Holat`,som:`so'm`,currencyUnit:`mln`,attendanceTitle:`Davomat`,attendanceSubtitle:`Bugungi davomat holati`,tabClasses:`Sinflar`,tabTutors:`Repetitorlar`,selectClassForAttendance:`Davomat belgilash uchun sinfni tanlang`,marked:`Belgilangan`,notMarked:`Belgilanmagan`,cameToday:`Bugun keldi`,markAttendanceModalTitle:`Davomat belgilash`,markAllPresent:`Hammasi keldi`,present:`Keldi`,absent:`Kelmadi`,excused:`Sababli`,saveAttendanceBtn:`Davomatni saqlash`,reportsTitle:`Hisobotlar`,reportsSubtitle:`Maktab ko'rsatkichlari, moliyaviy va akademik tahlil`,printBtn:`Chop etish`,downloadReportBtn:`To'liq hisobot (.csv)`,totalRevenueCollected:`Jami yig'ilgan to'lovlar`,schoolCapacityRate:`Maktab sig'imi to'liqligi`,totalEnrolledPlaces:`112 / 128 o'rin`,averageAttendanceMetric:`O'rtacha davomat ko'rsatkichi`,targetGoalAchieved:`Maqsadli rejaga yetildi`,leadSourceAnalysis:`Reklama manbalari tahlili (Lead conversion)`,financeAttendanceOverview:`Oylik tushum va qoldiq qarzlar tahlili`,sourceInstagram:`Instagram reklama`,sourceTelegram:`Telegram kanallar`,sourceTavsiya:`Tavsiyalar (Og'zaki)`,sourceSayt:`Rasmiy veb-sayt`},ru:{brandName:`Maktab CRM`,brandSubtitle:`Частная школа`,director:`Директор`,adminRole:`Администратор`,academicYear:`2026–2027 учебный год`,todayDate:`Сегодня, 20 октября 2026`,dashboard:`Панель управления`,leads:`Приём (лиды)`,students:`Ученики`,classes:`Классы и учителя`,payments:`Оплаты`,attendance:`Посещаемость`,reports:`Отчёты`,menu:`Меню`,mainTab:`Главная`,studentTab:`Ученик`,dashTitle:`Панель управления`,dashSubtitle:`Показатели на 2026–2027 учебный год`,totalStudents:`Всего учеников`,activeStudents:`активных учеников`,monthRevenue:`Поступления за месяц`,revenuePlan:`72% от плана`,attendanceRate:`Посещаемость сегодня`,attendancePresent:`106 из 112 присутствуют`,totalLeads:`Заявки на приём`,newRequestsThisWeek:`5 новых на этой неделе`,generalReport:`Общий отчёт`,newRequest:`Новая заявка`,admissionFunnel:`Воронка приёма`,viewAll:`Смотреть все →`,stageNewRequests:`1. Новые заявки`,stageContacted:`2. Связались & проконсультировали`,stageInterview:`3. Собеседование и тестирование`,stageContract:`4. Подписан договор (Зачислен)`,requestsCount:`заявок`,countUnits:`шт`,monthPlanRevenue:`План платежей на октябрь`,expectedRevenue:`Ожидается`,debtorFamiliesCount:`семей с задолженностью`,todayTasks:`Задачи и напоминания на сегодня`,psychologistInterview:`14:00 - Встреча с психологом`,psychologistDesc:`Умар Назаров (6-й класс) придёт с родителями на тестирование`,unmarkedAttendance:`Посещаемость 2-А и 4-Б`,unmarkedAttendanceDesc:`Посещаемость сегодня ещё не отмечена. Необходимо напомнить классным руководителям.`,paymentReminders:`SMS-напоминания об оплате`,paymentRemindersDesc:`Отправить автоматические напоминания 6 семьям с просроченной оплатой.`,roomCapacityTitle:`Заполненность классов`,totalClassesCount:`Всего 6 классов`,capacityRecommendation:`Самый заполненный класс: 3-А (22/22). Новых учеников рекомендуется направлять в 1-Б или 5-А.`,leadsTitle:`Приём (лиды)`,leadsSubtitle:`Поступившие заявки и обращения`,searchLeadPlaceholder:`Поиск по имени или телефону`,filterBtn:`Фильтр`,all:`Все`,yangi:`Новые`,boglanildi:`Связались`,suhbat:`Интервью`,shartnoma:`Договор`,addLeadInCol:`+ Добавить`,newLeadModalTitle:`Добавить новую заявку (Лид)`,childFullName:`Ф.И.О. ребёнка`,gradeSelect:`Класс`,sourceSelect:`Источник`,parentNameLabel:`Имя родителя`,phoneLabel:`Номер телефона`,notesLabel:`Примечание`,cancel:`Отмена`,save:`Сохранить`,delete:`Удалить`,changeStage:`Сменить этап`,studentsTitle:`Ученики`,studentsSubtitle:`База учащихся всех классов`,searchStudentPlaceholder:`Поиск по имени или телефону`,exportCsv:`В Excel (.csv)`,addStudent:`Добавить ученика`,debtorsOnly:`Должники`,personalInfo:`Личные данные`,monthlyPayment:`Ежемесячная оплата`,paidSoFar:`Оплачено`,debtRemaining:`Остаток долга`,statusPaid:`Оплачено`,statusPartial:`Частично`,statusDebt:`Задолженность`,acceptPaymentBtn:`Принять оплату`,editStudentBtn:`Редактировать`,homeroomTeacherLabel:`Классный руководитель`,birthDateLabel:`Дата рождения`,phoneText:`Телефон`,requiredDocs:`Пакет документов`,docBirthCert:`Свидетельство о рождении`,docMedReport:`Медицинская справка (086)`,docContract:`Двусторонний договор`,classesTitle:`Классы и учителя`,classesSubtitle:`Классы и педагогический коллектив`,addTeacherBtn:`+ Учитель`,addClassBtn:`+ Новый класс`,classesSection:`Классы`,teachersSection:`Педагогический состав`,studentsInClass:`Учеников`,roomText:`кабинет`,teacherColName:`Учитель`,teacherColSubject:`Предмет`,teacherColClasses:`Закрепленные классы`,teacherColHours:`Часы в неделю`,teacherColPhone:`Телефон`,paymentsTitle:`Оплаты`,paymentsSubtitle:`Октябрь 2026, статус ежемесячных платежей`,kpiRevenueMonth:`Поступления за месяц`,kpiExpectedRevenue:`Ожидаемые оплаты`,kpiDebtors:`Семей с долгом`,colStudent:`Ученик`,colClass:`Класс`,colFee:`Стоимость`,colPaid:`Оплачено`,colBalance:`Остаток`,colStatus:`Статус`,som:`сум`,currencyUnit:`млн`,attendanceTitle:`Посещаемость`,attendanceSubtitle:`Статус посещаемости на сегодня`,tabClasses:`Классы`,tabTutors:`Репетиторы`,selectClassForAttendance:`Выберите класс для отметки посещаемости`,marked:`Отмечено`,notMarked:`Не отмечено`,cameToday:`Пришли сегодня`,markAttendanceModalTitle:`Отметка посещаемости`,markAllPresent:`Все пришли`,present:`Был`,absent:`Не был`,excused:`Уважительная`,saveAttendanceBtn:`Сохранить посещаемость`,reportsTitle:`Отчёты`,reportsSubtitle:`Аналитика школы, финансовые и академические отчёты`,printBtn:`Печать`,downloadReportBtn:`Полный отчёт (.csv)`,totalRevenueCollected:`Всего собранных платежей`,schoolCapacityRate:`Заполненность школы`,totalEnrolledPlaces:`112 / 128 мест`,averageAttendanceMetric:`Средняя посещаемость`,targetGoalAchieved:`Целевой план достигнут`,leadSourceAnalysis:`Анализ источников заявок (Конверсия)`,financeAttendanceOverview:`Анализ поступлений и задолженностей`,sourceInstagram:`Реклама в Instagram`,sourceTelegram:`Telegram-каналы`,sourceTavsiya:`Рекомендации (Сарафан)`,sourceSayt:`Официальный сайт`}},a=localStorage.getItem(`maktab_crm_lang`)||`uz`;function o(){return a}function s(e){return a=e,localStorage.setItem(`maktab_crm_lang`,e),a}function c(e){return(i[a]||i.uz)[e]||i.uz[e]||e}function l(e){e.students.length;let t=e.leads.length,n=e.leads.filter(e=>e.stage===`yangi`).length,r=e.leads.filter(e=>e.stage===`suhbat`).length,i=e.leads.filter(e=>e.stage===`shartnoma`).length,a=e.leads.filter(e=>e.stage===`boglanildi`).length,o=e.paymentsSummary.monthlyRevenue.toLocaleString(`uz-UZ`)+` `+c(`som`),s=e.paymentsSummary.expectedRevenue.toLocaleString(`uz-UZ`)+` `+c(`som`);return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>${c(`dashTitle`)}</h2>
        <p class="header-sub">${c(`dashSubtitle`)}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.app.switchTab('reports')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>${c(`generalReport`)}</span>
        </button>
        <button class="btn btn-primary" onclick="window.app.openModal('addLead')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`newRequest`)}</span>
        </button>
      </div>
    </div>

    <!-- Premium Glowing 2x2 KPI Cards (matching user screenshot exactly) -->
    <div class="kpi-neon-grid">
      
      <!-- Card 1: Jami o'quvchilar -->
      <div class="kpi-neon-card card-blue">
        <div class="kpi-neon-header">
          <span class="kpi-neon-title">${c(`totalStudents`)||`Jami o'quvchilar`}</span>
          <span class="kpi-neon-badge badge-blue">+12</span>
        </div>
        <div class="kpi-neon-value-row">
          <span class="kpi-neon-number">112</span>
          <span class="kpi-neon-sub">${c(`activeStudents`)||`faol o'quvchi`}</span>
        </div>
        <div class="kpi-neon-footer">
          <div class="kpi-neon-icon icon-blue">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div class="kpi-neon-track">
            <div class="kpi-neon-fill fill-blue" style="width: 75%;"></div>
          </div>
        </div>
      </div>

      <!-- Card 2: Shu oy tushum -->
      <div class="kpi-neon-card card-green">
        <div class="kpi-neon-header">
          <span class="kpi-neon-title">${c(`monthRevenue`)||`Shu oy tushum`}</span>
          <span class="kpi-neon-badge badge-green">72%</span>
        </div>
        <div class="kpi-neon-value-row">
          <span class="kpi-neon-number">48.6 mln</span>
          <span class="kpi-neon-sub">${c(`som`)||`so'm`}</span>
        </div>
        <div class="kpi-neon-footer">
          <div class="kpi-neon-icon icon-green">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"></rect>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M6 12h.01M18 12h.01"></path>
            </svg>
          </div>
          <div class="kpi-neon-track">
            <div class="kpi-neon-fill fill-green" style="width: 72%;"></div>
          </div>
        </div>
      </div>

      <!-- Card 3: Bugungi davomat -->
      <div class="kpi-neon-card card-cyan">
        <div class="kpi-neon-header">
          <span class="kpi-neon-title">${c(`attendanceRate`)||`Bugungi<br>davomat`}</span>
          <span class="kpi-neon-badge badge-cyan">94%</span>
        </div>
        <div class="kpi-neon-value-row">
          <span class="kpi-neon-number">94.6%</span>
          <span class="kpi-neon-sub">106 / 112</span>
        </div>
        <div class="kpi-neon-footer">
          <div class="kpi-neon-icon icon-cyan">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <path d="M9 16l2 2 4-4"></path>
            </svg>
          </div>
          <div class="kpi-neon-track">
            <div class="kpi-neon-fill fill-cyan" style="width: 94%;"></div>
          </div>
        </div>
      </div>

      <!-- Card 4: Qabul arizalari -->
      <div class="kpi-neon-card card-amber">
        <div class="kpi-neon-header">
          <span class="kpi-neon-title">${c(`totalLeads`)||`Qabul arizalari`}</span>
          <span class="kpi-neon-badge badge-amber">+5</span>
        </div>
        <div class="kpi-neon-value-row">
          <span class="kpi-neon-number">${t}</span>
          <span class="kpi-neon-sub">${c(`requestsCount`)||`ta ariza`}</span>
        </div>
        <div class="kpi-neon-footer">
          <div class="kpi-neon-icon icon-amber">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="kpi-neon-track">
            <div class="kpi-neon-fill fill-amber" style="width: 65%;"></div>
          </div>
        </div>
      </div>

    </div>

    <!-- Quick Action Launchpad -->
    <div style="margin-bottom: 20px;">
      <h3 class="section-title" style="margin-top: 4px; font-size: 16px;">Tezkor amallar</h3>
      <div class="quick-actions-grid">
        <div class="quick-action-btn" onclick="window.app.openModal('addLead')">
          <div class="quick-action-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </div>
          <div class="quick-action-title">${c(`newRequest`)}</div>
          <div class="quick-action-desc">Ota-onadan kelgan murojaatni kiritish</div>
        </div>

        <div class="quick-action-btn" onclick="window.app.openModal('addPayment')">
          <div class="quick-action-icon" style="color: #10b981;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          </div>
          <div class="quick-action-title">${c(`acceptPaymentBtn`)}</div>
          <div class="quick-action-desc">Oylik to'lovni hisobga olish</div>
        </div>

        <div class="quick-action-btn" onclick="window.app.switchTab('attendance')">
          <div class="quick-action-icon" style="color: #8b5cf6;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="quick-action-title">${c(`attendanceTitle`)}</div>
          <div class="quick-action-desc">Bugungi o'quvchilar ishtiroki</div>
        </div>

        <div class="quick-action-btn" onclick="window.app.openModal('addStudent')">
          <div class="quick-action-icon" style="color: var(--primary);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="quick-action-title">${c(`addStudent`)}</div>
          <div class="quick-action-desc">Shartnoma tuzilgan o'quvchini kiritish</div>
        </div>
      </div>
    </div>

    <!-- 2 Column Section: Funnel and Events -->
    <div class="dashboard-grid-2col">
      
      <!-- Left Panel: Qabul voronkasi -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            ${c(`admissionFunnel`)}
          </div>
          <button class="btn btn-outline-blue" style="padding: 4px 10px; font-size: 11.5px;" onclick="window.app.switchTab('leads')">
            ${c(`viewAll`)}
          </button>
        </div>

        <div class="funnel-container">
          <!-- Step 1: Yangi -->
          <div class="funnel-step">
            <div class="funnel-step-header">
              <span style="display: flex; align-items: center; gap: 8px;">
                <span class="dot-indicator dot-blue"></span> ${c(`stageNewRequests`)}
              </span>
              <span style="color: var(--text-muted);">${n} ${c(`countUnits`)}</span>
            </div>
            <div class="progress-track" style="height: 8px;">
              <div class="progress-fill" style="width: 100%; background: #2563eb;"></div>
            </div>
          </div>

          <!-- Step 2: Bog'lanildi -->
          <div class="funnel-step">
            <div class="funnel-step-header">
              <span style="display: flex; align-items: center; gap: 8px;">
                <span class="dot-indicator dot-orange"></span> ${c(`stageContacted`)}
              </span>
              <span style="color: var(--text-muted);">${a} ${c(`countUnits`)}</span>
            </div>
            <div class="progress-track" style="height: 8px;">
              <div class="progress-fill" style="width: 78%; background: #f59e0b;"></div>
            </div>
          </div>

          <!-- Step 3: Suhbat / test -->
          <div class="funnel-step">
            <div class="funnel-step-header">
              <span style="display: flex; align-items: center; gap: 8px;">
                <span class="dot-indicator dot-purple"></span> ${c(`stageInterview`)}
              </span>
              <span style="color: var(--text-muted);">${r} ${c(`countUnits`)}</span>
            </div>
            <div class="progress-track" style="height: 8px;">
              <div class="progress-fill" style="width: 55%; background: #8b5cf6;"></div>
            </div>
          </div>

          <!-- Step 4: Shartnoma -->
          <div class="funnel-step">
            <div class="funnel-step-header">
              <span style="display: flex; align-items: center; gap: 8px;">
                <span class="dot-indicator dot-green"></span> ${c(`stageContract`)}
              </span>
              <span style="color: #10b981; font-weight: 700;">${i} ${c(`countUnits`)}</span>
            </div>
            <div class="progress-track" style="height: 8px;">
              <div class="progress-fill" style="width: 38%; background: #10b981;"></div>
            </div>
          </div>
        </div>

        <!-- Moliya mini overview -->
        <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 14px; margin-top: 10px; border: 1px solid var(--border-light);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 12.5px; font-weight: 600; color: var(--text-secondary);">${c(`monthPlanRevenue`)}</span>
            <span style="font-size: 13px; font-weight: 700; color: #10b981;">${o}</span>
          </div>
          <div class="progress-track" style="height: 7px; margin-bottom: 6px;">
            <div class="progress-fill" style="width: 72%; background: #10b981;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: var(--text-muted);">
            <span>${c(`expectedRevenue`)}: ${s}</span>
            <span style="color: #ef4444; font-weight: 600;">6 ${c(`debtorFamiliesCount`)}</span>
          </div>
        </div>
      </div>

      <!-- Right Panel: Bugungi muhim tadbirlar & Sinf yuklamasi -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${c(`todayTasks`)}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="padding: 12px; border-radius: var(--radius-md); background: var(--status-pink-bg); border-left: 3px solid #db2777;">
            <div style="font-size: 13px; font-weight: 700; color: #db2777;">${c(`psychologistInterview`)}</div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${c(`psychologistDesc`)}</div>
          </div>

          <div style="padding: 12px; border-radius: var(--radius-md); background: var(--primary-light); border-left: 3px solid var(--primary);">
            <div style="font-size: 13px; font-weight: 700; color: var(--primary);">${c(`unmarkedAttendance`)}</div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${c(`unmarkedAttendanceDesc`)}</div>
          </div>

          <div style="padding: 12px; border-radius: var(--radius-md); background: var(--status-amber-bg); border-left: 3px solid #d97706;">
            <div style="font-size: 13px; font-weight: 700; color: #d97706;">${c(`paymentReminders`)}</div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${c(`paymentRemindersDesc`)}</div>
          </div>
        </div>
      </div>

    </div>
  `}function u(e,t=``,n=`all`){let r=e.leads;if(t.trim()){let e=t.toLowerCase().trim();r=r.filter(t=>t.name.toLowerCase().includes(e)||t.phone.toLowerCase().includes(e)||t.parent.toLowerCase().includes(e))}let i=r.filter(e=>e.stage===`yangi`),a=r.filter(e=>e.stage===`boglanildi`),o=r.filter(e=>e.stage===`suhbat`),s=r.filter(e=>e.stage===`shartnoma`);function l(e){let t=`tag-instagram`;return e.source===`Telegram`?t=`tag-telegram`:e.source===`Tavsiya`?t=`tag-tavsiya`:e.source===`Sayt`&&(t=`tag-sayt`),`
      <div class="lead-card" draggable="true" ondragstart="window.app.handleDragStart(event, '${e.id}')" onclick="window.app.openLeadDetails('${e.id}')">
        <div class="lead-card-header">
          <span class="lead-name">${e.name}</span>
          <span class="grade-badge">${e.grade}</span>
        </div>
        <div class="lead-meta">
          <div>${e.parent}</div>
          <div class="lead-phone">${e.phone}</div>
        </div>
        <div class="lead-card-footer">
          <span class="tag-badge ${t}">${e.source}</span>
          <div class="lead-footer-right">
            <span class="lead-date">${e.date}</span>
            <div class="manager-avatar">${e.manager}</div>
          </div>
        </div>
      </div>
    `}return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>${c(`leadsTitle`)}</h2>
        <p class="header-sub">${c(`leadsSubtitle`)}</p>
      </div>
      <div class="header-actions">
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="search-input" 
            placeholder="${c(`searchLeadPlaceholder`)}" 
            value="${t}"
            oninput="window.app.filterLeads(this.value)"
          />
        </div>

        <button class="btn btn-secondary" onclick="window.app.toggleLeadFilterModal()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          <span>${c(`filterBtn`)}</span>
        </button>

        <button class="btn btn-primary" onclick="window.app.openModal('addLead')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`newRequest`)}</span>
        </button>
      </div>
    </div>

    <!-- 4 KPI Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card-title">${c(`totalLeads`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">14</span>
          <span class="stat-card-subtitle">${c(`requestsCount`)}</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${c(`yangi`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">5</span>
          <span class="stat-card-subtitle">${c(`countUnits`)}</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${c(`suhbat`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">3</span>
          <span class="stat-card-subtitle">${c(`countUnits`)}</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${c(`shartnoma`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">2</span>
          <span class="stat-card-subtitle">${c(`countUnits`)}</span>
        </div>
      </div>
    </div>

    <!-- Mobile Column Switcher (Visible on phone) -->
    <div class="pill-filters mobile-col-switcher" style="display: none;">
      <button class="filter-pill ${n===`all`?`active`:``}" onclick="window.app.switchMobileLeadCol('all')">
        ${c(`all`)} (${r.length})
      </button>
      <button class="filter-pill ${n===`yangi`?`active`:``}" onclick="window.app.switchMobileLeadCol('yangi')">
        ${c(`yangi`)} (${i.length})
      </button>
      <button class="filter-pill ${n===`boglanildi`?`active`:``}" onclick="window.app.switchMobileLeadCol('boglanildi')">
        ${c(`boglanildi`)} (${a.length})
      </button>
      <button class="filter-pill ${n===`suhbat`?`active`:``}" onclick="window.app.switchMobileLeadCol('suhbat')">
        ${c(`suhbat`)} (${o.length})
      </button>
      <button class="filter-pill ${n===`shartnoma`?`active`:``}" onclick="window.app.switchMobileLeadCol('shartnoma')">
        ${c(`shartnoma`)} (${s.length})
      </button>
    </div>

    <!-- 4-Column Kanban Board -->
    <div class="kanban-board">
      
      <!-- Column 1: Yangi -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`yangi`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'yangi')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-blue"></span>
            <span>Yangi</span>
          </div>
          <span class="col-badge-count">${i.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${i.map(l).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'yangi')">
          + Qo'shish
        </button>
      </div>

      <!-- Column 2: Bog'lanildi -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`boglanildi`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'boglanildi')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-orange"></span>
            <span>Bog'lanildi</span>
          </div>
          <span class="col-badge-count">${a.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${a.map(l).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'boglanildi')">
          + Qo'shish
        </button>
      </div>

      <!-- Column 3: Suhbat / test -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`suhbat`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'suhbat')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-purple"></span>
            <span>Suhbat / test</span>
          </div>
          <span class="col-badge-count">${o.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${o.map(l).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'suhbat')">
          + Qo'shish
        </button>
      </div>

      <!-- Column 4: Shartnoma -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`shartnoma`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'shartnoma')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-green"></span>
            <span>Shartnoma</span>
          </div>
          <span class="col-badge-count">${s.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${s.map(l).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'shartnoma')">
          + Qo'shish
        </button>
      </div>

    </div>
  `}function d(e){return e==null?`0`:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,` `)}function f(e,t=`all`,n=``,r=null,i=null){let a=e.students||[],o=e.classes||[],s=n.trim().length>0,l=[];if(s){let e=n.toLowerCase().trim();l=a.filter(t=>t.name.toLowerCase().includes(e)||t.phone.toLowerCase().includes(e)||t.parentName.toLowerCase().includes(e)||t.sinf&&t.sinf.toLowerCase().includes(e))}let u=[{id:`all`,label:c(`all`)||`Hammasi`},{id:`1-sinf`,label:`1-sinf`},{id:`2-sinf`,label:`2-sinf`},{id:`3-sinf`,label:`3-sinf`},{id:`4-sinf`,label:`4-sinf`},{id:`5-sinf`,label:`5-sinf`},{id:`debt`,label:c(`debtorsOnly`)||`Qarzdorlar`}];return`
    <!-- Top Header: Title on Left, Compact Search + Add on Right (matching user sketch) -->
    <div class="students-page-header">
      <div class="students-header-title-wrap">
        <h2>${c(`studentsTitle`)||`O'quvchilar`}</h2>
        <p class="header-sub">${c(`studentsSubtitle`)||`Sinflar bo'yicha o'quvchilar bazasi`}</p>
      </div>

      <div class="students-header-compact-actions">
        <div class="search-box-compact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="search-input-compact" 
            placeholder="Qidirish..." 
            value="${n}"
            oninput="window.app.filterStudentsSearch(this.value)"
          />
        </div>

        <button class="btn btn-primary btn-add-compact" onclick="window.app.openModal('addStudent')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Qo'shish</span>
        </button>
      </div>
    </div>

    <!-- Filter Pills: Hammasi, 1-sinf, 2-sinf, 3-sinf, 4-sinf, 5-sinf, Qarzdorlar -->
    <div class="pill-filters">
      ${u.map(e=>`
        <button 
          class="filter-pill ${t===e.id?`active`:``}" 
          onclick="window.app.filterStudentsPill('${e.id}')"
        >
          ${e.label}
        </button>
      `).join(``)}
    </div>

    <!-- MAIN CONTENT AREA -->
    ${s?_(l,n):r?m(e,r,t):t===`debt`?g(a):p(o,a,t)}
  `}function p(e,t,n){let r=e;return n!==`all`&&(r=e.filter(e=>e.name.startsWith(n.replace(`-sinf`,``)))),t.length,`
    <div class="classes-overview-section">
      <div class="section-title-bar">
        <div>
          <h3 class="section-heading">Maktab sinflari</h3>
          <p class="section-desc">Sinfni tanlab, o'quvchilar ro'yxati va to'lov holatini ko'ring</p>
        </div>
        <span class="badge-counter">${r.length} ta sinf</span>
      </div>

      <div class="class-cards-grid">
        ${r.map(e=>{let n=t.filter(t=>t.sinf===e.name),r=n.length,i=0,a=0,o=0,s=0;n.forEach(e=>{e.paymentStatusCode===`paid`?i++:e.paymentStatusCode===`partial`?(a++,s+=e.debtAmount||0):e.paymentStatusCode===`debt`&&(o++,s+=e.debtAmount||0)});let c=Math.min(100,Math.round(r/(e.capacity||20)*100));return`
            <div class="student-class-card" onclick="window.app.selectStudentClass('${e.name}')">
              <div class="class-card-top">
                <div class="class-card-badge">${e.name}</div>
                <div class="class-card-meta">
                  <div class="class-card-title">${e.name} sinf</div>
                  <div class="class-card-sub">${e.room||`Xona`} • ${e.teacherName||`Sinf rahbari`}</div>
                </div>
              </div>

              <!-- Capacity & Progress -->
              <div class="class-card-stats-row">
                <div class="class-stat-label">O'quvchilar soni</div>
                <div class="class-stat-val"><strong>${r}</strong> / ${e.capacity||20}</div>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${c}%;"></div>
              </div>

              <!-- Payment Breakdown Badges -->
              <div class="class-payment-breakdown">
                <span class="pay-chip green" title="To'liq to'laganlar">
                  <span class="dot"></span> ${i} to'lagan
                </span>
                ${a>0?`
                  <span class="pay-chip orange" title="Qisman to'laganlar">
                    <span class="dot"></span> ${a} qisman
                  </span>
                `:``}
                ${o>0?`
                  <span class="pay-chip red" title="Qarzdorlar">
                    <span class="dot"></span> ${o} qarzdor
                  </span>
                `:``}
              </div>

              <!-- Action Footer -->
              <div class="class-card-footer">
                <button class="btn-open-class" onclick="event.stopPropagation(); window.app.selectStudentClass('${e.name}')">
                  <span>Sinfga kirish</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          `}).join(``)}
      </div>
    </div>
  `}function m(e,t,n){let r=(e.students||[]).filter(e=>e.sinf===t),i=e.classes?.find(e=>e.name===t)||{name:t,room:`Xona`,teacherName:`Sinf rahbari`},a=t.charAt(0),o=e.classes?.filter(e=>e.name.startsWith(a))||[],s=0,c=0;return r.forEach(e=>{s+=e.paidAmount||0,c+=e.debtAmount||0}),`
    <div class="single-class-container">
      
      <!-- Back button and Navigation Bar -->
      <div class="class-nav-bar">
        <button class="btn-back-to-classes" onclick="window.app.selectStudentClass(null)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Barcha sinflar</span>
        </button>

        ${o.length>1?`
          <div class="sibling-classes-tabs">
            ${o.map(e=>`
              <button 
                class="sibling-tab ${e.name===t?`active`:``}" 
                onclick="window.app.selectStudentClass('${e.name}')"
              >
                ${e.name} sinf
              </button>
            `).join(``)}
          </div>
        `:``}
      </div>

      <!-- Class Summary Card -->
      <div class="class-summary-card">
        <div class="class-summary-header">
          <div class="class-summary-badge">${i.name}</div>
          <div class="class-summary-details">
            <h3>${i.name} sinf o'quvchilari</h3>
            <p>${i.room||`Xona`} • Rahbar: <strong>${i.teacherName||`Sinf rahbari`}</strong></p>
          </div>
          <div class="class-count-pill">${r.length} ta o'quvchi</div>
        </div>

        <div class="class-financial-strip">
          <div class="fin-stat-item">
            <span class="fin-stat-label">To'langan summa</span>
            <span class="fin-stat-value text-green">${d(s)} so'm</span>
          </div>
          <div class="fin-stat-divider"></div>
          <div class="fin-stat-item">
            <span class="fin-stat-label">Qarzdorlik</span>
            <span class="fin-stat-value ${c>0?`text-red`:`text-green`}">${d(c)} so'm</span>
          </div>
        </div>
      </div>

      <!-- Student Cards List -->
      <div class="student-cards-list">
        ${r.length===0?`
          <div class="empty-students-box">
            <p>Ushbu sinfda hozircha o'quvchilar ro'yxati mavjud emas.</p>
            <button class="btn btn-primary" onclick="window.app.openModal('addStudent')">
              + O'quvchi qo'shish
            </button>
          </div>
        `:r.map(e=>h(e)).join(``)}
      </div>

    </div>
  `}function h(e){let t=`status-paid`,n=`To'langan`,r=`${d(e.monthlyFee||3e6)} so'm to'liq to'langan`;return e.paymentStatusCode===`partial`?(t=`status-partial`,n=`Qisman to'langan`,r=`To'landi: ${d(e.paidAmount)} so'm • Qarz: ${d(e.debtAmount)} so'm`):e.paymentStatusCode===`debt`&&(t=`status-debt`,n=`Qarzdor`,r=`Qarzdorlik: ${d(e.debtAmount||e.monthlyFee||3e6)} so'm`),`
    <div class="student-item-card">
      <div class="student-item-header">
        <div class="student-avatar">${e.initials||`OQ`}</div>
        <div class="student-identity">
          <h4 class="student-name">${e.name}</h4>
          <div class="student-meta-sub">
            <span class="badge-sinf">${e.sinf} sinf</span>
            <span class="badge-attendance">Davomat: ${e.attendance||`95%`}</span>
          </div>
        </div>
      </div>

      <!-- Parent & Phone -->
      <div class="student-contact-row">
        <div class="contact-parent">
          <span class="contact-label">${e.parentRole||`Ota-ona`}:</span>
          <span class="contact-name">${e.parentName}</span>
        </div>
        <a href="tel:${e.phone}" class="contact-phone-btn" title="Qo'ng'iroq qilish">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>${e.phone}</span>
        </a>
      </div>

      <!-- Payment Status Block (Clearly answering user requirement) -->
      <div class="student-payment-banner ${t}">
        <div class="pay-banner-top">
          <span class="pay-badge ${t}">${n}</span>
          <span class="pay-amount-info">${r}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="student-card-actions">
        <button class="btn-card-action pay" onclick="window.app.openQuickPayModal('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          <span>To'lov</span>
        </button>

        <button class="btn-card-action edit" onclick="window.app.openEditStudentModal('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          <span>Tahrirlash</span>
        </button>

        <button class="btn-card-action info" onclick="window.app.openStudentDetailsModal('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>Profil</span>
        </button>
      </div>
    </div>
  `}function g(e){let t=e.filter(e=>e.paymentStatusCode===`debt`||e.paymentStatusCode===`partial`),n=0;return t.forEach(e=>n+=e.debtAmount||0),`
    <div class="debtors-view-container">
      <div class="debtors-summary-banner">
        <div>
          <h3>Qarzdor o'quvchilar ro'yxati</h3>
          <p>Jami ${t.length} ta o'quvchining to'lovi kechikkan</p>
        </div>
        <div class="debt-total-amount">
          <span class="label">Jami qarz:</span>
          <span class="amount text-red">${d(n)} so'm</span>
        </div>
      </div>

      <div class="student-cards-list">
        ${t.length===0?`
          <div class="empty-students-box">
            <p>Ajoyib! Hozirda hech qanday qarzdor o'quvchi yo'q.</p>
          </div>
        `:t.map(e=>h(e)).join(``)}
      </div>
    </div>
  `}function _(e,t){return`
    <div class="search-results-section">
      <div class="section-title-bar">
        <h3>"${t}" bo'yicha qidiruv natijalari</h3>
        <span class="badge-counter">${e.length} ta o'quvchi topildi</span>
      </div>

      <div class="student-cards-list">
        ${e.length===0?`
          <div class="empty-students-box">
            <p>Hech narsa topilmadi. Qidiruv so'zini tekshirib ko'ring.</p>
          </div>
        `:e.map(e=>h(e)).join(``)}
      </div>
    </div>
  `}function v(e){let t=e.classes,n=e.teachers;return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>Sinflar va o'qituvchilar</h2>
        <p>${e.currentAcademicYear}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.app.openModal('addTeacher')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          + O'qituvchi
        </button>
        <button class="btn btn-primary" onclick="window.app.openModal('addClass')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          + Yangi sinf
        </button>
      </div>
    </div>

    <!-- Section: Sinflar -->
    <h3 class="section-title">Sinflar</h3>
    <div class="classes-grid">
      ${t.map(e=>{let t=Math.min(100,Math.round(e.currentStudents/e.capacity*100));return`
          <div class="class-card">
            <div class="class-card-top">
              <span class="class-name">${e.name}</span>
              <span class="room-badge">${e.room}</span>
            </div>
            
            <div class="class-teacher-row">
              <div class="teacher-avatar-circle">${e.teacherInitials}</div>
              <div>
                <div class="teacher-meta-label">Sinf rahbari</div>
                <div class="teacher-meta-name">${e.teacherName}</div>
              </div>
            </div>

            <div class="class-card-bottom">
              <div class="class-capacity-info">
                <span class="capacity-label">O'quvchilar</span>
                <span class="capacity-val">${e.currentStudents} / ${e.capacity}</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: ${t}%;"></div>
              </div>
            </div>
          </div>
        `}).join(``)}
    </div>

    <!-- Section: O'qituvchilar -->
    <h3 class="section-title">O'qituvchilar</h3>
    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>O'qituvchi</th>
              <th>Fan</th>
              <th>Sinflar</th>
              <th>Haftalik soat</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(e=>`
              <tr>
                <td>
                  <div class="cell-user">
                    <div class="cell-user-avatar">${e.initials}</div>
                    <div class="cell-user-name">${e.name}</div>
                  </div>
                </td>
                <td style="color: var(--text-secondary);">${e.subject}</td>
                <td style="color: var(--text-secondary);">${e.classes}</td>
                <td style="font-weight: 600; color: var(--text-main);">${e.weeklyHours}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function y(e){let t=e.students;return e.paymentsSummary,`
    <div class="page-header">
      <div class="header-title-block">
        <h2>To'lovlar</h2>
        <p>Oktyabr 2026, oylik to'lovlar holati</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.app.exportPaymentsToCSV()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Excelga yuklash
        </button>
        <button class="btn btn-primary" onclick="window.app.openModal('addPayment')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          + To'lov qabul qilish
        </button>
      </div>
    </div>

    <!-- 3 KPI Cards with Accent Underlines -->
    <div class="stats-grid stats-grid-3">
      <div class="stat-card">
        <div class="stat-card-title">Shu oy tushum (namuna)</div>
        <div class="stat-card-content">
          <span class="stat-card-number" style="font-size: 26px;">48 600 000</span>
          <span class="stat-card-subtitle">so'm</span>
        </div>
        <div class="accent-line green"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">Kutilayotgan to'lovlar</div>
        <div class="stat-card-content">
          <span class="stat-card-number" style="font-size: 26px;">18 900 000</span>
          <span class="stat-card-subtitle">so'm</span>
        </div>
        <div class="accent-line orange"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">Qarzdor oilalar</div>
        <div class="stat-card-content">
          <span class="stat-card-number" style="font-size: 26px;">6</span>
          <span class="stat-card-subtitle">ta</span>
        </div>
        <div class="accent-line red"></div>
      </div>
    </div>

    <!-- Payments Table -->
    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>O'quvchi</th>
              <th>Sinf</th>
              <th>Oylik to'lov</th>
              <th>To'langan</th>
              <th>Qoldiq</th>
              <th>Holat</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(e=>{let t=`status-paid`;return e.paymentStatusCode===`partial`?t=`status-partial`:e.paymentStatusCode===`debt`&&(t=`status-debt`),`
                <tr>
                  <td>
                    <div class="cell-user">
                      <div class="cell-user-avatar">${e.initials}</div>
                      <div>
                        <div class="cell-user-name">${e.name}</div>
                        <div class="cell-user-sub">${e.parentName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="framed-class-box">${e.sinf}</span>
                  </td>
                  <td style="font-weight: 500;">${(e.monthlyFee||3e6).toLocaleString(`uz-UZ`)}</td>
                  <td style="font-weight: 500;">${(e.paidAmount||0).toLocaleString(`uz-UZ`)}</td>
                  <td style="font-weight: 600; color: ${e.debtAmount>0?`#dc2626`:`var(--text-main)`};">
                    ${(e.debtAmount||0).toLocaleString(`uz-UZ`)}
                  </td>
                  <td>
                    <span class="status-pill ${t}">${e.paymentStatus}</span>
                  </td>
                </tr>
              `}).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function b(e,t=`classes`){let n=e.classes;return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>Davomat</h2>
        <p>${e.currentDateText}</p>
      </div>
      <div class="header-actions">
        <div class="segmented-control">
          <button 
            class="segmented-btn ${t===`classes`?`active`:``}"
            onclick="window.app.switchAttendanceSubTab('classes')"
          >
            Sinflar
          </button>
          <button 
            class="segmented-btn ${t===`tutors`?`active`:``}"
            onclick="window.app.switchAttendanceSubTab('tutors')"
          >
            Repetitorlar
          </button>
        </div>
      </div>
    </div>

    ${t===`classes`?`
      <div style="margin-bottom: 16px;">
        <h3 class="section-title" style="margin-bottom: 2px;">Sinflar</h3>
        <p style="font-size: 13px; color: var(--text-muted);">Davomat belgilash uchun sinfni tanlang</p>
      </div>

      <div class="attendance-grid">
        ${n.map(e=>{let t=e.attendanceStatus===`Belgilangan`,n=e.todayTotal>0?Math.round(e.todayPresent/e.todayTotal*100):0;return`
            <div class="attendance-card" onclick="window.app.openAttendanceModal('${e.id}')">
              <div class="class-card-top">
                <span class="class-name">${e.name}</span>
                <span class="status-pill ${t?`status-marked`:`status-unmarked`}">
                  ${e.attendanceStatus}
                </span>
              </div>

              <div class="class-teacher-row">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                  <span class="teacher-meta-label">Sinf rahbari</span>
                  <span class="teacher-meta-name">${e.teacherName}</span>
                  <span style="font-size: 11.5px; color: var(--text-light);">${e.room}</span>
                </div>
              </div>

              <div class="class-card-bottom" style="margin-top: 6px;">
                <div class="class-capacity-info">
                  <span class="capacity-label">Bugun keldi</span>
                  <span class="capacity-val" style="color: ${t?`var(--text-main)`:`#94a3b8`};">
                    ${e.todayPresent} / ${e.todayTotal}
                  </span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${n}%;"></div>
                </div>
              </div>
            </div>
          `}).join(``)}
      </div>
    `:`
      <!-- Repetitorlar (Extracurricular / Tutoring) Subtab -->
      <div style="margin-bottom: 16px;">
        <h3 class="section-title" style="margin-bottom: 2px;">Repetitorlik va to'garaklar davomati</h3>
        <p style="font-size: 13px; color: var(--text-muted);">Qo'shimcha darslar va to'garaklar qatnashuvchilari</p>
      </div>

      <div class="attendance-grid">
        <div class="attendance-card" onclick="window.app.openTutorAttendanceModal('Mental arifmetika')">
          <div class="class-card-top">
            <span class="class-name">Mental arifmetika</span>
            <span class="status-pill status-marked">Belgilangan</span>
          </div>
          <div style="font-size: 12.5px; color: var(--text-muted);">Murabbiy: Aziza Karimova (16:00 - 17:30)</div>
          <div class="class-card-bottom" style="margin-top: 6px;">
            <div class="class-capacity-info">
              <span class="capacity-label">Bugun keldi</span>
              <span class="capacity-val">12 / 14</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width: 85%;"></div></div>
          </div>
        </div>

        <div class="attendance-card" onclick="window.app.openTutorAttendanceModal('Robototexnika')">
          <div class="class-card-top">
            <span class="class-name">Robototexnika</span>
            <span class="status-pill status-marked">Belgilangan</span>
          </div>
          <div style="font-size: 12.5px; color: var(--text-muted);">Murabbiy: Botir Mirzayev (15:00 - 16:30)</div>
          <div class="class-card-bottom" style="margin-top: 6px;">
            <div class="class-capacity-info">
              <span class="capacity-label">Bugun keldi</span>
              <span class="capacity-val">10 / 10</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width: 100%;"></div></div>
          </div>
        </div>

        <div class="attendance-card" onclick="window.app.openTutorAttendanceModal('Ingliz tili club')">
          <div class="class-card-top">
            <span class="class-name">IELTS Speaking</span>
            <span class="status-pill status-unmarked">Belgilanmagan</span>
          </div>
          <div style="font-size: 12.5px; color: var(--text-muted);">Murabbiy: Aziza Xolmatova (17:00 - 18:30)</div>
          <div class="class-card-bottom" style="margin-top: 6px;">
            <div class="class-capacity-info">
              <span class="capacity-label">Bugun keldi</span>
              <span class="capacity-val">0 / 16</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width: 0%;"></div></div>
          </div>
        </div>
      </div>
    `}
  `}function x(e){return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>Hisobotlar</h2>
        <p>Maktab ko'rsatkichlari, moliyaviy va akademik hisobotlar</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.print()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Chop etish
        </button>
        <button class="btn btn-primary" onclick="window.app.exportPaymentsToCSV()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          To'liq hisobotni yuklash (.csv)
        </button>
      </div>
    </div>

    <!-- Summary Metrics -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card-title">Jami yig'ilgan to'lovlar</div>
        <div class="stat-card-content">
          <span class="stat-card-number" style="font-size: 24px;">48.6 mln</span>
          <span class="stat-card-subtitle">so'm</span>
        </div>
        <div class="accent-line green"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">Maktab sig'imi to'liqligi</div>
        <div class="stat-card-content">
          <span class="stat-card-number">87.5%</span>
          <span class="stat-card-subtitle">112 / 128 o'rin</span>
        </div>
        <div class="accent-line blue"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">O'rtacha davomat</div>
        <div class="stat-card-content">
          <span class="stat-card-number">94.4%</span>
          <span class="stat-card-subtitle">oylik o'rtacha</span>
        </div>
        <div class="accent-line blue"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">Qabul konversiyasi</div>
        <div class="stat-card-content">
          <span class="stat-card-number">28.5%</span>
          <span class="stat-card-subtitle">so'rovdan shartnomagacha</span>
        </div>
        <div class="accent-line orange"></div>
      </div>
    </div>

    <!-- Analytics Breakdown Grid -->
    <div class="dashboard-grid-2col">
      <!-- Moliya tahlili -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            Sinflar bo'yicha to'lovlar va qarzdorlik
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
              <span>1-sinflar (1-A, 1-B)</span>
              <span>100% to'langan</span>
            </div>
            <div class="progress-track" style="height: 8px;"><div class="progress-fill" style="width: 100%; background: #10b981;"></div></div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
              <span>2-sinflar (2-A)</span>
              <span>92% to'langan</span>
            </div>
            <div class="progress-track" style="height: 8px;"><div class="progress-fill" style="width: 92%; background: #10b981;"></div></div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
              <span>3-A sinf</span>
              <span>100% to'langan</span>
            </div>
            <div class="progress-track" style="height: 8px;"><div class="progress-fill" style="width: 100%; background: #10b981;"></div></div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
              <span>4-B sinf</span>
              <span>66% to'langan (1 mln qoldiq)</span>
            </div>
            <div class="progress-track" style="height: 8px;"><div class="progress-fill" style="width: 66%; background: #f59e0b;"></div></div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
              <span>7-B va 6-A sinflar (Yuqori)</span>
              <span>Qarzdorlik mavjud (7.0 mln so'm)</span>
            </div>
            <div class="progress-track" style="height: 8px;"><div class="progress-fill" style="width: 40%; background: #ef4444;"></div></div>
          </div>
        </div>
      </div>

      <!-- Reklama manbalari samaradorligi -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            Murojaatlar manbasi (Marketing samaradorligi)
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="tag-badge tag-instagram">Instagram</span>
              <span style="font-size: 13px; font-weight: 600;">5 ta ariza</span>
            </div>
            <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">36% ulush</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="tag-badge tag-telegram">Telegram</span>
              <span style="font-size: 13px; font-weight: 600;">4 ta ariza</span>
            </div>
            <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">29% ulush</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="tag-badge tag-tavsiya">Tavsiya (Ota-onalar)</span>
              <span style="font-size: 13px; font-weight: 600;">3 ta ariza</span>
            </div>
            <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">21% ulush</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="tag-badge tag-sayt">Veb-sayt</span>
              <span style="font-size: 13px; font-weight: 600;">2 ta ariza</span>
            </div>
            <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">14% ulush</span>
          </div>
        </div>
      </div>
    </div>
  `}var S=class{constructor(){this.data=n(),this.currentTab=`dashboard`,this.currentTheme=localStorage.getItem(`maktab_crm_theme`)||`light`,this.currentLang=o(),this.leadFilterQuery=``,this.leadMobileCol=`all`,this.draggedLeadId=null,this.studentSearchQuery=``,this.studentActiveFilter=`all`,this.selectedStudentClass=null,this.selectedStudentId=this.data.students?.[0]?.id||null,this.attendanceSubTab=`classes`,this.activeAttendanceClassId=null,this.tempAttendanceMap={},this.init()}init(){this.applyTheme(this.currentTheme),this.updateLangLabels(),this.updateStaticTranslations(),this.bindNavigation(),this.bindThemeAndLangControls(),this.switchTab(this.currentTab)}bindThemeAndLangControls(){let e=document.getElementById(`mobile-theme-btn`),t=document.getElementById(`desktop-theme-btn`),n=document.getElementById(`mobile-lang-btn`),r=document.getElementById(`desktop-lang-btn`);e&&e.addEventListener(`click`,()=>this.toggleTheme()),t&&t.addEventListener(`click`,()=>this.toggleTheme()),n&&n.addEventListener(`click`,()=>this.toggleLanguage()),r&&r.addEventListener(`click`,()=>this.toggleLanguage())}toggleTheme(){this.currentTheme=this.currentTheme===`light`?`dark`:`light`,localStorage.setItem(`maktab_crm_theme`,this.currentTheme),this.applyTheme(this.currentTheme);let e=this.currentTheme===`dark`?this.currentLang===`ru`?`Тёмная тема включена`:`Qorong'u rejim yoqildi`:this.currentLang===`ru`?`Светлая тема включена`:`Yorug' rejim yoqildi`;this.showToast(e,`info`)}applyTheme(e){document.documentElement.setAttribute(`data-theme`,e);let t=e===`dark`?`☀️`:`🌙`;document.querySelectorAll(`.theme-icon`).forEach(e=>e.textContent=t)}toggleLanguage(){this.currentLang=this.currentLang===`uz`?`ru`:`uz`,s(this.currentLang),this.updateLangLabels(),this.updateStaticTranslations(),this.renderCurrentView();let e=this.currentLang===`ru`?`Язык изменён: Русский`:`Til o'zgartirildi: O'zbekcha`;this.showToast(e,`info`)}updateLangLabels(){let e=this.currentLang.toUpperCase();document.querySelectorAll(`.lang-text`).forEach(t=>t.textContent=e)}updateStaticTranslations(){let e=document.querySelector(`.brand-text span`);e&&(e.textContent=c(`brandSubtitle`));let t=document.querySelector(`.user-name`);t&&(t.textContent=c(`director`));let n=document.querySelector(`.user-role`);n&&(n.textContent=c(`adminRole`));let r={dashboard:c(`dashboard`),leads:c(`leads`),students:c(`students`),classes:c(`classes`),payments:c(`payments`),attendance:c(`attendance`),reports:c(`reports`)};document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(e=>{let t=e.dataset.tab,n=e.querySelector(`span`);t&&n&&r[t]&&(n.textContent=r[t])});let i={dashboard:c(`mainTab`),leads:c(`leads`).split(` `)[0],students:c(`studentTab`),payments:c(`payments`)};document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-btn`).forEach(e=>{let t=e.dataset.tab,n=e.querySelector(`span`);t&&n&&i[t]&&(n.textContent=i[t])});let a=document.querySelector(`#mobile-more-btn span`);a&&(a.textContent=c(`menu`))}bindNavigation(){document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.dataset.tab;n&&this.switchTab(n)})}),document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t&&this.switchTab(t)})});let e=document.getElementById(`mobile-menu-toggle`),t=document.getElementById(`mobile-more-btn`),n=document.getElementById(`sidebar-overlay`),r=document.getElementById(`sidebar`),i=()=>{r.classList.toggle(`open`),n.classList.toggle(`active`)};e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,i),n&&n.addEventListener(`click`,()=>{r.classList.remove(`open`),n.classList.remove(`active`)});let a=document.getElementById(`brand-logo-btn`);a&&a.addEventListener(`click`,()=>this.switchTab(`dashboard`)),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.closeModal()});let o=document.getElementById(`modal-container`);o&&o.addEventListener(`click`,e=>{e.target===o&&this.closeModal()})}switchTab(e){this.currentTab=e,document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(t=>{t.classList.toggle(`active`,t.dataset.tab===e)}),document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-btn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.tab===e)});let t=document.getElementById(`sidebar`),n=document.getElementById(`sidebar-overlay`);t&&t.classList.remove(`open`),n&&n.classList.remove(`active`);let r=document.getElementById(`main-content`);r&&(r.scrollTop=0),this.renderCurrentView()}renderCurrentView(){let e=document.getElementById(`view-container`);if(e)switch(this.currentTab){case`dashboard`:e.innerHTML=l(this.data);break;case`leads`:e.innerHTML=u(this.data,this.leadFilterQuery,this.leadMobileCol);break;case`students`:e.innerHTML=f(this.data,this.studentActiveFilter,this.studentSearchQuery,this.selectedStudentClass,this.selectedStudentId);break;case`classes`:e.innerHTML=v(this.data);break;case`payments`:e.innerHTML=y(this.data);break;case`attendance`:e.innerHTML=b(this.data,this.attendanceSubTab);break;case`reports`:e.innerHTML=x(this.data);break;default:e.innerHTML=l(this.data)}}filterLeads(e){this.leadFilterQuery=e;let t=document.getElementById(`view-container`);this.currentTab===`leads`&&t&&(t.innerHTML=u(this.data,this.leadFilterQuery,this.leadMobileCol))}switchLeadMobileCol(e){this.leadMobileCol=e,this.renderCurrentView()}switchMobileLeadCol(e){this.switchLeadMobileCol(e)}handleDragStart(e,t){this.draggedLeadId=t,e.dataTransfer.setData(`text/plain`,t),e.dataTransfer.effectAllowed=`move`,e.target&&e.target.classList.add(`is-dragging`)}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.currentTarget;t&&!t.classList.contains(`drag-over`)&&t.classList.add(`drag-over`)}handleDrop(e,t){e.preventDefault(),document.querySelectorAll(`.kanban-col`).forEach(e=>e.classList.remove(`drag-over`)),document.querySelectorAll(`.lead-card`).forEach(e=>e.classList.remove(`is-dragging`));let n=e.dataTransfer.getData(`text/plain`)||this.draggedLeadId;if(!n)return;let i=this.data.leads.find(e=>e.id===n);i&&i.stage!==t&&(i.stage=t,r(this.data),this.renderCurrentView(),this.showToast(`"${i.name}" -> ${{yangi:`Yangi so'rovlar`,boglanildi:`Bog'lanildi`,suhbat:`Suhbat va test`,shartnoma:`Shartnoma imzolandi`}[t]||t} bosqichiga o'tkazildi!`,`success`)),this.draggedLeadId=null}openLeadDetails(e){let t=this.data.leads.find(t=>t.id===e);if(!t)return;let n=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t.name}</h3>
            <p>${t.grade} &bull; ${t.source} orqali kelgan</p>
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
              <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">${t.parent}</div>
              <div style="font-size: 13.5px; color: var(--primary); font-weight: 600; margin-top: 4px;">
                <a href="tel:${t.phone}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 6px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  ${t.phone} (Qo'ng'iroq qilish)
                </a>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Bosqichni o'zgartirish</label>
              <select class="form-select" id="lead-stage-select" onchange="window.app.updateLeadStage('${t.id}', this.value)">
                ${[{id:`yangi`,label:`1. Yangi so'rov`},{id:`boglanildi`,label:`2. Bog'lanildi`},{id:`suhbat`,label:`3. Suhbat / test`},{id:`shartnoma`,label:`4. Shartnoma (Qabul)`}].map(e=>`
                  <option value="${e.id}" ${t.stage===e.id?`selected`:``}>${e.label}</option>
                `).join(``)}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Qo'shimcha izoh / Tarix</label>
              <textarea class="form-textarea" id="lead-note-input" rows="3">${t.note||``}</textarea>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); padding-top: 8px; border-top: 1px solid var(--border-subtle);">
              <span>Menejer: <strong>${t.manager}</strong></span>
              <span>Sana: ${t.date}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 14px 20px;">
          <button class="btn btn-secondary" onclick="window.app.deleteLead('${t.id}')" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3); padding: 8px 12px; font-size: 13px;">
            O'chirish
          </button>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.closeModal()" style="padding: 8px 14px; font-size: 13px;">Bekor qilish</button>
            <button class="btn btn-primary" onclick="window.app.saveLeadNotes('${t.id}')" style="padding: 8px 18px; font-size: 13px;">Saqlash</button>
          </div>
        </div>
      </div>
    `;this.showModalContent(n)}updateLeadStage(e,t){let n=this.data.leads.find(t=>t.id===e);n&&(n.stage=t,r(this.data),this.renderCurrentView(),this.showToast(`Bosqich yangilandi: ${t}`,`info`))}saveLeadNotes(e){let t=document.getElementById(`lead-note-input`),n=this.data.leads.find(t=>t.id===e);n&&t&&(n.note=t.value.trim(),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Ma'lumotlar saqlandi!`,`success`))}deleteLead(e){confirm(`Ushbu arizani o'chirishga ishonchingiz komilmi?`)&&(this.data.leads=this.data.leads.filter(t=>t.id!==e),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Ariza o'chirildi`,`info`))}openNewLeadModal(){this.openModal(`addLead`)}toggleLeadFilterModal(){this.showToast(`Barcha manbalar faol`,`info`)}filterStudentsSearch(e){this.studentSearchQuery=e;let t=document.getElementById(`view-container`);this.currentTab===`students`&&t&&(t.innerHTML=f(this.data,this.studentActiveFilter,this.studentSearchQuery,this.selectedStudentClass,this.selectedStudentId))}filterStudentsPill(e){this.studentActiveFilter=e,this.selectedStudentClass=e===`all`?null:e===`1-sinf`?`1-A`:e===`2-sinf`?`2-A`:e===`3-sinf`?`3-A`:e===`4-sinf`?`4-B`:e===`5-sinf`?`5-A`:null,this.renderCurrentView()}setStudentFilter(e){this.filterStudentsPill(e)}selectStudentClass(e){if(this.selectedStudentClass=e,e){let t=e.charAt(0);this.studentActiveFilter=`${t}-sinf`}else this.studentActiveFilter=`all`;this.renderCurrentView()}selectStudent(e){this.selectedStudentId=e,this.renderCurrentView()}openNewStudentModal(){this.openModal(`addStudent`)}openQuickPayModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=t.debtAmount>0?t.debtAmount:t.monthlyFee||3e6,r=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>To'lov qabul qilish</h3>
            <p>${t.name} (${t.sinf} sinf)</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="quick-pay-form" onsubmit="window.app.saveQuickPayment(event, '${t.id}')">
          <div class="modal-body">
            <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 13px;">
                <span style="color: var(--text-muted);">Oylik to'lov:</span>
                <span style="font-weight: 600; color: var(--text-main);">${t.monthlyFee?.toLocaleString(`ru-RU`)||`3 000 000`} so'm</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 13px;">
                <span style="color: var(--text-muted);">Hozirgi qarz:</span>
                <span style="font-weight: 700; color: ${t.debtAmount>0?`#dc2626`:`#10b981`};">${t.debtAmount?.toLocaleString(`ru-RU`)||`0`} so'm</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">To'lov summasi (so'm) <span class="req">*</span></label>
              <input type="number" class="form-control" id="quick-pay-amount" value="${n}" required min="10000" step="10000" />
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
    `;this.showModalContent(r)}saveQuickPayment(e,t){e.preventDefault();let n=Number(document.getElementById(`quick-pay-amount`).value),i=document.getElementById(`quick-pay-method`).value,a=this.data.students.find(e=>e.id===t);a&&n&&(a.paidAmount=(a.paidAmount||0)+n,a.debtAmount=Math.max(0,(a.debtAmount||0)-n),a.debtAmount<=0?(a.paymentStatus=`To'langan`,a.paymentStatusCode=`paid`):(a.paymentStatus=`Qisman`,a.paymentStatusCode=`partial`),this.data.payments||(this.data.payments=[]),this.data.payments.unshift({id:`tx-${Date.now()}`,studentName:a.name,sinf:a.sinf,amount:n,method:i,date:new Date().toLocaleDateString(`uz-UZ`),status:`Tasdiqlangan`}),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`To'lov qabul qilindi: ${n.toLocaleString(`ru-RU`)} so'm (${a.name})`,`success`))}openStudentDetailsModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>O'quvchi ma'lumotlari</h3>
            <p>${t.name} — ${t.sinf} sinf</p>
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
              ${t.initials||`OQ`}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: var(--text-main);">${t.name}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${t.sinf} sinf • Tug'ilgan sana: ${t.birthDate||`—`}</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13.5px;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${t.parentRole||`Ota-onasi`}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${t.parentName}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">Telefon:</span>
              <a href="tel:${t.phone}" style="font-weight: 600; color: var(--primary); text-decoration: none;">${t.phone}</a>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">Sinf rahbari:</span>
              <span style="font-weight: 600; color: var(--text-main);">${t.homeroomTeacher||`—`}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">To'lov holati:</span>
              <span style="font-weight: 700; color: ${t.paymentStatusCode===`paid`?`#10b981`:t.paymentStatusCode===`partial`?`#d97706`:`#dc2626`};">
                ${t.paymentStatus} (${(t.debtAmount||0)>0?`Qarz: `+t.debtAmount.toLocaleString(`ru-RU`)+` so'm`:`To'liq`})
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 4px;">
              <span style="color: var(--text-muted);">Davomat ko'rsatkichi:</span>
              <span style="font-weight: 600; color: var(--text-main);">${t.attendance||`95%`}</span>
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
                <span style="color: ${t.docs?.medicalReport===!1?`#dc2626`:`#10b981`}; font-weight: 600;">
                  ${t.docs?.medicalReport===!1?`✕ Yetishmaydi`:`✓ Yuklangan`}
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
            <button class="btn btn-secondary" onclick="window.app.openEditStudentModal('${t.id}')">Tahrirlash</button>
            <button class="btn btn-primary" onclick="window.app.openQuickPayModal('${t.id}')">To'lov qabul qilish</button>
          </div>
        </div>
      </div>
    `;this.showModalContent(n)}openEditStudentModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>O'quvchini tahrirlash</h3>
            <p>${t.name}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="edit-student-form" onsubmit="window.app.saveStudentEdit(event, '${t.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">O'quvchi F.I.SH <span class="req">*</span></label>
                <input type="text" class="form-control" id="edit-std-name" value="${t.name}" required />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Sinf <span class="req">*</span></label>
                  <select class="form-select" id="edit-std-sinf" required>
                    ${this.data.classes.map(e=>`
                      <option value="${e.name}" ${t.sinf===e.name?`selected`:``}>${e.name}</option>
                    `).join(``)}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Tug'ilgan sana</label>
                  <input type="text" class="form-control" id="edit-std-bdate" value="${t.birthDate||``}" placeholder="12.03.2017" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Ota/Ona ismi <span class="req">*</span></label>
                  <input type="text" class="form-control" id="edit-std-parent" value="${t.parentName}" required />
                </div>

                <div class="form-group">
                  <label class="form-label">Telefon raqam <span class="req">*</span></label>
                  <input type="tel" class="form-control" id="edit-std-phone" value="${t.phone}" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Oylik to'lov summasi (so'm)</label>
                <input type="number" class="form-control" id="edit-std-fee" value="${t.monthlyFee||3e6}" step="100000" />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
            <button type="submit" class="btn btn-primary">Saqlash</button>
          </div>
        </form>
      </div>
    `;this.showModalContent(n)}saveStudentEdit(e,t){e.preventDefault();let n=this.data.students.find(e=>e.id===t);if(!n)return;n.name=document.getElementById(`edit-std-name`).value.trim(),n.sinf=document.getElementById(`edit-std-sinf`).value,n.gradeLevel=n.sinf.split(`-`)[0]+`-sinf`,n.birthDate=document.getElementById(`edit-std-bdate`).value.trim(),n.parentName=document.getElementById(`edit-std-parent`).value.trim(),n.phone=document.getElementById(`edit-std-phone`).value.trim(),n.monthlyFee=Number(document.getElementById(`edit-std-fee`).value)||3e6;let i=n.name.split(` `);n.initials=i.length>1?(i[0][0]+i[1][0]).toUpperCase():i[0].slice(0,2).toUpperCase(),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`O'quvchi ma'lumotlari yangilandi`,`success`)}openStudentPaymentModal(e){this.openModal(`addPayment`,{studentId:e})}exportStudentsCSV(){let e=`data:text/csv;charset=utf-8,﻿`+[[`F.I.SH`,`Sinf`,`Ota-onasi`,`Telefon`,`Oylik to'lov`,`To'langan`,`Qarzdorlik`,`Davomat`],...this.data.students.map(e=>[`"${e.name}"`,`"${e.sinf}"`,`"${e.parentName}"`,`"${e.phone}"`,e.monthlyFee||3e6,e.paidAmount||0,e.debtAmount||0,`"${e.attendance||`95%`}"`])].map(e=>e.join(`,`)).join(`
`),t=encodeURI(e),n=document.createElement(`a`);n.setAttribute(`href`,t),n.setAttribute(`download`,`oquvchilar_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(n),n.click(),document.body.removeChild(n),this.showToast(`O'quvchilar ro'yxati (.csv) yuklab olindi`,`success`)}exportPaymentsToCSV(){let e=`data:text/csv;charset=utf-8,﻿`+[[`O'quvchi`,`Sinf`,`Oylik to'lov`,`To'langan`,`Qoldiq qarz`,`Holat`],...this.data.students.map(e=>[`"${e.name}"`,`"${e.sinf}"`,e.monthlyFee||3e6,e.paidAmount||0,e.debtAmount||0,`"${e.paymentStatus}"`])].map(e=>e.join(`,`)).join(`
`),t=encodeURI(e),n=document.createElement(`a`);n.setAttribute(`href`,t),n.setAttribute(`download`,`tolovlar_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(n),n.click(),document.body.removeChild(n),this.showToast(`To'lovlar hisoboti (.csv) yuklab olindi`,`success`)}switchAttendanceSubTab(e){this.attendanceSubTab=e,this.renderCurrentView()}openAttendanceModal(e){let t=this.data.classes.find(t=>t.id===e);if(!t)return;this.activeAttendanceClassId=e;let n=this.data.students.filter(e=>e.sinf===t.name);this.tempAttendanceMap={},n.forEach(e=>{this.tempAttendanceMap[e.id]=`present`});let r=`
      <div class="modal-dialog modal-lg">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>Davomat belgilash — ${t.name} sinfi</h3>
            <p>${this.data.currentDateText} &bull; Sinf rahbari: ${t.teacherName}</p>
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
            <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">O'quvchilar ro'yxati (${n.length} nafar)</span>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="window.app.markAllAttendance('present')">
                Hammasi keldi
              </button>
            </div>
          </div>

          <div id="attendance-students-list">
            ${n.length===0?`
              <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13.5px;">
                Ushbu sinfga biriktirilgan o'quvchilar topilmadi. O'quvchilar bo'limidan biriktirishingiz mumkin.
              </div>
            `:n.map(e=>`
              <div class="attendance-student-row" id="att-row-${e.id}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="cell-user-avatar" style="width: 32px; height: 32px; font-size: 11px;">${e.initials}</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text-main);">${e.name}</div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${e.parentName} &bull; ${e.phone}</div>
                  </div>
                </div>

                <div class="att-actions-btn-group">
                  <button 
                    type="button"
                    class="att-btn present active" 
                    id="btn-pres-${e.id}"
                    onclick="window.app.setStudentAttendance('${e.id}', 'present')"
                  >
                    Keldi
                  </button>
                  <button 
                    type="button"
                    class="att-btn absent" 
                    id="btn-abs-${e.id}"
                    onclick="window.app.setStudentAttendance('${e.id}', 'absent')"
                  >
                    Kelmadi
                  </button>
                  <button 
                    type="button"
                    class="att-btn excused" 
                    id="btn-exc-${e.id}"
                    onclick="window.app.setStudentAttendance('${e.id}', 'excused')"
                  >
                    Sababli
                  </button>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">Bekor qilish</button>
          <button class="btn btn-primary" onclick="window.app.saveClassAttendance('${t.id}')">
            Davomatni saqlash
          </button>
        </div>
      </div>
    `;this.showModalContent(r)}setStudentAttendance(e,t){this.tempAttendanceMap[e]=t;let n=document.getElementById(`att-row-${e}`);n&&(n.querySelectorAll(`.att-btn`).forEach(e=>e.classList.remove(`active`)),t===`present`&&document.getElementById(`btn-pres-${e}`)?.classList.add(`active`),t===`absent`&&document.getElementById(`btn-abs-${e}`)?.classList.add(`active`),t===`excused`&&document.getElementById(`btn-exc-${e}`)?.classList.add(`active`))}markAllAttendance(e){Object.keys(this.tempAttendanceMap).forEach(t=>{this.setStudentAttendance(t,e)})}saveClassAttendance(e){let t=this.data.classes.find(t=>t.id===e);if(!t)return;let n=0,i=Object.keys(this.tempAttendanceMap).length;Object.values(this.tempAttendanceMap).forEach(e=>{e===`present`&&n++}),t.attendanceStatus=`Belgilangan`,t.todayPresent=n,t.todayTotal=i||t.currentStudents,r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`${t.name} sinf davomati muvaffaqiyatli saqlandi! (${n}/${i||t.currentStudents} keldi)`,`success`)}openModal(e,t={}){let n=``;switch(e){case`addLead`:n=`
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
        `;break;case`addStudent`:n=`
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
                        ${this.data.classes.map(e=>`<option value="${e.name}">${e.name} (${e.teacherName})</option>`).join(``)}
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
        `;break;case`addPayment`:let e=t.studentId||this.data.students[0]?.id;n=`
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
                      ${this.data.students.map(t=>`
                        <option value="${t.id}" ${t.id===e?`selected`:``}>
                          ${t.name} (${t.sinf}) - Qoldiq qarz: ${(t.debtAmount||0).toLocaleString(`uz-UZ`)} so'm
                        </option>
                      `).join(``)}
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
        `;break;case`addClass`:n=`
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
                        ${this.data.teachers.map(e=>`<option value="${e.name}">${e.name} (${e.subject})</option>`).join(``)}
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
        `;break;case`addTeacher`:n=`
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
        `;break;default:return}this.showModalContent(n)}showModalContent(e){let t=document.getElementById(`modal-container`);t&&(t.innerHTML=e,t.classList.add(`open`),t.classList.add(`active`),t.onclick=e=>{e.target===t&&this.closeModal()})}closeModal(){let e=document.getElementById(`modal-container`);e&&(e.classList.remove(`open`),e.classList.remove(`active`),e.innerHTML=``,e.onclick=null)}handleCreateLead(e){e.preventDefault();let t=document.getElementById(`lead-name`).value.trim(),n=document.getElementById(`lead-grade`).value,i=document.getElementById(`lead-source`).value,a=document.getElementById(`lead-parent`).value.trim(),o=document.getElementById(`lead-phone`).value.trim(),s=document.getElementById(`lead-note`).value.trim(),c=`blue`;i===`Instagram`?c=`pink`:i===`Tavsiya`?c=`green`:i===`Sayt`&&(c=`orange`);let l={id:`lead-`+Date.now(),name:t,grade:n,parent:a,phone:o,source:i,sourceColor:c,date:`Bugun`,manager:`DR`,stage:`yangi`,note:s};this.data.leads.unshift(l),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi so'rov ("${t}") qabul qilindi!`,`success`)}handleCreateStudent(e){e.preventDefault();let t=document.getElementById(`new-std-name`).value.trim(),n=document.getElementById(`new-std-class`).value,i=document.getElementById(`new-std-birth`).value.trim()||`01.01.2017`,a=document.getElementById(`new-std-parent`).value.trim(),o=document.getElementById(`new-std-phone`).value.trim(),s=Number(document.getElementById(`new-std-fee`).value)||3e6,c=document.getElementById(`new-std-status`).value,l=t.split(` `),u=l.length>1?(l[0][0]+l[1][0]).toUpperCase():l[0].slice(0,2).toUpperCase(),d=`Qarzdor`,f=0,p=s;c===`paid`?(d=`To'langan`,f=s,p=0):c===`partial`&&(d=`Qisman`,f=s/2,p=s/2);let m=this.data.classes.find(e=>e.name===n);m&&(m.currentStudents=(m.currentStudents||0)+1);let h={id:`std-`+Date.now(),initials:u,name:t,parentName:a,parentRole:`Ota/Ona`,motherName:a,sinf:n,gradeLevel:n.split(`-`)[0]+`-sinf`,phone:o,paymentStatus:d,paymentStatusCode:c,attendance:`100%`,birthDate:i,homeroomTeacher:m?.teacherName||`Bosh o'qituvchi`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:s,paidAmount:f,debtAmount:p};this.data.students.unshift(h),this.selectedStudentId=h.id,r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi o'quvchi "${t}" muvaffaqiyatli qo'shildi!`,`success`)}handleCreatePayment(e){e.preventDefault();let t=document.getElementById(`pay-student-select`).value,n=Number(document.getElementById(`pay-amount`).value)||0,i=document.getElementById(`pay-method`).value;document.getElementById(`pay-comment`).value.trim();let a=this.data.students.find(e=>e.id===t);a&&(a.paidAmount=(a.paidAmount||0)+n,a.debtAmount=Math.max(0,(a.debtAmount||a.monthlyFee)-n),a.debtAmount===0?(a.paymentStatus=`To'langan`,a.paymentStatusCode=`paid`):(a.paymentStatus=`Qisman`,a.paymentStatusCode=`partial`),this.data.paymentTransactions||(this.data.paymentTransactions=[]),this.data.paymentTransactions.unshift({id:`tx-`+Date.now(),studentName:a.name,sinf:a.sinf,amount:n,method:i,date:new Date().toLocaleDateString(`uz-UZ`),status:`Tasdiqlangan`}),this.data.paymentsSummary&&(this.data.paymentsSummary.monthlyRevenue+=n,this.data.paymentsSummary.expectedRevenue=Math.max(0,this.data.paymentsSummary.expectedRevenue-n)),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`${a.name} uchun ${n.toLocaleString(`uz-UZ`)} so'm to'lov qabul qilindi! (${i})`,`success`))}handleCreateClass(e){e.preventDefault();let t=document.getElementById(`cls-name`).value.trim(),n=document.getElementById(`cls-room`).value.trim(),i=document.getElementById(`cls-teacher`).value,a=Number(document.getElementById(`cls-capacity`).value)||22,o=i.split(` `),s=o.length>1?(o[0][0]+o[1][0]).toUpperCase():i.slice(0,2).toUpperCase(),c={id:`cls-`+Date.now(),name:t,room:n,teacherName:i,teacherInitials:s,currentStudents:0,capacity:a,attendanceStatus:`Belgilanmagan`,todayPresent:0,todayTotal:0};this.data.classes.push(c),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi "${t}" sinfi yaratildi!`,`success`)}handleCreateTeacher(e){e.preventDefault();let t=document.getElementById(`tch-name`).value.trim(),n=document.getElementById(`tch-subject`).value.trim(),i=document.getElementById(`tch-phone`).value.trim(),a=Number(document.getElementById(`tch-hours`).value)||18,o=document.getElementById(`tch-classes`).value.trim()||`1-sinf`,s=t.split(` `),c=s.length>1?(s[0][0]+s[1][0]).toUpperCase():t.slice(0,2).toUpperCase(),l={id:`tch-`+Date.now(),initials:c,name:t,subject:n,classes:o,weeklyHours:a,phone:i};this.data.teachers.push(l),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`O'qituvchi "${t}" muvaffaqiyatli kiritildi!`,`success`)}showToast(e,t=`success`){let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.className=`toast-item toast-${t}`;let i=`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;t===`info`&&(i=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `),r.innerHTML=`
      ${i}
      <div style="font-size: 13.5px; font-weight: 500; color: var(--text-main); line-height: 1.35;">${e}</div>
    `,n.appendChild(r),setTimeout(()=>{r.style.animation=`toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards`,setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},250)},3200)}};window.addEventListener(`DOMContentLoaded`,()=>{window.app=new S});