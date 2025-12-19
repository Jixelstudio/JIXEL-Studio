const buttons = document.querySelectorAll('.tags-btn button');
const devblogs = document.querySelectorAll('.Game-Devblog');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.dataset.tag;

    devblogs.forEach(blog => {
      const blogTag = blog.dataset.tag;
      
      if(tag === 'all' || blogTag.includes(tag)) {
        blog.style.display = 'block';
      } else {
        blog.style.display = 'none';
      }
    });
  });
});
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
