const hamburgerBtnClass = 'header__hamburger'
const hamburgerBtn = document.querySelector(`.${hamburgerBtnClass}`)
const menuElementClass = 'header__menu-list'
const menuElement = document.querySelector(`.${menuElementClass}`)
const activePrefix = '_active'

hamburgerBtn.addEventListener('click', () => {
	hamburgerBtn.classList.toggle(`${hamburgerBtnClass}${activePrefix}`)

	if (hamburgerBtn.classList.contains(`${hamburgerBtnClass}${activePrefix}`)) {
		menuElement.style.maxBlockSize = `${menuElement.scrollHeight}px`
	} else {
		menuElement.style.maxBlockSize = ''
	}

	menuElement.classList.toggle(`${menuElementClass}${activePrefix}`)
})
