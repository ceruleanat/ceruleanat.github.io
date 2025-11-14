document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------
    // Mobile Navigation
    // ----------------------------------------
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.desktop-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            mobileNav.classList.add('mobile-nav');
        });

        // Close menu when a link is clicked
        const navLinks = mobileNav.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            });
        });
    }

    // ----------------------------------------
    // Intersection Observer for section animations
    // ----------------------------------------
    const sections = document.querySelectorAll('.content-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });
    sections.forEach(section => { sectionObserver.observe(section); });

    // ----------------------------------------
    // Active navigation link highlighting on scroll
    // ----------------------------------------
    const mainNavLinks = document.querySelectorAll('nav .nav-links a');
    const allSections = document.querySelectorAll('main section');
    const highlightNav = () => {
        let currentSectionId = '';
        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });
        mainNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', highlightNav);
    highlightNav();

    // ----------------------------------------
    // Cursor Spotlight Effect
    // ----------------------------------------
    const updateCursor = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty('--mouse-x', x + 'px');
        document.documentElement.style.setProperty('--mouse-y', y + 'px');
    };
    window.addEventListener('mousemove', updateCursor);

});