// this code will be executed after page load

const TITLES = [
  "I Don’t Care News",
  "But, News",
  "I don’t Understand Why… News",
  "Why Didn’t They Just News",
  "Talking Past Each Other News",
  "This doesn’t address…",
  "Why wasn’t I consulted?",
  "Is this really surprising?",
  "Is anyone surprised?",
  "What About…?",
  "Why should I care?",
  "Does this really matter? News",
  "A small correction…News",
  "That’s not true at all News",
  "Contrarian News",
  "This is simply note true",
  "I Could Not Disagree More",
  "Pedant’s Daily",
  "I can’t stand Twitter Threads",
  "This is nothing new",
  "Dismisser’s Journal",
  "Yeah, but",
  "What about",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function chooseTitle(){
  return TITLES[getRandomInt(TITLES.length)]
}

(function() {
  // Selectors
  let pageTitle = document.querySelector('title');
  let header = document.querySelector('.hnname a');
  let pathname = document.location.pathname;

  // Header Picker

  if (pathname === '/' || pathname === '/news') {
    var title = 'Everyone Is Stupid Except Me';
  } else {
    var title = chooseTitle();
  }

  if (pageTitle){
    pageTitle.text = title;
  } 

  if (header){
    header.text = title;
  }  
})();
