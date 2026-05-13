// ============================================
// INFRASTRUCTURE MODE - JAVASCRIPT
// ============================================

// Import CONFIG from the main script
// We'll load it dynamically or define it here
let CONFIG = {
    // Personal Info
    name: "S. S. Mahmud Turza",
    titles: [
        "Backend Developer",
        "Researcher",
        "Undergraduate Student",
        "Problem Solver"
    ],

    // Skills organized by category
    skills: [
        {
            category: "Languages",
            icon: "fas fa-code",
            items: ["Python", "JavaScript", "C++", "Java"]
        },
        {
            category: "Frontend",
            icon: "fas fa-laptop-code",
            items: ["React.js", "Vite", "HTML", "CSS"]
        },
        {
            category: "Backend",
            icon: "fas fa-server",
            items: ["Node.js", "Express.js", "FastAPI", "REST API"]
        },
        {
            category: "Database",
            icon: "fas fa-database",
            items: ["MySQL", "PostGreSQL", "MongoDB", "FireBase", "Vector Databases"]
        },
        {
            category: "ML/AI",
            icon: "fas fa-robot",
            items: ["PyTorch", "Scikit-learn", "LLM", "RAG", "Langchain", "Embeddings"]
        },
        {
            category: "Cloud & AWS",
            icon: "fas fa-cloud",
            items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS ECR", "AWS ECS", "CloudFormation"]
        },
        {
            category: "System Design",
            icon: "fas fa-sitemap",
            items: ["Microservices Architecture", "Distributed Systems"]
        },
        {
            category: "Async & Messaging",
            icon: "fas fa-exchange-alt",
            items: ["Background Jobs (Celery/Workers)", "Message Queues (Redis)"]
        },
        {
            category: "Caching & Performance",
            icon: "fas fa-tachometer-alt",
            items: ["Redis (Caching, Rate Limiting)"]
        },
        {
            category: "Networking",
            icon: "fas fa-network-wired",
            items: ["NGINX (Reverse Proxy, Load Balancing)"]
        },
        {
            category: "Dev Tools",
            icon: "fas fa-tools",
            items: ["Docker", "Git", "WebSocket"]
        }
    ],

    // Projects
    projects: [
        {
            title: "API & Load Tester — VS Code Extension",
            type: "Personal Project",
            description: "Developed a VS Code extension that combines a full-featured API client with OpenAPI auto-discovery and a real-time load testing engine, powered by Spring WebFlux and WebSocket dashboards for scalable, high-concurrency performance monitoring.",
            technologies: ["TypeScript", "React", "Vite", "Spring Boot (WebFlux/Netty)", "Java", "WebSocket", "Recharts"],
            github: "https://github.com/Turza39/api-tester-extension",
            live: "https://marketplace.visualstudio.com/items?itemName=ssmahmudturza.api-load-tester"
        },
        {
            title: "Tour Package Platform",
            type: "Team Project",
            description: "Developed a full-stack web app with an ML-based recommendation module for personalized tour packages. Built REST APIs with Node.js/Express and a React frontend; integrated Python model for recommendations.",
            technologies: ["React", "Node.js", "Express", "Python", "Scikit-learn", "MongoDB"],
            github: "https://github.com/Kaoserahamed/Task",
            live: null
        },
        {
            title: "MiniBot Chrome Extension",
            type: "Personal Project",
            description: "Built a Chrome extension integrating Google Gemini via API calls, using vector embeddings for contextual search across websites we visit. Implemented async data retrieval and modular UI components for efficient interaction.",
            technologies: ["FastAPI", "Gemini API", "VectorDB(FAISS)", "React"],
            github: "https://github.com/Turza39/bot-extension",
            live: null
        },
        {
            title: "Research Paper Assistant - A RAG System",
            type: "Personal Project",
            description: "It was given as an assessment task for an internship. I couldn't crack the opportunity, but I pushed myself to finish the project regardless.",
            technologies: ["FastAPI", "Gemini API", "QDrant", "React", "CSS"],
            github: "https://github.com/Turza39/research-paper-rag-assessment",
            live: null
        },
        {
            title: "SS-BUCKET- an E-commerce website ",
            type: "Personal Project",
            description: "Developed my first E-commerce website using MERN stack",
            technologies: ["MongoDB", "Express.js", "React", "Node.js"],
            github: "http://github.com/Turza39/SS-BUCKET--an-E-commerce-website",
            live: null
        }
    ],

    // Research
    research: [
        {
            title: "Deep Learning Approaches for Classifying Invasive Alien Plant Species in Bangladesh",
            conference: "28th International Conference on Computer and Information Technology (28th ICCIT 2025)",
            type: "Conference Paper",
            icon: "fas fa-leaf",
            year: "2025",
            status: "published",
            abstract: "This research explores deep learning methodologies for identifying and classifying invasive alien plant species in Bangladesh using computer vision techniques.",
            links: {
                paper: "{https://doi.org/10.1109/ICCIT68739.2025.11491085",
                github: null,
                slides: null
            }
        },
        {
            title: "Analyzing & Forecasting River Morphological Evolution Using Machine Learning & Spatiotemporal Neural Models.",
            conference: "Shahjalal University of Science and Technology",
            type: "Thesis (Ongoing)",
            status: "Ongoing Thesis",
            year: "2026",
            links: {
                paper: "https://drive.google.com/file/d/1f1CWO7tC4X2CJQJ8k69edKKz5D-Hwrut/view?usp=sharing"
            }
        },
        {
            title: "Does Audio-Text Fusion Improve Bangla Emotion Detection? An Empirical Study on a Novel Multimodal Dataset with Attention-Based Fusion",
            conference: "5th SPICSCON, 2026",
            type: "Conference Paper",
            year: "2026",
            // icon: "fas fa-leaf",
            status: "Pending",
            links: {
                paper: null,
                github: null,
                slides: null
            }
        }
    ],

    // Experience & Achievements
    experience: [
        {
            title: " SYMPSIST- 2025 Pitch Competition",
            organization: "IEEE IUBAT",
            date: "2025",
            description: "Placed 1st runner up."
        },
        {
            title: "DU AI Challenge",
            organization: "Dhaka University",
            date: "2025",
            description: "Placed 19th out of 44 teams in competitive AI challenge."
        },
        {
            title: "Game of Datathon Bitfest-2025",
            organization: "Khulna University of Engineering and Technology (KUET)",
            date: "2025",
            description: "Placed 43rd out of 108 teams in data science competition."
        },
        {
            title: "Executive Member",
            organization: "SUST CSE Society",
            date: "July 2023 - Dec 2023",
            description: "Active member contributing to organizing technical events and workshops."
        },
    ],

    // Certifications
    certifications: [
        {
            title: "Supervised Machine Learning: Regression & Classification",
            issuer: "Stanford via Coursera",
            date: "2025",
            link: "https://coursera.org/share/3dcc79180af277c0d0f0369aeb43c46c"
        },
        {
            title: "Docker Training Course for Beginners",
            issuer: "KodeKloud",
            date: "2025",
            link: "https://learn.kodekloud.com/certificate/868267ed-26d1-499f-94e6-e5b37ee4846a"
        },
        {
            title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
            issuer: "Amazon Web Services",
            date: "01/07/2026",
            link: "https://www.credly.com/go/oCRz9gio"
        },
        {
            title: "AWS Academy Graduate - Cloud Developing - Training Badge",
            issuer: "Amazon Web Services",
            date: "01/20/2026",
            link: "https://www.credly.com/go/Ct7zMT7u"
        }
    ]
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initInfrastructureMode();
});

function initInfrastructureMode() {
    setupNavigation();
    populateDashboard();
    populateCluster();
    populateServices();
    populateComputeCluster();
    populateTimeline();
    setupToggleButton();
    updateUptime();
    setInterval(updateUptime, 1000);
}

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// DASHBOARD SECTION
// ============================================

function populateDashboard() {
    const totalSkills = CONFIG.skills.reduce((sum, skill) => sum + skill.items.length, 0);
    const serviceCount = CONFIG.projects.length;

    document.getElementById('serviceCount').textContent = serviceCount;
    document.getElementById('techCountInfra').textContent = totalSkills;

    // Populate health grid
    populateHealthGrid();
}

function populateHealthGrid() {
    const healthGrid = document.getElementById('healthGrid');
    const healthItems = [
        { label: 'Services', value: `${CONFIG.projects.length}/7` },
        { label: 'Skills', value: '✓' },
        { label: 'Backends', value: '✓' },
        { label: 'Databases', value: '✓' },
        { label: 'ML/AI', value: '✓' },
        { label: 'Cloud', value: '✓' },
        { label: 'DevOps', value: '✓' }
    ];

    healthItems.forEach(item => {
        const healthItem = document.createElement('div');
        healthItem.className = 'health-item';
        healthItem.innerHTML = `
            <div class="health-label">${item.label}</div>
            <div class="health-status">${item.value}</div>
        `;
        healthGrid.appendChild(healthItem);
    });
}

function updateUptime() {
    const startDate = new Date('2022-09-01');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const uptimeElement = document.getElementById('uptime');
    if (uptimeElement) {
        uptimeElement.textContent = `${days}d ${hours}h ${minutes}m`;
    }
}

// ============================================
// ENGINEERING STACK DATA
// ============================================

const ENGINEERING_STACK = {
    backend: [
        { name: 'FastAPI', status: 'running', port: 8000, latency: '18ms', type: 'Gateway' },
        { name: 'Node.js', status: 'running', port: 3000, latency: '12ms', type: 'Runtime' },
        { name: 'Spring Boot', status: 'running', port: 8080, latency: '25ms', type: 'WebFlux' },
        { name: 'Express.js', status: 'running', port: 5000, latency: '10ms', type: 'Framework' },
        { name: 'REST API', status: 'running', uptime: '99.9%', type: 'Protocol' }
    ],
    database: [
        { name: 'PostgreSQL', status: 'healthy', uptime: '99.9%', type: 'Relational' },
        { name: 'MongoDB', status: 'healthy', uptime: '99.8%', type: 'NoSQL' },
        { name: 'Redis', status: 'healthy', latency: '1ms', type: 'Cache' }
    ],
    ml: [
        { name: 'PyTorch', status: 'training', gpu: 'CUDA', type: 'Deep Learning' },
        { name: 'TensorFlow', status: 'training', framework: 'Keras', type: 'ML Framework' },
        { name: 'Scikit-learn', status: 'active', models: '50+', type: 'ML' },
        { name: 'LLM / RAG', status: 'research', model: 'Gemini', type: 'AI' },
        { name: 'OpenCV', status: 'active', type: 'Vision' }
    ],
    infra: [
        { name: 'Docker', status: 'running', images: '20+', type: 'Containerization' },
        { name: 'Linux', status: 'running', kernel: '5.15+', type: 'OS' },
        { name: 'Git', status: 'active', repos: '30+', type: 'VCS' },
        { name: 'Nginx', status: 'running', workers: '4', type: 'Load Balancer' },
        { name: 'AWS', status: 'active', services: '7+', type: 'Cloud' }
    ],
    dsa: [
        { name: 'Algorithms', status: 'active', rating: 'Expert', type: 'Problem Solving' },
        { name: 'Data Structures', status: 'active', rating: 'Proficient', type: 'DSA' },
        { name: 'Codeforces', status: 'active', rating: '1500+', type: 'Competitive' }
    ]
};

// Service connections (logical relationships)
const SERVICE_CONNECTIONS = [
    ['FastAPI', 'PostgreSQL'],
    ['FastAPI', 'MongoDB'],
    ['FastAPI', 'Redis'],
    ['Node.js', 'PostgreSQL'],
    ['Node.js', 'Redis'],
    ['Spring Boot', 'PostgreSQL'],
    ['PyTorch', 'OpenCV'],
    ['TensorFlow', 'LLM / RAG'],
    ['LLM / RAG', 'Redis'],
    ['Docker', 'Nginx'],
    ['Nginx', 'Express.js'],
    ['Nginx', 'Node.js'],
    ['Git', 'Docker'],
    ['AWS', 'Docker']
];

// ============================================
// CLUSTER SECTION (SKILLS)
// ============================================

function populateCluster() {
    renderSkillInventory()
}

function renderSkillInventory() {
    const container = document.getElementById("servicesGrid");

    if (!container) return;

    container.innerHTML = "";

    Object.entries(ENGINEERING_STACK).forEach(([category, services]) => {

        const cluster = document.createElement("div");
        cluster.className = "skill-cluster";

        const title = document.createElement("div");
        title.className = "cluster-title";
        title.textContent = category.toUpperCase();

        const list = document.createElement("div");
        list.className = "cluster-list";

        services.forEach(service => {
            const card = document.createElement("div");
            card.className = "service-row";

            card.innerHTML = `
                <div class="service-main">
                    <span class="service-name">${service.name}</span>
                    <span class="status-dot ${service.status}"></span>
                </div>

                <div class="service-meta">
                    ${service.type ? `<span>${service.type}</span>` : ""}
                    ${service.port ? `<span>port:${service.port}</span>` : ""}
                    ${service.gpu ? `<span>${service.gpu}</span>` : ""}
                </div>
            `;

            list.appendChild(card);
        });

        cluster.appendChild(title);
        cluster.appendChild(list);
        container.appendChild(cluster);
    });
}

// ============================================
// MICROSERVICES SECTION
// ============================================

function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');

    CONFIG.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'microservice-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        const techStackHtml = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        const replicas = Math.floor(Math.random() * 3) + 1;
        const endpoints = project.technologies.length;

        const linksHtml = `
            ${project.github ? `<a href="${project.github}" target="_blank" class="service-link">Repository</a>` : ''}
            ${project.live ? `<a href="${project.live}" target="_blank" class="service-link">Live</a>` : ''}
        `;

        card.innerHTML = `
            <div class="service-header">
                <div class="service-name">${project.title}</div>
                <div class="service-type">${project.type}</div>
            </div>
            <div class="service-body">
                <p class="service-description">${project.description}</p>
                <div class="deployment-info">
                    <div class="info-line">
                        <span class="info-label">Replicas:</span>
                        <span class="info-value">${replicas}</span>
                    </div>
                    <div class="info-line">
                        <span class="info-label">Endpoints:</span>
                        <span class="info-value">${endpoints}</span>
                    </div>
                    <div class="info-line">
                        <span class="info-label">Status:</span>
                        <span class="info-value">RUNNING</span>
                    </div>
                </div>
                <div class="tech-stack">
                    ${techStackHtml}
                </div>
                <div class="service-links">
                    ${linksHtml}
                </div>
            </div>
        `;

        servicesGrid.appendChild(card);
    });
}

// ============================================
// COMPUTE CLUSTER SECTION
// ============================================

function populateComputeCluster() {
    const computeGrid = document.getElementById('computeGrid');

    CONFIG.research.forEach((research, index) => {
        const card = document.createElement('div');
        card.className = 'compute-job fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        const progress = research.status === 'published' ? 100 : research.status === 'under-review' ? 75 : 45;
        const statusBadge = research.status === 'published' ? 'PUBLISHED' : research.status === 'under-review' ? 'UNDER REVIEW' : 'IN PROGRESS';

        card.innerHTML = `
            <div class="job-header">
                <div class="job-icon">
                    ${research.icon ? `<i class="${research.icon}"></i>` : '<i class="fas fa-flask"></i>'}
                </div>
                <div>
                    <div class="job-title">${research.title}</div>
                    <div class="job-venue">${research.conference}</div>
                </div>
            </div>
            <div class="job-progress">
                <div class="progress-bar" style="width: ${progress}%"></div>
            </div>
            <div class="job-status">
                <span>${statusBadge}</span>
                <span>${research.year}</span>
            </div>
            ${research.links && Object.keys(research.links).filter(key => research.links[key]).length > 0 ?
                `<div class="job-links">
                    ${research.links.paper ? `<a href="${research.links.paper}" target="_blank" class="job-link">Paper</a>` : ''}
                    ${research.links.github ? `<a href="${research.links.github}" target="_blank" class="job-link">Code</a>` : ''}
                    ${research.links.slides ? `<a href="${research.links.slides}" target="_blank" class="job-link">Slides</a>` : ''}
                </div>` : ''
            }
        `;

        computeGrid.appendChild(card);
    });
}

// ============================================
// TIMELINE SECTION
// ============================================

function populateTimeline() {
    const pipelineContainer = document.getElementById('pipelineContainer');

    CONFIG.experience.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'pipeline-item';

        item.innerHTML = `
            <div class="pipeline-dot"></div>
            <div class="pipeline-line"></div>
            <div class="pipeline-content">
                <div class="deployment-title">${exp.title}</div>
                <div class="deployment-org">${exp.organization}</div>
                <div class="deployment-date">${exp.date}</div>
                <div class="deployment-desc">${exp.description}</div>
            </div>
        `;

        pipelineContainer.appendChild(item);
    });
}

// ============================================
// TOGGLE BUTTON
// ============================================

function setupToggleButton() {
    const toggleBtn = document.getElementById('modeToggle');

    // Check current mode from localStorage
    const currentMode = localStorage.getItem('portfolioMode') || 'infra';

    toggleBtn.addEventListener('click', () => {
        localStorage.setItem('portfolioMode', 'classic');
        window.location.href = 'index.html';
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

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

// ============================================
// FADE-IN ANIMATION ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
