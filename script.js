function toggleMenu() {
	const menu = document.getElementById('mobile-menu');
	const btn = document.querySelector('.hamburger');
	menu.classList.toggle('open');
	btn.classList.toggle('open');
}

function closeMenu() {
	document.getElementById('mobile-menu').classList.remove('open');
	document.querySelector('.hamburger').classList.remove('open');
}

function toggleTheme(isLight) {
	const theme = isLight ? 'light' : 'dark';
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
}