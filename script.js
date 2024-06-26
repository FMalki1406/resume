document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
  
    initializeHeroSection(sections);
    addNavigationEventListeners(sections);
  
    // Show the home section content by default
    showSection('home', sections);
    checkForDuplicateSections(sections);
    initializeTypedText();
    initializeDarkModeToggle();
    initializeImageLoading();
  });
  
  function checkForDuplicateSections(sections) {
    const sectionIds = new Set();
    sections.forEach(section => {
      const id = section.id;
      if (sectionIds.has(id)) {
        console.warn(`Duplicate section found with ID: ${id}`);
      } else {
        sectionIds.add(id);
      }
    });
    console.log('Duplicate section check completed.');
  }
  
  function initializeHeroSection(sections) {
    sections.forEach(section => {
      const id = section.id;
      if (id === 'home') {
        section.classList.add('visible');
      } else {
        section.classList.add('hidden');
      }
    });
    console.log('Hero section initialized.');
  }
  
  function addNavigationEventListeners(sections) {
    document.querySelectorAll('nav a').forEach(navLink => {
      const targetSectionId = navLink.getAttribute('href').substring(1);
      navLink.addEventListener('click', event => {
        event.preventDefault();
        console.log(`Navigation click: Showing section ${targetSectionId}.`);
        showSection(targetSectionId, sections);
      });
    });
    console.log('Navigation event listeners added.');
  }
  
  function showSection(sectionId, sections) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      console.warn(`Section with ID ${sectionId} not found.`);
      return;
    }
  
    console.log(`Showing section: ${sectionId}`);
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.remove('hidden');
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
        section.classList.add('hidden');
      }
    });
  }
  
  function initializeTypedText() {
    const options = {
      strings: [
        "Bringing your digital dreams to life.",
        "Pioneering the future of web technology.",
        "Innovative solutions for a connected world.",
        "Expertly crafting user-focused web applications.",
        "Elevating user experiences through sophisticated design.",
        "Empowering your brand with dynamic web development.",
        "Transforming your vision into reality with precision.",
        "Creating intuitive and responsive digital solutions.",
        "Driving digital transformation with cutting-edge technology.",
        "Maximizing impact with seamless web integration.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    new Typed("#typed-text", options);
  }
  
  function initializeDarkModeToggle() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    if (!toggleButton) {
      console.warn('Dark mode toggle button not found.');
      return;
    }
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.querySelectorAll('.common-container').forEach(container => {
        container.classList.toggle('dark-mode');
      });
    });
  }
  
  function initializeImageLoading() {
    const images = document.querySelectorAll('.project-image');
    images.forEach(image => {
      image.onload = () => {
        image.classList.add('loaded');
      };
    });
  }
  