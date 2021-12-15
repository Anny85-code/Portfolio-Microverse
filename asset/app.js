const navMenu = document.getElementById("menu-bar");
const getSideBar = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".aside-close");
const navLinks = document.querySelectorAll(".mobile-nav li");

const toggleSideBar = false;
const closeButton = false;

navMenu.addEventListener("click", function () {
  if (toggleSideBar === false) {
    getSideBar.style.visibility = "visible";
  }
});

closeBtn.addEventListener("click", function () {
  if (closeButton === false) {
    getSideBar.style.visibility = "hidden";
  }
});

function closeLinks() {
  getSideBar.style.visibility = "hidden";
}

navLinks.forEach((links) => links.addEventListener("click", closeLinks));

const works=[{
  name: 'Tonic',
  details: ['CANOPY', 'Back End Dev', '2015'],
  smallPageDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  bigPageDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageMobile: 'asset/image/snapshoot-Portfolio.png',
  imageDesktop: 'asset/image/desktop-image/snapshoot-portfolio-1.png',
  popupImageMobile: 'asset/image/snapshoot-Portfolio.png',
  popupImageDesktop: 'asset/image/desktop-image/snapshoot-portfolio-1.png',
  technologiesPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  technologies: ['html', 'css', 'javaScript'],
  linkLive: '',
  linkSource: '',
},
{
  name: 'Multi-Post Stories',
  details: ['FACEBOOK', 'Full Stack Dev', '2015'],
  smallPageDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  bigPageDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageMobile: 'asset/image/snapshoot-Portfolio2.png',
  imageDesktop: 'asset/image/desktop-image/snapshoot-portfolio-2.png.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'css', 'javaScript'],
  popupImageMobile: 'asset/image/snapshoot-Portfolio2.png',
  popupImageDesktop: 'asset/image/desktop-image/snapshoot-portfolio-2.png.png',
  linkLive: '',
  linkSource: '',
},
{
  name: 'Facebook 360',
  details: ['FACEBOOK', 'Full Stack Dev', '2015'],
  smallPageDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  bigPageDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageMobile: 'asset/image/snapshoot-Portfolio3.png',
  imageDesktop: 'asset/image/desktop-image/snapshoot-portfolio3.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  popupImageMobile: 'asset/image/snapshoot-Portfolio3.png',
  popupImageDesktop: 'asset/image/desktop-image/snapshoot-portfolio3.png',
  linkLive: '',
  linkSource: '',
},
{
  name: 'Uber navigation',
  details: ['Uber', 'Lead developer', '2018'],
  smallPageDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  bigPageDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageMobile: 'asset/image/napshoot-Portfolio4.png',
  imageDesktop: 'asset/image/desktop-image/snapshoot-portfolio4.png',
  technologiesPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  popupImageMobile: 'asset/image/napshoot-Portfolio4.png',
  popupImageDesktop: 'asset/image/desktop-image/snapshoot-portfolio4.png',
  linkLive: '',
  linkSource: '',
}];

function technologies(popup, techData) {
  let a = 1;
  let technologiesPopup = '';
  let technologies = '';
  techData.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes('ruby')) {
        technologies += `<li class="lang ruby">${tech}</li>`;
      } else {
        technologies += `<li class="lang">${tech}</li>`;
      }
    } else {
      if (a <= 3) {
        technologies += `<li class="lang">${tech}</li>`;
      } else {
        technologiesPopup += `<li class="lang ruby">${tech}</li>`;
      }
      a += 1;
    }
  });
  return [technologies, technologiesPopup];
}

let projectsItemsBuild = '';
for (let i = 0; i < works.length; i += 1) {
  // determine flex postion of image and work description
  let flexPosition = 'start';
  let flexPositionReverse = 'end';
  if (i % 2 !== 0) {
    flexPosition = 'end';
    flexPositionReverse = 'start';
  }

  // further loop within the parent loop to break and read technologies
  const techData = technologies(false, works[i].technologies);

  projectsItemsBuild += `<div class="property">
                          <div class="item1 desktop-image ${flexPosition}">
                              <img src="${projects[i].imageMobile}" class="portfolio-image" alt="${projects[i].name} project screenshot"/>
                              <img src="${projects[i].imageDesktop}" class="portfolio-image-desktop" alt="${projects[i].name} project screenshot"/>
                          </div>
                          <div class="test ${flexPositionReverse}">
                              <div class="item2">
                                  <h2 class="work-title">${projects[i].name}</h2>
                              </div>
                              <div class=" mobile-facebook desktop-facebook">
                                 <ul>
                                  <li class="list-main">${projects[i].details[0]}</li>
                                  <li class="titles-item">${projects[i].details[1]}</li>
                                  <li class="titles-item">${projects[i].details[2]}</li>
                              </ul>
                              </div>
                              <p class="works-flex-item works-description">
                                  ${projects[i].smallPageDescription}
                              </p>
                              <div class="works-flex-item">
                                  <ul class="lang-container">
                                      ${techData[0]}
                                  </ul>
                              </div>
                              <div class="works-flex-item">
                                  <div class="btn-see">
                                      <a href="#" class="btn-see-project" project-index="${i}">See project</a>
                                  </div>
                              </div>
                          </div>
                        </div>`;
}

document.querySelector('#portfolio').innerHTML = projectsItemsBuild;

/** * Dynamically adding works-flex items in works section end */
function displayProjectDescriptionPopup(value) {
  const techData = technologies(true, projects[value].technologiesPopup);
  const projectPopup = document.querySelector('#projectPopup');
  const popupContentBuilder = `<div class="popup-content">
                                   <div class="popup-header">
                                       <div class="popup-title">
                                           <div class="topic">
                                               <h1>${projects[value].name}</h1>
                                               <span class="close-popup">&times;</span>
                                           </div>
                                           <ul>
                                           <li class="list-main">${projects[value].details[0]}</li>
                                           <li class="titles-item">${projects[value].details[1]}</li>
                                           <li class="titles-item">${projects[value].details[2]}</li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div class="popup-body">
                                       <div class="work-image">
                                           <img src="${projects[value].popupImageUrlMobile}" class="img-style" alt="${projects[value].name} project screenshot"/>
                                           <img src="${projects[value].popupImageUrlDesktop}" class="img-style-desktop-popup" alt="${projects[value].name} project screenshot"/>
                                       </div>
                                       <div class="description-container">
                                           <div class="project-text intro-message">
                                               <p>
                                               ${projects[value].bigDescription}
                                               </p>
                                           </div>
                                           <div class="project-tags">
                                               <div class="tags">
                                                   <ul>
                                                    ${techData[0]}
                                                   </ul>
                                                   <ul>
                                                    ${techData[1]}
                                                   </ul>
                                               </div>
                                               <div class="tags-buttons">
                                                   <a href="${projects[value].linkLive}" class="btn-see-project">See live <i class="fa fa-rss"></i></a>
                                                   <a href="${projects[value].linkSource}" class="btn-see-project">See source <i class="fa fa-github"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>`;
  projectPopup.innerHTML = popupContentBuilder;
  projectPopup.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });
}
const seeProjectButtons = document.querySelectorAll('.btn-see-project');
for (let c = 0; c < seeProjectButtons.length; c += 1) {
  seeProjectButtons[c].addEventListener('click', () => {
    displayProjectDescriptionPopup(seeProjectButtons[c].getAttribute('project-index'));
  });
}
