
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
  
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
  
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offsetTop = targetSection.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
  