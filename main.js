/* Menu - Show and Hidden */

const navMenu = document.getElementById('navMenu'),
  navToggle = document.getElementById('navToggle'),
  navClose = document.getElementById('navClose')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('showMenu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('showMenu')
  })
}

/*  Close when we click in one option */

const navLink = document.querySelectorAll('.navLink')

function linkAction() {
  const navMenu = document.getElementById('navMenu')

  navMenu.classList.remove('showMenu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* Skills Open - Close */

const SkillsContent = document.getElementsByClassName('skillsContent'),
  skillsHeader = document.querySelectorAll('.skillsHeader')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < SkillsContent.length; i++) {
    SkillsContent[i].className = 'skillsContent skillsClose'
  }
  if (itemClass === 'skillsContent skillsClose') {
    this.parentNode.className = 'skillsContent skillsOpen'
  }
}

skillsHeader.forEach(el => {
  el.addEventListener('click', toggleSkills)
})

/* Qualification Content */

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualificationActive')
    })
    target.classList.add('qualificationActive')

    tab.forEach(tab => {
      tab.classList.remove('qualificationActive')
    })
    tab.classList.add('qualificationActive')
  })
})

/* SERVICES */

const modalViews = document.querySelectorAll('.servicesModal'),
  modalBtns = document.querySelectorAll('.servicesButton'),
  modalCloses = document.querySelectorAll('.servicesModalClose')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('activeModal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('activeModal')
    })
  })
})

/* THEME CHANGE */

const spanViews = document.querySelectorAll('.spanTheme'),
  spanBtns = document.querySelectorAll('.spanThemeButton'),
  spanCloses = document.querySelectorAll('.spanThemeClose')

let spanTheme = function (spanClick) {
  spanViews[spanClick].classList.add('activeSpanTheme')
}

spanBtns.forEach((spanBtn, i) => {
  spanBtn.addEventListener('click', () => {
    spanTheme(i)
  })
})

spanCloses.forEach((spanClose, i) => {
  spanClose.addEventListener('click', () => {
    spanViews.forEach(spanView => {
      spanView.classList.remove('activeSpanTheme')
    })
  })
})

/* SWIPER */

let swiper = new Swiper('.portfolioContainer', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

/* MARKER SECTION SCROLL */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navMenu a[href*=' + sectionId + ']')
        .classList.add('activeLink')
    } else {
      document
        .querySelector('.navMenu a[href*=' + sectionId + ']')
        .classList.remove('activeLink')
    }
  })
}

/* CHANGE HEADER */

function scrollHeader() {
  const nav = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 800) nav.classList.add('scrollHeader')
  else nav.classList.remove('scrollHeader')
}

/* Back to Top */

const backToTopButton = document.querySelector('.scrollUp')

function showButtonToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* CALLING */

window.addEventListener('scroll', function () {
  scrollHeader()
  showButtonToTop()
  scrollActive()
})
