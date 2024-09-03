const btnMenu = document.getElementById("hamburguer-button");
const menu = document.getElementById("menu");

btnMenu.classList.add("hamburguer-button", "hamburguer-button-js-enabled");

function closeMenu() { 
  btnMenu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  menu.classList.add("menu-closed");
}




function toggleMenu(event) {
  // Evita que o clique no botão feche o menu imediatamente
  event.stopPropagation();

  let expanded = btnMenu.getAttribute("aria-expanded") === "true";

  if (expanded) {
    closeMenu();
  } else {
    btnMenu.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    menu.classList.remove("menu-closed");
  }
}

btnMenu.addEventListener("click", toggleMenu);

// Fecha o menu quando clicar fora dele
document.addEventListener("click", function(event) {
  if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
    closeMenu();
  }



});
