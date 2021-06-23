// the choices are listed here as an array with objects
const choices = [
  {
    story: "story",
    a: "Go With A",
    b: "Go With B",
    c: "Go With C",
  },
  [
    {
      story: "story a",
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      story: "story b",
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      story: "story c",
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      story: "story a",
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      story: "story b",
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      story: "story c",
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      story: "story a",
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      story: "story b",
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      story: "story c",
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      story: "story a",
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      story: "story b",
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      story: "story c",
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      story: "story a",
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      story: "story b",
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      story: "story c",
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      story: "story a",
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      story: "story b",
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      story: "story c",
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
];

// constants for DOM elements
const content = document.querySelector("#choices");
const ending = document.querySelector("#end");

const playerChoices = document.querySelectorAll(".card");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const story = document.querySelector(".lead");

const selectBtn = document.getElementById("select");
const restartBtn = document.getElementById("restart");

// player choice is stored here
let selectedChoice = {
  id: null,
  lvl: null,
};

let level = 0;

// Event listener for select Button
selectBtn.addEventListener("click", () => {
  if (selectedChoice.id != null && selectedChoice.lvl != null) {
    level++;
    renderNextChoices(selectedChoice.id, selectedChoice.lvl);
  } else {
    alert("No choice selected");
  }
});

// Event listener for restart button
restartBtn.addEventListener("click", () => {
  content.style.display = "flex";
  ending.style.display = "none";
  init();
  story.style.display = "initial"; //story displayed
  selectBtn.style.display = "initial"; //Button displayed
  restartBtn.style.display = "none"; //restart button not displayed
});

// event handler for choices
playerChoices.forEach((playerChoice) => {
  playerChoice.addEventListener("click", () => {
    const choiceTag = playerChoice.querySelector(".header");
    switch (choiceTag.textContent) {
      // Case A
      case "A":
        selectChoice(playerChoice); //stores selection
        selectedChoice.id = 0; //choice A is denoted by 0 for the array
        selectedChoice.lvl = level + 1;
        break;
      // Case B
      case "B":
        selectChoice(playerChoice);
        selectedChoice.id = 1;
        selectedChoice.lvl = level + 1;
        break;
      // Case C
      case "C":
        selectChoice(playerChoice);
        selectedChoice.id = 2;
        selectedChoice.lvl = level + 1;
        break;
      default:
        break;
    }
  });
});

// Initializes the values for the choices
init = () => {
  level = 0;
  story.textContent = choices[0].story;
  choiceA.textContent = choices[0].a;
  choiceB.textContent = choices[0].b;
  choiceC.textContent = choices[0].c;
};

// styling for selected choice
selectChoice = (playerChoice) => {
  resetSelection();
  playerChoice.classList.add("selected");
};

// resets the selection
resetSelection = () => {
  playerChoices.forEach((choice) => {
    if (choice.classList.contains("selected")) {
      choice.classList.remove("selected");
    }
  });
};

// renders the next list of choices
renderNextChoices = (choice, level) => {
  resetSelection();
  if (choices.length > level) {
    story.textContent = choices[level][choice].story;
    choiceA.textContent = choices[level][choice].a;
    choiceB.textContent = choices[level][choice].b;
    choiceC.textContent = choices[level][choice].c;
  } else {
    // if there are no more choices left
    content.style.display = "none";
    ending.style.display = "initial";
    story.style.display = "none"; //story not displayed
    selectBtn.style.display = "none"; //Button not displayed at end
    restartBtn.style.display = "initial"; //restart button displayed
  }
};

init();
