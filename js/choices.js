// the choices are listed here as an array with objects
const choices = [
  {
    a: "Go With A",
    b: "Go With B",
    c: "Go With C",
  },
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
  [
    {
      a: "aA",
      b: "aB",
      c: "aC",
    },
    {
      a: "bA",
      b: "bB",
      c: "bC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
    {
      a: "cA",
      b: "cB",
      c: "cC",
    },
  ],
];

// constants for DOM elements
const content = document.querySelector(".cards");

const playerChoices = document.querySelectorAll(".card");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const selectBtn = document.getElementById("select");

// player choice is stored here
let selectedChoice = {
  id: null,
  lvl: null,
};

let level = 0;

// Event listener for select Button
selectBtn.addEventListener("click", () => {
  if (selectedChoice.id != null && selectedChoice.lvl != null) {
    renderNextChoices(selectedChoice.id, selectedChoice.lvl);
  } else {
    alert("No choice selected");
  }
});

// event handler for choices
playerChoices.forEach((playerChoice) => {
  playerChoice.addEventListener("click", () => {
    const choiceTag = playerChoice.querySelector(".header");
    switch (choiceTag.textContent) {
      // Case A
      case "A":
        level++; //increases the depth of the story
        selectChoice(playerChoice); //stores selection
        selectedChoice.id = 0; //choice A is denoted by 0 for the array
        selectedChoice.lvl = level;
        break;
      // Case B
      case "B":
        level++;
        selectChoice(playerChoice);
        selectedChoice.id = 1;
        selectedChoice.lvl = level;
        break;
      // Case C
      case "C":
        level++;
        selectChoice(playerChoice);
        selectedChoice.id = 2;
        selectedChoice.lvl = level;
        break;
      default:
        break;
    }
  });
});

// Initializes the values for the choices
init = () => {
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
    choiceA.textContent = choices[level][choice].a;
    choiceB.textContent = choices[level][choice].b;
    choiceC.textContent = choices[level][choice].c;
  } else {
    // if there are no more choices left
    content.innerHTML = `<div class="card"  style="margin: 2rem auto">
    <div class="content">

      <div class="description" id="End">
        The End
      </div>
    </div>
  </div>`;
  }
};

init();
