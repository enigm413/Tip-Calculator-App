// Defining Necessary DOM Elements
const billInputEl = document.querySelector(".input-bill");
const customTipInputEl = document.querySelector(".input-tip");
const peopleInputEl = document.querySelector(".input-people");
const errorMsgEl = document.querySelector(".error-msg");
const tipPerPersonEl = document.querySelector("#tip-per-person");
const totalPerPersonEl = document.querySelector("#total-per-person");
const resetBtnEl = document.querySelector(".reset-btn");
const tip5BtnEl = document.querySelector("#tip-5");
const tip10BtnEl = document.querySelector("#tip-10");
const tip15BtnEl = document.querySelector("#tip-15");
const tip25BtnEl = document.querySelector("#tip-25");
const tip50BtnEl = document.querySelector("#tip-50");

//Define Necessary Value
let prevbtnEl = "";
let bill = 0;
let tip = 0;
let tipPercent = 0;
let people = 0;

//Function To Handle Input
function handleInput(inputVal) {
  const userInput = Number(inputVal);
  const prevUserInput = Number(inputVal.slice(0, -1));
  const currentUserInput = isNaN(userInput) ? prevUserInput : userInput;
  return currentUserInput;
}

//Function To Handle Tip Button
function handleTipButton(currentBtnEl) {
  const btnText = currentBtnEl.textContent;
  tipPercent = Number(btnText.slice(0, -1));
  currentBtnEl.classList.add("selected-tip");

  // Check the previous Button is empty or not
  if (prevbtnEl) {
    prevbtnEl.classList.remove("selected-tip");
  }

  prevbtnEl = currentBtnEl;
  renderData();
}

//Function Render Data
function renderData() {
  if (people > 0) {
    tip = tipPercent === 0 ? tip : (tipPercent / 100) * bill;
    tipPerPersonEl.textContent = `$ ${(tip / people).toFixed(2)}`;
    totalPerPersonEl.textContent = `$ ${((bill + tip) / people).toFixed(2)}`;
    resetBtnEl.classList.add("bgcolor--green400");
  }
}

// Adding Event Listner to Bill Input Element
billInputEl.addEventListener("input", (event) => {
  bill = handleInput(event.target.value);
  billInputEl.value = bill;
  renderData();
});

// Adding Event Listner to Custom Tip Input Element
customTipInputEl.addEventListener("input", (event) => {
  tipPercent = 0;
  tip = handleInput(event.target.value);
  customTipInputEl.value = tip;
  renderData();
});

// Adding Event Listner to People Input Element
peopleInputEl.addEventListener("input", (event) => {
  people = handleInput(event.target.value);
  peopleInputEl.value = people;

  if (peopleInputEl.value === "0") {
    peopleInputEl.classList.add("input--error");
    errorMsgEl.classList.remove("display--none");
    tipPerPersonEl.textContent = "$ 0.00";
    totalPerPersonEl.textContent = "$ 0.00";
  } else {
    peopleInputEl.classList.remove("input--error");
    errorMsgEl.classList.add("display--none");
    renderData();
  }
});

//Adding Event Listner To Tip 5% Button
tip5BtnEl.addEventListener("click", () => {
  handleTipButton(tip5BtnEl);
});

//Adding Event Listner To Tip 5% Button
tip10BtnEl.addEventListener("click", () => {
  handleTipButton(tip10BtnEl);
});

//Adding Event Listner To Tip 5% Button
tip15BtnEl.addEventListener("click", () => {
  handleTipButton(tip15BtnEl);
});

//Adding Event Listner To Tip 5% Button
tip25BtnEl.addEventListener("click", () => {
  handleTipButton(tip25BtnEl);
});

//Adding Event Listner To Tip 5% Button
tip50BtnEl.addEventListener("click", () => {
  handleTipButton(tip50BtnEl);
});

//Adding Event Listner To Reset Button
resetBtnEl.addEventListener("click", () => {
  bill = 0;
  tip = 0;
  tipPercent = 0;
  people = 0;
  billInputEl.value = "";
  peopleInputEl.value = "";
  customTipInputEl.value = "";
  prevbtnEl.classList.remove("selected-tip");
  resetBtnEl.classList.add("bgcolor--grey500");
  tipPerPersonEl.textContent = "$ 0.00";
  totalPerPersonEl.textContent = "$ 0.00";
});
