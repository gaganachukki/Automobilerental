// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Scrolling Animations
    // Select all sections and cards that should animate on scroll
    const selectorsToAnimate = [
        'section:not(.hero-section):not(.about-hero):not(.blog-page-header):not(.services-page-header):not(.contact-page-header):not(.rental-page-header)', 
        '.car-card',
        '.feature-card',
        '.testimonial-card',
        '.step',
        '.destination-card',
        '.value-card',
        '.timeline-item',
        '.perk-card',
        '.req-item',
        '.addon-card',
        '.blog-card',
        '.location-card',
        '.hero-content'
    ];

    const elementsToAnimate = document.querySelectorAll(selectorsToAnimate.join(', '));

    // Add the initial 'reveal' class to all selected elements
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal');
    });

    // Intersection Observer setup
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to trigger CSS transition
                entry.target.classList.add('reveal-active');
                
                // Unobserve so it only animates once when scrolling down
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing elements
    elementsToAnimate.forEach(el => {
        // Fallback for mobile: immediately reveal to avoid IntersectionObserver bugs 
        // when body has overflow-x: hidden on iOS/Chromium
        if (window.innerWidth <= 768) {
            el.classList.add('reveal-active');
        } else {
            observer.observe(el);
        }
    });

    // 2. Add subtle hover classes to any missing interactive elements
    const links = document.querySelectorAll('a:not(.btn-primary):not(.btn-secondary):not(.btn-login):not(.nav-links a):not(.footer-links a)');
    links.forEach(link => {
        // If it's a simple text link that isn't a main button, ensure it has a transition
        link.style.transition = 'color 0.3s ease, opacity 0.3s ease';
    });
});
