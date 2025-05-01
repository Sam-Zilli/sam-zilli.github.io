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
  