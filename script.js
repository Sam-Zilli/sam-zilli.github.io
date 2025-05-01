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
    
    // Remove any previously loaded module script
    const oldScript = document.querySelector('script[data-module]');
    if (oldScript) {
      oldScript.remove();
    }
    
    // Create and add the new script element
    const script = document.createElement('script');
    script.setAttribute('data-module', moduleType);
    
    if (moduleType === 'music') {
      script.src = 'music-projects.js';
    } else if (moduleType === 'coding') {
      script.src = 'coding-projects.js';
    } else if (moduleType === 'home') {
      // Home content can be loaded directly or from another script
      container.innerHTML = createHomeContent();
      return;
    }
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Handle script load event
    script.onload = function() {
      // The respective module's generateProjectCards function will be called
      // from within each module file
    };
    
    // Handle script load error
    script.onerror = function() {
      container.innerHTML = `<div class="error">Error loading ${moduleType} projects. Please try again later.</div>`;
    };
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