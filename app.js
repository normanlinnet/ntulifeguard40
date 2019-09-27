const display = (title, content) => {
  document.getElementById("myLinks").style.display = "none";
  document.getElementById("content").innerHTML = content;
  document.getElementById("title").innerHTML = title;
};

function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document
  .getElementById("title")
  .addEventListener("click", () => display("No.40 Cheatsheet", contentTitle));

document
  .getElementById("carry")
  .addEventListener("click", () => display("CARRY", contentCarry));

document
  .getElementById("release")
  .addEventListener("click", () => display("RELEASE", contentRelease));

document
  .getElementById("emt")
  .addEventListener("click", () => display("EMT", contentEMT));

document
  .getElementById("approach")
  .addEventListener("click", () => display("APPROACH", contentApproach));

document
  .getElementById("escape")
  .addEventListener("click", () => display("DEFENSE ESCAPE", contentEscape));


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const section1 = { start: 37, end: 76 };
const section2 = { start: 60 + 39, end: 120 + 19 };
const section3 = { start: 180 + 6, end: 180 + 46 };
let currentSection = section1;
let playerIsReady = 0;
let timeout;

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player(
    'player',
    {
      height: '150',
      // width: '640',
      videoId: 'donlOCXRzvw',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    }
  );
}

const changeSection = (section, lyrics) => {
  if (timeout) clearTimeout(timeout);
  if (playerIsReady) {
    currentSection = section;
    player.seekTo(section.start);
    player.playVideo();
  }
  document.getElementById("lyrics").innerHTML = lyrics;
}

function onPlayerReady(event) {
  playerIsReady = 1;
}

document
  .getElementById("section1")
  .addEventListener("click", () => changeSection(section1, lyrics1));
document
  .getElementById("section2")
  .addEventListener("click", () => changeSection(section2, lyrics2));
document
  .getElementById("section3")
  .addEventListener("click", () => changeSection(section3, lyrics3));

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = currentSection.end - currentSection.start;
    timeout = setTimeout(() => restartVideoSection(currentSection.start), duration * 1000);
  }
}

function restartVideoSection(position) {
  player.seekTo(position);
}
