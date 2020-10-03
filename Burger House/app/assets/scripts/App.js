import '../styles/main.scss';

document.querySelector('.nav__mobile').addEventListener('click', () => {
	document.querySelector('.nav__content').classList.toggle('nav__content-show');
});
