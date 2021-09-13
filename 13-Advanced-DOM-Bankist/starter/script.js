'use strict';

///////////////////////////////////////
// Modal window
// console.log(document.documentElement); //to select entrire html
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));
// console.log(document.querySelectorAll('.section')); //node will remain unchanged if we delete any elements

// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button')); //live collection(updates automatically)

// console.log(document.getElementsByClassName('btn'));

//creating and elements
//.insertAdjacentHTML
const msg = document.createElement('div');
msg.classList.add('cookie-message'); //only one copy
msg.textContent = 'We use cookies for improved functionality and analytics';
msg.innerHTML = `We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button>`;
const header = document.querySelector('.header');
header.prepend(msg);
// header.append(msg);
// header.append(msg.cloneNode(true));
// header.before(msg);
// header.after(msg);
//delete an element
const cookieBtn = document.querySelector('.btn--close-cookie');
cookieBtn.addEventListener('click', () => {
  // msg.parentElement.removeChild(msg); old way
  msg.remove();
});

//styles(inline styles)
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
console.log(msg.style.backgroundColor); //only inline styles
console.log(getComputedStyle(msg).color); //all styles
// msg.style.height =
//   Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px';
// console.log(
//   document.documentElement.style.setProperty('--color-primary', 'red')
// );
//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //only standared proprties work
console.log(logo.src);
console.log(logo.className);
// console.log(
//   logo.setAttribute(
//     'src',
//     'https://images.unsplash.com/photo-1628191078376-f31a36c9f2cf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
//   )
// );
console.log(logo.getAttribute('src'));
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
//data attributes
console.log(logo.dataset.versionNumber);
//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
// logo.className=;  //don't use this class

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// console.log(btnsOpenModal);
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//
//
//implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', event => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(event.target.getBoundingClientRect);
  // console.log('Current scorll (X/Y', window.pageXOffset, window.pageYOffset);
  // console.log('height/width view port', document.documentElement.clientHeight);
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  console.log(s1coords.left + window.pageXOffset);
  section1.scrollIntoView({ behavior: 'smooth' });
});

//
//
//types of event and event handlers
let h1 = document.querySelector('h1');
const alertOnH1 = e => {
  //hover over h1 element
  alert('addEventListener: h1');
};
h1.addEventListener('mouseenter', alertOnH1);

// h1.onmouseenter = e => {
//   //old way of listening
//   //hover over h1 element
//   alert('addEventListener: h1');
// };
setTimeout(() => h1.removeEventListener('mouseenter', alertOnH1), 5000);

//
//
//event propogation:bubbling and capturing
//event is generated at root and in capturing phase goes to its target from
//root. Then target phase begins
//capturing,target and bubbling

//
//
//event propogation in practise
//event bubbling
//rgb(255,255,255)
//event happens at root
//click events+bubbling also (but not in capturing phase)
//capturing phase event handling(set 3rd parameter to true)
// const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const randomColor = () =>
//   `rgb( ${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, 'link', e.currentTarget);
//   // e.stopPropagation(); //to stop propagation
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, 'links', e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, 'navs', e.currentTarget);
//   },
//   false
// );

//
//
//event delegation:Implementing smooth navigation

//bit inefficient way if there are more links
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log(e);
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

//efficient way
document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();
    // console.log(event.target);
    //matching strategy
    if (
      event.target.classList.contains('nav__link') &&
      !event.target.classList.contains('nav__link--btn')
    ) {
      const id = event.target.getAttribute('href');
      console.log(id);

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

//
//
//DOM traversing
// h1 = document.querySelector('h1');
// //going downwards
// console.log(h1);
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //direct children
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('h1').style.background = 'var(--gradient-secondary)'; //opposite of query selector
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.tramnsform = 'scale(0.5)';
//   }
// });

//
//
//building a tabbed component
const tabs = document.querySelectorAll('.operations__tab');
// console.log(tabs);
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// console.log(tabs, tabsContainer, tabsContent);
tabsContainer.addEventListener('click', event => {
  const buttonSelected = event.target.closest('.operations__tab');
  console.log(buttonSelected);
  if (!buttonSelected) return; //guard clause bit modern way
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  buttonSelected.classList.add('operations__tab--active');
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${buttonSelected.dataset.tab}`)
    .classList.add('operations__content--active');
});

//
//
//passing arguments to event handlers
const handleHover = function (e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
//passing "argument" into handler
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//
//
//Implementing sticky navigation:the scroll event

//inefficient ways
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY, initialCoords.top);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//
//
//A better way:The intersection observer API
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = { root: null, threshold: [0, 0.2] }; //in view port atleast 10% section1 should be visible
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// console.log(observer.observe(document.querySelector('#section--1')));
// // console.log(document.querySelector('#section--3'));

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
// header = document.querySelector('.header');
console.log(header);
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObserver.observe(header);

//
//
//revealing elements on scroll
//reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//
//
//lazy loading images
const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);
const displayImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry.target);
  //entry.target.dataset.src
  const imgPath = entry.target.getAttribute('data-src');
  entry.target.setAttribute('src', imgPath);
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(displayImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTarget.forEach(imgElement => imgObserver.observe(imgElement));

//
//
//Building a slider component part-1 and part-02
const slides = document.querySelectorAll('.slide');

// const slider = document.querySelector('.slider');
// slider.style.transform = `scale(0.3) translateX(-1100px)`;
// slider.style.overflow = 'visible';
//0% 100% 200% 300% 400%

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const goToSlide = startingSlide => {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${(index - startingSlide) * 100}%)`)
  );
};

// slides.forEach(
//   (slide, index) => (slide.style.transform = `translateX(${index * 100}%)`)
// );

const activeDot = currSlide => {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${currSlide}"]`)
    .classList.add('dots__dot--active');
};
goToSlide(0);

const prevSlide = () => {
  currSlide = (currSlide - 1 + maxSlide) % maxSlide;
  goToSlide(currSlide);
  activeDot(currSlide);
};
const nextSlide = () => {
  currSlide = (currSlide + 1) % maxSlide;
  goToSlide(currSlide);
  activeDot(currSlide);
};

let currSlide = 0;
let maxSlide = slides.length;
btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', e => {
  if (e.key == 'ArrowLeft') {
    prevSlide();
    activeDot(currSlide);
  } else if (e.key == 'ArrowRight') {
    nextSlide();
    activeDot(currSlide);
  }
});

const dotContainer = document.querySelector('.dots');
const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();
activeDot(0);

dotContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    currSlide = slide;
    activeDot(slide);
  }
});

//
//
//life cycle od DOM Events
document.addEventListener('DOMContentLoaded', () =>
  console.log('DOM is loaded')
); //just html and js(not necessarly images are loaded)

window.addEventListener('load', e => {
  //when everything is loaded(including images)
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', e => {
  // e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

//
//
//efficient script loading:defer and async
{
  /* <script src="script.js"></script>
<script async src="script.js"></script>
<script defer src="script.js"></script> */
}
