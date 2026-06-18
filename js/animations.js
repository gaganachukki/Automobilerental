document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-reveal class to elements we want to animate on scroll
    const sections = document.querySelectorAll('.dash-section, .stat-card, .chart-container');
    sections.forEach(sec => {
        if (!sec.classList.contains('scroll-reveal')) {
            sec.classList.add('scroll-reveal');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
});
