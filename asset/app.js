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

const works = [
  {
    name: "Tonic",
    details: ["CANOPY", "Back End Dev", "2015"],
    smallPageDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    bigPageDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageMobile: "./asset/image/snapshoot-Portfolio.png",
    imageDesktop: "./asset/image/desktop-image/snapshoot-portfolio-1.png",
    popupImageMobile: "./asset/image/snapshoot-Portfolio.png",
    popupImageDesktop: "./asset/image/desktop-image/snapshoot-portfolio-1.png",
    technologiesPopup: [
      "html",
      "css",
      "javaScript",
      "github",
      "Ruby",
      "Bootstrap",
    ],
    technologies: ["html", "css", "javaScript"],
    linkLive: "",
    linkSource: "",
  },
  {
    name: "Multi-Post Stories",
    details: ["FACEBOOK", "Full Stack Dev", "2015"],
    smallPageDescription:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    bigPageDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageMobile: "./asset/image/snapshoot-Portfolio2.png",
    imageDesktop: "./asset/image/desktop-image/snapshoot-portfolio-2.png.png",
    technologiesPopup: ["html", "Ruby on rails", "css", "javaScript"],
    technologies: ["html", "css", "javaScript"],
    popupImageMobile: "./asset/image/snapshoot-Portfolio2.png",
    popupImageDesktop:
      "./asset/image/desktop-image/snapshoot-portfolio-2.png.png",
    linkLive: "",
    linkSource: "",
  },
  {
    name: "Facebook 360",
    details: ["FACEBOOK", "Full Stack Dev", "2015"],
    smallPageDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    bigPageDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageMobile: "./asset/image/snapshoot-Portfolio3.png",
    imageDesktop: "./asset/image/desktop-image/snapshoot-portfolio3.png",
    technologiesPopup: ["html", "Ruby on rails", "css", "javaScript"],
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    popupImageMobile: "./asset/image/snapshoot-Portfolio3.png",
    popupImageDesktop: "./asset/image/desktop-image/snapshoot-portfolio3.png",
    linkLive: "",
    linkSource: "",
  },
  {
    name: "Uber navigation",
    details: ["Uber", "Lead developer", "2018"],
    smallPageDescription:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    bigPageDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageMobile: "./asset/image/napshoot-Portfolio4.png",
    imageDesktop: "./asset/image/desktop-image/snapshoot-portfolio4.png",
    technologiesPopup: ["html", "Ruby on rails", "css", "javaScript"],
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    popupImageMobile: "./asset/image/napshoot-Portfolio4.png",
    popupImageDesktop: "./asset/image/desktop-image/snapshoot-portfolio4.png",
    linkLive: "",
    linkSource: "",
  },
];

function technologies(popup, techData) {
  let a = 1;
  let technologiesPopup = "";
  let technologies = "";
  techData.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes("ruby")) {
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

let worksItemsBuild = "";
for (let i = 0; i < works.length; i += 1) {
  // determine flex postion of image and work description
  let flexPosition = "start";
  let flexPositionReverse = "end";
  if (i % 2 !== 0) {
    flexPosition = "end";
    flexPositionReverse = "start";
  }

  // further loop within the parent loop to break and read technologies
  const techData = technologies(false, works[i].technologies);
  console.log(works[i].imageDesktop);

  worksItemsBuild += `<div class="property">
    <div class="item1">
            <img src="${works[i].imageDesktop}" class="portfolio-image" alt="Tonic" />
          </div>
          <div class="desktop-image">
            <img
              src="asset/image/desktop-image/snapshoot-portfolio-1.png" class="portfolio-image-desktop"
              alt="Portfolio-card1"
            />
          </div>
  
  </div>`;
}

document.querySelector(".container").innerHTML = worksItemsBuild;

/** * Dynamically adding works-flex items in works section end */
function displayProjectDescriptionPopup(value) {
  const techData = technologies(true, works[value].technologiesPopup);
  const projectPopup = document.querySelector("#projectPopup");
  const popupContentBuilder = `<div class="popup-content">
                                   <div class="popup-header">
                                       <div class="popup-title">
                                           <div class="topic">
                                               <h1>${works[value].name}</h1>
                                               <span class="close-popup">&times;</span>
                                           </div>
                                           <ul>
                                           <li class="list-main">${works[value].details[0]}</li>
                                           <li class="titles-item">${works[value].details[1]}</li>
                                           <li class="titles-item">${works[value].details[2]}</li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div class="popup-body">
                                       <div class="work-image">
                                           <img src="${works[value].popupImageUrlMobile}" class="img-style" alt="${works[value].name} project screenshot"/>
                                           <img src="${works[value].popupImageUrlDesktop}" class="img-style-desktop-popup" alt="${works[value].name} project screenshot"/>
                                       </div>
                                       <div class="description-container">
                                           <div class="project-text intro-message">
                                               <p>
                                               ${works[value].bigDescription}
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
                                                   <a href="${works[value].linkLive}" class="btn-see-project">See live <i class="fa fa-rss"></i></a>
                                                   <a href="${works[value].linkSource}" class="btn-see-project">See source <i class="fa fa-github"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>`;
  projectPopup.innerHTML = popupContentBuilder;
  projectPopup.style.display = "block";
  const closePopup = document.querySelector(".close-popup");
  closePopup.addEventListener("click", () => {
    projectPopup.style.display = "none";
  });
}
const seeProjectButtons = document.querySelectorAll(".btn-see-project");
for (let c = 0; c < seeProjectButtons.length; c += 1) {
  seeProjectButtons[c].addEventListener("click", () => {
    displayProjectDescriptionPopup(
      seeProjectButtons[c].getAttribute("project-index")
    );
  });
}
