

	/* function voor openen en sluiten van menu mobile size */

var deButton = document.querySelector("header section:nth-of-type(1) button");

deButton.addEventListener('click', openMenu)

function openMenu() {
var openNav = document.querySelector("header section:nth-of-type(1) nav:nth-of-type(1)")
openNav.classList.toggle("menuGeopend")
}
