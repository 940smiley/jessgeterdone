// App Database
const appsDatabase = [
    {
        id: 1,
        name: "CapCut",
        category: "tiktok",
        rating: 4.6,
        price: "free",
        description: "TikTok's official video editor with AI-powered features including auto-captions, smart cut, and background removal.",
        features: ["ai", "video", "automation"],
        icon: "fas fa-video",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.lemon.lvoverseas",
        developer: "Bytedance",
        size: "150MB"
    },
    {
        id: 2,
        name: "VSCO",
        category: "content",
        rating: 4.6,
        price: "freemium",
        description: "Creative photo editing with AI-powered presets, advanced editing tools, and community features.",
        features: ["ai", "image", "editing"],
        icon: "fas fa-camera",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vsco.cam",
        developer: "VSCO",
        size: "89MB"
    },
    {
        id: 3,
        name: "ChatGPT",
        category: "content",
        rating: 4.6,
        price: "freemium",
        description: "OpenAI's conversational AI for versatile text generation, creative writing, and content creation.",
        features: ["ai", "text", "automation"],
        icon: "fas fa-robot",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
        developer: "OpenAI",
        size: "45MB"
    },
    {
        id: 4,
        name: "Hootsuite",
        category: "automation",
        rating: 4.2,
        price: "freemium",
        description: "Industry-leading social media management with 35+ platform integrations and advanced analytics.",
        features: ["automation", "analytics", "scheduling"],
        icon: "fas fa-share-alt",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.hootsuite.droid",
        developer: "Hootsuite Media",
        size: "67MB"
    },
    {
        id: 5,
        name: "FaceApp",
        category: "snapchat",
        rating: 4.3,
        price: "freemium",
        description: "AI-powered photo editor with age progression, gender swap filters, and hair color changes.",
        features: ["ai", "image", "editing"],
        icon: "fas fa-user-edit",
        playStoreUrl: "https://play.google.com/store/apps/details?id=io.faceapp",
        developer: "FaceApp Technology",
        size: "78MB"
    },
    {
        id: 6,
        name: "Buffer",
        category: "automation",
        rating: 4.3,
        price: "freemium",
        description: "User-friendly social media scheduler with clean interface and Pablo image creation tool.",
        features: ["automation", "scheduling", "analytics"],
        icon: "fas fa-calendar-alt",
        playStoreUrl: "https://play.google.com/store/apps/details?id=org.buffer.android",
        developer: "Buffer",
        size: "34MB"
    },
    {
        id: 7,
        name: "Boost for Reddit",
        category: "reddit",
        rating: 4.7,
        price: "freemium",
        description: "Feature-rich Reddit client with advanced filtering, customizable interface, and offline reading.",
        features: ["automation", "analytics", "social"],
        icon: "fab fa-reddit",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.rubenmayayo.reddit",
        developer: "Ruben Mayayo",
        size: "28MB"
    },
    {
        id: 8,
        name: "Canva",
        category: "content",
        rating: 4.6,
        price: "freemium",
        description: "Design platform with social media templates, brand kit integration, and AI-powered design suggestions.",
        features: ["ai", "image", "automation"],
        icon: "fas fa-palette",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.canva.editor",
        developer: "Canva",
        size: "156MB"
    },
    {
        id: 9,
        name: "InShot",
        category: "tiktok",
        rating: 4.5,
        price: "freemium",
        description: "Professional video editor with AI enhancements, auto beat sync, and smart transitions.",
        features: ["ai", "video", "editing"],
        icon: "fas fa-cut",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.camerasideas.instashot",
        developer: "InShot Video Editor",
        size: "98MB"
    },
    {
        id: 10,
        name: "Later",
        category: "automation",
        rating: 4.4,
        price: "freemium",
        description: "Visual content scheduler with Instagram-first design, drag-and-drop calendar, and Linkin.bio tool.",
        features: ["automation", "scheduling", "analytics"],
        icon: "fas fa-clock",
        playStoreUrl: "https://play.google.com/store/apps/details?id=me.latergram.latergramme",
        developer: "Later Influence",
        size: "52MB"
    },
    {
        id: 11,
        name: "ElevenLabs",
        category: "content",
        rating: 4.4,
        price: "freemium",
        description: "Advanced AI voice synthesis with natural-sounding voices, voice cloning, and multiple languages.",
        features: ["ai", "audio", "voice"],
        icon: "fas fa-microphone",
        playStoreUrl: "https://play.google.com/store/apps/details?id=io.elevenlabs.elevenlabs",
        developer: "ElevenLabs",
        size: "67MB"
    },
    {
        id: 12,
        name: "Facebook Business Suite",
        category: "facebook",
        rating: 4.2,
        price: "free",
        description: "Meta's unified business management for Facebook and Instagram with post scheduling and analytics.",
        features: ["automation", "analytics", "scheduling"],
        icon: "fab fa-facebook",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.facebook.pages.app",
        developer: "Meta Platforms",
        size: "89MB"
    }
];

// Interactive App Explorer Functionality
let currentApps = [...appsDatabase];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let currentView = 'grid';
let currentPage = 1;
const appsPerPage = 6;

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(102, 126, 234, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // Add counter animation to stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const suffix = element.textContent.includes('+') ? '+' : '';
            element.textContent = Math.floor(current) + suffix;
        }, 20);
    }
    
    // Animate counters when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add click tracking for analytics (placeholder)
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.card').querySelector('h3').textContent;
            console.log(`Clicked: ${cardTitle} - ${this.textContent.trim()}`);
            // Here you could add actual analytics tracking
        });
    });
    
    // Add search functionality (basic)
    function addSearchFunctionality() {
        const searchContainer = document.createElement('div');
        searchContainer.innerHTML = `
            <div class="search-container" style="
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: none;
            ">
                <input type="text" id="search-input" placeholder="Search apps..." style="
                    padding: 10px 15px;
                    border: none;
                    border-radius: 25px;
                    background: rgba(255,255,255,0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    outline: none;
                    width: 250px;
                ">
            </div>
        `;
        
        document.body.appendChild(searchContainer);
        
        // Toggle search with Ctrl+K
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                const searchContainer = document.querySelector('.search-container');
                const searchInput = document.getElementById('search-input');
                
                if (searchContainer.style.display === 'none') {
                    searchContainer.style.display = 'block';
                    searchInput.focus();
                } else {
                    searchContainer.style.display = 'none';
                }
            }
            
            if (e.key === 'Escape') {
                document.querySelector('.search-container').style.display = 'none';
            }
        });
        
        // Basic search functionality
        document.getElementById('search-input').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = searchTerm === '' ? 'block' : 'none';
                }
            });
        });
    }
    
    addSearchFunctionality();
    
    // Initialize Interactive App Explorer
    initializeAppExplorer();
    
    // Add theme toggle functionality
    function addThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            font-size: 18px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        `;
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
        
        document.body.appendChild(themeToggle);
    }
    
    addThemeToggle();
    
    // Add loading animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    });
    
    // Add copy to clipboard functionality for GitHub links
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const url = window.location.origin + '/' + this.getAttribute('href');
            navigator.clipboard.writeText(url).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 1000);
            });
        });
    });
});

// Interactive App Explorer Functions
function initializeAppExplorer() {
    renderApps(currentApps.slice(0, appsPerPage));
    setupEventListeners();
    updateResultsCount();
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('app-search');
    const clearSearch = document.getElementById('clear-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', clearSearchInput);
    }
    
    // Filter functionality
    const platformFilter = document.getElementById('platform-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortBy = document.getElementById('sort-by');
    
    if (platformFilter) platformFilter.addEventListener('change', applyFilters);
    if (ratingFilter) ratingFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (sortBy) sortBy.addEventListener('change', applySorting);
    
    // Advanced filters toggle
    const advancedFiltersBtn = document.getElementById('advanced-filters');
    if (advancedFiltersBtn) {
        advancedFiltersBtn.addEventListener('click', toggleAdvancedFilters);
    }
    
    // Feature tags
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach(tag => {
        tag.addEventListener('click', toggleFeatureFilter);
    });
    
    // View toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', toggleView);
    });
    
    // Load more
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreApps);
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = appsDatabase.filter(app => 
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm) ||
        app.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
        app.developer.toLowerCase().includes(searchTerm)
    );
    
    currentApps = filtered;
    currentPage = 1;
    renderApps(currentApps.slice(0, appsPerPage));
    updateResultsCount();
    updateLoadMoreButton();
}

function clearSearchInput() {
    const searchInput = document.getElementById('app-search');
    if (searchInput) {
        searchInput.value = '';
        currentApps = [...appsDatabase];
        currentPage = 1;
        applyFilters();
    }
}

function applyFilters() {
    const platformFilter = document.getElementById('platform-filter').value;
    const ratingFilter = parseFloat(document.getElementById('rating-filter').value);
    const priceFilter = document.getElementById('price-filter').value;
    const searchTerm = document.getElementById('app-search').value.toLowerCase();
    
    // Get active feature filters
    const activeFeatures = Array.from(document.querySelectorAll('.feature-tag.active'))
        .map(tag => tag.dataset.feature);
    
    let filtered = appsDatabase.filter(app => {
        const matchesSearch = !searchTerm || 
            app.name.toLowerCase().includes(searchTerm) ||
            app.description.toLowerCase().includes(searchTerm) ||
            app.features.some(feature => feature.toLowerCase().includes(searchTerm));
        
        const matchesPlatform = !platformFilter || app.category === platformFilter;
        const matchesRating = !ratingFilter || app.rating >= ratingFilter;
        const matchesPrice = !priceFilter || app.price === priceFilter;
        const matchesFeatures = activeFeatures.length === 0 || 
            activeFeatures.some(feature => app.features.includes(feature));
        
        return matchesSearch && matchesPlatform && matchesRating && matchesPrice && matchesFeatures;
    });
    
    currentApps = filtered;
    currentPage = 1;
    applySorting();
}

function applySorting() {
    const sortBy = document.getElementById('sort-by').value;
    
    switch (sortBy) {
        case 'name':
            currentApps.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            currentApps.sort((a, b) => b.rating - a.rating);
            break;
        case 'category':
            currentApps.sort((a, b) => a.category.localeCompare(b.category));
            break;
        case 'featured':
            currentApps.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    renderApps(currentApps.slice(0, appsPerPage * currentPage));
    updateResultsCount();
    updateLoadMoreButton();
}

function toggleAdvancedFilters() {
    const panel = document.getElementById('advanced-panel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

function toggleFeatureFilter(e) {
    e.target.classList.toggle('active');
    applyFilters();
}

function toggleView(e) {
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentView = e.target.dataset.view;
    const container = document.getElementById('apps-container');
    if (container) {
        container.className = `interactive-apps-grid ${currentView === 'list' ? 'list-view' : ''}`;
    }
}

function loadMoreApps() {
    currentPage++;
    const startIndex = (currentPage - 1) * appsPerPage;
    const endIndex = currentPage * appsPerPage;
    const additionalApps = currentApps.slice(startIndex, endIndex);
    
    if (additionalApps.length > 0) {
        renderApps(currentApps.slice(0, endIndex), true);
    }
    
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        const totalShown = currentPage * appsPerPage;
        if (totalShown >= currentApps.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function updateResultsCount() {
    const counter = document.getElementById('results-count');
    if (counter) {
        const shown = Math.min(currentPage * appsPerPage, currentApps.length);
        counter.textContent = `Showing ${shown} of ${currentApps.length} apps`;
    }
}

function renderApps(apps, append = false) {
    const container = document.getElementById('apps-container');
    if (!container) return;
    
    if (!append) {
        container.innerHTML = '';
    }
    
    apps.forEach(app => {
        if (!append || !document.querySelector(`[data-app-id="${app.id}"]`)) {
            const appCard = createAppCard(app);
            container.appendChild(appCard);
        }
    });
}

function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'interactive-app-card';
    card.setAttribute('data-app-id', app.id);
    
    const isFavorite = favorites.includes(app.id);
    const stars = generateStars(app.rating);
    
    card.innerHTML = `
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${app.id})">
            <i class="fas fa-heart"></i>
        </button>
        
        <div class="app-header">
            <div class="app-icon">
                <i class="${app.icon}"></i>
            </div>
            <div class="app-info">
                <h3>${app.name}</h3>
                <div class="app-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${app.rating}</span>
                </div>
                <div class="app-price ${app.price}">${formatPrice(app.price)}</div>
            </div>
        </div>
        
        <p class="app-description">${app.description}</p>
        
        <div class="app-features">
            ${app.features.map(feature => `<span class="app-feature">${formatFeature(feature)}</span>`).join('')}
        </div>
        
        <div class="app-actions">
            <a href="${app.playStoreUrl}" target="_blank" class="app-btn" onclick="trackAppClick('${app.name}', 'download')">
                <i class="fab fa-google-play"></i>
                Download
            </a>
            <button class="app-btn secondary" onclick="showAppDetails(${app.id})">
                <i class="fas fa-info-circle"></i>
                Details
            </button>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function formatPrice(price) {
    switch (price) {
        case 'free': return 'Free';
        case 'freemium': return 'Freemium';
        case 'paid': return 'Paid';
        default: return price;
    }
}

function formatFeature(feature) {
    const featureMap = {
        'ai': 'AI-Powered',
        'automation': 'Automation',
        'analytics': 'Analytics',
        'video': 'Video',
        'image': 'Image',
        'text': 'Text',
        'audio': 'Audio',
        'scheduling': 'Scheduling',
        'editing': 'Editing',
        'voice': 'Voice',
        'social': 'Social'
    };
    
    return featureMap[feature] || feature;
}

function toggleFavorite(appId) {
    const index = favorites.indexOf(appId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(appId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update the favorite button
    const btn = document.querySelector(`[data-app-id="${appId}"] .favorite-btn`);
    if (btn) {
        btn.classList.toggle('active');
    }
    
    // Show notification
    showNotification(index > -1 ? 'Removed from favorites' : 'Added to favorites');
}

function showAppDetails(appId) {
    const app = appsDatabase.find(a => a.id === appId);
    if (!app) return;
    
    const modal = createModal(`
        <div style="text-align: center; padding: 20px;">
            <div class="app-icon" style="margin: 0 auto 20px; background: linear-gradient(45deg, #667eea, #764ba2);">
                <i class="${app.icon}"></i>
            </div>
            <h2>${app.name}</h2>
            <p style="color: #718096; margin-bottom: 20px;">${app.developer}</p>
            
            <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 20px;">
                <div>
                    <strong>${app.rating}</strong><br>
                    <small>Rating</small>
                </div>
                <div>
                    <strong>${app.size}</strong><br>
                    <small>Size</small>
                </div>
                <div>
                    <strong>${formatPrice(app.price)}</strong><br>
                    <small>Price</small>
                </div>
            </div>
            
            <p style="margin-bottom: 20px; line-height: 1.6;">${app.description}</p>
            
            <div style="margin-bottom: 20px;">
                ${app.features.map(feature => `<span class="app-feature">${formatFeature(feature)}</span>`).join(' ')}
            </div>
            
            <a href="${app.playStoreUrl}" target="_blank" class="app-btn" style="margin-right: 10px;">
                <i class="fab fa-google-play"></i>
                Download from Play Store
            </a>
            <button class="app-btn secondary" onclick="closeModal()">
                Close
            </button>
        </div>
    `);
    
    document.body.appendChild(modal);
}

function createModal(content) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 15px;
        max-width: 500px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    `;
    
    modalContent.innerHTML = content;
    modal.appendChild(modalContent);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    return modal;
}

function closeModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        modal.remove();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function trackAppClick(appName, action) {
    console.log(`Tracked: ${action} clicked for ${appName}`);
    // Here you would integrate with your analytics service
}

// Add mobile menu styles
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 300px;
            height: calc(100vh - 70px);
            background: rgba(102, 126, 234, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 50px;
            transition: right 0.3s ease;
            z-index: 99;
        }
        
        .nav-links.active {
            right: 0;
        }
        
        .nav-links li {
            margin-bottom: 30px;
        }
        
        .mobile-menu.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    }
    
    .dark-theme {
        filter: invert(1) hue-rotate(180deg);
    }
    
    .dark-theme img,
    .dark-theme video,
    .dark-theme iframe {
        filter: invert(1) hue-rotate(180deg);
    }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add service worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed');
        });
    });
}
