function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

const translations = {
    en: {
        bannerTitle: "Professional IT Experts & Digitalization Team",
        bannerDesc: "Building high-performance custom business systems, automated cloud workflows, and modern web platforms for SMEs across Malaysia.",
        btnServices: "Services",
        btnContact: "Contact Us",
        servHeading: "Our <span>Services</span>",
        serv1Title: "Custom Web & Apps",
        serv1Desc: "Tailored responsive web applications and management systems built for small and medium enterprises.",
        serv2Title: "Business Automation",
        serv2Desc: "Automate your regular business workflows, reducing manual errors and saving valuable operational time.",
        serv3Title: "Cloud Integration",
        serv3Desc: "Seamless cloud hosting, data management, and secure backup integrations for local businesses.",
        serv4Title: "IT Support & Maintenance",
        serv4Desc: "Reliable part-time application maintenance, bug fixing, and technical support services in Malaysia.",
        aboutHeading: "About <span>Us</span>",
        aboutText1: "3i Design Empire is built by a passionate, highly experienced IT team driven by a clear mission: to bring advanced technological solutions and AI-driven innovations directly to local small medium enterprises and individuals in Malaysia.",
        aboutText2: "With over 17 years of hands-on industry expertise, we specialize in transforming traditional paper-based workflows into smart, high-performance digital environments.",
        portfolioHeading: "Featured <span>Projects</span>",
        projTitle: "Gym Workout Log System",
        projDesc: "A digital transformation tool for local gym trainers to manage client progress logs and automate WhatsApp notifications.",
        contactHeading: "Get in <span>Touch</span>",
        addrLabel: "Our Location",
        phoneLabel: "Contact No / WhatsApp",
        emailLabel: "Email Address",
        footer: "© 2026 3i DESIGN EMPIRE. All Rights Reserved. Serving Enterprises & Professionals.",
        companyName: "3i DESIGN EMPIRE",
        companyTagline: "Digital Transformation & Business Automation",
        prevServ1Title: "Web & App Dev",
        prevServ1Desc: "Modern custom systems",
        prevServ2Title: "AI Automation",
        prevServ2Desc: "Smart workflow solutions",
        selectLangLabel: "Please Select Your Preferred Language:",
        navServ: "Services",
        navAbout: "About",
        navProj: "Projects",
        navContact: "Contact",
        changeLangText: "Language"
    },
    ms: {
        bannerTitle: "Pakar IT Profesional & Pasukan Pendigitalan",
        bannerDesc: "Membina sistem perniagaan tersuai prestasi tinggi, alur kerja awan automatik, dan platform web moden untuk PKS di seluruh Malaysia.",
        btnServices: "Perkhidmatan",
        btnContact: "Hubungi Kami",
        servHeading: "Perkhidmatan <span>Kami</span>",
        serv1Title: "Web & Aplikasi Terperinci",
        serv1Desc: "Aplikasi web responsif dan sistem pengurusan yang disesuaikan untuk perusahaan kecil dan sederhana.",
        serv2Title: "Automasi Perniagaan",
        serv2Desc: "Automasikan alur kerja perniagaan biasa anda, mengurangkan ralat manual dan menjimatkan masa operasi.",
        serv3Title: "Integrasi Awan",
        serv3Desc: "Pengehosan awan yang lancar, pengurusan data, dan integrasi sandaran selamat untuk perniagaan tempatan.",
        serv4Title: "Sokongan & Penyelenggaraan IT",
        serv4Desc: "Penyelenggaraan aplikasi sambilan yang boleh dipercayai, pembetulan pepijat, dan sokongan teknikal di Malaysia.",
        aboutHeading: "Tentang <span>Kami</span>",
        aboutText1: "3i Design Empire dibina oleh pasukan IT yang berpengalaman luas dengan misi jelas: membawa penyelesaian teknologi canggih terus kepada PKS dan individu tempatan di Malaysia.",
        aboutText2: "Dengan pengalaman industri lebih 17 tahun, kami pakar dalam mengubah alur kerja tradisional kepada persekitaran digital yang pintar.",
        portfolioHeading: "Projek <span>Pilihan</span>",
        projTitle: "Sistem Log Senaman Gim",
        projDesc: "Alat transformasi digital untuk jurulatih gim tempatan menguruskan log kemajuan pelanggan dan mengautomasikan WhatsApp.",
        contactHeading: "Hubungi <span>Kami</span>",
        addrLabel: "Lokasi Kami",
        phoneLabel: "No Telefon / WhatsApp",
        emailLabel: "Alamat E-mel",
        footer: "© 2026 3i DESIGN EMPIRE. Hak Cipta Terpelihara. Khidmat Perusahaan & Profesional.",
        companyName: "3i DESIGN EMPIRE",
        companyTagline: "Transformasi Digital & Automasi Perniagaan",
        prevServ1Title: "Pembangunan Web",
        prevServ1Desc: "Sistem tersuai moden",
        prevServ2Title: "Automasi AI",
        prevServ2Desc: "Penyelesaian alur kerja pintar",
        selectLangLabel: "Sila Pilih Bahasa Pilihan Anda:",
        navServ: "Perkhidmatan",
        navAbout: "Tentang",
        navProj: "Projek",
        navContact: "Hubungi",
        changeLangText: "Bahasa"
    },
    ta: {
        bannerTitle: "தொழில்முறை ஐடி வல்லுநர்கள் & டிஜிட்டலாக்கக் குழு",
        bannerDesc: "மலேசியா முழுவதும் உள்ள சிறு மற்றும் நடுத்தர நிறுவனங்களுக்கான உயர் செயல்திறன் கொண்ட தனிப்பயன் வணிக அமைப்புகள் மற்றும் நவீன வலை தளங்களை உருவாக்குகிறோம்.",
        btnServices: "சேவைகள்",
        btnContact: "தொடர்பга",
        servHeading: "எங்கள் <span>சேவைகள்</span>",
        serv1Title: "தனிப்பயன் வெப் & ஆப்ஸ்",
        serv1Desc: "சிறு மற்றும் நடுத்தர நிறுவனங்களுக்காக வடிவமைக்கப்பட்ட பதிலளிக்கக்கூடிய வலை பயன்பாடுகள் மற்றும் மேலாண்மை அமைப்புகள்.",
        serv2Title: "வணிக ஆட்டோமேஷன்",
        serv2Desc: "உங்கள் வழக்கமான வணிகப் பணிகளைத் தானியக்கமாக்கி, மனித பிழைகளைக் குறைத்து நேரத்தைச் சேமிக்கவும்.",
        serv3Title: "கிளவுட் ஒருங்கிணைப்பு",
        serv3Desc: "உள்ளூர் வணிகங்களுக்கான தடையற்ற கிளவுட் ஹோஸ்டிங், தரவு மேலாண்மை மற்றும் பாதுகாப்பான காப்புப்பிரதி.",
        serv4Title: "ஐடி ஆதரவு & பராமரிப்பு",
        serv4Desc: "மலேசியாவில் நம்பகமான பகுதி நேர பயன்பாட்டு பராமரிப்பு, பிழை திருத்தம் மற்றும் தொழில்நுட்ப ஆதரவு சேவைகள்.",
        aboutHeading: "எங்களைப் <span>பற்றி</span>",
        aboutText1: "3i Design Empire என்பது மலேசியாவில் உள்ள உள்ளூர் சிறு நடுத்தர நிறுவனங்களுக்கு மேம்பட்ட தொழில்நுட்ப தீர்வுகளை வழங்குவதற்காக அனுபவம் வாய்ந்த ஐடி குழுவால் உருவாக்கப்பட்டது.",
        aboutText2: "17 வருடங்களுக்கும் மேலான அனுபவத்துடன், பாரம்பரிய காகித அடிப்படையிலான முறைகளை ஸ்மார்ட் டிஜிட்டல் சூழல்களாக மாற்றுகிறோம்.",
        portfolioHeading: "சிறப்பு <span>திட்டங்கள்</span>",
        projTitle: "ஜிம் ஒர்க்அவுட் லாக் சிஸ்டம்",
        projDesc: "உள்ளூர் ஜிம் பயிற்சியாளர்கள் வாடிக்கையாளர் முன்னேற்றத்தைக் கண்காணிக்கவும் வாட்ஸ்அப் அறிவிப்புகளை அனுப்பவும் உதவும் டிஜிட்டல் கருவி.",
        contactHeading: "தொடர்பு கொள்ள <span>உங்கள்</span>",
        addrLabel: "எங்கள் இருப்பிடம்",
        phoneLabel: "தொடர்பு எண் / வாட்ஸ்அப்",
        emailLabel: "மின்னஞ்சல் முகவரி",
        footer: "© 2026 3i DESIGN EMPIRE. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        companyName: "3i DESIGN EMPIRE",
        companyTagline: "டிஜிட்டல் மாற்றம் & வணிக ஆட்டோமேஷன்",
        prevServ1Title: "வெப் & ஆப்ஸ் டெவ்",
        prevServ1Desc: "நவீன தனிப்பயன் அமைப்புகள்",
        prevServ2Title: "AI ஆட்டோமேஷன்",
        prevServ2Desc: "ஸ்மார்ட் பணிப்பாய்வு தீர்வுகள்",
        selectLangLabel: "உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்:",
        navServ: "சேவைகள்",
        navAbout: "எங்களைப் பற்றி",
        navProj: "திட்டங்கள்",
        navContact: "தொடர்பு",
        changeLangText: "மொழி"
    },
    zh: {
        bannerTitle: "专业IT专家与数字化团队",
        bannerDesc: "为马来西亚的中小企业构建高性能定制业务系统、自动化云工作流和现代网页平台。",
        btnServices: "我们的服务",
        btnContact: "联系我们",
        servHeading: "我们的 <span>服务</span>",
        serv1Title: "定制网站与应用",
        serv1Desc: "专为中小企业量身定制的响应式Web应用程序和管理系统。",
        serv2Title: "业务自动化",
        serv2Desc: "自动化您的日常业务工作流程，减少人工错误并节省宝贵的运营时间。",
        serv3Title: "云端集成",
        serv3Desc: "为本地企业提供无缝的云托管、数据管理和安全备份集成。",
        serv4Title: "IT支持与维护",
        serv4Desc: "马来西亚可靠的兼职应用程序维护、错误修复和技术支持服务。",
        aboutHeading: "关于 <span>我们</span>",
        aboutText1: "3i Design Empire由一支经验丰富的专业IT团队创立，旨在将先进的技术解决方案直接带给马来西亚的本地中小企业。",
        aboutText2: "拥有17年以上的行业经验，我们专注于将传统的工作流程转变为智能、高效的数字化环境。",
        portfolioHeading: "精选 <span>项目</span>",
        projTitle: "健身房训练日志系统",
        projDesc: "帮助本地健身教练管理客户进度日志并自动化WhatsApp通知的数字化转型工具。",
        contactHeading: "联系 <span>方式</span>",
        addrLabel: "我们的地址",
        phoneLabel: "联系电话 / WhatsApp",
        emailLabel: "电子邮箱",
        footer: "© 2026 3i DESIGN EMPIRE. 保留所有权利。",
        companyName: "3i DESIGN EMPIRE",
        companyTagline: "数字化转型与业务自动化",
        prevServ1Title: "网页与应用开发",
        prevServ1Desc: "现代定制系统",
        prevServ2Title: "AI自动化",
        prevServ2Desc: "智能工作流解决方案",
        selectLangLabel: "请选择您的首选语言：",
        navServ: "服务",
        navAbout: "关于",
        navProj: "项目",
        navContact: "联系",
        changeLangText: "语言"
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event && event.target && event.target.classList.add('active');

    document.getElementById('company-name').innerText = t.companyName;
    document.getElementById('company-tagline').innerText = t.companyTagline;
    document.getElementById('prev-serv-1-title').innerText = t.prevServ1Title;
    document.getElementById('prev-serv-1-desc').innerText = t.prevServ1Desc;
    document.getElementById('prev-serv-2-title').innerText = t.prevServ2Title;
    document.getElementById('prev-serv-2-desc').innerText = t.prevServ2Desc;
    document.getElementById('select-lang-label').innerText = t.selectLangLabel;

    document.getElementById('nav-title').innerText = t.companyName;
    document.getElementById('nav-serv').innerText = t.navServ;
    document.getElementById('nav-about').innerText = t.navAbout;
    document.getElementById('nav-proj').innerText = t.navProj;
    document.getElementById('nav-contact').innerText = t.navContact;
    document.getElementById('change-lang-text').innerText = t.changeLangText;

    document.getElementById('banner-title').innerText = t.bannerTitle;
    document.getElementById('banner-desc').innerText = t.bannerDesc;
    document.getElementById('btn-services').innerText = t.btnServices;
    document.getElementById('btn-contact').innerText = t.btnContact;

    document.getElementById('serv-heading').innerHTML = t.servHeading;
    document.getElementById('serv-1-title').innerText = t.serv1Title;
    document.getElementById('serv-1-desc').innerText = t.serv1Desc;
    document.getElementById('serv-2-title').innerText = t.serv2Title;
    document.getElementById('serv-2-desc').innerText = t.serv2Desc;
    document.getElementById('serv-3-title').innerText = t.serv3Title;
    document.getElementById('serv-3-desc').innerText = t.serv3Desc;
    document.getElementById('serv-4-title').innerText = t.serv4Title;
    document.getElementById('serv-4-desc').innerText = t.serv4Desc;

    document.getElementById('about-heading').innerHTML = t.aboutHeading;
    document.getElementById('about-text-1').innerText = t.aboutText1;
    document.getElementById('about-text-2').innerText = t.aboutText2;

    document.getElementById('portfolio-heading').innerHTML = t.portfolioHeading;
    document.getElementById('proj-title').innerText = t.projTitle;
    document.getElementById('proj-desc').innerText = t.projDesc;

    document.getElementById('contact-heading').innerHTML = t.contactHeading;
    document.getElementById('addr-label').innerText = t.addrLabel;
    document.getElementById('phone-label').innerText = t.phoneLabel;
    document.getElementById('email-label').innerText = t.emailLabel;
    document.getElementById('footer-text').innerText = t.footer;

    const splash = document.getElementById('splash-screen');
    const main = document.getElementById('main-content');

    splash.style.opacity = '0';
    splash.style.visibility = 'hidden';

    main.style.display = 'block';
    setTimeout(() => {
        main.style.opacity = '1';
    }, 30);
}

function returnToSplash() {
    const splash = document.getElementById('splash-screen');
    const main = document.getElementById('main-content');

    main.style.opacity = '0';
    setTimeout(() => {
        main.style.display = 'none';
        splash.style.visibility = 'visible';
        splash.style.opacity = '1';
    }, 500);
}
