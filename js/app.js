const navElements = document.querySelectorAll('section')
const navMenu = document.getElementById('navbar-menu')

console.log(navElements)

// Create navbar menu from navElements
navElements.forEach(element => {
  const elementText = document.querySelector(`#${element.id} h2`).innerHTML
  const menuElement = `<li class='navbar-item ${element.className}'><a href="#${element.id}">${elementText}</li>`
  navMenu.insertAdjacentHTML('beforeend', menuElement)
})
