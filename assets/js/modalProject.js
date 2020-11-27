let currentSlide = 1;
let project = null;

const onClickProject = (clickedProjectName) => {
  setTimeout(() => {
    document
      .getElementById("modal-project-container")
      .classList.add("modal-animation");
  }, 1);
  setTimeout(() => {}, 2);
  document.body.innerHTML += modalProjectComp;

  document.getElementById("switch").checked =
    localStorage.getItem("theme") === "dark";
  document
    .getElementById("home-page-container")
    .classList.add("blur-behind-modal");

  addProjectInfo(clickedProjectName);
};

const onClickCloseProject = (event) => {
  if (event.srcElement.id === "modal-project-background") {
    closeModalProject();
  }
};
const onClickCloseXProject = (event) => {
  closeModalProject();
};

const closeModalProject = () => {
  setTimeout(() => {
    document.getElementById("modal-project-background").remove();
  }, 350);

  document
    .getElementById("home-page-container")
    .classList.remove("blur-behind-modal");
  document
    .getElementById("modal-project-container")
    .classList.remove("modal-animation");
  currentSlide = 1;
  project = null;
};

const addProjectInfo = (clickedProjectName) => {
  let carouselImages = "";
  let imageClassList = "";

  project = projects.find((el) => clickedProjectName === el.name);
  for (let i = 1; i <= project.imgNum; i++) {
    if (i === 1) {
      imageClassList = "project-carousel-img project-carousel-img-block";
    } else {
      imageClassList = "project-carousel-img";
    }
    carouselImages += `<img src="./assets/img/projects/${project.name}/${
      project.name + i
    }.jpg" alt="${
      project.name
    } Image" class="project-carousel-img ${imageClassList}">`;
  }

  document.getElementById("project-carousel").innerHTML += carouselImages;
  document
    .getElementById("project-name")
    .getElementsByTagName("p")[0].innerText = project.title;
  document
    .getElementById("project-desc")
    .getElementsByTagName("p")[0].innerText = project.desc;
  document.getElementById("project-link").getElementsByTagName("a")[0].href =
    project.link;
  document
    .getElementById("project-code-link")
    .getElementsByTagName("a")[0].href = project.gitLink;
  document
    .getElementById("project-learn")
    .getElementsByTagName("p")[0].innerText = project.learn;
  document
    .getElementById("project-problem")
    .getElementsByTagName("p")[0].innerText = project.problem;
};

const onCarouselClick = (operator) => {
  let currSlide = currentSlide;
  if (operator === "+") {
    currentSlide++;
  } else if (operator === "-") {
    currentSlide--;
  }

  if (currentSlide > project.imgNum) currentSlide = 1;
  if (currentSlide < 1) currentSlide = project.imgNum;

  let nextSlide = currentSlide;

  document
    .getElementsByClassName("project-carousel-img")
    [currSlide - 1].classList.remove("project-carousel-img-block");
  document
    .getElementsByClassName("project-carousel-img")
    [nextSlide - 1].classList.add("project-carousel-img-block");
};
