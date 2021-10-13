/**
 * Scoreboard Homework
 * @author Jackson Visser
 */
//query for boxes
let boxes = document.querySelectorAll(".inning-scores");
console.dir(boxes);
//store data in boxesObj. there probably is a better way of doing this using a loop, but i have yet to figure it out.
// let boxesObj = {
//   "#away1": boxes[0].innerHTML,
//   "#away2": boxes[1].innerHTML,
//   "#away3": boxes[2].innerHTML,
//   "#away4": boxes[3].innerHTML,
//   "#away5": boxes[4].innerHTML,
//   "#away6": boxes[5].innerHTML,
//   "#away7": boxes[6].innerHTML,
//   "#home1": boxes[7].innerHTML,
//   "#home2": boxes[8].innerHTML,
//   "#home3": boxes[9].innerHTML,
//   "#home4": boxes[10].innerHTML,
//   "#home5": boxes[11].innerHTML,
//   "#home6": boxes[12].innerHTML,
//   "#home7": boxes[13].innerHTML,
// };
// console.dir(boxesObj);
// console.dir(boxesObj["#away1"]);
// boxesObj["#away1"].innerHTML++;
// console.dir(boxesObj);

//store nodes themselves in two arrays (one for home, one for away)
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

let inningNode = document.querySelector("#inning-toggle");
//console.dir(inningNode);

let runsPlusNode = document.querySelector("#runs-plus");
//console.dir(runsPlusNode);
let runsMinusNode = document.querySelector("#runs-minus");
//console.dir(runsMinusNode);

let musicNoteNode = document.querySelector("#music-note");
//console.dir(musicNoteNode);

let keyboardNode = document.querySelector("#keyboard");
//console.dir(keyboardNode);
// //the away team scored in the third inning. let's see if i can update that
// let away3Box = awayBoxes.filter((node) => node.id == "away3");
// console.dir(away3Box); //caputred correct box
// //add a run
// away3Box[0].innerHTML++;

// //trying third approach

// let boxesArray = [];

// for (let box of boxes) {
//   boxesArray.push([box.id, box.innerHTML]);
// }

// console.dir(boxesArray);
// //let's say the away team scores in the third inning. test to see if i can update that
// let away3Box = boxesArray.filter((box) => box.includes("away3"));
// console.dir(away3Box); //succesfully caputred correct box
// away3Box[0][1]++;
