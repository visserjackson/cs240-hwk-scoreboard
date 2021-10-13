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

//make it so that clicking the + button increments the runs for the selected inning by 1
runsPlusNode.addEventListener("click", incrementRun());

function incrementRun() {
  let team = whoNode.value;
  console.log(team);
  let inning = inningNode.value;
  console.log(inning);

  let boxName = team + inning;
  console.log(boxName);

  if (team == "away") {
    let boxNode = awayBoxes.filter((node) => node.id == boxName);
    console.dir(boxNode);
    boxNode[0].innerHTML++;
  }
}
