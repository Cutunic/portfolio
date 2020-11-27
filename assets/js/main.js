let pages = {
  contact: "contactComp",
  about: "aboutComp",
  portfolio: "portfolioComp",
  services: "servicesComp",
  testimonials: "testimonialsComp",
  resume: "resumeComp",
};

let projects = [
  {
    name: "gartendeko",
    imgNum: 7,
    title: "GartenDeko Website",
    desc:
      "GartenDeko is a website for a craft that deals with garden landscaping, garden design, and repairs and maintenance of gardens and houses.",
    learn:
      "I used plain JavaScript, Scss, Html, and Gulp. I learned how to set up an environment with Gulp, and I realized the importance of an effective dev environment. I tried to use Scss as much as possible, and I tried to divide the code into logical components.",
    problem:
      "Najveci problem i izazov mi je bio odraditi infiite slider sa animacijom na slide-in-left i slide-out-left",
    gitLink: "https://github.com/Cutunic/gartendeko",
    link: "https://www.gartendeko-mkk.com/",
  },
  {
    name: "calculator_angular",
    imgNum: 4,
    title: "Calculator Angular",
    desc:
      "Calculator is an interesting project, in which I played with JavaScript to create calculator machine. It was very fun to play with numbers and strings, and passing through strings. I find it very useful as learning project.",
    learn:
      "I trained to create reusable components, and to control global variables better.",
    problem:
      "Allowing user to input negative numbers, enter decimal number(0.) if null wasn't pressed. It was tricky to continue calculating after user got the result.",
    gitLink: "https://github.com/Cutunic/piano-machine",
    link: "https://cutunic.github.io/piano-machine/",
  },
  {
    name: "piano_angular",
    imgNum: 4,
    title: "Piano Angular",
    desc:
      "Idea was to create basic piano streaming machine. This project has so much potencial, and can be developed in a way that many kids can expand their musical education.",
    learn:
      "A lot about shadows, and the power of CSS. I learned that mobiles have restiction on loading sound.",
    problem:
      "Was to create realistic piano key using only CSS, also it was a bit tricky to manage animation.",
    gitLink: "https://github.com/Cutunic/angular-calculator",
    link: "https://cutunic.github.io/angular-calculator/",
  },
  {
    name: "quotes_angular",
    imgNum: 4,
    title: "Random Quote Angular",
    desc:
      "This is a very simple project, I used public quotes in a variable and displayed them and colors randomly.",
    learn:
      "How does parent/child communication works, and service communication.",
    problem: "CSS manipulation at changing DOM.",
    gitLink: "https://github.com/Cutunic/random-quote-machine-angular",
    link: "https://cutunic.github.io/random-quote-machine-angular/",
  },
];

let testimonials = [
  {
    name: "antonija",
    fullName: "Antonija Sokolović",
    company: "Freelancer",
    text:
      '"I definitely had a pleasant experience working with Matej Cutunic on my private online business. He is organised, trustworthy and hardworling individual. His computing skills helped my idea turn into a project. With his design skills he implemented creativity into my web page."',
  },
  {
    name: "domagoj",
    fullName: "Domagoj Magaš",
    company: "Crosys Brod d.o.o.",
    text:
      '"I needed help from a Web professional who would succesfully evolve my website. Matej finished the project without bigger problems and he respected all the deadlines. He is a great team player, comfortable to work and communicate with. We had some changes in our first plan, but Matej adapted fast and tailored his development techniques. I think he has great potential."',
  },
  {
    name: "ivan",
    fullName: "Ivan Ćutunić",
    company: "Ivan Gärtner",
    text:
      '"Matej played a big role in growing my gardening bussines online. Thanks to his programming skills, next to marketing and PR, my small gardening bussiness expanded to wider audience in short period of time. Also, he has an eye for design and modern look."',
  },
  {
    name: "ivo",
    fullName: "Ivo Žilić",
    company: "Learning college",
    text:
      '"Matej\'s skills in synergy helped me to finish the project 2 weeks earlier than I have planned. He is proffesional and fast in problem-solving. He uses different ways and metods of managing the idea in his head/working on problems. I recommend cooperation with this programmer, and I would like to work with him again in the future."',
  },
];
const onMenuItemClick = (nextPage, nextPart, event) => {
  event.preventDefault();
  let tmpPage = localStorage.getItem("tmpPage");

  if ((tmpPage !== nextPage && tmpPage) || (!tmpPage && nextPage == "main")) {
    localStorage.setItem("nextPart", nextPart);

    loadNewBonePage(nextPage);

    if (nextPage === "main" && pages.hasOwnProperty(nextPart)) {
      changeMainPagePart(nextPart);
    }
  } else if (nextPage === "main") {
    localStorage.setItem("nextPart", nextPart);
    changeMainPagePart(nextPart);
  }
};
const onSocialItemClick = () => {
  let wWidth = window.innerWidth;
  let wHeight = window.innerHeight;

  if (wHeight < Number(900) && wWidth < Number(500)) {
    document.getElementById("menu-container").style.height = "120px";
    document.getElementById("mainBurgerInput").checked = false;
  }
};

const loadNewBonePage = (nextPage) => {
  location.reload();
  window.location.href = `./${nextPage}.html`;
  localStorage.setItem("tmpPage", nextPage);
};

const contactMessageSubmit = (event) => {
  event.preventDefault();
};

const addPortfolioProjects = () => {
  let projectList = "";

  for (let i = 0; i < projects.length; i++) {
    projectList += `
        <div class="portfolio-project-box">
            <div class="project-click" onclick="onClickProject('${projects[i].name}')"></div>
            <div class="project-box-img">
                <img src="./assets/img/projects/${projects[i].name}/${projects[i].name}_project_main.jpg" alt="${projects[i].name} Main Image">
            </div>
            <div class="project-box-title">
                <h4>${projects[i].title}</h4>
            </div>
            <div class="project-box-desc">
                <p>${projects[i].desc}</p>
            </div>

        </div>
        `;
  }
  document.getElementById("portfolio-content").innerHTML = projectList;
};

// rendering testimonials page

const addTestimonials = () => {
  let testimonialsList = "";

  for (let i = 0; i < testimonials.length; i++) {
    testimonialsList += `
        <div class="testimonial-box">
            <div class="tes-img">
                <img src="./assets/img/testimonials/${testimonials[i].name}.jpg" alt="${testimonials[i].fullName} Picture">
            </div>
            <div class="tes-name">
                <h4>${testimonials[i].fullName}</h4>
            </div>
            <div class="tes-star">
                <div class="star-icon"><i class="fas fa-star"></i></div>
                <div class="star-icon"><i class="fas fa-star"></i></div>
                <div class="star-icon"><i class="fas fa-star"></i></div>
                <div class="star-icon"><i class="fas fa-star"></i></div>
                <div class="star-icon"><i class="fas fa-star"></i></div>
            </div>
            <div class="tes-company">
                <p>${testimonials[i].company}</p>
            
            </div>
            <div class="tes-text">
                <p>${testimonials[i].text}</p>
            </div>
        </div>
        `;
  }

  document.getElementById("testimonial-container").innerHTML = testimonialsList;
};

const handleDropdownBurger = (event) => {
  let dropdown = document.getElementById("dropdown-container");

  if (event.target.checked) {
    dropdown.classList.remove("display-none");
    setTimeout(() => {
      dropdown.style.transform = "scale(1)";
    });
  } else {
    dropdown.style.transform = "scale(0)";
    setTimeout(() => {
      dropdown.classList.add("display-none");
    }, 250);
  }
};

const handleDropdownMainBurger = (event) => {
  let dropdown = document.getElementById("menu-container");

  if (event.target.checked) {
    dropdown.style.height = "500px";
  } else {
    dropdown.style.height = "120px";
  }
};
