/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

//  document.addEventListener("DOMContentLoaded", function() {
//     const navLinks = document.querySelector(".nav__link");
  
//     navLinks.forEach(function(link) {
//       link.addEventListener("click", function() {
//         // Remove 'active' class from all nav links
//         navLinks.forEach(function(link) {
//           link.classList.remove("active");
//         });
  
//         // Add 'active' class to the parent of the clicked nav link (assuming the parent is the div)
//         this.classList.add("active");
//       });
//     });
//   });
  