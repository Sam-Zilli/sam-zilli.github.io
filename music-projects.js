// music-projects.js
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
  
  // Function to generate cards dynamically
  function generateProjectCards() {
    const container = document.querySelector('.container');
    
    // Clear any existing content in the container
    container.innerHTML = '';
    
    // Add section heading
    // const heading = document.createElement('h2');
    // heading.className = 'section-heading';
    // heading.textContent = 'Music Projects';
    // container.appendChild(heading);
    
    // Loop through each project in the array
    musicProjects.forEach((project, index) => {
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
              <li class="tag__item"><i class="fas fa-tag mr-2"></i>Music</li>
              <li class="tag__item"><i class="fas fa-clock mr-2"></i>${project.duration}</li>
              <li class="tag__item play ${colorClass}">
                <a href="${project.link}"><i class="fas fa-play mr-2"></i>Listen Now</a>
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