(function () {
    const firstNames = [
        'Alex', 'Jordan', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery', 'Blake', 'Cameron', 'Dakota',
        'Elliott', 'Finley', 'Harper', 'Hayden', 'Jamie', 'Kai', 'Logan', 'Marley', 'Noah', 'Parker',
        'Reese', 'River', 'Rowan', 'Sage', 'Skyler', 'Taylor', 'Emma', 'Liam', 'Olivia', 'Ethan',
        'Sophia', 'Mason', 'Isabella', 'Lucas', 'Mia', 'Oliver', 'Ava', 'Elijah', 'Charlotte', 'James',
        'Amelia', 'Benjamin', 'Harper', 'Henry', 'Evelyn', 'Sebastian', 'Abigail', 'Jack', 'Emily', 'Aiden',
        'Elizabeth', 'Owen', 'Sofia', 'Samuel', 'Avery', 'Matthew', 'Ella', 'Joseph', 'Scarlett', 'Levi',
        'Grace', 'David', 'Chloe', 'John', 'Victoria', 'Wyatt', 'Riley', 'Luke', 'Aria', 'Julian',
        'Lily', 'Gabriel', 'Aurora', 'Anthony', 'Zoey', 'Dylan', 'Penelope', 'Isaac', 'Layla', 'Grayson',
        'Nora', 'Christopher', 'Camila', 'Joshua', 'Hannah', 'Andrew', 'Lillian', 'Theodore', 'Addison', 'Caleb',
        'Eleanor', 'Ryan', 'Natalie', 'Nathan', 'Luna', 'Thomas', 'Savannah', 'Leo', 'Brooklyn', 'Isaiah',
        'Leah', 'Charles', 'Zoe', 'Josiah', 'Stella', 'Hudson', 'Hazel', 'Christian', 'Ellie', 'Hunter',
        'Paisley', 'Connor', 'Audrey', 'Eli', 'Skylar', 'Ezra', 'Violet', 'Aaron', 'Claire', 'Landon'
    ];

    const lastNames = [
        'Chen', 'Patel', 'Kim', 'Nguyen', 'Garcia', 'Martinez', 'Johnson', 'Williams', 'Brown', 'Jones',
        'Miller', 'Davis', 'Rodriguez', 'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin',
        'Lee', 'Thompson', 'White', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Young', 'Hall',
        'Allen', 'King', 'Wright', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Hill', 'Ramirez',
        'Campbell', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Evans', 'Turner', 'Torres', 'Parker', 'Collins',
        'Edwards', 'Stewart', 'Flores', 'Morris', 'Murphy', 'Rivera', 'Cook', 'Rogers', 'Morgan', 'Peterson',
        'Cooper', 'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard', 'Ward', 'Cox', 'Diaz',
        'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 'Reyes', 'Cruz', 'Hughes',
        'Price', 'Myers', 'Long', 'Foster', 'Sanders', 'Ross', 'Morales', 'Powell', 'Sullivan', 'Russell',
        'Ortiz', 'Jenkins', 'Gutierrez', 'Perry', 'Butler', 'Barnes', 'Fisher', 'Henderson', 'Coleman', 'Simmons'
    ];

    const roles = [
        'CEO', 'CTO', 'COO', 'Founder', 'Co-Founder', 'VP of Engineering', 'VP of Product',
        'Director of Operations', 'Head of AI', 'Chief Data Officer', 'Product Manager',
        'Engineering Manager', 'Lead Developer', 'Solutions Architect', 'IT Director',
        'Marketing Director', 'CMO', 'CFO', 'Operations Manager', 'Business Analyst',
        'Digital Transformation Lead', 'Innovation Director', 'Head of Technology',
        'Senior Software Engineer', 'Principal Architect', 'VP of Sales', 'Growth Lead'
    ];

    const companies = [
        'NexaTech', 'Quantum Labs', 'Vertex AI', 'CloudForge', 'DataPulse', 'SynthLogic',
        'NeuralPath', 'ByteStream', 'InnovateCore', 'TechNova', 'Axiom Systems', 'Pulse Digital',
        'Horizon Analytics', 'Catalyst AI', 'Prism Solutions', 'Elevate Tech', 'Fusion Dynamics',
        'Meridian Software', 'Optima Ventures', 'Stratos AI', 'Lumina Corp', 'CipherWorks',
        'Atlas Digital', 'Zenith Labs', 'Orbit Technologies', 'Nexus Innovations', 'Vanguard AI',
        'Pinnacle Systems', 'Aurora Tech', 'Helix Solutions', 'Momentum AI', 'Spark Dynamics',
        'Titan Software', 'Echo Ventures', 'Flux Technologies', 'GridPoint AI', 'HyperScale',
        'InfiniTech', 'Juno Systems', 'Kinetic Labs', 'LogicStream', 'MetaForge', 'NovaCore',
        'OmniTech', 'Parallel AI', 'Quanta Systems', 'RapidScale', 'Signal Labs', 'TensorFlow Inc',
        'Unity Digital', 'Vector Space', 'WaveFront AI', 'Xenon Tech', 'Yield Analytics', 'Zephyr Labs',
        'Alpha Dynamics', 'Beta Systems', 'CoreLogic AI', 'Delta Ventures', 'Epsilon Tech',
        'Gamma Solutions', 'Iota Innovations', 'Kappa Digital', 'Lambda Labs', 'Sigma Analytics',
        'Theta Systems', 'Omega Technologies', 'Phoenix AI', 'Sapphire Tech', 'Emerald Solutions',
        'Ruby Dynamics', 'Diamond Labs', 'Platinum Systems', 'Gold Standard Tech', 'Silver Stream AI',
        'Copper Forge', 'Ironclad Software', 'Steel Dynamics', 'Carbon Labs', 'Silicon Valley AI',
        'Crystal Clear Tech', 'Marble Systems', 'Granite Solutions', 'Obsidian AI', 'Quartz Digital',
        'Amber Technologies', 'Jade Innovations', 'Onyx Systems', 'Pearl Analytics', 'Coral Tech',
        'Cobalt Solutions', 'Indigo Labs', 'Violet AI', 'Crimson Dynamics', 'Azure Systems',
        'Teal Technologies', 'Magenta Labs', 'Cyan Solutions', 'Fuchsia AI', 'Lime Digital'
    ];

    const services = ['AI Automation', 'Software Development', 'Mobile Applications', 'SEO Services', 'Digital Marketing', 'Website Designing'];

    const quoteTemplates = [
        'Code XP Solutions revolutionized our {service} workflow. We saw a {percent}% improvement in efficiency within the first quarter.',
        'The AI solutions from Code XP transformed how we operate. Their team delivered beyond our expectations on every milestone.',
        'Working with Code XP on {service} was seamless. Professional, innovative, and results-driven — exactly what we needed.',
        'Their expertise in {service} helped us scale faster than we imagined. The ROI has been phenomenal.',
        'Code XP\'s team understood our vision immediately. The {service} solution they built is now core to our business.',
        'From consultation to deployment, Code XP exceeded expectations. Our {service} project was delivered on time and under budget.',
        'The quality of their AI automation work is unmatched. We\'ve reduced manual processes by {percent}% since launch.',
        'Code XP Solutions is our go-to partner for all digital initiatives. Their {service} expertise is world-class.',
        'Incredible attention to detail on our {service} project. The user experience improvements drove a {percent}% increase in engagement.',
        'We evaluated multiple vendors — Code XP stood out for their technical depth and transparent communication.',
        'Their predictive analytics solution gave us insights we never had before. Truly transformative technology.',
        'The mobile app Code XP built for us has a 4.9-star rating. Our customers absolutely love it.',
        'SEO results speak for themselves — organic traffic up {percent}% in six months. Outstanding work.',
        'Code XP\'s digital marketing strategy tripled our lead generation. Best investment we\'ve made this year.',
        'Enterprise-grade security, flawless execution, and ongoing support. Code XP delivers on every promise.',
        'The custom software they developed integrated perfectly with our legacy systems. Zero downtime during migration.',
        'Their AI chatbot handles 80% of customer inquiries automatically. Customer satisfaction scores are at an all-time high.',
        'Beautiful website design that perfectly captures our brand. Conversion rates improved by {percent}% immediately.',
        'Code XP\'s agile approach kept us involved at every step. The final product was exactly what we envisioned.',
        'We\'ve partnered with Code XP on three projects now. Consistent excellence every single time.'
    ];

    function seededRandom(seed) {
        let x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    function pick(arr, seed) {
        return arr[Math.floor(seededRandom(seed) * arr.length)];
    }

    function generateTestimonials(count) {
        const testimonials = [];
        const usedNames = new Set();

        for (let i = 0; i < count; i++) {
            let firstName, lastName, fullName;
            let attempts = 0;
            do {
                firstName = pick(firstNames, i * 7 + attempts);
                lastName = pick(lastNames, i * 13 + attempts);
                fullName = `${firstName} ${lastName}`;
                attempts++;
            } while (usedNames.has(fullName) && attempts < 50);
            usedNames.add(fullName);

            const service = pick(services, i * 3);
            const percent = Math.floor(seededRandom(i * 11) * 60) + 20;
            let quote = pick(quoteTemplates, i * 17)
                .replace('{service}', service)
                .replace('{percent}', percent);

            const gender = seededRandom(i * 23) > 0.5 ? 'male' : 'female';
            const avatarStyle = pick(['personas', 'lorelei', 'notionists', 'avataaars'], i * 31);

            testimonials.push({
                id: i + 1,
                name: fullName,
                role: pick(roles, i * 5),
                company: pick(companies, i * 19),
                quote: quote,
                rating: seededRandom(i * 29) > 0.15 ? 5 : 4,
                avatar: `https://api.dicebear.com/7.x/${avatarStyle}/png?seed=${encodeURIComponent(fullName)}&size=96`,
                service: service
            });
        }
        return testimonials;
    }

    function createStars(rating) {
        return Array.from({ length: 5 }, (_, i) =>
            `<i data-lucide="star" class="${i < rating ? '' : 'star-empty'}"></i>`
        ).join('');
    }

    function createCardHTML(t) {
        return `
            <div class="testimonial-card" data-service="${t.service}" data-name="${t.name.toLowerCase()}">
                <div class="rating">${createStars(t.rating)}</div>
                <p class="testimonial-text">"${t.quote}"</p>
                <div class="testimonial-author">
                    <img class="author-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy" width="48" height="48">
                    <div class="author-info">
                        <h4>${t.name}</h4>
                        <p>${t.role}, ${t.company}</p>
                    </div>
                </div>
            </div>`;
    }

    const ALL_TESTIMONIALS = generateTestimonials(120);
    let visibleCount = 24;
    let currentFilter = 'all';

    function renderMarquee() {
        const row1 = document.getElementById('marqueeRow1');
        const row2 = document.getElementById('marqueeRow2');
        if (!row1 || !row2) return;

        const featured = ALL_TESTIMONIALS.slice(0, 20);
        const featured2 = ALL_TESTIMONIALS.slice(20, 40);
        const html1 = featured.map(createCardHTML).join('');
        const html2 = featured2.map(createCardHTML).join('');
        row1.innerHTML = html1 + html1;
        row2.innerHTML = html2 + html2;
        if (typeof initIcons === 'function') initIcons();
    }

    function getFiltered() {
        let list = ALL_TESTIMONIALS;
        if (currentFilter !== 'all') {
            list = list.filter(t => t.service === currentFilter);
        }
        const search = document.getElementById('testimonialSearch');
        if (search && search.value.trim()) {
            const q = search.value.trim().toLowerCase();
            list = list.filter(t =>
                t.name.toLowerCase().includes(q) ||
                t.company.toLowerCase().includes(q) ||
                t.quote.toLowerCase().includes(q)
            );
        }
        return list;
    }

    function renderGrid() {
        const grid = document.getElementById('testimonialGrid');
        const counter = document.getElementById('testimonialVisibleCount');
        const loadBtn = document.getElementById('loadMoreBtn');
        if (!grid) return;

        const filtered = getFiltered();
        const toShow = filtered.slice(0, visibleCount);
        grid.innerHTML = toShow.map(createCardHTML).join('');

        if (counter) {
            counter.textContent = `${filtered.length}+`;
        }

        if (loadBtn) {
            loadBtn.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';
            loadBtn.textContent = `Load More (${Math.min(24, filtered.length - visibleCount)} remaining)`;
        }

        if (typeof initIcons === 'function') initIcons();
    }

    function initTestimonials() {
        renderMarquee();
        renderGrid();

        const loadBtn = document.getElementById('loadMoreBtn');
        if (loadBtn) {
            loadBtn.addEventListener('click', () => {
                visibleCount += 24;
                renderGrid();
            });
        }

        const search = document.getElementById('testimonialSearch');
        if (search) {
            let debounce;
            search.addEventListener('input', () => {
                clearTimeout(debounce);
                debounce = setTimeout(() => {
                    visibleCount = 24;
                    renderGrid();
                }, 300);
            });
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                visibleCount = 24;
                renderGrid();
            });
        });
    }

    window.Testimonials = { init: initTestimonials, count: ALL_TESTIMONIALS.length };
})();
