const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
			});
		}
	});
});

function hamburgerClick() {
	navMenu.classList.toggle('show-navbar');
	hamburger.classList.toggle('hamburger-active');
}

hamburger.addEventListener('click', hamburgerClick);
window.onscroll = () => {
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
};
