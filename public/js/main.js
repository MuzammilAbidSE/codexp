function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('servicesDropdown').classList.toggle('show');
}

document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('servicesDropdown');
    if (!event.target.closest('.dropdown') && dropdown) {
        dropdown.classList.remove('show');
    }
});

function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function scrollToSection(id) {
    showPage('home');
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    document.getElementById('navLinks').classList.remove('active');
    const dropdown = document.getElementById('servicesDropdown');
    if (dropdown) dropdown.classList.remove('show');

    window.scrollTo(0, 0);
    initIcons();
    initScrollAnimations();
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    event.target.reset();
}

function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('codexp-theme', theme);
        initIcons();
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = root.getAttribute('data-theme') || 'light';
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }
}

function initNavScroll() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        const suffix = counter.dataset.suffix || '';
        const obj = { val: 0 };

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.create({
                trigger: counter,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.to(obj, {
                        val: target,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: () => {
                            counter.textContent = Math.floor(obj.val) + suffix;
                        }
                    });
                }
            });
        } else {
            counter.textContent = target + suffix;
        }
    });
}

function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.utils.toArray('.reveal').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.reveal-left').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, x: -60 },
            {
                opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.reveal-right').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, x: 60 },
            {
                opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.reveal-scale').forEach((el, i) => {
        gsap.fromTo(el,
            { opacity: 0, scale: 0.85 },
            {
                opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)', delay: i * 0.08,
                scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
            }
        );
    });

    gsap.utils.toArray('.process-step').forEach((el, i) => {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                opacity: 1, y: 0, duration: 0.6, delay: i * 0.12, ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
            }
        );
    });
}

function initHeroAnimation() {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-badge', { opacity: 0, y: 30, duration: 0.6 })
      .from('.hero h1', { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
      .from('.hero p', { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
      .from('.hero-buttons', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3')
      .from('.hero-stat', { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 }, '-=0.2');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    initNavScroll();
    initTheme();
    initIcons();
    initHeroAnimation();
    initCounters();
    initScrollAnimations();

    if (window.Testimonials) {
        window.Testimonials.init();
    }
});
