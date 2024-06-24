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

 function navigateToNewPage() {
    window.location.href = 'new-camera.html'; // Replace 'new-camera.html' with the path to your HTML file
}
//live cam online
function addVideo() {
    const url = document.getElementById('url').value;
    let embedUrl = url;

    if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    if (embedUrl) {
        const iframeContainer = document.getElementById('iframeContainer');
        iframeContainer.innerHTML = `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
    } else {
        alert('Please enter a valid URL.');
    }
}