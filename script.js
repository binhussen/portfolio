/** @format */

const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelectorAll('.nav-item');
const modal = document.querySelector('.modal');
const cards = document.querySelector('.card-works');
const wrapper = document.querySelector('.wrapper');
const overFlow = document.querySelector('*');
const submit = document.querySelector('.submit');

const openMenu = () => {
  logo.classList.toggle('active');
  navMenu.classList.remove('desktop');
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
};

const closeMenu = () => {
  navMenu.classList.add('desktop');
  logo.classList.remove('active');
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  openMenu();
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

const projects = [
  {
    title: 'Countries weather',
    technologies: ['React', 'Redux', 'Tailwind'],
    imageURL: [
      './assets/images/content/country-info.png',
      './assets/images/content/country-info.png',
    ],
    content:
      'Countries weather is a web app that will be working with the actual live data from the rest countries API and open weather API. The application will allow users to get detail information about the country and weather.',
    description:
      'Countries weather is a web app that will be working with the actual live data from the rest countries API and open weather API. The application will allow users to get detail information about the country and weather. The Bookstore is a website that allows you to Display a list of books, Add a book, Remove a selected book, and follow your progress. built with React.js',
    seeLiveLink: 'https://country-weathers.netlify.app/',
    seeSourceLink: 'https://github.com/binhussen/country-info',
  },
  {
    title: 'Book Store',
    technologies: ['React', 'Redux', 'Tailwind'],
    imageURL: [
      './assets/images/content/book-store.png',
      './assets/images/content/book_store.png',
    ],
    content:
      'Bookstore is a website that allows you to display a list of books, add a book, remove a selected book, and follow your progress. built with React.js',
    description:
      'Bookstore is a website that allows you to display a list of books, add a book, remove a selected book, and follow your progress. built with React.js',
    seeLiveLink: 'https://binhussen.github.io/book-store/',
    seeSourceLink: 'https://github.com/binhussen/book-store',
  },
  {
    title: 'Foodie',
    technologies: ['javascript', 'html', 'css'],
    imageURL: [
      './assets/images/content/foodie.png',
      './assets/images/content/foodie_.png',
    ],
    content:
      'This is a website that lists meals with the option to checkout the recipe and to give a thumbs up if you like it. Its built on the mealDb API, an external API to display data about each meal.',
    description:
      'This is a website that lists meals with the option to checkout the recipe and to give a thumbs up if you like it. Its built on the mealDb API, an external API to display data about each meal.',
    seeLiveLink: 'https://binhussen.github.io/foodie/',
    seeSourceLink: 'https://github.com/binhussen/foodie',
  },
  {
    title: 'Space Travelers Hub',
    technologies: ['React', 'Redux', 'Tailwind'],
    imageURL: [
      './assets/images/content/space-hub.png',
      './assets/images/content/space_hub.png',
    ],
    content:
      'Space Travelers Hub is a website that will be working with real live data from the SpaceX API for a company that provides commercial and scientific space travel services',
    description:
      'Space Travelers Hub is a website that will be working with real live data from the SpaceX API for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    seeLiveLink: 'https://spaces-hub.netlify.app/',
    seeSourceLink: 'https://github.com/binhussen/space-travelers-hub',
  },
  {
    title: 'Bin Tech',
    technologies: ['javascript', 'html', 'css'],
    imageURL: [
      './assets/images/content/bin-tech.png',
      './assets/images/content/bin_tech.png',
    ],
    content:
      'Bin-Tech is a nationwide innovation competition, Bin-tech has been guiding young Ethiopians into the realm of tech entrepreneurship by providing technical and theoretical training courses on Software Development.',
    description:
      'Bin-Tech is a nationwide innovation competition, Bin-tech has been guiding young Ethiopians into the realm of tech entrepreneurship by providing technical and theoretical training courses on Software Development.',
    seeLiveLink: 'https://binhussen.github.io/bin-tech/',
    seeSourceLink: 'https://github.com/binhussen/bin-tech',
  },
  {
    title: 'Inventory Management System',
    technologies: ['Angular', 'Angular Material', 'DotNet Core'],
    imageURL: [
      './assets/images/content/inventory-.png',
      './assets/images/content/inventory_.png',
    ],
    content:
      'It is an inventory management system for companies that provides an easy way to track requests, approval of proposals, purchases, products, suppliers, customers, and distribution information.',
    description:
      'It is an inventory management system for companies that provides an easy way to track requests, approval of proposals, purchases, products, suppliers, customers, and distribution information.',
    seeLiveLink: 'https://github.com/binhussen/inventory-management-system',
    seeSourceLink: 'https://github.com/binhussen/inventory-management-system',
  },
  {
    title: 'Leader Board',
    technologies: ['javascript', 'html', 'css'],
    imageURL: [
      './assets/images/content/leader-board.png',
      './assets/images/content/leader_board.png',
    ],
    content:
      'Leaderboard is a list app that displays scores that have been submitted by different players, It also allows you to submit your score. All data is manipulated Leaderboard API service.',
    description:
      'Leaderboard is a list app that displays scores that have been submitted by different players, It also allows you to submit your score. All data is manipulated Leaderboard API service. developed using webpack and ES6 features(modules, async and await).',
    seeLiveLink: 'https://binhussen.github.io/leaderboard/',
    seeSourceLink: 'https://github.com/binhussen/leaderboard',
  },
];

const openModal = (i) => {
  const projectTechs = projects[i].technologies.map(
    (tec) => `<li class="tag">${tec}</li>`,
  );

  modal.classList.toggle('hidden');
  wrapper.classList.toggle('blur');
  overFlow.classList.toggle('scroll-off');

  modal.innerHTML = `
  <div class="modal-header">
          <h1 class="primary-title modal-title">${projects[i].title}</h1>
          <img src="assets/images/icons/Icon-Cancel.svg" alt="Cancel" class="cancel"/>
        </div>
        <ul class="tags">${projectTechs.join('')}
        </ul>
        <div class="works-stories">
          <img
            src=${projects[i].imageURL[1]}
            alt="Recent Works GYMFIT Multi-Post Stories image"
            class="avatar modal-image"
          />
          <div class="container space">
            <p class="text-content works-content">
              ${projects[i].description}
            </p>
            <div class="btns">
              <a href=${projects[i].seeLiveLink
    }><button type="button" class="btn">
                See Live
                <img
                  class="btn-icon"
                  src="./assets/images/icons/Icon-power.svg"
                /></button></a>
              </button>
             <a href=${projects[i].seeSourceLink
    }><button type="button" class="btn">
                See Source
                <img
                  class="btn-icon"
                  src="./assets/images/icons/github-white.svg"
                />
              </button></a>
            </div>
          </div>
        </div>
  `;
};

const showCards = (i) => {
  const projectTechs = projects[i].technologies.map(
    (tec) => `<li class="tag  card-tag">${tec}</li>`,
  );

  cards.innerHTML += `<div class="card">
            <div class="card-content">
              <h2 class="card-title">${projects[i].title}</h2>
              <p class="text-content">${projects[i].content}
              </p>
              <ul class="tags">
                ${projectTechs.join('')}
              </ul>
            </div>
            <button type="button" class="btn mobile see-project">
              See Project
            </button>
          </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  projects.forEach((ele, i) => {
    if (i > 0) showCards(i);
  });

  const seeProject = document.querySelectorAll('.see-project');

  seeProject.forEach((project, i) => {
    seeProject[i].addEventListener('click', () => {
      openModal(i);
      const cancel = document.querySelector('.cancel');
      cancel.addEventListener('click', () => {
        modal.classList.toggle('hidden');
        wrapper.classList.toggle('blur');
        overFlow.classList.toggle('scroll-off');
      });
    });
  });

  const card = document.querySelectorAll('.card');
  document.querySelector('.avatar').src = projects[0].imageURL.at(0);
  card.forEach((element, i) => {
    element.style.backgroundImage = `url(${projects[i + 1].imageURL[0]})`;
  });
});

submit.addEventListener('click', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Email has to be in lowercase!';
    setTimeout(() => {
      error.innerHTML = '';
    }, 10000);
  }
});
