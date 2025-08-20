{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // DOM Content Loaded\
document.addEventListener('DOMContentLoaded', function() \{\
    \
    // Mobile Navigation Toggle\
    const navToggle = document.getElementById('nav-toggle');\
    const navMenu = document.getElementById('nav-menu');\
    \
    navToggle.addEventListener('click', () => \{\
        navMenu.classList.toggle('active');\
        navToggle.classList.toggle('active');\
    \});\
    \
    // Close mobile menu when clicking on a link\
    document.querySelectorAll('.nav-link').forEach(link => \{\
        link.addEventListener('click', () => \{\
            navMenu.classList.remove('active');\
            navToggle.classList.remove('active');\
        \});\
    \});\
    \
    // Smooth Scrolling for Navigation Links\
    document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
        anchor.addEventListener('click', function (e) \{\
            e.preventDefault();\
            const target = document.querySelector(this.getAttribute('href'));\
            if (target) \{\
                target.scrollIntoView(\{\
                    behavior: 'smooth',\
                    block: 'start'\
                \});\
            \}\
        \});\
    \});\
    \
    // Animated Counters\
    function animateCounters() \{\
        const counters = document.querySelectorAll('.metric-number');\
        \
        counters.forEach(counter => \{\
            const target = parseInt(counter.getAttribute('data-target'));\
            const increment = target / 100;\
            let current = 0;\
            \
            const updateCounter = () => \{\
                if (current < target) \{\
                    current += increment;\
                    counter.textContent = Math.ceil(current);\
                    setTimeout(updateCounter, 20);\
                \} else \{\
                    counter.textContent = target;\
                \}\
            \};\
            \
            // Check if element is in viewport\
            const observer = new IntersectionObserver((entries) => \{\
                entries.forEach(entry => \{\
                    if (entry.isIntersecting) \{\
                        updateCounter();\
                        observer.unobserve(entry.target);\
                    \}\
                \});\
            \});\
            \
            observer.observe(counter);\
        \});\
    \}\
    \
    // Skill Bar Animations\
    function animateSkillBars() \{\
        const skillBars = document.querySelectorAll('.skill-progress');\
        \
        const observer = new IntersectionObserver((entries) => \{\
            entries.forEach(entry => \{\
                if (entry.isIntersecting) \{\
                    const width = entry.target.getAttribute('data-width');\
                    entry.target.style.width = width + '%';\
                    observer.unobserve(entry.target);\
                \}\
            \});\
        \});\
        \
        skillBars.forEach(bar => observer.observe(bar));\
    \}\
    \
    // Scroll Animations\
    function initScrollAnimations() \{\
        const animatedElements = document.querySelectorAll('.timeline-item, .case-card, .cert-item, .skill-category');\
        \
        const observer = new IntersectionObserver((entries) => \{\
            entries.forEach((entry, index) => \{\
                if (entry.isIntersecting) \{\
                    setTimeout(() => \{\
                        entry.target.style.opacity = '1';\
                        entry.target.style.transform = 'translateY(0)';\
                    \}, index * 100);\
                    observer.unobserve(entry.target);\
                \}\
            \});\
        \});\
        \
        animatedElements.forEach(el => \{\
            el.style.opacity = '0';\
            el.style.transform = 'translateY(30px)';\
            el.style.transition = 'all 0.6s ease';\
            observer.observe(el);\
        \});\
    \}\
    \
    // Active Navigation Link Highlighting\
    function updateActiveNavLink() \{\
        const sections = document.querySelectorAll('section[id]');\
        const navLinks = document.querySelectorAll('.nav-link');\
        \
        window.addEventListener('scroll', () => \{\
            let current = '';\
            \
            sections.forEach(section => \{\
                const sectionTop = section.offsetTop - 100;\
                if (scrollY >= sectionTop) \{\
                    current = section.getAttribute('id');\
                \}\
            \});\
            \
            navLinks.forEach(link => \{\
                link.classList.remove('active');\
                if (link.getAttribute('href') === `#$\{current\}`) \{\
                    link.classList.add('active');\
                \}\
            \});\
        \});\
    \}\
    \
    // Contact Form Handling\
    function handleContactForm() \{\
        const form = document.getElementById('contactForm');\
        \
        form.addEventListener('submit', function(e) \{\
            e.preventDefault();\
            \
            // Get form data\
            const formData = new FormData(form);\
            const data = Object.fromEntries(formData);\
            \
            // Simulate form submission (replace with actual form handling)\
            const submitBtn = form.querySelector('button[type="submit"]');\
            const originalText = submitBtn.innerHTML;\
            \
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';\
            submitBtn.disabled = true;\
            \
            // Simulate API call delay\
            setTimeout(() => \{\
                alert('Thank you for your message! I\\'ll get back to you soon.');\
                form.reset();\
                submitBtn.innerHTML = originalText;\
                submitBtn.disabled = false;\
            \}, 2000);\
            \
            // In a real application, you would send the data to your backend:\
            // fetch('/api/contact', \{\
            //     method: 'POST',\
            //     headers: \{\
            //         'Content-Type': 'application/json',\
            //     \},\
            //     body: JSON.stringify(data)\
            // \})\
            // .then(response => response.json())\
            // .then(data => \{\
            //     // Handle success\
            // \})\
            // .catch(error => \{\
            //     // Handle error\
            // \});\
        \});\
    \}\
    \
    // Navbar Background on Scroll\
    function handleNavbarScroll() \{\
        const navbar = document.querySelector('.navbar');\
        \
        window.addEventListener('scroll', () => \{\
            if (window.scrollY > 50) \{\
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';\
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';\
            \} else \{\
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';\
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';\
            \}\
        \});\
    \}\
    \
    // Case Study Modal (for future enhancement)\
    function initCaseStudyModals() \{\
        const caseButtons = document.querySelectorAll('.case-footer .btn-outline');\
        \
        caseButtons.forEach(button => \{\
            button.addEventListener('click', (e) => \{\
                e.preventDefault();\
                // For now, just scroll to top of the case\
                button.closest('.case-card').scrollIntoView(\{\
                    behavior: 'smooth',\
                    block: 'start'\
                \});\
                \
                // Future: Open modal with detailed case study\
                console.log('Case study modal would open here');\
            \});\
        \});\
    \}\
    \
    // Typing Animation for Hero Title (optional enhancement)\
    function typewriterEffect() \{\
        const titleElement = document.querySelector('.hero-title');\
        const text = titleElement.innerHTML;\
        titleElement.innerHTML = '';\
        \
        let index = 0;\
        const speed = 50;\
        \
        function type() \{\
            if (index < text.length) \{\
                titleElement.innerHTML += text.charAt(index);\
                index++;\
                setTimeout(type, speed);\
            \}\
        \}\
        \
        // Uncomment to enable typewriter effect\
        // setTimeout(type, 1000);\
    \}\
    \
    // Easter Egg: Konami Code\
    function konamiCode() \{\
        let konamiSequence = [];\
        const konamiPattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // \uc0\u8593 \u8593 \u8595 \u8595 \u8592 \u8594 \u8592 \u8594 BA\
        \
        document.addEventListener('keydown', (e) => \{\
            konamiSequence.push(e.keyCode);\
            \
            if (konamiSequence.length > konamiPattern.length) \{\
                konamiSequence.shift();\
            \}\
            \
            if (JSON.stringify(konamiSequence) === JSON.stringify(konamiPattern)) \{\
                // Easter egg activated!\
                document.body.style.transform = 'rotate(360deg)';\
                document.body.style.transition = 'transform 2s ease';\
                \
                setTimeout(() => \{\
                    document.body.style.transform = 'none';\
                    alert('\uc0\u55356 \u57225  Konami Code activated! You found the easter egg!');\
                \}, 2000);\
                \
                konamiSequence = [];\
            \}\
        \});\
    \}\
    \
    // Performance Monitoring\
    function performanceMonitoring() \{\
        // Log page load performance\
        window.addEventListener('load', () => \{\
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;\
            console.log(`Page loaded in $\{loadTime\}ms`);\
            \
            // Track if load time is too slow\
            if (loadTime > 3000) \{\
                console.warn('Page load time is slow. Consider optimizations.');\
            \}\
        \});\
    \}\
    \
    // Initialize all functions\
    animateCounters();\
    animateSkillBars();\
    initScrollAnimations();\
    updateActiveNavLink();\
    handleContactForm();\
    handleNavbarScroll();\
    initCaseStudyModals();\
    konamiCode();\
    performanceMonitoring();\
    \
    // Add loading complete class to body\
    setTimeout(() => \{\
        document.body.classList.add('loaded');\
    \}, 100);\
\});\
\
// Utility Functions\
function debounce(func, wait) \{\
    let timeout;\
    return function executedFunction(...args) \{\
        const later = () => \{\
            clearTimeout(timeout);\
            func(...args);\
        \};\
        clearTimeout(timeout);\
        timeout = setTimeout(later, wait);\
    \};\
\}\
\
function throttle(func, limit) \{\
    let inThrottle;\
    return function() \{\
        const args = arguments;\
        const context = this;\
        if (!inThrottle) \{\
            func.apply(context, args);\
            inThrottle = true;\
            setTimeout(() => inThrottle = false, limit);\
        \}\
    \};\
\}\
\
// Export functions for potential use in other scripts\
if (typeof module !== 'undefined' && module.exports) \{\
    module.exports = \{\
        debounce,\
        throttle\
    \};\
\}}
