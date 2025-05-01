// coding-projects.js
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
  
  // Function to generate cards dynamically
  function generateProjectCards() {
    const container = document.querySelector('.container');
    
    // Clear any existing content in the container
    container.innerHTML = '';
    
    // Add section heading
    // const heading = document.createElement('h2');
    // heading.className = 'section-heading';
    // heading.textContent = 'Coding Projects';
    // container.appendChild(heading);
    
    // Loop through each project in the array
    codingProjects.forEach((project, index) => {
      // Create colors array to cycle through for different card styles
      const colors = ['blue', 'red', 'green', 'yellow'];
      const colorClass = colors[index % colors.length];
      
      // Create card HTML using template literal
      const cardHTML = `
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
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Coding</li>
              <li class="tag__item play ${colorClass}">
                <a href="${project.link}"><i class="fas fa-code mr-2"></i>View Project</a>
              </li>
            </ul>
          </div>
        </article>
      `;
      
      // Append the card to the container
      container.innerHTML += cardHTML;
    });
  }
  
  // Call the function immediately when this script loads
  generateProjectCards();