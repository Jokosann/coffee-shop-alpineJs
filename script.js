const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('a[href^="#"]');
const searchIcon = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const searchInputBox = document.getElementById('search');
const shopIcon = document.querySelector('.shop');
const shopCard = document.querySelector('.shop-card');
const shopCardContainer = document.querySelector('.shop-card-container');
// const loves = document.querySelectorAll('.item-love');

// add clas overflow to shop-card
shopCard.classList.toggle('overflow', shopCardContainer.offsetHeight > 521);

// variabel status yang disimpan di JSON
let likes = JSON.parse(localStorage.getItem('love-item')) || [];

// !function untuk menampilkan love in caed product
// function showLove() {
// 	loves.forEach((item, id) => {
// 		let loveInfo = likes[id] || { status: 'false' }; // Menggunakan nilai default jika informasi love tidak ada di localStorage
// 		likes[id] = loveInfo; // Menyimpan informasi love ke dalam array likes
// 		console.log(loveInfo);
// 		if (loveInfo.status === 'true') {
// 			item.classList.add('love-active');
// 		} else {
// 			item.classList.remove('love-active');
// 		}
// 	});
// }
// showLove();

// menambahkan smooth scrollibg pada semua element yang memiliki targer #href
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

// !function updatestatus
function updateStatus(selectLove) {
	selectLove.classList.toggle('love-active');
	const love = Array.from(selectLove.children)[0];
	love.className = `fa-${
		selectLove.classList.contains('love-active') ? 'solid' : 'regular'
	} fa-heart`;
	// let loveId = selectLove.id;
	// likes[loveId].status = selectLove.classList.contains('love-active') ? 'true' : 'false';
	// localStorage.setItem('love-item', JSON.stringify(likes));
}

// function hamburger if click
function hamburgerClick() {
	navMenu.classList.toggle('show-navbar');
	hamburger.classList.toggle('hamburger-active');
	shopCard.classList.remove('shop-active');
	searchInput.classList.remove('search-active');
}

// function search if click
function searchClick() {
	searchInput.classList.toggle('search-active');
	shopCard.classList.remove('shop-active');
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
	searchInputBox.focus();
}

// function shop if click
function shopClick() {
	shopCard.classList.toggle('shop-active');
	searchInput.classList.remove('search-active');
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
}

// function ketika user mengclick apapun
function handleCloseOutside(e) {
	if (
		!hamburger.contains(e.target) &&
		!navMenu.contains(e.target) &&
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

// !eventListener
hamburger.addEventListener('click', hamburgerClick);
searchIcon.addEventListener('click', searchClick);
shopIcon.addEventListener('click', shopClick);
document.addEventListener('click', handleCloseOutside);
window.onscroll = () => {
	navMenu.classList.remove('show-navbar');
	hamburger.classList.remove('hamburger-active');
};
