const menu = document.querySelector("#menu");
const burger = document.querySelector("#burger");
const html = document.documentElement;
const toggleButton = document.getElementById("dark-mode-toggle");

burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
})


      // Check local storage for dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
        html.classList.add("dark");
      }

      toggleButton.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
          html.classList.remove("dark");
          localStorage.setItem("dark-mode", "disabled");
        } else {
          html.classList.add("dark");
          localStorage.setItem("dark-mode", "enabled");
        }
      });