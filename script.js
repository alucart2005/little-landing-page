const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('toggle--on');
  navigation.classList.toggle('navigation--on');
} );