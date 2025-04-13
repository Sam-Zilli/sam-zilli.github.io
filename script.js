// Select the content area where sections will be loaded
const contentArea = document.getElementById('content-area');

// Load section HTML from external file
async function loadSection(section) {
  // console.log(`Loading section: ${section}`);
  try {
    const response = await fetch(`sections/${section}.html`);
    const html = await response.text();
    return html;
  } catch (error) {
    console.error(`Error loading section ${section}:`, error);
    return `<p>Error loading section: ${section}</p>`;
  }
}

// Function to load navbar and content
async function initializePage() {
  // Load the navbar first
  const navbarResponse = await fetch('components/navbar.html');
  const navbarHTML = await navbarResponse.text();
  document.getElementById('navbar-container').innerHTML = navbarHTML;

  // After navbar is loaded, load the initial content (home section)
  loadSection('home').then(html => {
    contentArea.innerHTML = html;
    callWindowResize(); // Ensure resize is called when the page initially loads
  });

  // Attach event listeners to navbar links after the navbar is loaded
  document.querySelectorAll('.section-name').forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();

      // Get the section name from the clicked link's data-section attribute
      const section = link.getAttribute('data-section');
      // console.log(`Navigating to section: ${section}`);

      // Add fade-out effect to content
      contentArea.classList.add('fade-out');

      // After fade-out transition, load the new section
      setTimeout(async () => {
        const html = await loadSection(section);
        contentArea.innerHTML = html;
        contentArea.classList.remove('fade-out');
        callWindowResize(); // resize is called after new content is loaded
      }, 400);
    });
  });
}

// Function to call the p5.js window resize function
function callWindowResize() {
  // console.log("HERE")
  if (typeof windowResized === 'function') {
    windowResized(); // Call the p5.js windowResized function
  }
}

// Call the initializePage function to load everything
initializePage();