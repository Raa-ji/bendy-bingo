// Select all elements with the class 'grid-item'
var gridItems = document.querySelectorAll(".grid-item");

// Function to change the color
function changeColor() {
  // 'this' refers to the clicked element
  this.style.backgroundColor = "red"; // Can replace 'red' with any other
}

// Add click event listener to each grid item
gridItems.forEach(function (item) {
  item.addEventListener("click", changeColor);
});

// Array of different values
const texts = [
  "Got lost",
  "Died without doing damage",
  "Tried to make friends with an animal",
  "Tangent about skating",
  "Talking while muted",
  "Missed a group invite",
  "Missed an event",
  "Missed a friend request",
  "Over encumbered",
  "Excessive apologizing",
  "Vibing to the music",
  "Game crashed or glitched",
  "Forgot to loot",
  "Got scared",
  "Out of ammo",
  "Chat gets thirsty",
  "Swaying back and forth",
  "Badmouthing herself",
  "Obsessing over food",
  "Attacks an ally",
  "Got distracted from game task",
  "Gets disconnected",
  "Gets timed out for inactivity",
  "Zoning out",
  "Falls to her death",
  "Gets cheesed up",
  "Puts on makeup",
  "Bumps microphone",
  "Phone too close to mic",
  "Drops something IRL",
  "Switches game mid-stream",
  "Talks about cryptids",
  "Makes up a new word",
  "Crashes / wrecks her vehicle",
  "Mic echo"
];

// Function to shuffle an array (A "Fisher-Yates Shuffle")
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the text array
shuffleArray(texts);

//Select all target HTML elements
const elements = document.querySelectorAll(".grid-item");

// Assign a random text to each element
elements.forEach((element, index) => {
  if (index < texts.length) {
    element.textContent = texts[index];
  }
});
