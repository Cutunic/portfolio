const menuComp = `
<div class="mobile-menu-row">
    <h3>Ćutunić</h3>

    <div class="burger-icon margin-top">
        <input id="mainBurgerInput" type="checkbox" class="menu-click" onchange="handleDropdownMainBurger(event)">
        <div class="navico"></div>
    </div>
</div>

        <div class="nav-links">
            <ul>
                <li><a onclick="onMenuItemClick('index', 'index', event)"><div class="icon-nav-box"><i class="fas fa-home"></i></div>Home</a></li>
                <li><a onclick="onMenuItemClick('main', 'about', event)"><div class="icon-nav-box"><i class="fas fa-user-alt"></i></div>About</a></li> 
                <li><a onclick="onMenuItemClick('main', 'resume', event)"><div class="icon-nav-box"><i class="far fa-file-alt"></i></div>Resume</a></li>
                <li><a onclick="onMenuItemClick('main', 'services', event)"><div class="icon-nav-box"><i class="fas fa-tools"></i></div>Services</a></li>
                <li><a onclick="onMenuItemClick('main', 'portfolio', event)"><div class="icon-nav-box"><i class="fas fa-project-diagram"></i></div>Portfolio</a></li>
                <li><a onclick="onMenuItemClick('main', 'testimonials', event)"><div class="icon-nav-box"><i class="fas fa-pencil-alt"></i></div>Testimonials</a></li>
                <li><a onclick="onMenuItemClick('main', 'contact', event)"><div class="icon-nav-box"><i class="far fa-envelope"></i></div>Contact</a></li>
            </ul>
        </div>

        <div class="social-links">
            <ul>
                <li><a onclick="onMenuItemClick('main', 'contact', event)"><i class="far fa-envelope"></i></a></li>
                <li><a href="https://github.com/Cutunic" target="_blank" onclick="onSocialItemClick()"><i class="fab fa-github"></i></a></li>
                <li><a href="https://linkedin.com/in/matej-ćutunić-b92b011b3" target="_blank" onclick="onSocialItemClick()"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.upwork.com/freelancers/~01960030b530c0043b" target="_blank" onclick="onSocialItemClick()"><i class="fas fa-laptop-house"></i></a></li>

            </ul>
        </div>

        <div class="copyright">
            <p>@ 2020 Cutunic</p>
        </div>
    </div>
`;