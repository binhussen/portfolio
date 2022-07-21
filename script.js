/** @format */

const logo = document.querySelector('.logo');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelectorAll('.nav-item');
const modal = document.querySelector('.modal');
const seeProject = document.querySelectorAll('.see-project');

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
    title: 'Multi-Post Stories',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Img-Placeholder.svg',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took astandard dummy text.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
  {
    title: 'Professional Art Printing Data',
    technologies: ['html', 'css', 'ruby on rails'],
    imageURL: './assets/images/content/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seeLiveLink: 'https://binhussen.github.io/portfolio/',
    seeSourceLink: 'https://github.com/binhussen/portfolio',
  },
];

const openModal = (i) => {
  const projectTechs = projects[i].technologies.map(
    (tec) => `<li class="tag">${tec}</li>`,
  );

  modal.classList.toggle('hidden');
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
          <div class="container">
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

// eslint-disable-next-line no-plusplus
for (let i = 0; i < seeProject.length; i++) {
  seeProject[i].addEventListener('click', () => {
    openModal(i);
  });
}
