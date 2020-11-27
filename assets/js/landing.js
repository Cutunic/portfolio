window.addEventListener('load', () => {  // DOMContentLoaded
    localStorage.setItem('tmpPage', 'index');
    document.getElementsByTagName('header')[0].innerHTML = themeComp
    
    document.getElementById('home-box-container').innerHTML = homeLandComp;
    document.getElementById('about-box-container').innerHTML = aboutLandComp;

    document.getElementById('nav-menu-container').innerHTML = menuComp;
});