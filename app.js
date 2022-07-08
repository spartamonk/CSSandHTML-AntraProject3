const toggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
toggle.addEventListener('click', function () {
  const linksHeight = document
    .querySelector('.nav-links')
    .getBoundingClientRect().height
  let linksContainerHeight = linksContainer.getBoundingClientRect().height
  if(linksContainerHeight === 0){
linksContainer.style.height = `${linksHeight}px`
  } else {
   linksContainer.style.height =0
  }

  
})

