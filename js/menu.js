const hamburguerIcon = document.querySelector(".nav__hamburguer");
const navOverley = document.querySelector(".nav__overlay");
let currentDopdown = navOverley;

hamburguerIcon.addEventListener("click", () => {
  hamburguerIcon.classList.toggle("nav__hamburguer--open");

  navOverley.classList.toggle("nav__overlay--show");
});

navOverley.addEventListener("click", (e) => {
  e.preventDefault();
 const currentElement = e.target;
  if (isActive(currentElement, 'nav__parent')) {
    const subMenu = currentElement.parentElement.children[1];
    //console.log(subMenu);

    if (window.innerWidth <= 768) {
      let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;
      subMenu.style.height = `${height}px`;
      //console.log(subMenu.clientHeight);
    } else {
      if(!isActive(subMenu, 'nav__inner--show')){
        closeDropdown(currentDopdown);
      }
      subMenu.classList.toggle('nav__inner--show');
      currentDopdown = subMenu;
    }
  }
});

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function closeDropdown(currentDopdown) {
  currentDopdown.classList.remove("nav__inner--show");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const navInner = document.querySelectorAll(".nav__inner");

    navInner.array.forEach(navInner => {
      navInner.style.height ='';
    });
  }
});