const cover = document.querySelector(".cover");
const openMobileNav = document.querySelector(".open-btn");
const mobileNav = document.querySelector(".mobile-navigation");
const closeNav = document.querySelector(".close-btn");
const linearNavigationOverolay = document.querySelector(
  ".linear-navigation-overlay"
);

// eventlisteners
window.addEventListener("scroll", () => {
  closeMobileNavigation();
});
openMobileNav.addEventListener("click", () => {
  mobileNav.style.transform = "scale(1)";
  openMobileNav.style.display = "none";
  closeNav.style.display = "block";
  linearNavigationOverolay.style.opacity = "0.5";
});

closeNav.addEventListener("click", () => {
  closeMobileNavigation();
});

function closeMobileNavigation() {
  mobileNav.style.transform = "scale(0)";
  openMobileNav.style.display = "block";
  closeNav.style.display = "none";
  linearNavigationOverolay.style.opacity = "0";
}
