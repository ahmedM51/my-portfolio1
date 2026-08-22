const thumb = (url) => `https://image.thum.io/get/width/1200/crop/700/${url}`

export const projectsData = [
  {
    id: 1,
    title: { ar: "Smart Student Platform", en: "Smart Student Platform" },
    category: "education",
    url: "https://student-platform-frontend.vercel.app/",
    image: thumb("https://student-platform-frontend.vercel.app/"),
    description: {
      ar: "منصة تعليمية تعتمد على الذكاء الاصطناعي لمساعدة الطلاب في تنظيم الدراسة وفهم المحاضرات وإدارة المحتوى التعليمي.",
      en: "An AI-powered educational platform that helps students organize study, understand lectures, and manage educational content.",
    },
    results: {
      ar: ["منصة تعليمية متكاملة", "أدوات ذكاء اصطناعي", "مساعد ذكي للطلاب", "مخطط دراسي", "مؤقت للمذاكرة", "إدارة المواد والملاحظات"],
      en: ["Integrated education platform", "AI tools", "Smart student assistant", "Study planner", "Study timer", "Subjects & notes management"],
    },
  },
  {
    id: 2,
    title: { ar: "The New Muslims", en: "The New Muslims" },
    category: "education",
    url: "https://the-new-muslims.com/",
    image: thumb("https://the-new-muslims.com/"),
    description: {
      ar: "منصة تعليمية مخصصة للمسلمين الجدد، تجمع بين المحتوى الإسلامي للكبار والأطفال في تجربة واحدة.",
      en: "An educational platform dedicated to new Muslims, combining Islamic content for adults and children in one experience.",
    },
    results: {
      ar: ["تنظيم المحتوى الديني", "قسم للكبار", "قسم للأطفال", "القرآن الكريم", "الأحاديث", "الفقه والعقيدة", "السيرة النبوية والتفسير"],
      en: ["Organized religious content", "Adults section", "Kids section", "The Holy Quran", "Hadiths", "Fiqh & Aqeedah", "Prophet's biography & Tafsir"],
    },
  },
  {
    id: 3,
    title: { ar: "Al Hamd Company", en: "Al Hamd Company" },
    category: "services",
    url: "https://al-hamdcompany.com/",
    image: thumb("https://al-hamdcompany.com/"),
    description: {
      ar: "موقع شركة الحمد لنقل العفش في عرعر، مصمم لعرض خدمات الشركة ومساعدة العملاء على التواصل وطلب الخدمة.",
      en: "A website for Al Hamd furniture moving company in Arar, designed to showcase services and help customers request service.",
    },
    results: {
      ar: ["موقع خدمات احترافي", "عرض الخدمات", "تعريف بالشركة", "تجربة متوافقة مع الجوال", "صفحات مخصصة للخدمات"],
      en: ["Professional services website", "Service showcase", "Company introduction", "Mobile-friendly experience", "Dedicated service pages"],
    },
  },
  {
    id: 4,
    title: { ar: "Vera Tech", en: "Vera Tech" },
    category: "corporate",
    url: "https://vera-tech-web.com/",
    image: thumb("https://vera-tech-web.com/"),
    description: {
      ar: "الموقع الرسمي لشركة Vera Tech للحلول البرمجية، ويعرض خدمات تصميم وتطوير المواقع والحلول الرقمية والتسويق الرقمي.",
      en: "The official website of Vera Tech software solutions, showcasing web design, development, digital solutions, and digital marketing.",
    },
    results: {
      ar: ["هوية رقمية للشركة", "عرض الخدمات", "تجربة مستخدم منظمة", "تصميم متجاوب", "عرض الأعمال والخدمات"],
      en: ["Digital company identity", "Service showcase", "Organized user experience", "Responsive design", "Works & services display"],
    },
  },
  {
    id: 5,
    title: { ar: "PSKH School", en: "PSKH School" },
    category: "education",
    url: "https://salmon-loris-513878.hostingersite.com/",
    image: thumb("https://salmon-loris-513878.hostingersite.com/"),
    description: {
      ar: "موقع تعريفي لمدرسة PSKH لعرض المدرسة والخدمات التعليمية والتواصل مع أولياء الأمور.",
      en: "An introductory website for PSKH School to present the school, educational services, and communicate with parents.",
    },
    results: {
      ar: ["موقع تعريفي للمدرسة", "عرض المعلومات التعليمية", "قسم للتواصل", "نموذج إرسال الرسائل", "تصميم مناسب للمؤسسات التعليمية"],
      en: ["School introduction website", "Educational information display", "Contact section", "Message form", "Design suitable for educational institutions"],
    },
  },
  {
    id: 6,
    title: { ar: "ديكورات العطاء", en: "Al Ataa Decor" },
    category: "services",
    url: "https://bisque-turkey-759824.hostingersite.com/",
    image: thumb("https://bisque-turkey-759824.hostingersite.com/"),
    description: {
      ar: "موقع متخصص في خدمات الديكور المنزلي في تبوك، مع التركيز على بديل الرخام وبديل الخشب والدهانات.",
      en: "A website specializing in home decoration services in Tabuk, focusing on marble alternatives, wood alternatives, and paints.",
    },
    results: {
      ar: ["عرض خدمات الديكور", "عرض الأعمال", "تقديم الخدمات بشكل واضح", "تصميم مناسب لشركات التشطيبات"],
      en: ["Decoration services display", "Portfolio showcase", "Clear service presentation", "Design suitable for finishing companies"],
    },
  },
  {
    id: 7,
    title: { ar: "اختبار تحديد مستوى اللغة الإنجليزية", en: "English Placement Test" },
    category: "education",
    url: "https://darkorchid-porpoise-774312.hostingersite.com/",
    image: thumb("https://darkorchid-porpoise-774312.hostingersite.com/"),
    description: {
      ar: "منصة لاختبار مستوى اللغة الإنجليزية وفق مستويات CEFR.",
      en: "A platform for testing English proficiency according to CEFR levels.",
    },
    results: {
      ar: ["اختبار تحديد المستوى", "تجربة تفاعلية", "تقييم مستوى اللغة", "واجهة مخصصة للتعليم"],
      en: ["Level assessment test", "Interactive experience", "Language level evaluation", "Dedicated education interface"],
    },
  },
  {
    id: 8,
    title: { ar: "أبو محمد لشغل الكور", en: "Abu Mohammed Core Works" },
    category: "services",
    url: "https://sienna-wallaby-419994.hostingersite.com/",
    image: thumb("https://sienna-wallaby-419994.hostingersite.com/"),
    description: {
      ar: "موقع خدمات متخصص في قص وتخريم الخرسانة المسلحة وفتح الأبواب والنوافذ في جدة ومكة والطائف.",
      en: "A services website specialized in cutting and coring reinforced concrete and opening doors and windows in Jeddah, Makkah, and Taif.",
    },
    results: {
      ar: ["عرض الخدمات", "عرض الأعمال", "تعريف بالخدمات", "تصميم لخدمات المقاولات", "وسائل تواصل مباشرة"],
      en: ["Service showcase", "Portfolio display", "Service introduction", "Design for contracting services", "Direct contact methods"],
    },
  },
  {
    id: 9,
    title: { ar: "حداد مظلات وسواتر عسير", en: "Asir Metal Shades" },
    category: "services",
    url: "https://mediumspringgreen-squid-992443.hostingersite.com/",
    image: thumb("https://mediumspringgreen-squid-992443.hostingersite.com/"),
    description: {
      ar: "موقع متخصص في تركيب المظلات والسواتر والبرجولات والهناجر في أبها وخميس مشيط.",
      en: "A website specialized in installing shades, fences, pergolas, and hangars in Abha and Khamis Mushait.",
    },
    results: {
      ar: ["عرض الخدمات", "عرض الأعمال", "تعريف بالشركة", "استهداف العملاء المحليين", "التواصل وطلب الخدمة"],
      en: ["Service showcase", "Portfolio display", "Company introduction", "Local customer targeting", "Contact & service request"],
    },
  },
  {
    id: 10,
    title: { ar: "مشتل الإسلام", en: "Alistanseq" },
    category: "services",
    url: "https://alistanseq.com/",
    image: thumb("https://alistanseq.com/"),
    description: {
      ar: "موقع لمشتل متخصص في بيع الزهور والشتلات وتنسيق الحدائق في الرياض.",
      en: "A website for a nursery specialized in selling flowers, seedlings, and garden landscaping in Riyadh.",
    },
    results: {
      ar: ["عرض النباتات والشتلات", "خدمات تنسيق الحدائق", "عرض الخدمات", "تجربة مناسبة لمجال الزراعة"],
      en: ["Plants & seedlings display", "Garden landscaping services", "Service showcase", "Agriculture-focused experience"],
    },
  },
  {
    id: 11,
    title: { ar: "Al Bahar Service", en: "Al Bahar Service" },
    category: "services",
    url: "https://albaharservice.com/",
    image: thumb("https://albaharservice.com/"),
    description: {
      ar: "موقع خدمات متخصص في خدمات السيارات والمركبات.",
      en: "A services website specialized in automotive and vehicle services.",
    },
    results: {
      ar: ["موقع خدمات", "عرض الخدمات", "تصميم متجاوب", "تجربة مناسبة للشركات الخدمية"],
      en: ["Services website", "Service showcase", "Responsive design", "Experience suitable for service companies"],
    },
  },
  {
    id: 12,
    title: { ar: "Delta Frame", en: "Delta Frame" },
    category: "ecommerce",
    url: "https://delta-frame1.com/",
    image: thumb("https://delta-frame1.com/"),
    description: {
      ar: "متجر إلكتروني متخصص في النظارات الشمسية بتصميم يجمع بين الموضة والتقنية وتجربة التسوق الحديثة.",
      en: "An e-commerce store specialized in sunglasses with a design combining fashion, technology, and modern shopping experience.",
    },
    results: {
      ar: ["متجر إلكتروني", "عرض المنتجات", "تجربة تسوق حديثة", "تصميم Premium", "تجربة متجاوبة", "هوية بصرية للعلامة"],
      en: ["E-commerce store", "Product display", "Modern shopping experience", "Premium design", "Responsive experience", "Brand visual identity"],
    },
  },
  {
    id: 13,
    title: { ar: "قص وتخريم الخرسانة", en: "Concrete Cutting" },
    category: "services",
    url: "https://mediumseagreen-eel-650947.hostingersite.com/",
    image: thumb("https://mediumseagreen-eel-650947.hostingersite.com/"),
    description: {
      ar: "موقع متخصص في قص الجدران والخرسانة وفتح الأبواب والنوافذ والتخريم وإزالة وتعديل الجدران.",
      en: "A website specialized in wall and concrete cutting, opening doors and windows, drilling, and removing or modifying walls.",
    },
    results: {
      ar: ["عرض الخدمات", "معرض أعمال", "طلب عرض سعر", "الأسئلة الشائعة", "نموذج تواصل", "عرض مناطق الخدمة"],
      en: ["Service showcase", "Portfolio", "Quote request", "FAQ", "Contact form", "Service areas display"],
    },
  },
  {
    id: 14,
    title: { ar: "سكراب المدينة المنورة", en: "Medina Scrap" },
    category: "services",
    url: "https://scrapandused.com/",
    image: thumb("https://scrapandused.com/"),
    description: {
      ar: "موقع متخصص في شراء السكراب والمعادن والأجهزة والمعدات المستعملة في السعودية.",
      en: "A website specialized in buying scrap, metals, used devices, and equipment in Saudi Arabia.",
    },
    results: {
      ar: ["شراء الحديد والنحاس والألمنيوم", "شراء المكيفات والأجهزة", "شراء الكابلات والمحركات", "شراء السيارات التشليح", "استلام من موقع العميل", "طلب الخدمة عبر واتساب"],
      en: ["Buying iron, copper, and aluminum", "Buying ACs and devices", "Buying cables and motors", "Buying scrap cars", "Pickup from customer location", "WhatsApp service request"],
    },
  },
  {
    id: 15,
    title: { ar: "مشتل أبو علي", en: "Abu Ali Nursery" },
    category: "services",
    url: "https://dodgerblue-reindeer-587166.hostingersite.com/",
    image: thumb("https://dodgerblue-reindeer-587166.hostingersite.com/"),
    description: {
      ar: "موقع متخصص في توريد النخيل المثمر ونخيل الزينة داخل المملكة العربية السعودية.",
      en: "A website specialized in supplying fruit and ornamental palm trees inside Saudi Arabia.",
    },
    results: {
      ar: ["عرض أنواع النخيل", "توريد النخيل", "النقل والتركيب", "خدمات الزراعة", "التواصل المباشر"],
      en: ["Palm types display", "Palm supply", "Transport & installation", "Agriculture services", "Direct contact"],
    },
  },
  {
    id: 16,
    title: { ar: "نظام نقطة البيع POS", en: "POS Terminal" },
    category: "systems",
    url: "https://pos-terminal-sooty.vercel.app/",
    image: thumb("https://pos-terminal-sooty.vercel.app/"),
    description: {
      ar: "نظام لإدارة عمليات البيع ونقطة البيع وإدارة المنتجات والمبيعات.",
      en: "A system for managing sales, point of sale, products, and sales operations.",
    },
    results: {
      ar: ["نظام POS", "إدارة المنتجات", "إدارة المبيعات", "واجهة تشغيل للنقاط", "تصميم مناسب للأنظمة الإدارية"],
      en: ["POS system", "Products management", "Sales management", "Terminal interface", "Design suitable for management systems"],
    },
  },
  {
    id: 17,
    title: { ar: "البارودي للموبيليا", en: "Al Baroudi Furniture" },
    category: "corporate",
    url: "https://al-baroudifurniture.vercel.app/",
    image: thumb("https://al-baroudifurniture.vercel.app/"),
    description: {
      ar: "موقع لشركة متخصصة في تصنيع الركنات والستائر والمطابخ والموبيليا الحديثة حسب الطلب.",
      en: "A website for a company specialized in manufacturing sofas, curtains, kitchens, and modern furniture on demand.",
    },
    results: {
      ar: ["عرض المنتجات", "تصنيع حسب الطلب", "تجديد وتنجيد الأثاث", "عرض الخدمات", "التواصل عبر واتساب", "موقع جغرافي للشركة"],
      en: ["Product display", "Custom manufacturing", "Furniture renewal & upholstery", "Service showcase", "WhatsApp contact", "Company location"],
    },
  },
  {
    id: 18,
    title: { ar: "نظام كاشير الصيدلية", en: "Pharmacy Cashier" },
    category: "systems",
    url: "https://pharmacycashier.vercel.app/",
    image: thumb("https://pharmacycashier.vercel.app/"),
    description: {
      ar: "نظام لإدارة الصيدليات يجمع بين نقطة البيع وإدارة المخزون وتقارير المبيعات.",
      en: "A pharmacy management system combining point of sale, inventory management, and sales reports.",
    },
    results: {
      ar: ["نقطة بيع", "إدارة المخزون", "البحث بالاسم والباركود", "إنشاء الفواتير", "الخصومات والضرائب", "طباعة الفواتير", "تقارير المبيعات"],
      en: ["Point of sale", "Inventory management", "Search by name & barcode", "Invoice creation", "Discounts & taxes", "Invoice printing", "Sales reports"],
    },
  },
  {
    id: 19,
    title: { ar: "القرآن الكريم", en: "Quran Karim" },
    category: "education",
    url: "https://quranelkarim.vercel.app/",
    image: thumb("https://quranelkarim.vercel.app/"),
    description: {
      ar: "منصة إلكترونية لعرض سور القرآن الكريم في واجهة مخصصة للقراءة والاستماع والتصفح.",
      en: "An electronic platform for displaying Quran surahs in a dedicated interface for reading, listening, and browsing.",
    },
    results: {
      ar: ["واجهة قرآن إلكترونية", "عرض سور القرآن", "تصميم بسيط", "تجربة قراءة واضحة"],
      en: ["Electronic Quran interface", "Surahs display", "Simple design", "Clear reading experience"],
    },
  },
  {
    id: 20,
    title: { ar: "مطعم حمزة السوري", en: "Hamza Syrian Restaurant" },
    category: "restaurants",
    url: "https://hazasyriainrestaurant.vercel.app/",
    image: thumb("https://hazasyriainrestaurant.vercel.app/"),
    description: {
      ar: "موقع مطعم سوري في أسيوط لعرض قائمة الطعام والتعريف بالمطعم وإتاحة الحجز والتواصل.",
      en: "A Syrian restaurant website in Assiut for displaying the menu, introducing the restaurant, enabling reservations, and contact.",
    },
    results: {
      ar: ["عرض المنيو", "البحث عن الأطباق", "الحجز", "تعريف بقصة المطعم", "تقييمات العملاء", "التواصل عبر واتساب"],
      en: ["Menu display", "Dish search", "Reservations", "Restaurant story", "Customer reviews", "WhatsApp contact"],
    },
  },
  {
    id: 21,
    title: { ar: "NilePath", en: "NilePath" },
    category: "tourism",
    url: "https://egypt-tourism-booking-platform.vercel.app/",
    image: thumb("https://egypt-tourism-booking-platform.vercel.app/"),
    description: {
      ar: "منصة سياحية متخصصة في السياحة الداخلية والرحلات المخصصة داخل مصر.",
      en: "A tourism platform specialized in domestic tourism and customized trips inside Egypt.",
    },
    results: {
      ar: ["منصة سياحية", "تنظيم الرحلات", "تجربة حجز رقمية", "تصميم مناسب للسياحة", "عرض الوجهات والرحلات"],
      en: ["Tourism platform", "Trip organization", "Digital booking experience", "Tourism-appropriate design", "Destinations & trips display"],
    },
  },
  {
    id: 22,
    title: { ar: "Nefertari", en: "Nefertari" },
    category: "corporate",
    url: "https://nefertari-psi.vercel.app/",
    image: thumb("https://nefertari-psi.vercel.app/"),
    description: {
      ar: "مشروع رقمي يحمل هوية Nefertari، مصمم ضمن مشاريع الويب والواجهات الرقمية.",
      en: "A digital project carrying the Nefertari identity, designed within web and digital interface projects.",
    },
    results: {
      ar: ["تصميم واجهة", "تجربة مستخدم", "هوية رقمية", "تصميم متجاوب"],
      en: ["Interface design", "User experience", "Digital identity", "Responsive design"],
    },
  },
  {
    id: 23,
    title: { ar: "بنك الدم المصري", en: "Egyptian Blood Bank" },
    category: "services",
    url: "https://rdwan.vercel.app/",
    image: thumb("https://rdwan.vercel.app/"),
    description: {
      ar: "منصة رقمية لربط المتبرعين بالمرضى وتسهيل البحث عن متبرع مناسب حسب فصيلة الدم والموقع.",
      en: "A digital platform connecting blood donors with patients and facilitating the search for a suitable donor by blood type and location.",
    },
    results: {
      ar: ["تسجيل المتبرعين", "البحث عن متبرع", "تسجيل المرضى", "تسجيل المستشفيات", "معلومات التبرع", "مساعد ذكي", "نظام تواصل"],
      en: ["Donor registration", "Donor search", "Patient registration", "Hospital registration", "Donation information", "Smart assistant", "Communication system"],
    },
  },
  {
    id: 24,
    title: { ar: "Portfolio", en: "Portfolio" },
    category: "corporate",
    url: "https://my-portfolio-chi-five-22.vercel.app/",
    image: thumb("https://my-portfolio-chi-five-22.vercel.app/"),
    description: {
      ar: "موقع Portfolio شخصي لعرض الخبرات والمهارات والشهادات والمشاريع والخدمات البرمجية.",
      en: "A personal portfolio website to display experience, skills, certifications, projects, and programming services.",
    },
    results: {
      ar: ["صفحة شخصية", "عرض المهارات", "عرض الشهادات", "معرض المشاريع", "معلومات الخبرة", "نموذج تواصل"],
      en: ["Personal page", "Skills display", "Certifications display", "Projects gallery", "Experience information", "Contact form"],
    },
  },
  {
    id: 25,
    title: { ar: "Smart Student Platform", en: "Smart Student Platform" },
    category: "education",
    url: "https://smart-student-platform-21.vercel.app/",
    image: thumb("https://smart-student-platform-21.vercel.app/"),
    description: {
      ar: "نسخة أخرى من منصة الطالب الذكي، تقدم تجربة تعليمية متكاملة تجمع بين أدوات الدراسة والذكاء الاصطناعي.",
      en: "Another version of the Smart Student Platform, offering an integrated educational experience combining study tools and AI.",
    },
    results: {
      ar: ["منصة تعليمية", "مساعد ذكي", "أدوات الدراسة", "إدارة المواد", "تنظيم الوقت", "تجربة تعليمية رقمية"],
      en: ["Education platform", "Smart assistant", "Study tools", "Subjects management", "Time management", "Digital education experience"],
    },
  },
  {
    id: 26,
    title: { ar: "منصة الطالب الذكي", en: "Smart Student Platform" },
    category: "education",
    url: "https://student-platform-frontend.vercel.app/",
    image: thumb("https://student-platform-frontend.vercel.app/"),
    description: {
      ar: "نسخة منشورة من منصة التعلم الذكية، وتضم لوحة تحكم وأدوات للمذاكرة والملاحظات والمخطط الدراسي والمساعد الذكي.",
      en: "A published version of the smart learning platform, including a dashboard, study tools, notes, study planner, and smart assistant.",
    },
    results: {
      ar: ["Dashboard", "مخطط دراسي", "مؤقت مذاكرة", "مساعد ذكي", "خريطة ذهنية", "منشئ عروض", "نسخة صوتية", "محرر صور", "إدارة الملاحظات"],
      en: ["Dashboard", "Study planner", "Study timer", "Smart assistant", "Mind map", "Presentation builder", "Voice version", "Image editor", "Notes management"],
    },
  },
  {
    id: 27,
    title: { ar: "بنك الدم المصري", en: "Egyptian Blood Bank" },
    category: "services",
    url: "https://rdwan.vercel.app/",
    image: thumb("https://rdwan.vercel.app/"),
    description: {
      ar: "منصة رقمية تهدف إلى تسهيل عملية التبرع بالدم وربط المتبرعين بالمرضى في مختلف أنحاء مصر.",
      en: "A digital platform aiming to facilitate blood donation and connect donors with patients across Egypt.",
    },
    results: {
      ar: ["البحث عن متبرعين", "تسجيل المتبرعين", "إدارة طلبات الدم", "معلومات التبرع", "واجهة سهلة الاستخدام", "نظام مساعد ذكي"],
      en: ["Donor search", "Donor registration", "Blood request management", "Donation information", "Easy-to-use interface", "Smart assistant"],
    },
  },
  {
    id: 28,
    title: { ar: "نظام إدارة معرض السيارات والأقساط", en: "Car Showroom & Installments" },
    category: "systems",
    url: "https://car-showroom-contracts1-hdgn.vercel.app/",
    image: thumb("https://car-showroom-contracts1-hdgn.vercel.app/"),
    description: {
      ar: "نظام لإدارة معرض السيارات ومتابعة السيارات والعقود والأقساط والعملاء.",
      en: "A system for managing a car showroom and tracking cars, contracts, installments, and customers.",
    },
    results: {
      ar: ["إدارة السيارات", "إدارة العملاء", "العقود", "الأقساط", "متابعة المدفوعات", "نظام إداري متكامل"],
      en: ["Cars management", "Customers management", "Contracts", "Installments", "Payments tracking", "Integrated management system"],
    },
  },
  {
    id: 29,
    title: { ar: "منصة الطالب الذكي", en: "Smart Student Platform" },
    category: "education",
    url: "https://smart-student-platform.com/",
    image: thumb("https://smart-student-platform.com/"),
    description: {
      ar: "الموقع الرسمي لمنصة تعليمية تعتمد على الذكاء الاصطناعي لتقديم أدوات تساعد الطالب في الدراسة وتنظيم المحتوى التعليمي.",
      en: "The official website of an educational platform powered by AI, providing tools that help students study and organize educational content.",
    },
    results: {
      ar: ["AI Education", "إدارة المحاضرات", "أدوات المذاكرة", "مساعد ذكي", "تجربة تعليمية متكاملة"],
      en: ["AI Education", "Lectures management", "Study tools", "Smart assistant", "Integrated educational experience"],
    },
  },
  {
    id: 30,
    title: { ar: "حفلة تخرج معهد الزرقا", en: "El Zarqa Graduation" },
    category: "education",
    url: "https://palegreen-tarsier-937427.hostingersite.com/",
    image: thumb("https://palegreen-tarsier-937427.hostingersite.com/"),
    description: {
      ar: "موقع مخصص لفعالية حفلة تخرج معهد الزرقا لعرض معلومات المناسبة وتجربة رقمية للطلاب والخريجين.",
      en: "A website dedicated to the El Zarqa Institute graduation event to display event information and a digital experience for students and graduates.",
    },
    results: {
      ar: ["صفحة فعالية", "عرض معلومات الحفل", "تجربة مناسبة للمناسبة", "تصميم متجاوب"],
      en: ["Event page", "Ceremony information display", "Suitable event experience", "Responsive design"],
    },
  },
]
