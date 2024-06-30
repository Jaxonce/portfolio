const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

// accordeon

$(function() {
	
	//BEGIN
	$(".accordeon__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordeon-active")) {
			$(".accordeon__content").slideUp(400);
			$(".accordeon__title").removeClass("accordeon-active");
			$('.accordeon__arrow').removeClass('accordeon__rotate');
		}

		$this.toggleClass("accordeon-active");
		$this.next().slideToggle();
		$('.accordeon__arrow',this).toggleClass('accordeon__rotate');
	});
	//END
	
});

// langage

const translations = {
    "en": "lang/en.json",
    "fr": "lang/fr.json"
};

function setLanguage(lang) {
    fetch(translations[lang])
        .then(response => response.json())
        .then(data => {
            document.getElementById('experience').innerText = data.experiences;
            document.getElementById('project').innerText = data.projects;
			document.getElementById('skills').innerText = data.skills;
			document.getElementById('contact').innerText = data.contact;
			document.getElementById('title_first_part').innerText = data.title_first_part;
			//document.getElementById('title_second_part').innerText = data.title_second_part;
			document.getElementById('role').innerText = data.role;
			document.getElementById('about_description').innerText = data.about_description;
			document.getElementById('btn_resume').innerText = data.resume;
			document.getElementById('first_experience').innerText = data.experience_section.first.title;
			document.getElementById('second_experience').innerText = data.experience_section.second.title;
			document.getElementById('third_experience').innerText = data.experience_section.third.title;
			document.getElementById('project_section_title').innerText = data.projects_section.title;
			document.getElementById('first_project_description').innerText = data.projects_section.first.description;
			document.getElementById('second_project_description').innerText = data.projects_section.second.description;
			document.getElementById('third_project_description').innerText = data.projects_section.third.description;
			document.getElementById('skills_section').innerText = data.skills;
			document.getElementById('email_me').innerText = data.contacts_section.button;
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Set default language
setLanguage('en');

// change contrast

function changeContrast() {
	const contrast = document.querySelector('html')

	if (contrast.classList.contains('contrast')) {
		contrast.classList.remove('contrast')
	} else {
		contrast.classList.add('contrast')
	}
}

function changeLineHeight() {
	const contrast = document.getElementsByTagName('body')

	if (contrast[0].style.lineHeight == '1.5') {
		contrast[0].style.lineHeight = '2.5'
	} else {
		contrast[0].style.lineHeight = '1.5'
	}
}