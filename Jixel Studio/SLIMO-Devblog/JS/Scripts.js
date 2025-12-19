const buttons = document.querySelectorAll('header .tags-btn button');
const devlogs = document.querySelectorAll('.devlog');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag;

    devlogs.forEach(devlog => {
      const tags = devlog.dataset.tags.split(' ');

      if (tag === 'all' || tags.includes(tag)) {
        devlog.style.display = 'block';
      } else {
        devlog.style.display = 'none';
      }
    });
  });
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});