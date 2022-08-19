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
    title: 'Inventory Management System',
    technologies: ['Angular', 'dotNet Core'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/163703865-078cd82a-82d7-47b9-a729-418b3e4ee837.png',
    content:
      'It is an inventory management system for companies that provides an easy way to track requests, approval of requests , purchases, products, suppliers, customers, and distribution information.',
    description:
      'It is an inventory management system for companies that provides an easy way to track requests, approval of requests , purchases, products, suppliers, customers, and distribution information.',
    seeLiveLink: 'https://github.com/binhussen/inventory-management-system',
    seeSourceLink: 'https://github.com/binhussen/inventory-management-system',
  },
  {
    title: 'Bin Tech',
    technologies: ['html', 'css', 'Javascript'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/185614549-0b2b7d4e-99d6-4030-b924-3daf3f9a7123.png',
    content:
      'Bin Tech has been guiding young Ethiopians into the realm of tech entrepreneurship.',
    description:
      'Bin Tech has been guiding young Ethiopians into the realm of tech entrepreneurship by providing technical and theoretical training courses on software development.',
    seeLiveLink: 'https://binhussen.github.io/bin-tech/',
    seeSourceLink: 'https://github.com/binhussen/bin-tech',
  },
  {
    title: 'ToDo-list',
    technologies: ['html', 'css', 'JavaScript'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/185615246-d1964a49-fe18-4c29-bc87-2eb5c42f1da2.png',
    content: 'A to-do list is a tool that helps organize your day. ',
    description:
      'A to-do list is a tool that helps organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    seeLiveLink: 'https://binhussen.github.io/todo-list/',
    seeSourceLink: 'https://github.com/binhussen/todo-list',
  },
  {
    title: 'Awesome Books',
    technologies: ['html', 'css', 'JavaScript'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/185615791-1026b69c-d49b-4ccd-b61b-e9f2d505cf87.png',
    content:
      'Awesome Books is a basic website that allows users to add/remove books from a list.',
    description:
      'Awesome Books is a basic website that allows users to add/remove books from a list. witch is done by using JavaScript objects,arrays and Local Storage.',
    seeLiveLink: 'https://binhussen.github.io/awesome-books/',
    seeSourceLink: 'https://github.com/binhussen/awesome-books',
  },
  {
    title: 'Restaurant Food Ordering and Delivery',
    technologies: ['Android', 'Java', 'Firebase'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/156871994-fac0a47e-c3eb-4f73-bb2f-146466cfa6b7.jpg',
    content:
      "An Android app for a restaurant's menu, ordering, and delivery with custom components and layouts.",
    description:
      "An Android app for a restaurant's menu, ordering, and delivery with custom components and layouts. designed based on the real-life scenario. which contains an online menu, a cart, a map, and payment.",
    seeLiveLink:
      'https://github.com/binhussen/restaurant-food-ordering-and-delivery-app',
    seeSourceLink:
      'https://github.com/binhussen/restaurant-food-ordering-and-delivery-app',
  },
  {
    title: 'Tour website',
    technologies: ['html', 'css'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/185616870-55208c74-633c-4b43-8fa2-64a480f33ed3.png',
    content:
      'A travel website is a website that provides travel reviews, trip fares, or a combination of both.',
    description:
      'A travel website is a website that provides travel reviews, trip fares, or a combination of both.',
    seeLiveLink: 'https://binhussen.github.io/tour-website/',
    seeSourceLink: 'https://github.com/binhussen/tour-website',
  },
  {
    title: 'Portfolio',
    technologies: ['html', 'css', 'JavaScript'],
    imageURL:
      'https://user-images.githubusercontent.com/52010789/185617328-adf62734-5770-4261-939a-41a7b4eb4532.png',
    content:
      'This is my portfolio resume that showcases examples of my work along with the usual resume information about my work experience.',
    description:
      'This is my portfolio resume that showcases examples of my work along with the usual resume information about my work experience.',
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
];

const openModal = (i) => {
  const projectTechs = projects[i].technologies.map(
    (tec) => `<li class="tag">${tec}</li>`
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
            src=${projects[i].imageURL}
            alt="Recent Works GYMFIT Multi-Post Stories image"
            class="avatar modal-image"
          />
          <div class="container space">
            <p class="text-content works-content">
              ${projects[i].description}
            </p>
            <div class="btns">
              <a href=${
                projects[i].seeLiveLink
              }><button type="button" class="btn">
                See Live
                <img
                  class="btn-icon"
                  src="./assets/images/icons/Icon-power.svg"
                /></button></a>
              </button>
             <a href=${
               projects[i].seeSourceLink
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
    (tec) => `<li class="tag  card-tag">${tec}</li>`
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
