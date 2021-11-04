const button = document.querySelector('#btn-mobile')

button.addEventListener('click', () => {
  const nav = document.querySelector('#nav')
  nav.classList.toggle('active')
})