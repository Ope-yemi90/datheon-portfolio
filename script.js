
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// Project Modal
const projectModal = document.getElementById("project-modal");
const viewButtons = document.querySelectorAll(".view-project");
const closeModal = document.querySelector(".close-modal");
const modalTitle = document.getElementById("modal-title");
const modalOverview = document.getElementById("modal-overview");
const modalFeatures = document.getElementById("modal-features");
const modalTechnologies = document.getElementById("modal-technologies");
const modalLearning = document.getElementById("modal-learning");
const modalLive = document.getElementById("modal-live");
const modalGithub = document.getElementById("modal-github");
function isValidLink(link) {
    try {
        const url = new URL(link);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}
const projectData = {
    "student-dashboard": {
        title: "Student Dashboard",
        overview: "A student dashboard that allows students to view their personal information, access their course list and monitor their academic progress.",
        features: [
            "Displays student information",
            "Shows a list of courses",
            "Displays the total number of courses",
            "Tracks completed courses",
            "Shows pending courses"
        ],
        technologies: "Next.js, React, Tailwind CSS and TypeScript",
        learning: "Improved my understanding of building responsive web interfaces, organising components, working with data and styling pages using Tailwind CSS.",
        live: "https://student-dashboard-rcptw76g1-ope-yemi90.vercel.app",
        github: "https://github.com/Ope-yemi90/Student-Dashboard"
    },

    "campus-event-board": {
        title: "Campus Event Board",
        overview: "A campus event platform that helps students discover upcoming activities, explore events by category, search for specific events and save events they are interested in attending.",
        features: [
            "Browse available campus events",
            "Filter events by category",
            "Search for events by title",
            "Sort events by date",
            "View detailed event information",
            "Save and unsave events",
            "View saved events on the My Events page",
            "See a countdown to an event"
        ],
        technologies: "Next.js, React, Tailwind CSS and TypeScript",
        learning: "Improved my understanding of building dynamic web applications, managing state with React Context, implementing search and filtering functionality, creating reusable components and designing responsive layouts.",
        live: "https://campus-event-board-eight.vercel.app/",
        github: "https://github.com/Ope-yemi90/campus-event-board"
    },

    "unireserve": {
        title: "UniReserve",
        overview: "A campus room-booking platform that allows students to explore available spaces and make reservations.",
        features: [
            "Browse available campus rooms and spaces",
            "View individual room details",
            "Select a room, date and time for booking",
            "Submit bookings through a booking form",
            "Validate booking information",
            "View reservations on the My Bookings page",
            "Cancel existing bookings",
            "Save bookings using browser localStorage"
        ],
        technologies: "HTML, CSS and JavaScript",
        learning: "Improved my understanding of building interactive web applications, creating booking forms, validating user input, managing data with localStorage and designing responsive interfaces.",
        live: "https://campus-room-bookings-two.vercel.app",
        github: "https://github.com/Ope-yemi90/campus-room-bookings"
    },

    "sales-dashboard": {
        title: "Sales Dashboard",
        overview: "An Excel dashboard created to analyse sales records and visualise sales performance.",
        features: [
            "Cleaned and organised sales data",
            "Used Excel formulas",
            "Created PivotTables",
            "Created charts and visualisations",
            "Tracked sales statuses",
            "Displayed total sales performance"
        ],
        technologies: "Microsoft Excel",
        learning: "Improved my skills in data cleaning, using Excel formulas, creating PivotTables, analysing sales data and presenting insights through dashboards.",
        live: "",
        github: ""
    },

    "group-reading-app": {
        title: "Group Reading App",
        overview: "A group reading app interface designed to provide users with a platform for organising and participating in shared reading activities.",
        features: [
            "Designed the app's user interface",
            "Created screen layouts for the reading experience",
            "Focused on visual consistency",
            "Designed user-friendly navigation"
        ],
        technologies: "Figma",
        learning: "Improved my understanding of UI/UX design principles, creating user-friendly interfaces, organising layouts and using Figma to design application screens.",
        live: "",
        github: ""
    }
};
viewButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const project = projectData[button.dataset.project];

        if (!project) return;

        modalTitle.textContent = project.title;
        modalOverview.textContent = project.overview;
        modalTechnologies.textContent = project.technologies;
        modalLearning.textContent = project.learning;

        modalFeatures.innerHTML = "";

        project.features.forEach(function(feature) {
            const li = document.createElement("li");
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        const hasLiveLink = isValidLink(project.live);
        const hasGithubLink = isValidLink(project.github);
        modalLive.href = hasLiveLink ? project.live : "";
        modalGithub.href = hasGithubLink ? project.github : "";
        modalLive.style.display = hasLiveLink ? "inline-block" : "none";
        modalGithub.style.display = hasGithubLink ? "inline-block" : "none";

        projectModal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function() {
    projectModal.style.display = "none";
});
projectModal.addEventListener("click", function(event) {
    if (event.target === projectModal) {
        projectModal.style.display = "none";
    }
});