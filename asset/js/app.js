const navMenu = document.getElementById('menu-bar');
const getSideBar = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.aside-close');
const navLinks = document.querySelectorAll('.mobile-nav li');
const chevronDown = document.querySelector('.chev-down');
const chevronRight = document.querySelector('.right-arrow');
const outerDesktop = document.querySelector('.outer-desktop');

const chevronDownFrameWork = document.querySelector('.chev-down-frame-work');
const chevronRightFrameWork = document.querySelector('.chev-right-framework');
const outerDesktopFrameWork = document.querySelector('.outer-desktop-framework');

const chevronDownSkill = document.querySelector('.chev-down-skill');
const chevronRightSkill = document.querySelector('.chev-right-skill');
const outerDesktopSkill = document.querySelector('.outer-desktop-skill');


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

// language and skills section

chevronDown.style.display = 'none'
const windowSize = window.outerWidth;
chevronRight.addEventListener('click', ()=> {
  
  if (windowSize >= 992) {
  outerDesktop.style.display = 'flex';
  } else {
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

// framework
chevronDownFrameWork.style.display = 'none';

chevronRightFrameWork.addEventListener('click', () => {
  if (windowSize >= 992) {
    outerDesktopFrameWork.style.display = 'flex';
  } else {
    outerDesktopFrameWork.style.display = 'block';
  }

  chevronRightFrameWork.style.hover = 'transform: rotateZ(90deg)';
  chevronDownFrameWork.style.display = 'block';
  chevronRightFrameWork.style.display = 'none';
});

chevronDownFrameWork.addEventListener('click', () => {
  outerDesktopFrameWork.style.display = 'none';
  chevronDownFrameWork.style.display = 'none';
  chevronRightFrameWork.style.display = 'block';
});

// skills
chevronDownSkill.style.display = 'none';

chevronRightSkill.addEventListener('click', () => {
  if (windowSize >= 992) {
    outerDesktopSkill.style.display = 'flex';
  } else {
    outerDesktopSkill.style.display = 'block';
  }

  chevronRightSkill.style.hover = 'transform: rotateZ(90deg)';
  chevronDownSkill.style.display = 'block';
  chevronRightSkill.style.display = 'none';
});

chevronDownSkill.addEventListener('click', () => {
  outerDesktopSkill.style.display = 'none';
  chevronDownSkill.style.display = 'none';
  chevronRightSkill.style.display = 'block';
});


const works = [
  {
    name: 'BUDGET-APP',
    details: ['Budget-app', 'Back End Dev', '2021'],
    smallPageDescription:
      'The Budget app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    bigPageDescription:
      "The Budget app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what..There is global economic crisis so it is imperative to track our budget and daily expenses.The application will allow users select category and with click on it's specific category and the data will display on other page. Users can also add transactions that is linked to a paricular category. It is build using Ruby on Rails.",
    imageMobile: 'asset/image/mobile/budget-mobile.png',
    imageDesktop: 'asset/image/desktop/budget-desktop.png',
    popupImageMobile: 'asset/image/mobile/budget-mobile.png',
    popupImageDesktop: 'asset/image/pop up/pop-up-desktop.png',
    toolsPopup: ['Html', 'Css', 'Rails', 'Github', 'Ruby', 'Bootstrap'],
    tools: ['Html', 'Css', 'Rails'],
    linkLive: 'https://salty-stream-24790.herokuapp.com/',
    linkSource: 'https://github.com/Anny85-code/budget-app',
  },
  {
    name: 'COVID19-TRACKER',
    details: ['Covid19-Tracker', 'Front End Dev', '2021'],
    smallPageDescription:
      "This 'Covid19-Tracker' app is mobile application for a daily tracking of Covid 19 global data for each country.",
    bigPageDescription:
      "This Covid19-Tracker' is mobile application for a daily tracking of Covid 19 global data for each country. In this project I used the real COVID-19 data from Narrativa API.There are covid 19 active cases, recoveries and deaths across all the countries in the world.The application will allow users select country and with click on it's specific country and the data will display on other page. It is build using React and Redux libraries.",
    imageMobile: 'asset/image/mobile/covid19-mobile.png',
    imageDesktop: 'asset/image/desktop/covid19-desktop-desktop.png',
    popupImageMobile: 'asset/image/mobile/covid19-mobile.png',
    popupImageDesktop: 'asset/image/pop up/covid19-pop-up.png',
    toolsPopup: ['Html', 'Css', 'React', 'Github', 'Ruby', 'Bootstrap'],
    tools: ['Html', 'Css', 'React'],
    linkLive: 'https://covid19-dataapp.herokuapp.com/',
    linkSource: 'https://github.com/Anny85-code/covid19-tracker',
  },
  {
    name: 'SEAFOODMENU-APP',
    details: ['SeaFoodMenu-App', 'Front End Dev', '2021'],
    smallPageDescription:
      'This project is seafood menu app. That Retrieves data from API and used Involvement API for likes and comments. Test for data retrieved from API and for comments.',
    bigPageDescription:
      'This project is seafood menu app. That Retrieves data from API and used Involvement API for likes and comments. Test for data retrieved from API and for comments. The application allows users to choose from varieties of recipes globally and be acquianted with the countries counsine and the app also gives directive on how these meals are prepared. Its highlights their origin, the reason behind each meal and why they are predominant in these locations. ',
    imageMobile: 'asset/image/mobile/sea-food-menu-mobile.png',
    imageDesktop: 'asset/image/desktop/sea-food-desktop.png',
    popupImageMobile: 'asset/image/mobile/sea-food-menu-mobile.png',
    popupImageDesktop: 'asset/image/pop up/sea-food-pop-up.png',
    toolsPopup: ['Html', 'Css', 'JavaScript', 'github', 'Ruby', 'Bootstrap'],
    tools: ['Html', 'Css', 'JavaScript'],
    linkLive: 'https://anny85-code.github.io/seafoodmenu/dist/',
    linkSource: 'https://github.com/Anny85-code/seafoodmenu',
  },
  {
    name: 'TO-DO-LIST',
    details: ['ToDo-List', 'Front End Dev', '2021'],
    smallPageDescription:
      "This 'To-do-list' app is a simple web application that displays a list of task and allows you to add and remove task from that list.",
    bigPageDescription:
      "This To-do-list' app is a simple web application that displays a list of task and allows you to add and remove task from that list. it is built with the latest technology namely; JavaScript with webpack Configuration. One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.",
    imageMobile: 'asset/image/mobile/toDoList-mobile.png',
    imageDesktop: 'asset/image/desktop/toDoList-desktop.png',
    popupImageMobile: 'asset/image/mobile/toDoList-mobile.png',
    popupImageDesktop: 'asset/image/pop up/toDoList-popup.png',
    toolsPopup: ['Html', 'Css', 'JavaScript', 'Github', 'Ruby', 'Bootstrap'],
    tools: ['Html', 'Css', 'JavaScript'],
    linkLive: 'https://anny85-code.github.io/to-do-list/dist',
    linkSource: 'https://github.com/Anny85-code/to-do-list',
  },
  {
    name: 'AWESOME BOOK',
    details: ['Awesome Book', 'Full Stack Dev', '2021'],
    smallPageDescription:
      'This project is a basic website that allows users to add/remove books from a list.',
    bigPageDescription:
      'This project is a basic website that allows users to add/remove books from a list. The main objective of this app is to understand how to use JavaScript objects and arrays dynamically and to modify the DOM and add basic events. This will follow professional guidelines in responsive design. all features are design prfessionally to give a feel of software engineering. this is powered by three different tools namely; HTML, CSS and JavaScript. The application is for personal and industrial purposes. It is a simple website that displays a list of books and allows you to add and remove books from that list. By building this application, you will learn how to manage data using JavaScript. Thanks to that your website will be more interactive. built with modern JavaScript and uses SPA technology',
    imageMobile: 'asset/image/mobile/awesomeBook-mobile.png',
    imageDesktop: 'asset/image/desktop/awesomeBook-desktop.png',
    toolsPopup: ['Html', 'Ruby on rails', 'Css', 'JavaScript'],
    tools: ['Html', 'Css', 'JavaScript'],
    popupImageMobile: 'asset/image/mobile/awesomeBook-mobile.png',
    popupImageDesktop: 'asset/image/pop up/awesomeBook-pop-up.png',
    linkLive: 'https://anny85-code.github.io/AwesomeBook/',
    linkSource: 'https://github.com/Anny85-code/AwesomeBook',
  },
  {
    name: 'BOOKSTORE-REDUX',
    details: ['BookStore-Redux', 'Full Stack Dev', '2021'],
    smallPageDescription:
      'Bookstore-redux app is a simple bookstore built with react-redux to enable users add and remove book on a list.',
    bigPageDescription:
      'Bookstore-redux app is a simple bookstore built with react-redux to enable users add and remove book on a list. It uses the most recent web technology development tools and framework which includes Redux. the bookstore is very dynamic, it uses an API to get, add and delete books. It has an option for the author of the book, category of the book and additional information about the books.',
    imageMobile: 'asset/image/mobile/redux-bookstoreimage-mobile.png',
    imageDesktop: 'asset/image/desktop/redux-bookstoreimage-desktop.png',
    toolsPopup: ['Html', 'React-Redux', 'Css', 'JavaScript'],
    tools: ['Html', 'React-Redux', 'Css', 'JavaScript'],
    popupImageMobile: 'asset/image/mobile/redux-bookstoreimage-mobile.png',
    popupImageDesktop: 'asset/image/pop up/redux-bookstoreimage-popup.png',
    linkLive: 'https://anny85-code.github.io/bookstore-react-redux/',
    linkSource:
      'https://github.com/Anny85-code/bookstore-react-redux/tree/main/mybookstore',
  },
  {
    name: 'LEADERBOARD',
    details: ['Leaderboard', 'Front End Dev', '2021'],
    smallPageDescription:
      '"leaderboard" is a simple web application that displays a table of names and scores and allows you to add and remove names and scores from that table.',
    bigPageDescription:
      '"leaderboard" is a simple web application that displays a table of names and scores and allows you to add and remove names and scores from that table. Built with modern JavaScript, webpack boiler plate and API. the work put in building this application, is to help you learn how to manage data using JavaScript. Thanks to that the website will be more interactive. built with modern JavaScript and uses SPA technology. The main objective of this app is to understand how to use JavaScript objects and arrays dynamically and to modify the DOM and add basic events. This will follow professional guidelines in responsive web design. all features are design prfessionally to give a feel of software engineering. this is powered by three different tools namely; HTML, CSS and JavaScript. The application is for personal and industrial purposes.',
    imageMobile: 'asset/image/mobile/leaderboardlatest-mobile.png',
    imageDesktop: 'asset/image/desktop/leaderboardlatest-desktop.png',
    toolsPopup: ['Html', 'Ruby on rails', 'Css', 'JavaScript'],
    tools: ['Html', 'Ruby on rails', 'Css', 'JavaScript'],
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

const footer = () => {
  const footer = document.querySelector('.footer-li');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `
            <span>&#169;${currentYear}</span><span class="footer-name">Anny</span> Portfolio | All Rights Reserved.
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
};

footer();
