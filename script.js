// Select the content area where sections will be loaded
const contentArea = document.getElementById('content-area');

async function loadSection(section) {
  try {
    const response = await fetch(`sections/${section}.html`);
    const html = await response.text();

    // Add/remove iceCracks.js based on the section
    if (section === 'home') {
      // console.log("ON HOME")
      // addIceCracksScript();
    } else {
      // removeIceCracksScript();
    }

    return html;
  } catch (error) {
    console.error(`Error loading section ${section}:`, error);
    return `<p>Error loading section: ${section}</p>`;
  }
}

function addIceCracksScript() {
  // console.log("ADDING ICE CRACKS")
  // // Check if the script already exists
  // if (!document.getElementById('iceCracksScript')) {
  //   console.log("ADDING ICE CRACKS SCRIPT")
  //   const script = document.createElement('script');
  //   script.id = 'iceCracksScript';
  //   script.src = 'js/iceCracks.js'; // Path to your iceCracks.js
  //   document.body.appendChild(script);
  // }
  //   // Debugging: print all currently loaded scripts
  //   const allScripts = document.querySelectorAll('script');
  //   allScripts.forEach((script, index) => {
  //     console.log(`Script ${index + 1}: ${script.src || 'inline script'}`);
  //   });
}

function removeIceCracksScript() {
  // console.log("REMOVING ICE CRACKS")
  // // Remove the iceCracks.js script if it's present
  // const script = document.getElementById('iceCracksScript');
  // if (script) {
  //   script.remove();
  // }
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
  if (typeof windowResized === 'function') {
    windowResized(); // Call the p5.js windowResized function
  }
}

// Call the initializePage function to load everything
initializePage();