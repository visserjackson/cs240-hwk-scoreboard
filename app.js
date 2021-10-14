/**
 * Scoreboard Homework
 * @author Jackson Visser
 */
//query for box nodes
let boxes = document.querySelectorAll(".inning-scores");

//store box nodes themselves in two arrays (one for home, one for away)
let awayBoxes = [];
let homeBoxes = [];

for (let i = 0; i < 7; i++) {
  awayBoxes.push(boxes[i]);
}

for (let i = 7; i < boxes.length; i++) {
  homeBoxes.push(boxes[i]);
}

//query for manipulable elements from control center
let whoNode = document.querySelector("#who-toggle");
let inningNode = document.querySelector("#inning-options");
let runsPlusNode = document.querySelector("#runs-plus");
let runsMinusNode = document.querySelector("#runs-minus");
let musicNoteNode = document.querySelector("#music-note");
let keyboardNode = document.querySelector("#keyboard");

//get away and home total runs nodes
let awayRunTotalNode = document.querySelector("#awayR");
let homeRunTotalNode = document.querySelector("#homeR");

//get image node
let imageNode = document.querySelector("img");
console.dir(imageNode);

//helper function to increment runs, used with event listener on + button
function incrementRun() {
  let team = whoNode.value;
  let inning = inningNode.value;
  let boxName = team + inning;

  if (team == "away") {
    let boxNode = awayBoxes.filter((node) => node.id == boxName);
    boxNode[0].innerHTML++;
    awayRunTotalNode.innerHTML = sumRuns(awayBoxes);
  } else {
    let boxNode = homeBoxes.filter((node) => node.id == boxName);
    boxNode[0].innerHTML++;
    homeRunTotalNode.innerHTML = sumRuns(homeBoxes);
  }
}

//helper function to increment runs, used with event listener on - button
function decrementRun() {
  let team = whoNode.value;
  let inning = inningNode.value;
  let boxName = team + inning;

  if (team == "away") {
    let boxNode = awayBoxes.filter((node) => node.id == boxName);
    if (boxNode[0].innerHTML - 1 >= 0) {
      boxNode[0].innerHTML--;
      awayRunTotalNode.innerHTML = sumRuns(awayBoxes);
    }
  } else {
    let boxNode = homeBoxes.filter((node) => node.id == boxName);
    if (boxNode[0].innerHTML - 1 >= 0) {
      boxNode[0].innerHTML--;
      homeRunTotalNode.innerHTML = sumRuns(homeBoxes);
    }
  }
}

//helper function to sum runs
function sumRuns(boxes) {
  sum = 0;
  for (let i = 0; i < boxes.length; i++) {
    sum += +boxes[i].innerHTML;
  }
  return sum;
}

//make it so that clicking the + button increments the runs for the selected inning by 1
runsPlusNode.addEventListener("click", incrementRun);
runsMinusNode.addEventListener("click", decrementRun);

//add audio stuff
chickenDanceSong = new Audio("sounds/chickendance.mp3");
buildupSong = new Audio("sounds/buildup.mp3");
charge1Song = new Audio("sounds/charge1.mp3");
charge2Song = new Audio("sounds/charge2.mp3");

//make it so pressing keyboard button plays chicken dance song
keyboardNode.addEventListener("click", doChickenDance);

//helper function to do the chicken dance song and image
function doChickenDance() {
  chickenDanceSong.play();
  imageNode.src = "images/sdchicken.jpg";
  setTimeout(() => {
    imageNode.src = "images/ups.png";
  }, 10000);
}

//make it so pressing the music note button plays a random song
musicNoteNode.addEventListener("click", doRandomMusicAndImage);

//helper function to play random music and image
function doRandomMusicAndImage() {
  let songNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let imageNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (songNum) {
    case 1:
      buildupSong.play();
      break;

    case 2:
      charge1Song.play();
      break;

    case 3:
      charge2Song.play();
      break;
  }
}
