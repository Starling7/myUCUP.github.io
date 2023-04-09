const menu = document.getElementById("menu-label");
const sidebar = document.getElementsByClassName("sidebar")[0];
const rightbar = document.getElementsByClassName("navbar")[0];

menu.addEventListener("click", function () {
  if (sidebar.classList.contains("sidebar")) {
    sidebar.classList.remove("sidebar");
    rightbar.classList.remove("navbar");
  } else {
    sidebar.classList.add("sidebar");
    rightbar.classList.add("navbar");
  }
  sidebar.classList.toggle("hide");
  rightbar.classList.add("navbar-new");
  // sidebar.classList.style.minWidth = "none%";
  // rightbar.classList.style.width = "80%";
  console.log("ok");
});
