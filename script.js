// Main script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation links
    setupNavigation();
    
    // Load coding projects by default
    loadModule('coding');
  });
  
  // Function to set up navigation click handlers
  function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-list li a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const linkText = this.textContent.toLowerCase();
        
        // Handle different navigation items
        if (linkText === 'music') {
          loadModule('music');
        } else if (linkText === 'coding') {
          loadModule('coding');
        } else if (linkText === 'sam zilli') {
          // Load home/about content
          loadModule('home');
        }
        
        // Update active state in navigation
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  // Function to dynamically load a JavaScript module
  function loadModule(moduleType) {
    const container = document.querySelector('.container');
    container.innerHTML = `<div class="loading">Loading ${moduleType} projects...</div>`;
    
    // Define our projects data directly in this script to avoid loading issues
    if (moduleType === 'music') {
      loadMusicProjects();
    } else if (moduleType === 'coding') {
      loadCodingProjects();
    } else if (moduleType === 'home') {
      // Home content can be loaded directly
      container.innerHTML = createHomeContent();
    }
  }
  
  // Function to load coding projects
  function loadCodingProjects() {
    const codingProjects = [
      {
        title: "Project A",
        description: "A full-stack application built with React and Node.js. Features include user authentication, data visualization, and real-time updates.",
        imageUrl: "https://picsum.photos/200/300?random=3",
        link: "#",
        date: "May 2024"
      },
      {
        title: "Project B",
        description: "Mobile app developed using Flutter. Includes offline capabilities, custom animations, and integration with multiple APIs.",
        imageUrl: "https://picsum.photos/200/300?random=4",
        link: "#",
        date: "April 2024"
      },
      {
        title: "Project C",
        description: "Machine learning model for image recognition, built with TensorFlow and deployed as a web service.",
        imageUrl: "https://picsum.photos/200/300?random=5",
        link: "#",
        date: "March 2024"
      }
    ];
    
    generateCards(codingProjects, 'Coding Projects', 'coding');
  }
  
  // Function to load music projects
  function loadMusicProjects() {
    const musicProjects = [
      {
        title: "Album One",
        description: "My debut album featuring 10 original tracks. A blend of electronic and acoustic elements with themes of nature and technology.",
        imageUrl: "https://picsum.photos/200/300?random=6",
        link: "#",
        date: "June 2024",
        duration: "42 mins"
      },
      {
        title: "Collaboration EP",
        description: "A four-track EP created in collaboration with other artists. Explores experimental sound design and ambient textures.",
        imageUrl: "https://picsum.photos/200/300?random=7",
        link: "#",
        date: "February 2024",
        duration: "18 mins"
      },
      {
        title: "Live Performance",
        description: "Recording of my live performance at the Downtown Music Festival. Features improvised sections and unique arrangements of my studio work.",
        imageUrl: "https://picsum.photos/200/300?random=8",
        link: "#",
        date: "January 2024",
        duration: "65 mins"
      },
      {
        title: "Single Release",
        description: "Latest single release with accompanying music video. A departure from my usual style, incorporating orchestral elements.",
        imageUrl: "https://picsum.photos/200/300?random=9",
        link: "#",
        date: "April 2024",
        duration: "4:35"
      }
    ];
    
    generateCards(musicProjects, 'Music Projects', 'music');
  }
  
  // Generic function to generate cards
  function generateCards(projects, sectionTitle, projectType) {
    const container = document.querySelector('.container');
    
    // Clear any existing content in the container
    container.innerHTML = '';
    
    // Add section heading
    const heading = document.createElement('h2');
    heading.className = 'section-heading';
    heading.textContent = sectionTitle;
    container.appendChild(heading);
    
    // Loop through each project in the array
    projects.forEach((project, index) => {
      // Create colors array to cycle through for different card styles
      const colors = ['blue', 'red', 'green', 'yellow'];
      const colorClass = colors[index % colors.length];
      
      // Create card HTML using template literal
      let cardHTML = `
        <article class="postcard dark ${colorClass}">
          <a class="postcard__img_link" href="${project.link}">
            <img class="postcard__img" src="${project.imageUrl}" alt="${project.title}">
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title ${colorClass}"><a href="${project.link}">${project.title}</a></h1>
            <div class="postcard__subtitle small">
              <time datetime="${project.date}">
                <i class="fas fa-calendar-alt mr-2"></i>${project.date}
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">${project.description}</div>
            <ul class="postcard__tagbox">
      `;
      
      // Add different tags based on project type
      if (projectType === 'music') {
        cardHTML += `
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Music</li>
              <li class="tag__item"><i class="fas fa-clock mr-2"></i>${project.duration || 'N/A'}</li>
              <li class="tag__item play ${colorClass}">
                <a href="${project.link}"><i class="fas fa-play mr-2"></i>Listen Now</a>
              </li>
        `;
      } else {
        cardHTML += `
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Coding</li>
              <li class="tag__item play ${colorClass}">
                <a href="${project.link}"><i class="fas fa-code mr-2"></i>View Project</a>
              </li>
        `;
      }
      
      cardHTML += `
            </ul>
          </div>
        </article>
      `;
      
      // Append the card to the container
      container.innerHTML += cardHTML;
    });
  }
  
  // Function to create home content
  function createHomeContent() {
    return `
      <div class="profile-section">
        <div class="profile-image">
          <img src="https://picsum.photos/300/300?random=1" alt="Sam Zilli">
        </div>
        <div class="profile-content">
          <h1>Sam Zilli</h1>
          <h2>Developer & Musician</h2>
          <p>Welcome to my portfolio! I create both code and music. Use the navigation above to explore my projects.</p>
        </div>
      </div>
    `;
  }