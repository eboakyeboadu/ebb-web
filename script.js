// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth Scrolling for Navigation Links
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
    
    // Animated Counters
    function animateCounters() {
        const counters = document.querySelectorAll('.metric-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Check if element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
    
    // Skill Bar Animations
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                    observer.unobserve(entry.target);
                }
            });
        });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    // Scroll Animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.timeline-item, .case-card, .cert-item, .skill-category');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Active Navigation Link Highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Contact Form Handling
    function handleContactForm() {
        const form = document.getElementById('contactForm');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                // Simulate form submission
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call delay
                setTimeout(() => {
                    alert('Thank you for your message! I\'ll get back to you soon.');
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
                
                // Log form data for debugging
                console.log('Form data:', data);
            });
        }
    }
    
    // Navbar Background on Scroll
    function handleNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                }
            });
        }
    }
    
    // Case Study Modal Handlers
    function initCaseStudyModals() {
        const caseButtons = document.querySelectorAll('.case-footer .btn-outline');
        
        caseButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                // Scroll to top of the case card
                const caseCard = button.closest('.case-card');
                if (caseCard) {
                    caseCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Future enhancement: Open modal with detailed case study
                console.log('Case study modal would open here');
            });
        });
    }
    
    // Typing Animation for Hero Title (optional)
    function typewriterEffect() {
        const titleElement = document.querySelector('.hero-title');
        if (!titleElement) return;
        
        const text = titleElement.innerHTML;
        titleElement.innerHTML = '';
        
        let index = 0;
        const speed = 50;
        
        function type() {
            if (index < text.length) {
                titleElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        
        // Uncomment the next line to enable typewriter effect
        // setTimeout(type, 1000);
    }
    
    // Easter Egg: Konami Code
    function konamiCode() {
        let konamiSequence = [];
        const konamiPattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
        
        document.addEventListener('keydown', (e) => {
            konamiSequence.push(e.keyCode);
            
            if (konamiSequence.length > konamiPattern.length) {
                konamiSequence.shift();
            }
            
            if (JSON.stringify(konamiSequence) === JSON.stringify(konamiPattern)) {
                // Easter egg activated!
                document.body.style.transform = 'rotate(360deg)';
                document.body.style.transition = 'transform 2s ease';
                
                setTimeout(() => {
                    document.body.style.transform = 'none';
                    alert('🎉 Konami Code activated! You found the easter egg!');
                }, 2000);
                
                konamiSequence = [];
            }
        });
    }
    
    // Performance Monitoring
    function performanceMonitoring() {
        window.addEventListener('load', () => {
            if (performance && performance.timing) {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page loaded in ${loadTime}ms`);
                
                // Track if load time is too slow
                if (loadTime > 3000) {
                    console.warn('Page load time is slow. Consider optimizations.');
                }
            }
        });
    }
    
    // Add CSS class for animations
    function addAnimationClasses() {
        const style = document.createElement('style');
        style.textContent = `
            .nav-toggle.active .bar:nth-child(2) {
                opacity: 0;
            }
            .nav-toggle.active .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            .nav-toggle.active .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
            .nav-link.active {
                color: var(--primary-color);
            }
            .nav-link.active::after {
                width: 100%;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize all functions
    animateCounters();
    animateSkillBars();
    initScrollAnimations();
    updateActiveNavLink();
    handleContactForm();
    handleNavbarScroll();
    initCaseStudyModals();
    typewriterEffect();
    konamiCode();
    performanceMonitoring();
    addAnimationClasses();
    
    // Add loading complete class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Log that everything is loaded
    console.log('Portfolio website initialized successfully!');
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Global functions (available from console for debugging)
window.portfolioUtils = {
    debounce,
    throttle
};

// Handle browser back/forward navigation
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.section) {
        const section = document.getElementById(e.state.section);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add section navigation to browser history
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        const sectionId = this.getAttribute('href').substring(1);
        history.pushState({ section: sectionId }, '', `#${sectionId}`);
    });
});
