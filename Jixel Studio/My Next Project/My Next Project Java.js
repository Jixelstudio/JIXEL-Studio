const buttons = document.querySelectorAll('.tags-btn button');
const projects = document.querySelectorAll('.MyNexts');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag;

    projects.forEach(project => {
      const projectTags = project.dataset.tags.split(' ');

      if(tag === 'all' || projectTags.includes(tag)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});