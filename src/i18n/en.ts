const en = {
    navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        stack: "Stack",
        github: "GitHub",
        experience: "Experience",
        contact: "Contact",
        language: "Language",
    },

    hero: {
        greeting: "Hi, I'm Diego Solórzano",
        title: "Full Stack",
        titleHighlight: "Developer",
        description:
            "I focus on building mobile applications, APIs, and software solutions that are scalable, maintainable, and built following good development practices.",
        cvButton: "Download CV",
        mobile: "Mobile",
        backend: "Backend",
    },

    about: {
        label: "/ ABOUT ME",
        title: "I build",
        titleHighlight: "software solutions",
        paragraph1:
            "Junior full stack developer with experience in IT technical support within corporate environments, as well as mobile application and backend service development.",
        paragraph2:
            "I am interested in building software solutions that integrate applications, services, and databases, with a focus on creating functional, maintainable systems aligned with client needs.",
        paragraph3:
            "My experience in IT support has given me a practical perspective on technology, from troubleshooting and incident resolution to the implementation and maintenance of solutions.",
        readMore: "Read more",
        readLess: "Read less",
        development: "Development",
        developmentDescription: "Frontend · Backend · Mobile · APIs",
        experience: "Experience",
        experienceDescription: "IT Support · Corporate environments",
        methodology: "Methodology",
        languages: "Languages",
        spanish: "Spanish · Native",
        english: "English · Advanced",
    },

    projects: {
        label: "/ PROJECTS",
        title: "Things I've ",
        titleHighlight: "built",
        introduction:
            "A selection of applications, APIs, and software solutions developed throughout my training and experience.",
        all: "All",
        mobile: "Mobile",
        web: "Web",
        backend: "Backend",
        comingSoon: "Coming soon",
        comingSoonDescription: "I'm working on new web projects.",
        prevProject: "Previous project",
        nextProject: "Next project",
        viewDetails: "View details",
        preview: "Preview",
        imageAlt: "Preview of",
    },

    skills: {
        label: "/ STACK",
        title: "Technologies and",
        titleHighlight: "tools",
        subtitle: "Technologies and tools I use to develop, test, and maintain my projects.",
        categoryTabs: "Technology categories",
        totalTechnologies: "{{count}} technologies",
        groups: {
            languages: "Languages",
            frameworks: "Frameworks & Platforms",
            databases: "Databases",
            tools: "Tools",
        },
    },

    github: {
        label: "/ GITHUB",
        title: "Contributions on",
        titleHighlights: "Github",
        introduction: "Contributions made across various development projects.",
        contributions_one: "{{count}} contribution",
        contributions_other: "{{count}} contributions",
        lastYear: "Last year",
        viewGitHub: "View Github ↗",
        loading: "Loading contributions...",
        error: "Couldn't load activity",
        less: "Less",
        more: "More",
    },

    experience: {
        label: "/ EXPERIENCE",
        title: "Professional",
        titleHighlight: "experience",
        subtitle: "Experience gained in corporate and commercial environments, developing technical, operational, and customer service skills.",
        viewDetails: "View details",
        hideDetails: "Hide details",
        roles: {
            soporte: {
                year: "2026",
                position: "Support Technician",
                company: "Alternativa Tecnológica S.A.C. · BCP Project",
                details: [
                    "Second-level hardware and software incident resolution.",
                    "Jira ticket management and follow-up.",
                    "Proactive follow-up with users to check the status of their equipment and identify potential issues.",
                    "Equipment installation, configuration, and preventive and corrective maintenance.",
                    "Management of domain-joined devices (Active Directory).",
                    "Incident documentation and follow-up through resolution.",
                ],
                highlights: ["Jira", "Active Directory", "Hardware", "Software"],
            },
            ventas: {
                year: "2025",
                position: "Sales Advisor",
                company: "Amaru Store E.I.R.L.",
                details: [
                    "Opening the store and preparing the point of sale.",
                    "Inventory control and ordering of components, laptops, and equipment for businesses.",
                    "Providing specialized advice to customers on selecting computers, laptops, and devices for business environments.",
                    "Guidance on complementary equipment, such as thermal printers and barcode scanners.",
                ],
                highlights: ["Inventory", "Technology", "Customer Support", "Sales"],
            },
        },
    },

    contact: {
        label: "/ CONTACT",
        title: "LET'S TALK",
        titleHighlight: "!",
        subtitle: "I'm open to job opportunities, projects, and development collaborations.",
        links: {
            cv: "Resume",
            downloadCv: "Download CV",
        },
        form: {
            title: "CONTACT ME",
            nameLabel: "NAME *",
            namePlaceholder: "Your name",
            emailLabel: "EMAIL *",
            emailPlaceholder: "example@email.com",
            subjectLabel: "SUBJECT *",
            selectOption: "-- Select an option --",
            options: {
                job: "Job Opportunity",
                collaboration: "Collaboration",
                project: "Project",
                other: "Other",
            },
            messageLabel: "MESSAGE *",
            messagePlaceholder: "Write your message...",
            maxChars: "Maximum 1000 characters.",
            requiredField: "* Required field.",
            sendButton: "SEND MESSAGE",
            sendingButton: "SENDING...",
            statusSuccess: "Email sent successfully.",
            statusError: "Failed to send email. Please try again.",
        },
        errors: {
            nameRequired: "Name is required.",
            nameMinLength: "Name must be at least 2 characters long.",
            namePattern: "Name can only contain letters and spaces.",
            emailRequired: "Email address is required.",
            emailInvalid: "Please enter a valid email address.",
            subjectRequired: "Please select a subject.",
            messageRequired: "Message is required.",
            messageMinLength: "Message must be at least 10 characters long.",
        },
    },

    footer: {
        role: "Full Stack Developer",
        backToTop: "Back to top",
        copyright: "© {{year}} Developed by Diego Solórzano",
        builtWith: "Built with React + TypeScript",
    },

    projectDetail: {
        backToProjects: "Back to projects",
        liveDemo: "View live",
        viewOnGithub: "View on GitHub",
        projectLabel: "/ PROJECT",
        notFoundLabel: "/ PROJECT",
        notFoundTitle: "Project not found",
        notFoundDescription: "The requested project is under development or does not exist.",
        galleryLabel: "/ GALLERY",
        screenshots: "Screenshots",
        aboutLabel: "/ ABOUT THE PROJECT",
        stackLabel: "/ TECH STACK",
        featuresLabel: "/ KEY FEATURES",
        closeGallery: "Close gallery",
        prevImage: "Previous image",
        nextImage: "Next image",
    },

    projectsData: {
        "mesajil-ecommerce": {
            title: "Mesajil E-Commerce",
            description: "E-commerce mobile application developed to manage users, products, favorites, and purchases, integrated with backend services.",
            about: [
                "Mobile e-commerce application designed to deliver an intuitive user experience for browsing and purchasing products.",
                "Enables product exploration, shopping cart management, and real-time data synchronization via a REST API."
            ],
            features: [
                "Dynamic product catalog with search filters.",
                "Local/remote shopping cart and favorites management.",
                "Secure user authentication and order history."
            ],
            galleryTitles: [
                "LOGIN SCREEN",
                "USER REGISTRATION",
                "HOME PAGE",
                "CHECKOUT",
                "PAYMENT SCREEN",
                "USER PROFILE"
            ]
        },
        "mesajil-api": {
            title: "Mesajil API",
            description: "REST API developed to manage core platform operations, with MySQL connection and JWT authentication.",
            about: [
                "Backend service responsible for processing the core business logic of the Mesajil platform.",
                "Built using scalable architecture and clean design patterns."
            ],
            features: [
                "Authentication and authorization based on JSON Web Tokens (JWT).",
                "Interactive endpoint documentation using Swagger.",
                "Efficient integration with MySQL relational database."
            ],
            galleryTitles: [
                "SWAGGER DOCUMENTATION",
                "CRUD OPERATIONS",
                "JWT AUTHENTICATION"
            ]
        },
        "movies-api-microservices": {
            title: "Movies API & Microservices",
            description: "Microservices architecture solution developed with Spring Boot, integrating service discovery and configuration, OAuth2 authentication, and inter-service communication.",
            about: [
                "Movies API & Microservices is a backend solution developed under a microservices architecture with independent services managing different system responsibilities.",
                "The project integrates Eureka Server for service discovery and Config Server for centralized microservice configuration, alongside Keycloak with OAuth2 for authentication and authorization."
            ],
            features: [
                "Microservices architecture",
                "Service discovery with Eureka",
                "Centralized configuration with Config Server",
                "Authentication and authorization with Keycloak",
                "Inter-service communication with OpenFeign",
                "Containerization with Docker"
            ],
            galleryTitles: [
                "EUREKA SERVER",
                "KEYCLOAK",
                "SWAGGER - MOVIES API",
                "SWAGGER - REVIEWS API",
                "DOCKER"
            ]
        },
        "gitcord": {
            title: "GitCord",
            description: "A serverless bot that sends real-time GitHub notifications to Discord channels, with a web dashboard for managing connections.",
            about: [
                "A bot that listens for GitHub events through webhooks and posts formatted notifications to a Discord channel, without requiring a self-hosted server.",
                "Includes a web dashboard with Supabase authentication for creating, testing, and removing connections between repositories and Discord channels."
            ],
            features: [
                "Push notifications with the author, commit count, and a link to the changes.",
                "Issue notifications when issues are opened, edited, or closed, including the title, author, and a link.",
                "A dashboard for creating and removing connections, with masked webhook URLs.",
                "A connection test that sends a verification message to the Discord channel."
            ],
            galleryTitles: []
        },
    },
};

export default en;