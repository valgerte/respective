document.addEventListener('DOMContentLoaded', () => {
  const bg = document.querySelector('.back404')
  let visible = false

  setInterval(() => {
    visible = !visible
    bg.classList.toggle('active', visible)
  }, 3000) // каждые 3 секунды меняет состояние
})
