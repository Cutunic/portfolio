let currentTheme = localStorage.getItem("theme");
let checkbox = "";
let theme = "";

window.addEventListener("load", () => {
  checkbox = document.getElementById("switch");

  if (currentTheme == "light") {
    document.documentElement.setAttribute("data-theme", "light");
    checkbox.checked = false;
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    checkbox.checked = true;
  }
});

const handleThemeChange = (event) => {
  if (event.target.checked) {
    theme = "dark";
  } else {
    theme = "light";
  }
  trans();

  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);
};

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};
