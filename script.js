// ============================================
// CONFIGURATION - Easy to Update Arrays
// ============================================

// ============================================
// CONFIGURATION - Easy to Update Arrays
// ============================================

const CONFIG = {
    // Personal Info
    name: "S. S. Mahmud Turza",
    titles: [
        "Full Stack Developer",
        "AI Enthusiast",
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
            items: ["React.js", "HTML", "CSS", "JavaScript"]
        },
        {
            category: "Backend",
            icon: "fas fa-server",
            items: ["Node.js", "Express.js", "FastAPI"]
        },
        {
            category: "Database",
            icon: "fas fa-database",
            items: ["MySQL", "SQLAlchemy", "MongoDB", "FireBase"]
        },
        {
            category: "ML/AI",
            icon: "fas fa-robot",
            items: ["PyTorch", "Scikit-learn", "HuggingFace", "Langchain", "RAG"]
        },
        {
            category: "Tools",
            icon: "fas fa-tools",
            items: ["Git", "GitHub", "Docker", "VS Code"]
        }
    ],

    // Projects
    projects: [
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
            description: "It was given as an assessment task for an internship. I couldn’t crack the opportunity, but I pushed myself to finish the project regardless.",
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

    // Research (NEW)
research: [
        {
            title: "Deep Learning Approaches for Classifying Invasive Alien Plant Species in Bangladesh",
            conference: "28th International Conference on Computer and Information Technology (28th ICCIT 2025)",
            type: "Conference Paper",
            icon: "fas fa-leaf",
            year: "2025",
            status: "Published", // or "completed", "published", "under-review"
            abstract: "This research explores deep learning methodologies for identifying and classifying invasive alien plant species in Bangladesh using computer vision techniques.",
            links: {
                paper: null, // Add link when available
                github: null,
                slides: null
            }
        }
        // Add more research papers here as needed
    ],

    // Research Interests
    interests: [
        {
            icon: "fas fa-robot",
            title: "Large Language Model (LLM)",
            description: "Exploring the fundamentals of modern language models and their real-world applications."
        },
        {
            icon: "fas fa-brain",
            title: "Machine Learning",
            description: "Developing predictive models and recommendation systems"
        },
        {
            icon: "fas fa-chart-line",
            title: "Data Science",
            description: "Analyzing and visualizing complex datasets"
        },
        {
            icon: "fas fa-robot",
            title: "AI Integration",
            description: "Building intelligent systems that enhance user experience"
        },
        {
            icon: "fas fa-code-branch",
            title: "Full Stack Development",
            description: "Creating scalable and maintainable web applications"
        }
    ],

    // Experience & Achievements
    experience: [
        {
            title: "Executive Member",
            organization: "SUST CSE Society",
            date: "July 2023 - Dec 2023",
            description: "Active member contributing to organizing technical events and workshops."
        },
        {
            title: "DU AI Challenge",
            organization: "Dhaka University",
            date: "2024",
            description: "Placed 19th out of 44 teams in competitive AI challenge."
        },
        {
            title: "Game of Datathon Bitfest-2025",
            organization: "Khulna University of Engineering and Technology (KUET)",
            date: "2025",
            description: "Placed 43rd out of 108 teams in data science competition."
        }
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
        }
    ]
};


document.addEventListener("DOMContentLoaded", () => {
    
    // Total skills across all categories
    const totalSkills = CONFIG.skills.reduce(
        (sum, skill) => sum + skill.items.length,
        0
    );

    // Set dynamic numbers
    document.getElementById("projectCount").dataset.target = CONFIG.projects.length;
    document.getElementById("techCount").dataset.target = totalSkills;
    document.getElementById("certCount").dataset.target = CONFIG.certifications.length; 

    animateCounters(); 
});


// ... (keep all the previous navigation, typing, counter code)


// ============================================
// NAVIGATION
// ============================================

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

// Active nav link and smooth close on mobile
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu
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
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
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

// ============================================
// TYPING ANIMATION
// ============================================

// const typingText = document.querySelector('.typing-text');
// let titleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeWriter() {
//     const currentTitle = CONFIG.titles[titleIndex];
    
//     if (isDeleting) {
//         typingText.textContent = currentTitle.substring(0, charIndex - 1);
//         charIndex--;
//     } else {
//         typingText.textContent = currentTitle.substring(0, charIndex + 1);
//         charIndex++;
//     }

//     let typeSpeed = isDeleting ? 50 : 100;

//     if (!isDeleting && charIndex === currentTitle.length) {
//         typeSpeed = 2000;
//         isDeleting = true;
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         titleIndex = (titleIndex + 1) % CONFIG.titles.length;
//         typeSpeed = 500;
//     }

//     setTimeout(typeWriter, typeSpeed);
// }

// // Start typing animation
// setTimeout(typeWriter, 1000);

// ============================================
// COUNTER ANIMATION
// ============================================

const counters = document.querySelectorAll('.counter');
let counterAnimated = false;

function animateCounters() {
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

        updateCounter();
    });
}

// ============================================
// POPULATE SKILLS
// ============================================

function populateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    CONFIG.skills.forEach((skillCategory, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-category fade-in';
        skillCard.style.transitionDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
            <div class="skill-tags">
                ${skillCategory.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
}

// ============================================
// POPULATE PROJECTS
// ============================================

function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    CONFIG.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.transitionDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <p class="project-type">${project.type}</p>
            </div>
            <div class="project-body">
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>` : ''}
                    ${project.live ? `<a href="${project.live}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// POPULATE EXPERIENCE
// ============================================

function populateExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    CONFIG.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item fade-in';
        timelineItem.style.transitionDelay = `${index * 0.1}s`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <p class="date">${exp.organization} | ${exp.date}</p>
                <p>${exp.description}</p>
            </div>
            <div class="timeline-dot"></div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}
// ===========================================
// Populate research and interests
// ===========================================

function populateResearch() {
    const researchGrid = document.getElementById('researchGrid');
    
    if (!researchGrid) {
        console.error('Research grid element not found');
        return;
    }
    
    CONFIG.research.forEach((research, index) => {
        const researchCard = document.createElement('div');
        researchCard.className = 'research-card fade-in';
        researchCard.style.transitionDelay = `${index * 0.1}s`;
        
        let statusClass = '';
        let statusText = '';
        
        switch(research.status) {
            case 'published':
                statusClass = 'status-completed';
                statusText = 'Published';
                break;
            case 'ongoing':
                statusClass = 'status-ongoing';
                statusText = 'Ongoing';
                break;
            case 'under-review':
                statusClass = 'status-ongoing';
                statusText = 'Under Review';
                break;
            case 'completed':
                statusClass = 'status-completed';
                statusText = 'Completed';
                break;
            default:
                statusClass = 'status-ongoing';
                statusText = 'In Progress';
        }
        
        researchCard.innerHTML = `
            <div class="research-icon"><i class="${research.icon}"></i></div>
            <h3>${research.title}</h3>
            <span class="research-type">${research.type}</span>
            <p class="research-conference"><i class="fas fa-university"></i> ${research.conference}</p>
            ${research.abstract ? `<p class="research-abstract">${research.abstract}</p>` : ''}
            <div class="research-status">
                <span class="status-badge ${statusClass}">${statusText}</span>
                <span>• ${research.year}</span>
            </div>
            ${research.links && (research.links.paper || research.links.github || research.links.slides) ? `
                <div class="research-links">
                    ${research.links.paper ? `<a href="${research.links.paper}" target="_blank" class="research-link"><i class="fas fa-file-pdf"></i> Paper</a>` : ''}
                    ${research.links.github ? `<a href="${research.links.github}" target="_blank" class="research-link"><i class="fab fa-github"></i> Code</a>` : ''}
                    ${research.links.slides ? `<a href="${research.links.slides}" target="_blank" class="research-link"><i class="fas fa-presentation"></i> Slides</a>` : ''}
                </div>
            ` : ''}
        `;
        
        researchGrid.appendChild(researchCard);
    });
}

function populateInterests() {
    const interestsContainer = document.getElementById('interestsContainer');
    
    if (!interestsContainer) {
        console.error('Interests container element not found');
        return;
    }
    
    CONFIG.interests.forEach((interest, index) => {
        const interestItem = document.createElement('div');
        interestItem.className = 'interest-item fade-in';
        interestItem.style.transitionDelay = `${index * 0.1}s`;
        
        interestItem.innerHTML = `
            <div class="interest-icon"><i class="${interest.icon}"></i></div>
            <h4>${interest.title}</h4>
            <p>${interest.description}</p>
        `;
        
        interestsContainer.appendChild(interestItem);
    });
}
// ============================================
// POPULATE CERTIFICATIONS
// ============================================

function populateCertifications() {
    const certificationsGrid = document.getElementById('certificationsGrid');
    
    CONFIG.certifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card fade-in';
        certCard.style.transitionDelay = `${index * 0.1}s`;
        
        certCard.innerHTML = `
            <div class="cert-icon"><i class="fas fa-certificate"></i></div>
            <h3>${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <p class="cert-date">${cert.date}</p>
            <a href="${cert.link}" target="_blank" class="cert-link">
                View Certificate <i class="fas fa-arrow-right"></i>
            </a>
        `;
        
        certificationsGrid.appendChild(certCard);
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
// CURSOR ANIMATION (Optional Enhancement)
// ============================================

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    
    followerX += distX / 10;
    followerY += distY / 10;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}

animateFollower();

// Add hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .social-icon, .project-card, .skill-tag, .research-card, .interest-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
    });
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image, .orbit');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createScrollToTop();

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        loader.style.opacity = '0';
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.remove();
            }
        }, 500);
    }, 1500);
});

// ============================================
// EASTER EGG - KONAMI CODE (Fun Feature)
// ============================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        activateEasterEgg();
    }
});

function showCustomAlert() {
    console.log("showCustomAlert triggered");

    // 1) Create the element
    const alertBox = document.createElement('div');
    alertBox.className = 'easter-egg-alert';

    // 2) Add inner HTML
    alertBox.innerHTML = `
        <div class="alert-content">
            <div class="alert-icon">🎉</div>
            <h2>Congratulations!</h2>
            <p>You discovered the secret Konami Code!</p>
            <p class="alert-subtext">↑ ↑ ↓ ↓ ← → ← → B A</p>
            <p>Thanks for exploring my portfolio! 🚀</p>
            <button class="alert-btn">Awesome!</button>
        </div>
    `;

    // 3) Append to body
    document.body.appendChild(alertBox);

    // 4) Now safe to access the button
    const closeBtn = alertBox.querySelector(".alert-btn");
    closeBtn.addEventListener("click", () => {
        alertBox.remove();
    });

    // 5) Add “show” animation after append
    setTimeout(() => {
        alertBox.classList.add("show");
    }, 100);
}

function activateEasterEgg() {
    // Create confetti effect
    createConfetti();
    
    // Rainbow animation
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    // Play with the gradient
    const allGradientElements = document.querySelectorAll('.logo, .section-title, h1');
    allGradientElements.forEach(el => {
        el.style.animation = 'rainbow 2s linear infinite';
    });
    
    // Show congratulations message
    setTimeout(() => {
        document.body.style.animation = '';
        allGradientElements.forEach(el => {
            el.style.animation = '';
        });
        
        // Custom alert with better styling
        showCustomAlert();
    }, 3000);
}

function createConfetti() {
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}


// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// Debounce function for scroll events
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

// ============================================
// RESEARCH FILTER (Optional Feature)
// ============================================

function createResearchFilter() {
    const researchSection = document.querySelector('.research .container');
    const filterContainer = document.createElement('div');
    filterContainer.className = 'research-filters';
    
    const filters = ['All', 'Ongoing', 'Completed', 'Planned'];
    
    filters.forEach(filter => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = filter;
        
        if (filter === 'All') {
            button.classList.add('active');
        }
        
        button.addEventListener('click', () => {
            document.querySelectorAll('.research-filters .filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            filterResearch(filter.toLowerCase());
        });
        
        filterContainer.appendChild(button);
    });
    
    const researchGrid = document.getElementById('researchGrid');
    researchSection.insertBefore(filterContainer, researchGrid);
}

function filterResearch(category) {
    const researchCards = document.querySelectorAll('.research-card');
    
    researchCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            const statusBadge = card.querySelector('.status-badge');
            if (statusBadge && statusBadge.textContent.toLowerCase() === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// ============================================
// EXPORT CONFIG FOR EASY UPDATES
// ============================================

// You can update the CONFIG object at the top of this file
// to easily modify your portfolio content without touching the HTML

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger counter animation when about section is visible
            if (entry.target.id === 'about' && !counterAnimated) {
                animateCounters();
                counterAnimated = true;
            }
        }
    });
}, observerOptions);

// // ============================================
// // FORM SUBMISSION
// // ============================================

// const contactForm = document.getElementById('contactForm');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Add your form submission logic here
//         // For now, just show a success message
//     alert('Thank you for your message! I will get back to you soon.');
//     contactForm.reset();
// });


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
// PARALLAX EFFECT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image, .orbit');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// THEME TOGGLE (Optional Feature)
// ============================================

function createThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    navbar.querySelector('.nav-container').appendChild(themeToggle);
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Uncomment to enable theme toggle
// createThemeToggle();

// ============================================
// PARTICLE BACKGROUND (Optional Enhancement)
// ============================================

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.querySelector('.hero').appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Uncomment to enable particles
createParticles();

// ============================================
// SKILLS PROGRESS ANIMATION
// ============================================

function animateSkillBars() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.transform = 'scale(1)';
            tag.style.opacity = '1';
        }, index * 50);
    });
}

// ============================================
// PROJECT FILTER (Optional Enhancement)
// ============================================

function createProjectFilter() {
    const projectsSection = document.querySelector('.projects .container');
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    
    const filters = ['All', 'Web App', 'Chrome Extension', 'Mobile', 'AI/ML'];
    
    filters.forEach(filter => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = filter;
        
        if (filter === 'All') {
            button.classList.add('active');
        }
        
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            filterProjects(filter);
        });
        
        filterContainer.appendChild(button);
    });
    
    projectsSection.insertBefore(filterContainer, document.getElementById('projectsGrid'));
}

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'All') {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            const projectType = card.querySelector('.project-type').textContent;
            if (projectType.includes(category)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// Uncomment to enable project filters
// setTimeout(createProjectFilter, 500);

// ============================================
// INITIALIZE EVERYTHING
// ============================================

function init() {
    // Populate all dynamic content
    populateSkills();
    populateProjects();
    populateResearch(); // NEW
    populateInterests(); // NEW
    populateExperience();
    populateCertifications();
    
    // Observe all sections and fade-in elements
    const sections = document.querySelectorAll('section');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    sections.forEach(section => observer.observe(section));
    fadeElements.forEach(element => observer.observe(element));
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// You can update the CONFIG object at the top of this file
// to easily modify your portfolio content without touching the HTML
