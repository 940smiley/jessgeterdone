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
