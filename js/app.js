const navElements = document.querySelectorAll('section')
const navMenu = document.getElementById('navbar-menu')

console.log(navElements)

// Create navbar menu from navElements
function buildNav () {
  navElements.forEach(element => {
  const elementText = document.querySelector(`#${element.id} h2`).innerHTML
  const menuElement = `<li class='navbar-item ${element.className}'><a href="#${element.id}">${elementText}</li>`
  navMenu.insertAdjacentHTML('beforeend', menuElement)
  })
}

// Determine if element is in viewport
function checkVisible (element) {
  const bounding = element.getBoundingClientRect()
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Add "active" classname to element in viewport
function setActive() {
  navElements.forEach( el => {
    if (checkVisible(el)) {
      el.firstElementChild.classList.add('active')
    } else {
      el.firstElementChild.classList.remove('active')
    }
  })
}


// add Event listeners
window.addEventListener('scroll', (event) => setActive())

// Build the navbar
buildNav()
