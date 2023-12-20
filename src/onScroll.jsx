const onScroll = () => {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    const aboutSection = document.getElementById('about');
    const experienceSection = document.getElementById('experience');
    const projectsSection = document.getElementById('projects');
    
    if(scrollTop < experienceSection.offsetTop - 80) {
      return 'about';
    } else if(scrollTop >= aboutSection.offsetTop - 80 && scrollTop < projectsSection.offsetTop - 80) {
      return 'experience';
    } else {
      return 'projects';
    };
  });
};

export default onScroll;