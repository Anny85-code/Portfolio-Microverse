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
    imageMobile: "asset/image/snapshoot-Portfolio.png",
    imageDesktop: "asset/image/desktop-image/snapshoot-portfolio-1.png",
    popupImageMobile: "asset/image/modal_snapshoot_mobile.png",
    popupImageDesktop: "asset/image/desktop-image/modal_snapshoot.png",
    toolsPopup: [
      "html",
      "css",
      "javaScript",
      "github",
      "Ruby",
      "Bootstrap",
    ],
    tools: ["html", "css", "javaScript"],
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
    imageMobile: "asset/image/snapshoot-Portfolio2.png",
    imageDesktop: "asset/image/desktop-image/snapshoot-portfolio-2.png",
    toolsPopup: ["html", "Ruby on rails", "css", "javaScript"],
    tools: ["html", "css", "javaScript"],
    popupImageMobile: "asset/image/modal_snapshoot_mobile.png",
    popupImageDesktop:
      "asset/image/desktop-image/modal_snapshoot.png",
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
    imageMobile: "asset/image/snapshoot-Portfolio3.png",
    imageDesktop: "asset/image/desktop-image/snapshoot-portfolio3.png",
    toolsPopup: ["html", "Ruby on rails", "css", "javaScript"],
    tools: ["html", "Ruby on rails", "css", "javaScript"],
    popupImageMobile: "asset/image/modal_snapshoot_mobile.png",
    popupImageDesktop: "asset/image/desktop-image/modal_snapshoot.png",
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
    imageMobile: "asset/image/napshoot-Portfolio4.png",
    imageDesktop: "asset/image/desktop-image/snapshoot-portfolio4.png",
    toolsPopup: ["html", "Ruby on rails", "css", "javaScript"],
    tools: ["html", "Ruby on rails", "css", "javaScript"],
    popupImageMobile:"asset/image/modal_snapshoot_mobile.png",
    popupImageDesktop: "asset/image/desktop-image/modal_snapshoot.png",
    linkLive: "",
    linkSource: "",
  },
];

function tools(popup, toolItem) {
  let a = 1;
  let toolsPopup = "";
  let tools = "";
  toolItem.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes("ruby")) {
        tools += `<li class="skill ruby pop-skill-child"><a class="inner-skill">${tech}</a></li>`;
      } else {
        tools += `<li class="skill pop-skill-child"><a class="inner-skill">${tech}</a></li>`;
      }
    } else {
      if (a <= 3) {
        tools += `<li class="skill pop-skill-child"><a class="inner-skill pop-inner-skill">${tech}</a></li>`;
      } else {
        toolsPopup += `<li class="skill ruby pop-skill-child"><a class="inner-skill pop-inner-skill">${tech}</a></li>`;
      }
      a += 1;
    }
  });
  return [tools, toolsPopup];
}

let displaProperty = "";
for (let i = 0; i < works.length; i += 1) {
  
  let cardPosition = "start";
  let cardPositionReverse = "end";
  if (i % 2 !== 0) {
    cardPosition = "end";
    cardPositionReverse = "start";
  }

  
  const toolItem = tools(false, works[i].tools);
  
  displaProperty += `<div class="property">
    <div class="item1">
            <img src="${works[i].imageMobile}" class="portfolio-image" alt="Tonic" />
          </div>
          <div class="desktop-image ${cardPosition}">
            <img
              src="${works[i].imageDesktop}" class="portfolio-image-desktop"
              alt="Portfolio-card1"
            />
          </div>
          <div class=" test ${cardPositionReverse}">
          <div class="item2"><h2 class="work-title">${works[i].name}</h2></div>
          <div class="item3">
              <ul>
                <li><a href="#" class="canopy">${works[i].details[0]}</a></li>
                <li class="dot">
                  <a href="#"><img src="asset/image/counter.png" alt="dot" /></a>
                </li>
                <li><a href="#">${works[i].details[1]}</a></li>
                <li class="dot">
                  <a href="#"><img src="asset/image/counter.png" alt="dot" /></a>
                </li>
                <li class="dot"><a href="#">${works[i].details[2]}</a></li>
              </ul>
            </div>
            <div class="item4">
            ${works[i].smallPageDescription}
            </div>
            <div class="item5">
            <ul class="inner-item">
            ${toolItem[0]}
           
        </ul>
            </div>
            <div class="item6 see-btn" index-project="${i}"><a class="item-button" href="#">See Project</a></div>
          </div>
          </div>
     </div>`;
}

document.querySelector(".container").innerHTML = displaProperty;


function renderPopUp(value) {
  
  const toolItem = tools(true, works[value].toolsPopup);
  const projectPopup = document.querySelector(".pop-menu-wrapper");
  const popupCardBuilder = `<div class="pop-menu">
                                        <button class="close-popup">X</button>
                                        <div class="pop-skill1">${works[value].name}</h2></div>
                                        <div class="pop-skill2">
                                           <ul>
                                           <li class="list-main"><a href="#">${works[value].details[0]}</a></li>
                                           <li>
                                           <a href="#"><img src="asset/image/counter.png" alt="dot" /></a>
                                         </li>
                                           <li class="titles-item"><a href="#">${works[value].details[1]}</a></li>
                                           <li>
                                           <a href="#"><img src="asset/image/counter.png" alt="dot" /></a>
                                         </li>
                                           <li class="titles-item"><a href="#">${works[value].details[2]}</a></li>
                                           </ul>
                                       </div>
                                   
                                       <div class="pop-skill-image">

                                       <img src="${works[value].popupImageMobile}" class="pop-skill-image" alt="Tonic" />
                                       </div>
                                       <div class="pop-desktop-image">
                                         <img
                                           src="${works[value].popupImageDesktop}"
                                           class="pop-desktop-image"
                                           alt="Portfolio-card1"
                                         />
                                       </div>
                                       <div class="pop-end">
                                            <div class="pop-item4">
                                                   <p>${works[value].bigPageDescription}</p>
                                        </div>
                                        <div class="newTest">
                                        <div class="pop-skill">
                                                   <ul class="pop-inner-item">
                                                    ${toolItem[0]}
                                                   </ul>
                                                   <ul class="pop-inner-item">
                                                    ${toolItem[1]}
                                                   </ul>
                                               </div>

                                               <div class="pop-skill-button">
                                               <div class="pop-item6">
                                                 <a href="${works[value].linkLive}" class="pop-btn">See Live <i class="fa fa-rss"></i></a>
                                               </div>
                                               <div class="pop-item6">
                                                 <a href="${works[value].linkSource}" class="pop-btn">See Source <i class="fa fa-github"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>`;
  projectPopup.innerHTML = popupCardBuilder;
  projectPopup.style.display= "block";
  const closePopup = document.querySelector(".close-popup");
  closePopup.addEventListener("click", () => {
    projectPopup.style.display = "none";
  });
}
const seeProjectButtons = document.querySelectorAll(".see-btn");
for (let j = 0; j < seeProjectButtons.length; j += 1) {
  seeProjectButtons[j].addEventListener("click", () => {
    console.log(seeProjectButtons[j].getAttribute('index-project'));
    renderPopUp(seeProjectButtons[j].getAttribute('index-project'));
  });
}
