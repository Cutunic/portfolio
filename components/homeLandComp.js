const homeLandComp = `
<div id="home-page-container" class="home-page-container">
    <div id="nav-menu-container" class="nav-menu-container">
        
    </div>

    <div class="home-content-container">
        
        
        <div class="img-container">
            <img src="./assets/img/laptop.jpg" alt="Profile Picture">
        </div>
        <div class="home-about-content">
            <p class="hello-p">Hello, I'm</p>
            <h1>Ćutunić Matej</h1>
            <h2>Frontend Developer</h2>
            
            <!-- div is displayed only on mobile screen -->
            <div class="home-hire-btn-container display-none">
                <div class="cv-btn-box">
                    <a href="https://drive.google.com/file/d/1dlZAyGpfgM4ZC4JyIge310Ui5gtu71Sr/view?usp=sharing" target=_blank"><button class="cv-btn">Download CV</button></a>
                </div>
                <div class="hire-btn-box">
                    <button class="hire-btn" onclick="onMenuItemClick('main', 'contact', event)">Hire Me</button>
                </div>
            </div>

        </div>
        
        
    </div>
</div>
`;