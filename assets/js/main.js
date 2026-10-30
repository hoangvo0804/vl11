
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.navlinks');
 if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});
});

// LIQUID GLASS NAVBAR

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  function closeMenu() {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Bấm ra ngoài để đóng
  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Chọn trang thì đóng menu
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Nhấn ESC để đóng
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

}

/* SECRET EASTER EGG */

const secretLogo = document.querySelector(".brand");

if (secretLogo) {
  let clickCount = 0;
  let clickTimer;

  secretLogo.addEventListener("click", (event) => {
    event.preventDefault();

    clickCount++;

    clearTimeout(clickTimer);

    if (clickCount >= 5) {
      window.location.href = "secret.html";
      return;
    }

    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 2000);
  });
}
