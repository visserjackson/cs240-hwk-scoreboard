/**
 * Scoreboard Homework
 * @author Jackson Visser
 */
//query for box nodes
let boxes = document.querySelectorAll(".inning-scores");
console.dir(boxes);

//store box nodes themselves in two arrays (one for home, one for away)
let awayBoxes = [];
let homeBoxes = [];

for (let i = 0; i < 7; i++) {
  awayBoxes.push(boxes[i]);
}

for (let i = 7; i < boxes.length; i++) {
  homeBoxes.push(boxes[i]);
}

console.dir(awayBoxes);
console.dir(homeBoxes);

//query for manipulable elements from control center
let whoNode = document.querySelector("#who-toggle");
//console.dir(whoNode);

let inningNode = document.querySelector("#inning-options");
console.dir(inningNode);

let runsPlusNode = document.querySelector("#runs-plus");
//console.dir(runsPlusNode);
let runsMinusNode = document.querySelector("#runs-minus");
//console.dir(runsMinusNode);

let musicNoteNode = document.querySelector("#music-note");
//console.dir(musicNoteNode);

let keyboardNode = document.querySelector("#keyboard");

let awayRunTotalNode = document.querySelector("#awayR");
let homeRunTotalNode = document.querySelector("#homeR");

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

//make it so pressing keyboard button plays chicken dance song
keyboardNode.addEventListener("click", doChickenDance);

function doChickenDance() {
  chickenDanceSong.play();
}

//make it so pressing the chicken dance node
