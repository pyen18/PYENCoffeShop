// Author: https://trungquandev.com

document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    alert('Quick note: This website is a learning project in the field of programming. All information in this website are sample data, they are not real. Thanks for reading this note!')
  }
}

const topMenu = document.getElementById('tqd-top-menu')
const toggleTopMenuIcon = document.getElementById('tqd-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle('tqd-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // Click Outside from Toggle top menu icon
    if (topMenu.classList.contains('tqd-topmenu-expanded')) {
      topMenu.classList.remove('tqd-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
