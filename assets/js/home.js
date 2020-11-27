window.addEventListener('load', () => {  // DOMContentLoaded
    localStorage.setItem('tmpPage', 'main');

    let nextPart = localStorage.getItem('nextPart');

    document.getElementsByTagName('header')[0].innerHTML = themeComp;
    document.getElementById('menu-container').innerHTML = menuComp;

    if (nextPart && (nextPart !== 'index')) {
        changeMainPagePart(nextPart);
    } else {
        document.getElementById('content-container').innerHTML = aboutComp;
    }

});

const changeMainPagePart = (nextPart) => {
    document.getElementById('content-container').innerHTML = eval(pages[nextPart]) // check how to do it without eval()
    setTimeout(()=>{
        if (nextPart === 'portfolio') {
            addPortfolioProjects();
        } else if ( nextPart === 'testimonials') {
            addTestimonials();
        }
    })

    // handle dropdown minimize
    
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    if ((wHeight < Number(900))&&(wWidth < Number(500))) {

        if (document.getElementById('menu-container').offsetHeight > 120) {
            document.getElementById('menu-container').style.height = "120px";
            document.getElementById('mainBurgerInput').checked = false;
        }
    }
    
    

}

window.addEventListener('resize', function(event){
    checkScreen();
  });

checkScreen = () => {
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    if ((wHeight > Number(900))&&(wWidth > Number(500))) {
        document.getElementById('menu-container').style.height = "100%";
        document.getElementById('mainBurgerInput').checked = false;

    }
}