const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('a[href^="#"]');
const searchIcon = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const searchInputBox = document.getElementById('search');
const shopIcon = document.querySelector('.shop');
const shopCard = document.querySelector('.shop-card');
const loves = document.querySelectorAll('.item-love');

loves.forEach((love) => {
	love.addEventListener('click', () => {
		love.classList.toggle('love-active');
	});
});

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
	shopCard.classList.remove('shop-active');
	searchInput.classList.remove('search-active');
}

function searchClick() {
	searchInput.classList.toggle('search-active');
	shopCard.classList.remove('shop-active');
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
	searchInputBox.focus();
}

function shopClick() {
	shopCard.classList.toggle('shop-active');
	searchInput.classList.remove('search-active');
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
}

function handleCloseOutside(e) {
	if (
		!hamburger.contains(e.target) &&
		!shopCard.contains(e.target) &&
		!shopIcon.contains(e.target) &&
		!searchInput.contains(e.target) &&
		!searchIcon.contains(e.target)
	) {
		shopCard.classList.remove('shop-active');
		searchInput.classList.remove('search-active');
		navMenu.classList.remove('show-navbar');
		hamburger.classList.remove('hamburger-active');
	}
}

hamburger.addEventListener('click', hamburgerClick);
searchIcon.addEventListener('click', searchClick);
shopIcon.addEventListener('click', shopClick);
document.addEventListener('click', handleCloseOutside);
window.onscroll = () => {
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
};
