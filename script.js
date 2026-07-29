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
        heroLine1: '<span style="text-transform:uppercase; font-size:1.15em;">E</span>mpowering <span style="text-transform:uppercase; font-size:1.15em;">s</span>mall <span style="text-transform:uppercase; font-size:1.15em;">m</span>edium <span style="text-transform:uppercase; font-size:1.15em;">e</span>nterprise with',
        heroLine2: "Digitalization & Automation",
        heroDesc: "We transform traditional operations into smart, automated, and high-performance digital systems tailored for your business growth.",
        btnServices: "Services",
        btnAbout: "About Us",
        btnProjects: "Our Projects",
        btnContact: "Contact Us",
        aboutHeading: "About <span>Us</span>",
        aboutText1: "3i Design Empire is built by a passionate, highly experienced IT team driven by a clear mission: to bring advanced technological solutions and AI-driven innovations directly to local small medium enterprise and businesses.",
        aboutText2: "We believe every local enterprise deserves top-tier digital systems, automated workflows, and high-performance custom applications to thrive in today's competitive landscape. Our commitment is to empower your business growth through cutting-edge technology delivered with precision and excellence.",
        servicesHeading: "Our Core <span>Services</span>",
        serv1Title: "Custom Web & Mobile Applications",
        serv1Desc: "Tailored, modern business web and mobile applications built to scale your operations efficiently.",
        serv2Title: "Website Development & Maintenance",
        serv2Desc: "Professional corporate websites built from scratch, complete with ongoing updates and technical maintenance.",
        serv3Title: "Business Digitalization & Automation",
        serv3Desc: "Convert manual workflows, paper records, and repetitive tasks into sleek, automated cloud workflows.",
        serv4Title: "IT Support & Maintenance",
        serv4Desc: "Reliable part-time application support, bug fixing, and continuous system maintenance for smooth operations.",
        portfolioHeading: "Our <span>Projects</span>",
        projTitle: "Personal Trainer Log System",
        projDesc: "A comprehensive mobile-friendly digital workout tracking and gym management system designed for personal trainers to effortlessly manage trainees, create master workout programs, and track real-time fitness logs.",
        contactHeading: "Contact <span>Us</span>",
        contactSub: "Get In Touch",
        addrLabel: "Address",
        phoneLabel: "Contact No / WhatsApp",
        emailLabel: "Email Address",
        footer: "© 2026 3i DESIGN EMPIRE. All Rights Reserved. Serving Enterprises & Professionals."
    },
    ms: {
        bannerTitle: "Pasukan Pakar IT & Pendigitalan Profesional",
        bannerDesc: "Membina sistem perniagaan tersuai berprestasi tinggi, aliran kerja awan automatik, dan platform web moden untuk PKS di seluruh Malaysia.",
        heroLine1: '<span style="text-transform:uppercase; font-size:1.15em;">M</span>emperkasakan <span style="text-transform:uppercase; font-size:1.15em;">p</span>erusahaan <span style="text-transform:uppercase; font-size:1.15em;">k</span>ecil <span style="text-transform:uppercase; font-size:1.15em;">s</span>ederhana dengan',
        heroLine2: "Digitalization & Automation",
        heroDesc: "Kami mengubah operasi tradisional kepada sistem digital pintar, automatik dan berprestasi tinggi untuk perniagaan anda.",
        btnServices: "Perkhidmatan",
        btnAbout: "Tentang Kami",
        btnProjects: "Projek Kami",
        btnContact: "Hubungi Kami",
        aboutHeading: "Tentang <span>Kami</span>",
        aboutText1: "3i Design Empire dibina oleh pasukan IT yang bersemangat dan berpengalaman luas dengan misi jelas: membawa penyelesaian teknologi canggih dan inovasi AI terus kepada perusahaan tempatan.",
        aboutText2: "Kami percaya setiap perusahaan tempatan berhak mendapat sistem digital tahap tinggi, aliran kerja automatik, dan aplikasi tersuai berprestasi tinggi untuk berkembang maju.",
        servicesHeading: "Perkhidmatan <span>Utama</span> Kami",
        serv1Title: "Aplikasi Web & Mudah Alih Tersuai",
        serv1Desc: "Aplikasi web dan mudah alih perniagaan moden dan berprestasi tinggi yang disesuaikan untuk operasi anda.",
        serv2Title: "Pembangunan & Penyelenggaraan Laman Web",
        serv2Desc: "Pembangunan laman web korporat profesional dari awal, lengkap dengan kemas kini berkala dan penyelenggaraan teknikal.",
        serv3Title: "Pendigitalan & Automasi Perniagaan",
        serv3Desc: "Menukar aliran kerja manual dan tugas berulang kepada sistem awan automatik yang lancar.",
        serv4Title: "Sokongan & Penyelenggaraan IT",
        serv4Desc: "Sokongan aplikasi sambilan yang boleh dipercayai, pembetulan pepijat, dan penyelenggaraan sistem.",
        portfolioHeading: "Projek <span>Kami</span>",
        projTitle: "Personal Trainer Log System",
        projDesc: "Sistem pengurusan gim dan penjejakan senaman digital mesra mudah alih yang komprehensif untuk jurulatih peribadi.",
        contactHeading: "Hubungi <span>Kami</span>",
        contactSub: "Hubungi Kami",
        addrLabel: "Alamat",
        phoneLabel: "No. Telefon / WhatsApp",
        emailLabel: "Alamat E-mel",
        footer: "© 2026 3i DESIGN EMPIRE. Hak Cipta Terpelihara."
    },
    ta: {
        bannerTitle: "நவீன ஐடி நிபுணர்கள் & டிஜிட்டலைசேஷன் குழு",
        bannerDesc: "மலேசியா முழுவதும் உள்ள SME வணிகங்களுக்குத் தேவையான அதிநவீன பிசினஸ் சிஸ்டம்ஸ் மற்றும் ஆட்டோமேஷன் கிளவுட் ஒர்க்ஃப்ளோக்களை உருவாக்குகிறோம்.",
        heroLine1: '<span style="text-transform:uppercase; font-size:1.15em;">E</span>mpowering <span style="text-transform:uppercase; font-size:1.15em;">s</span>mall <span style="text-transform:uppercase; font-size:1.15em;">m</span>edium <span style="text-transform:uppercase; font-size:1.15em;">e</span>nterprise with',
        heroLine2: "Digitalization & Automation",
        heroDesc: "பாரம்பரிய முறைகளை மாற்றி, ஆட்டோமேஷன் மற்றும் டிஜிட்டல் கிளவுட் சிஸ்டம் மூலம் உங்கள் வியாபார வளர்ச்சியை பெருக்குகிறோம்.",
        btnServices: "Services",
        btnAbout: "About Us",
        btnProjects: "Our Projects",
        btnContact: "Contact Us",
        aboutHeading: "எங்களைப் <span>பற்றி</span>",
        aboutText1: "3i Design Empire என்பது அனுபவம் வாய்ந்த IT நிபுணர்களால் உருவாக்கப்பட்டது. உள்ளூர் வணிகங்களுக்கு அதிநவீன தொழில்நுட்ப தீர்வுகள் மற்றும் சேவைகளை வழங்குவதே எங்கள் லட்சியம்.",
        aboutText2: "ஒவ்வொரு வணிகமும் சிறந்த டிஜிட்டல் முறைகள் மற்றும் ஆட்டோமேஷன் தீர்வுகளைப் பெற வேண்டும் என்பதே எங்கள் நோக்கம்.",
        servicesHeading: "எங்கள் முக்கிய <span>சேவைகள்</span>",
        serv1Title: "கஸ்டம் வெப் & மொபைல் அப்ளிகேஷன்ஸ்",
        serv1Desc: "வியாபார வளர்ச்சிக்கான பிரத்யேக பிசினஸ் வெப் அப்ளிகேஷன்கள் மற்றும் மொபைல் ஆப் டெவலப்மென்ட்.",
        serv2Title: "வெப்சைட் டெவலப்மென்ட் & மெயின்டனன்ஸ்",
        serv2Desc: "நிறுவனங்களுக்கான பிரத்யேக வெப்சைட்டுகளை உருவாக்கி, தொடர்ந்து மெயின்டெயின் செய்து, அப்டேட் செய்து தருகிறோம்.",
        serv3Title: "பிசினஸ் டிஜிட்டலைசேஷன் & ஆட்டோமேஷன்",
        serv3Desc: "மேனுவல் ஒர்க்குகள் மற்றும் ரிப்பீட்டிவ் டாஸ்க்குகளை நேர்த்தியான கிளவுட் ஒர்க்ஃப்ளோவாக மாற்றுதல்.",
        serv4Title: "ஐடி சப்போர்ட் & மெயின்டனன்ஸ்",
        serv4Desc: "நம்பகமான பார்ட்-டைம் அப்ளிகேஷன் சப்போர்ட் மற்றும் சிஸ்டம் மெயின்டனன்ஸ் சேவைகள்.",
        portfolioHeading: "எங்கள் <span>திட்டங்கள்</span>",
        projTitle: "Personal Trainer Log System",
        projDesc: "பர்சனல் ட்ரெய்னர்கள் தங்கள் ட்ரெய்னிகளை நிர்வகிக்கவும், ஃபிட்னஸ் லோக்குகளைக் கண்காணிக்கவும் உருவாக்கப்பட்ட பிரத்யேக சிஸ்டம்.",
        contactHeading: "தொடர்பு <span>கொள்ள</span>",
        contactSub: "எங்களைத் தொடர்பு கொள்ள",
        addrLabel: "முகவரி",
        phoneLabel: "தொலைபேசி எண் / WhatsApp",
        emailLabel: "மின்னஞ்சல் முகவரி",
        footer: "© 2026 3i DESIGN EMPIRE. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    zh: {
        bannerTitle: "专业 IT 专家与数字化团队",
        bannerDesc: "为马来西亚的中小企业构建高性能的定制业务系统、自动化云工作流和现代网络平台。",
        heroLine1: '<span style="text-transform:uppercase; font-size:1.15em;">E</span>mpowering <span style="text-transform:uppercase; font-size:1.15em;">s</span>mall <span style="text-transform:uppercase; font-size:1.15em;">m</span>edium <span style="text-transform:uppercase; font-size:1.15em;">e</span>nterprise with',
        heroLine2: "Digitalization & Automation",
        heroDesc: "我们将传统运营转化为专为您的业务增长量身定制的智能、自动化和高性能数字系统。",
        btnServices: "Services",
        btnAbout: "About Us",
        btnProjects: "Our Projects",
        btnContact: "Contact Us",
        aboutHeading: "关于 <span>我们</span>",
        aboutText1: "3i Design Empire 由充满激情且经验丰富的 IT 团队创立，旨在将先进的技术解决方案直接带给本地企业。",
        aboutText2: "我们相信每个本地企业都应该拥有顶级的数字系统、自动化工作流程和高性能的定制应用程序。",
        servicesHeading: "我们的核心 <span>服务</span>",
        serv1Title: "定制网页与移动应用开发",
        serv1Desc: "为您的业务规模化运营量身定制的现代、高性能业务网页应用与移动端APP。",
        serv2Title: "网站建设与维护服务",
        serv2Desc: "从零构建专业企业公司网站，并提供持续的网站更新与技术维护支持。",
        serv3Title: "业务数字化与自动化转型",
        serv3Desc: "将手动工作流程和重复性任务转换为流畅、自动化的数字云端工作流。",
        serv4Title: "IT 支持与维护",
        serv4Desc: "可靠的兼职应用支持、漏洞修复和持续的系统维护，确保顺畅运行。",
        portfolioHeading: "Our <span>Projects</span>",
        projTitle: "Personal Trainer Log System",
        projDesc: "专为私人教练设计的全面且对移动端友好的数字锻炼追踪与健身管理系统。",
        contactHeading: "Contact <span>Us</span>",
        contactSub: "取得联系",
        addrLabel: "Address",
        phoneLabel: "联系电话 / WhatsApp",
        emailLabel: "电子邮件",
        footer: "© 2026 3i DESIGN EMPIRE. 版权所有."
    }
};

function enterSite(lang) {
    const t = translations[lang] || translations.en;
    
    document.querySelector('.banner-content-text h3').innerHTML = `<i class="fas fa-users-cog"></i> ${t.bannerTitle}`;
    document.querySelector('.banner-content-text p').innerText = t.bannerDesc;
    document.getElementById('hero-line-1').innerHTML = t.heroLine1;
    document.getElementById('hero-line-2').innerHTML = `<span>${t.heroLine2}</span>`;
    document.getElementById('hero-desc').innerText = t.heroDesc;
    document.getElementById('btn-services').innerHTML = `<i class="fas fa-cogs"></i> ${t.btnServices}`;
    document.getElementById('btn-about').innerHTML = `<i class="fas fa-info-circle"></i> ${t.btnAbout}`;
    document.getElementById('btn-projects').innerHTML = `<i class="fas fa-project-diagram"></i> ${t.btnProjects}`;
    document.getElementById('btn-contact').innerHTML = `<i class="fas fa-envelope"></i> ${t.btnContact}`;
    document.getElementById('about-heading').innerHTML = t.aboutHeading;
    document.getElementById('about-text-1').innerText = t.aboutText1;
    document.getElementById('about-text-2').innerText = t.aboutText2;
    document.getElementById('services-heading').innerHTML = t.servicesHeading;
    document.getElementById('serv-1-title').innerText = t.serv1Title;
    document.getElementById('serv-1-desc').innerText = t.serv1Desc;
    document.getElementById('serv-2-title').innerText = t.serv2Title;
    document.getElementById('serv-2-desc').innerText = t.serv2Desc;
    document.getElementById('serv-3-title').innerText = t.serv3Title;
    document.getElementById('serv-3-desc').innerText = t.serv3Desc;
    document.getElementById('serv-4-title').innerText = t.serv4Title;
    document.getElementById('serv-4-desc').innerText = t.serv4Desc;
    document.getElementById('portfolio-heading').innerHTML = t.portfolioHeading;
    document.getElementById('proj-title').innerText = t.projTitle;
    document.getElementById('proj-desc').innerText = t.projDesc;
    document.getElementById('contact-heading').innerHTML = t.contactHeading;
    document.getElementById('contact-sub').innerText = t.contactSub;
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
        window.scrollTo(0, 0);
    }, 300);
}
