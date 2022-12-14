/* function voor openen en sluiten van menu mobile size */

var deButton = document.querySelector("header section:nth-of-type(1) button");

deButton.addEventListener('click', openMenu)

function openMenu() {
	var deNav = document.querySelector("header > nav")
	deNav.classList.toggle("menuGeopend")
}


// buttons carousel pagina twee - BRON: Kyle Cook | youtube: https://www.youtube.com/watch?v=9HcxHDS2w1s&ab_channel=WebDevSimplified
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const offset = button.dataset.carouselButton === "next" ? 1 : -1
		
		const slides = button
			.closest("[data-carousel]")
			.querySelector("[data-slides]")

		const activeSlide = slides.querySelector("[data-active]")
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.lenght - 1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})