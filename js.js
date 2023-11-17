let nameInput = document.getElementById('user-input')
let mainStuff = document.getElementById('other-main-stuff')
let submitButton = document.getElementById('submit-button')
let doors = document.getElementById('doors')
let leftDoor = document.getElementById('left')
let rightDoor = document.getElementById('right')
function submitName() {
  let playerName = nameInput.value
  console.log(playerName)
  
  mainStuff.style.display = "block"
  mainStuff.textContent = "Greetings, " + playerName + "."
}

function randomizeDoors(selection) {
  let correctDoor = Math.floor(Math.random() * 2) + 1;

  if (correctDoor == 1 && selection == "left") {
    leftDoor.innerHTML = "<span>Congrats! keep at it.</span>";
    rightDoor.innerHTML = "<span>Next time. . .</span>";
  } else if (correctDoor == 2 && selection == "right") {
    rightDoor.innerHTML = "<span>Congrats! keep at it.</span>";
    leftDoor.innerHTML = "<span>Next time. . .</span>";
  } else {
    leftDoor.innerHTML = "<span>Uh oh!</span>";
    rightDoor.innerHTML = "<span>Uh oh!</span>";
  }
}