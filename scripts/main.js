function generateProjectCards(projects) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing content
  
    projects.forEach(project => {
      const article = document.createElement('article');
      article.classList.add('postcard', 'dark', 'blue');
  
      article.innerHTML = `
        <a class="postcard__img_link" href="${project.link}">
          <img class="postcard__img" src="${project.imageUrl}" alt="${project.title}">
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue"><a href="${project.link}">${project.title}</a></h1>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">${project.description}</div>
        </div>
      `;
  
      container.appendChild(article);
    });
  }
  


  document.addEventListener('DOMContentLoaded', () => {
    const navMusic = document.getElementById('nav-music');
    const navCoding = document.getElementById('nav-coding');
  
    navMusic.addEventListener('click', (e) => {
      e.preventDefault();
      loadProjects('music');
    });
  
    navCoding.addEventListener('click', (e) => {
      e.preventDefault();
      loadProjects('coding');
    });
  
    function loadProjects(type) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = `${type}-projects.js`;
  
      script.onload = () => {
        const projects = type === 'music' ? musicProjects : codingProjects;
        generateProjectCards(projects);
      };
  
      document.body.appendChild(script);
    }
  });
  

  function renderProjects(projects) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing content
  
    projects.forEach(project => {
      const card = document.createElement('article');
      card.classList.add('postcard', 'dark', 'blue');
      card.innerHTML = `
        <a class="postcard__img_link" href="${project.link}">
          <img class="postcard__img" src="${project.imageUrl}" alt="${project.title}">
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue"><a href="${project.link}">${project.title}</a></h1>
          <div class="postcard__preview-txt">${project.description}</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  document.querySelector('a[href="#music"]').addEventListener('click', () => {
    import('./music-projects.js')
      .then(module => renderProjects(module.musicProjects))
      .catch(err => console.error('Failed to load music projects:', err));
  });
  
  document.querySelector('a[href="#coding"]').addEventListener('click', () => {
    import('./coding-projects.js')
      .then(module => renderProjects(module.codingProjects))
      .catch(err => console.error('Failed to load coding projects:', err));
  });