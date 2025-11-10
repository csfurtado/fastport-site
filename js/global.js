document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("light-mode");
    const newTheme = body.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
  });
});
