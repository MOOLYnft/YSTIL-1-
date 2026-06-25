document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.js-dropdown-toggle');
  if (dropdownToggle) {
    const button = dropdownToggle.querySelector('.menu__button');
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdownToggle.classList.toggle('is-open');
    });
    document.addEventListener('click', (event) => {
      if (!dropdownToggle.contains(event.target)) {
        dropdownToggle.classList.remove('is-open');
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        dropdownToggle.classList.remove('is-open');
      }
    });
  }
});
