const toggleBtn = document.getElementById("theme-toggle");

function setLightMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  toggleBtn.textContent = "Dark Mode";
}

function setDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  toggleBtn.textContent = "Light Mode";
}

function toggleTheme() {
  if (document.body.classList.contains("dark-mode")) {
    setLightMode();
  } else {
    setDarkMode();
  }
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
};

if (toggleBtn) {
  toggleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleTheme();
  });
}

let count = 0;
const button = document.getElementById("likeButton");
const counter = document.getElementById("likeCount");

button.addEventListener("click", () => {
  count++;
  counter.textContent = "Likes: " + count;
});