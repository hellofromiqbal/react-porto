const onScroll = (stateChanger) => {
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    const experienceSection = document.getElementById('experience');
    const projectsSection = document.getElementById('projects');

    if(scrollTop < experienceSection.offsetTop - 80) {
      stateChanger('about');
    } else if(scrollTop >= experienceSection.offsetTop - 80 && scrollTop < projectsSection.offsetTop - 100) {
      stateChanger('experience');
    } else {
      stateChanger('projects');
    };
  });
};

export default onScroll;