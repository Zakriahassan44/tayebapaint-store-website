// ========================================
// CONFIGURATION
// ========================================
// IMPORTANT: Replace with your actual WhatsApp number
const WHATSAPP_NUMBER = '966508185486';

// ========================================
// TRANSLATION DATA
// ========================================
const translations = {
    en: {
        // Navigation
        logo: "Mashaer Tayba Trading",
        navHome: "Home",
        navProducts: "Products",
        navContact: "Contact Us",
        
        // Home Page
        heroTitle: "Welcome to Mashaer Tayba Trading",
        heroSubtitle: "Quality paints and services at the best prices in Saudi Arabia",
        btnShop: "🛍️ Shop Now",
        btnWhatsapp: "💬 Chat on WhatsApp",
        
        // Features
        featuresTitle: "Why Choose Us",
        feature1Title: "Quality Products",
        feature1Desc: "We offer only the highest quality paints",
        feature2Title: "Fast Delivery",
        feature2Desc: "Quick and reliable delivery across Saudi Arabia",
        feature3Title: "Best Prices",
        feature3Desc: "Competitive prices with great deals",
        feature4Title: "Special Offers",
        feature4Desc: "Regular promotions and exclusive discounts",
        
        // Products
        featuredTitle: "Featured Products",
        viewAllBtn: "View All Products",
        pageTitle: "Our Products",
        pageSubtitle: "Browse our collection of premium quality paints and services",
        filterTitle: "Categories",
        filterAll: "All Products",
        filterPremium: "Premium",
        filterNew: "New Arrivals",
        filterSale: "On Sale",
        orderNow: "Order Now",
        
        // Contact
        contactPageTitle: "Contact Us",
        contactPageSubtitle: "We'd love to hear from you",
        contactInfoTitle: "Get in Touch",
        contactInfoDesc: "Feel free to reach out to us through any of the following methods:",
        contactWhatsappTitle: "WhatsApp",
        contactWhatsappBtn: "Chat Now",
        contactLocationTitle: "Location",
        contactLocationText: "Al-Taghyeera Street, Al-Noor District, Buraidah, Saudi Arabia",
        contactMapBtn: "View on Map",
        contactHoursTitle: "Business Hours",
        contactHoursText: "Saturday - Thursday: 9:00 AM - 10:00 PM<br>Friday: 2:00 PM - 10:00 PM",
        contactFormTitle: "Send us a Message",
        labelName: "Your Name",
        labelPhone: "Phone Number",
        labelMessage: "Your Message",
        submitBtn: "Send Message",
        
        // Location
        locationTitle: "Visit Our Store",
        locationSubtitle: "Find us at our location in Saudi Arabia",
        mapBtn: "📍 Open in Google Maps",
        mapTitle: "Find Us Here",
        
        // Footer
        footerAboutTitle: "About Us",
        footerAboutText: "Your trusted paint store in Saudi Arabia.",
        footerLinksTitle: "Quick Links",
        footerHome: "Home",
        footerProducts: "Products",
        footerContact: "Contact Us",
        footerContactTitle: "Contact",
        footerText: "© 2024 Mashaer Tayba Trading. All rights reserved.",
        
        // WhatsApp Messages
        whatsappIntro: "Hello! I'm interested in your products",
        whatsappProduct: "Hello! I want to order:",
        whatsappContact: "Hello! I want to contact you"
    },
    ar: {
        // Navigation
        logo: "مشاعر طيبة للتجارة",
        navHome: "الرئيسية",
        navProducts: "المنتجات",
        navContact: "اتصل بنا",
        
        // Home Page
        heroTitle: "مرحباً بكم في مشاعر طيبة للتجارة",
        heroSubtitle: "دهانات وخدمات عالية الجودة بأفضل الأسعار في المملكة العربية السعودية",
        btnShop: "🛍️ تسوق الآن",
        btnWhatsapp: "💬 تواصل عبر واتساب",
        
        // Features
        featuresTitle: "لماذا تختارنا",
        feature1Title: "منتجات عالية الجودة",
        feature1Desc: "نقدم فقط دهانات بأعلى جودة",
        feature2Title: "توصيل سريع",
        feature2Desc: "توصيل سريع وموثوق في جميع أنحاء المملكة",
        feature3Title: "أفضل الأسعار",
        feature3Desc: "أسعار تنافسية مع صفقات رائعة",
        feature4Title: "عروض خاصة",
        feature4Desc: "عروض ترويجية منتظمة وخصومات حصرية",
        
        // Products
        featuredTitle: "المنتجات المميزة",
        viewAllBtn: "عرض جميع المنتجات",
        pageTitle: "منتجاتنا",
        pageSubtitle: "تصفح مجموعتنا من الدهانات والخدمات عالية الجودة",
        filterTitle: "الفئات",
        filterAll: "جميع المنتجات",
        filterPremium: "مميز",
        filterNew: "وصل حديثاً",
        filterSale: "العروض",
        orderNow: "اطلب الآن",
        
        // Contact
        contactPageTitle: "اتصل بنا",
        contactPageSubtitle: "يسعدنا التواصل معك",
        contactInfoTitle: "تواصل معنا",
        contactInfoDesc: "لا تتردد في التواصل معنا من خلال أي من الطرق التالية:",
        contactWhatsappTitle: "واتساب",
        contactWhatsappBtn: "تواصل الآن",
        contactLocationTitle: "الموقع",
        contactLocationText: "شارع التغيرة، حي النور، بريدة، المملكة العربية السعودية",
        contactMapBtn: "عرض على الخريطة",
        contactHoursTitle: "ساعات العمل",
        contactHoursText: "السبت - الخميس: 9:00 صباحاً - 10:00 مساءً<br>الجمعة: 2:00 ظهراً - 10:00 مساءً",
        contactFormTitle: "أرسل لنا رسالة",
        labelName: "اسمك",
        labelPhone: "رقم الهاتف",
        labelMessage: "رسالتك",
        submitBtn: "إرسال الرسالة",
        
        // Location
        locationTitle: "زوروا متجرنا",
        locationSubtitle: "نحن في انتظاركم في المملكة العربية السعودية",
        mapBtn: "📍 افتح في خرائط جوجل",
        mapTitle: "موقعنا",
        
        // Footer
        footerAboutTitle: "عن المتجر",
        footerAboutText: "متجرك الموثوق للدهانات في المملكة العربية السعودية.",
        footerLinksTitle: "روابط سريعة",
        footerHome: "الرئيسية",
        footerProducts: "المنتجات",
        footerContact: "اتصل بنا",
        footerContactTitle: "التواصل",
        footerText: "© 2024 مشاعر طيبة للتجارة. جميع الحقوق محفوظة.",
        
        // WhatsApp Messages
        whatsappIntro: "مرحباً! أنا مهتم بمنتجاتكم",
        whatsappProduct: "مرحباً! أريد طلب:",
        whatsappContact: "مرحباً! أريد التواصل معكم"
    }
};

// ========================================
// PRODUCTS DATA
// ========================================
const products = [
    {
        id: 1,
        nameEn: "Interior Paint",
        nameAr: "دهان داخلي",
        descriptionEn: "Stain-resistant interior paint, easy to clean, available in thousands of colors.",
        descriptionAr: "دهان داخلي مقاوم للبقع وسهل التنظيف، متوفر في آلاف الألوان.",
        price: "150",
        currency: "SAR",
        image: "https://nodrippainting.com/wp-content/uploads/2024/03/nodrip_blog_0002.jpg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 2,
        nameEn: "Exterior Paint",
        nameAr: "دهان خارجي",
        descriptionEn: "Weather-resistant exterior paint, protects your walls from sun and rain.",
        descriptionAr: "دهان خارجي مقاوم للعوامل الجوية، يحمي جدرانك من الشمس والمطر.",
        price: "200",
        currency: "SAR",
        image: "https://www.timminspainting.com/wp-content/uploads/2019/09/house-painting-trim-800x450.webp",
        category: "premium",
        badge: "Best Seller"
    },
    {
        id: 3,
        nameEn: "Primer",
        nameAr: "برايمر",
        descriptionEn: "High-quality primer for surface preparation, ensures better adhesion.",
        descriptionAr: "برايمر عالي الجودة لتحضير السطوح قبل الدهان، يضمن التصاق أفضل.",
        price: "100",
        currency: "SAR",
        image: "https://www.bhphotovideo.com/images/fb/pro_cyc_gbp1_pro_cyc_one_coat_1360319.jpg",
        category: "new",
        badge: "New"
    },
    {
        id: 4,
        nameEn: "Color Mixing Service",
        nameAr: "خدمة مزج الألوان",
        descriptionEn: "Custom color mixing according to your needs, using the latest technology.",
        descriptionAr: "مزج ألوان مخصص حسب احتياجاتك، باستخدام أحدث التقنيات.",
        price: "50+",
        currency: "SAR",
        image: "https://www.hardwarestore.com/media/wysiwyg/20240904_142123_1_-_Aubuchon_NEWPORT_ME_-_124.jpg?auto=webp&format=pjpg&quality=85",
        category: "sale",
        badge: "Sale"
    }
];

// ========================================
// GLOBAL VARIABLES
// ========================================
let currentLang = 'en';
let currentFilter = 'all';

// ========================================
// UPDATE ALL TEXT ELEMENTS
// ========================================
function updateLanguage() {
    const t = translations[currentLang];
    
    // Update navigation
    updateElementById('logo', t.logo);
    updateElementById('nav-home', t.navHome);
    updateElementById('nav-products', t.navProducts);
    updateElementById('nav-contact', t.navContact);
    
    // Update home page elements
    updateElementById('hero-title', t.heroTitle);
    updateElementById('hero-subtitle', t.heroSubtitle);
    updateElementById('btn-shop', t.btnShop);
    updateElementById('btn-whatsapp', t.btnWhatsapp);
    
    // Update features
    updateElementById('features-title', t.featuresTitle);
    updateElementById('feature1-title', t.feature1Title);
    updateElementById('feature1-desc', t.feature1Desc);
    updateElementById('feature2-title', t.feature2Title);
    updateElementById('feature2-desc', t.feature2Desc);
    updateElementById('feature3-title', t.feature3Title);
    updateElementById('feature3-desc', t.feature3Desc);
    updateElementById('feature4-title', t.feature4Title);
    updateElementById('feature4-desc', t.feature4Desc);
    
    // Update products page
    updateElementById('featured-title', t.featuredTitle);
    updateElementById('view-all-btn', t.viewAllBtn);
    updateElementById('page-title', t.pageTitle);
    updateElementById('page-subtitle', t.pageSubtitle);
    updateElementById('filter-title', t.filterTitle);
    updateElementById('filter-all', t.filterAll);
    updateElementById('filter-premium', t.filterPremium);
    updateElementById('filter-new', t.filterNew);
    updateElementById('filter-sale', t.filterSale);
    
    // Update contact page
    updateElementById('contact-info-title', t.contactInfoTitle);
    updateElementById('contact-info-desc', t.contactInfoDesc);
    updateElementById('contact-whatsapp-title', t.contactWhatsappTitle);
    updateElementById('contact-whatsapp-btn', t.contactWhatsappBtn);
    updateElementById('contact-location-title', t.contactLocationTitle);
    updateElementById('contact-location-text', t.contactLocationText);
    updateElementById('contact-map-btn', t.contactMapBtn);
    updateElementById('contact-hours-title', t.contactHoursTitle);
    updateElementById('contact-hours-text', t.contactHoursText);
    updateElementById('contact-form-title', t.contactFormTitle);
    updateElementById('label-name', t.labelName);
    updateElementById('label-phone', t.labelPhone);
    updateElementById('label-message', t.labelMessage);
    updateElementById('submit-btn', t.submitBtn);
    
    // Update location
    updateElementById('location-title', t.locationTitle);
    updateElementById('location-subtitle', t.locationSubtitle);
    updateElementById('map-btn', t.mapBtn);
    updateElementById('map-title', t.mapTitle);
    
    // Update footer
    updateElementById('footer-about-title', t.footerAboutTitle);
    updateElementById('footer-about-text', t.footerAboutText);
    updateElementById('footer-links-title', t.footerLinksTitle);
    updateElementById('footer-home', t.footerHome);
    updateElementById('footer-products', t.footerProducts);
    updateElementById('footer-contact', t.footerContact);
    updateElementById('footer-contact-title', t.footerContactTitle);
    updateElementById('footer-text', t.footerText);
    
    // Update language button
    updateElementById('lang-text', currentLang === 'en' ? 'العربية' : 'English');
    
    // Update WhatsApp links
    updateWhatsAppLinks();
}

function updateElementById(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function updateWhatsAppLinks() {
    const t = translations[currentLang];
    
    // Update hero WhatsApp button
    const heroBtn = document.getElementById('btn-whatsapp');
    if (heroBtn) {
        heroBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappIntro)}`;
    }
    
    // Update contact page WhatsApp button
    const contactBtn = document.getElementById('contact-whatsapp-btn');
    if (contactBtn) {
        contactBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappContact)}`;
    }
}

// ========================================
// RENDER PRODUCTS
// ========================================
function renderProducts(containerId, productsToShow = products, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const t = translations[currentLang];
    container.innerHTML = '';
    
    const displayProducts = limit ? productsToShow.slice(0, limit) : productsToShow;
    
    displayProducts.forEach(product => {
        const productName = currentLang === 'en' ? product.nameEn : product.nameAr;
        const productDesc = currentLang === 'en' ? product.descriptionEn : product.descriptionAr;
        const whatsappMessage = `${t.whatsappProduct} ${productName} (${product.price} ${product.currency})`;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${productName}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${productName}</div>
                <div class="product-description">${productDesc}</div>
                <div class="product-price">${product.price} ${product.currency}</div>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}" 
                   class="order-btn" target="_blank">
                    ${t.orderNow}
                </a>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// ========================================
// FILTER PRODUCTS
// ========================================
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    renderProducts('products-container', filteredProducts);
}

// ========================================
// CONTACT FORM
// ========================================
function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    if (!name || !phone || !message) {
        alert(currentLang === 'en' ? 'Please fill all fields' : 'يرجى ملء جميع الحقول');
        return;
    }
    
    const t = translations[currentLang];
    const fullMessage = currentLang === 'en'
        ? `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`
        : `الاسم: ${name}%0Aالهاتف: ${phone}%0Aالرسالة: ${message}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${fullMessage}`, '_blank');
}

// ========================================
// TOGGLE LANGUAGE
// ========================================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Toggle RTL
    if (currentLang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Save preference
    localStorage.setItem('preferredLanguage', currentLang);
    
    // Update all text
    updateLanguage();
    
    // Re-render products
    const productsContainer = document.getElementById('products-container');
    const featuredContainer = document.getElementById('featured-products');
    
    if (productsContainer) {
        const filteredProducts = currentFilter === 'all' 
            ? products 
            : products.filter(p => p.category === currentFilter);
        renderProducts('products-container', filteredProducts);
    }
    
    if (featuredContainer) {
        renderProducts('featured-products', products, 3);
    }
}

// ========================================
// TOGGLE MOBILE MENU
// ========================================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    } else {
        updateLanguage();
    }
    
    // Render products based on page
    const productsContainer = document.getElementById('products-container');
    const featuredContainer = document.getElementById('featured-products');
    
    if (productsContainer && !featuredContainer) {
        // Full products page
        renderProducts('products-container', products);
    } else if (featuredContainer) {
        // Home page - show only 3 featured products
        renderProducts('featured-products', products, 3);
    }
    
    console.log('✅ Website initialized successfully!');
    console.log('Current language:', currentLang);
});