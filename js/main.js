// Sample project data
const projects = [
    {
        title: "To-Do List App",
        description: "Developed a responsive and user-friendly To-Do List web application using React.js. The app features task creation, editing, deletion, and filtering functionalities with real-time UI updates using React state management. Implemented clean, component-based architecture and modern design principles to ensure performance and scalability.",
        image: "img/todolist.png",
        tags: ["HTML", "CSS", "JavaScript","React", "Node.js"]
    },
    {
        title: "Password Generator",
        description: "Created a responsive Password Generator using HTML, CSS, and JavaScript. The application allows users to generate strong, random passwords based on selected criteria such as length, inclusion of uppercase letters, numbers, and symbols. Designed with a clean UI and functional layout, the project demonstrates DOM manipulation, event handling, and JavaScript logic for secure password creation.",
        image: "img/pass.png",
        tags: ["HTML", "CSS", "JavaScript"]

    },
    {
        title: "Simon Says Game",
        description: "Built an interactive Simon Says memory game using HTML, CSS, and JavaScript. The game challenges users to repeat an increasingly complex sequence of colors and sounds. Implemented logic for pattern generation, user input validation, and level progression. Designed with engaging visuals and audio feedback to enhance the user experience and demonstrate core concepts of game development and event-driven programming.",
        image: "img/simonsays.png",
        tags: ["Python", "Django"]
    }
];

// Populate projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
});
