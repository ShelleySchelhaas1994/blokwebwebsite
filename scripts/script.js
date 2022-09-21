

	/* function voor openen en sluiten van menu mobile size */

var deButton = document.querySelector("header section:nth-of-type(1) button");

deButton.addEventListener('click', openMenu)

function openMenu() {
	var deNav = document.querySelector("header > nav")
	deNav.classList.toggle("menuGeopend")
}
