const navMenu = document.getElementById('menu-bar');
const getSideBar = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.aside-close');
const navLinks = document.querySelectorAll('.mobile-nav li');
const chevronDown = document.querySelector('.chev-down');
const chevronRight = document.querySelector('.right-arrow');
const outerDesktop = document.querySelector('.outer-desktop');


const toggleSideBar = false;
const closeButton = false;

navMenu.addEventListener('click', function () {
  if (toggleSideBar === false) {
    getSideBar.style.visibility = 'visible';
  }
});

closeBtn.addEventListener('click', function () {
  if (closeButton === false) {
    getSideBar.style.visibility = 'hidden';
  }
});

function closeLinks() {
  getSideBar.style.display = 'none';
}

navLinks.forEach((links) => links.addEventListener('click', closeLinks));

chevronDown.style.display = 'none'
let windowSize = window.outerWidth;
chevronRight.addEventListener('click', ()=> {
  
  if (windowSize >= 992) {
  outerDesktop.style.display = 'flex';
  } else{
    outerDesktop.style.display = 'block';
  }

  
  chevronRight.style.hover = 'transform: rotateZ(90deg)'
  chevronDown.style.display = 'block'
  chevronRight.style.display = 'none'
})

chevronDown.addEventListener('click', ()=>{
  outerDesktop.style.display = 'none'
  chevronDown.style.display = 'none'
  chevronRight.style.display = 'block'
})


const works = [
  {
    name: 'TO-DO-LIST',
    details: ['ToDo-List', 'Back End Dev', '2015'],
    smallPageDescription:
      "This 'To-do-list' app is a simple web application that displays a list of task and allows you to add and remove task from that list.",
    bigPageDescription:
      "This To-do-list' app is a simple web application that displays a list of task and allows you to add and remove task from that list. it is built with the latest technology namely; JavaScript with webpack Configuration. One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.",
    imageMobile: 'asset/image/mobile/toDoList-mobile.png',
    imageDesktop: 'asset/image/desktop/toDoList-desktop.png',
    popupImageMobile: 'asset/image/mobile/toDoList-mobile.png',
    popupImageDesktop: 'asset/image/pop up/toDoList-popup.png',
    toolsPopup: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
    tools: ['html', 'css', 'javaScript'],
    linkLive: 'https://anny85-code.github.io/to-do-list/dist',
    linkSource: 'https://github.com/Anny85-code/to-do-list',
  },
  {
    name: 'AWESOME BOOK',
    details: ['Awesome Book', 'Full Stack Dev', '2015'],
    smallPageDescription:
      'This project is a basic website that allows users to add/remove books from a list.',
    bigPageDescription:
      'This project is a basic website that allows users to add/remove books from a list. The main objective of this app is to understand how to use JavaScript objects and arrays dynamically and to modify the DOM and add basic events. This will follow professional guidelines in responsive design. all features are design prfessionally to give a feel of software engineering. this is powered by three different tools namely; HTML, CSS and JavaScript. The application is for personal and industrial purposes. It is a simple website that displays a list of books and allows you to add and remove books from that list. By building this application, you will learn how to manage data using JavaScript. Thanks to that your website will be more interactive. built with modern JavaScript and uses SPA technology',
    imageMobile: 'asset/image/mobile/awesomeBook-mobile.png',
    imageDesktop: 'asset/image/desktop/awesomeBook-desktop.png',
    toolsPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    tools: ['html', 'css', 'javaScript'],
    popupImageMobile: 'asset/image/mobile/awesomeBook-mobile.png',
    popupImageDesktop: 'asset/image/pop up/awesomeBook-pop-up.png',
    linkLive: 'https://anny85-code.github.io/AwesomeBook/',
    linkSource: 'https://github.com/Anny85-code/AwesomeBook',
  },
  {
    name: 'C.C WEBSITE',
    details: ['C Website', 'Full Stack Dev', '2015'],
    smallPageDescription:
      'This a conference website that allows users to navigate and gets the list and book for a conference program. it is built with JavaScript.',
    bigPageDescription:
      "This web app allows attenddee's of this conference to maneuver the chunks of activities in the conference at ease. The Conference seeks to create an interface between ICT and Cybercrime sectors to debate how ICT can be leveraged at scale to support the achievement of the past. The Conference outputs will include a high-level Statement to provide stakeholders with policy recommendations about how to harness the power of ICT to address current cyber security challenges and to ensure equitable quality awareness opportunities for all, and following up actions and relevant partnerships that are aimed to help stakeholders develop system-wide ICT and cyber security awareness strategies",
    imageMobile: 'asset/image/mobile/capston2-mobile.png',
    imageDesktop: 'asset/image/desktop/capston2-desktop.png',
    toolsPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    tools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupImageMobile: 'asset/image/mobile/capston2-mobile.png',
    popupImageDesktop: 'asset/image/pop up/capston2-popup.png',
    linkLive: 'https://anny85-code.github.io/Capstone-one/',
    linkSource: 'https://github.com/Anny85-code/Capstone-one',
  },
  {
    name: 'LEADERBOARD',
    details: ['Leaderboard', 'Lead developer', '2018'],
    smallPageDescription:
      '"leaderboard" is a simple web application that displays a table of names and scores and allows you to add and remove names and scores from that table.',
    bigPageDescription:
      '"leaderboard" is a simple web application that displays a table of names and scores and allows you to add and remove names and scores from that table. Built with modern JavaScript, webpack boiler plate and API. the work put in building this application, is to help you learn how to manage data using JavaScript. Thanks to that the website will be more interactive. built with modern JavaScript and uses SPA technology. The main objective of this app is to understand how to use JavaScript objects and arrays dynamically and to modify the DOM and add basic events. This will follow professional guidelines in responsive web design. all features are design prfessionally to give a feel of software engineering. this is powered by three different tools namely; HTML, CSS and JavaScript. The application is for personal and industrial purposes.',
    imageMobile: 'asset/image/mobile/leaderboardlatest-mobile.png',
    imageDesktop: 'asset/image/desktop/leaderboardlatest-desktop.png',
    toolsPopup: ['html', 'Ruby on rails', 'css', 'javaScript'],
    tools: ['html', 'Ruby on rails', 'css', 'javaScript'],
    popupImageMobile: 'asset/image/mobile/leaderboardlatest-mobile.png',
    popupImageDesktop: 'asset/image/pop up/leaderboardlatest-popup.png',
    linkLive: 'https://anny85-code.github.io/leaderboard/dist',
    linkSource: 'https://github.com/Anny85-code/leaderboard',
  },
];

function tools(popup, toolItem) {
  let a = 1;
  let toolsPopup = '';
  let tools = '';
  toolItem.forEach((tech) => {
    if (!popup) {
      if (tech.toLowerCase().includes('ruby')) {
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

let displaProperty = '';
for (let i = 0; i < works.length; i += 1) {
  let cardPosition = 'start';
  let cardPositionReverse = 'end';
  if (i % 2 !== 0) {
    cardPosition = 'end';
    cardPositionReverse = 'start';
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

document.querySelector('.container').innerHTML = displaProperty;

function renderPopUp(value) {
  const toolItem = tools(true, works[value].toolsPopup);
  const projectPopup = document.querySelector('.pop-menu-wrapper');
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
  projectPopup.style.display = 'block';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });
}
const seeProjectButtons = document.querySelectorAll('.see-btn');
for (let j = 0; j < seeProjectButtons.length; j += 1) {
  seeProjectButtons[j].addEventListener('click', () => {
    renderPopUp(seeProjectButtons[j].getAttribute('index-project'));
  });
}
