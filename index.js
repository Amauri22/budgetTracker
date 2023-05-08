"use strict";

const costInput = document.querySelector(".input-costs");
const costBtn = document.querySelector(".btn--costs");
const incomeInput = document.querySelector(".input-income");
const incomeBtn = document.querySelector(".btn--income");
const saldoTotal = document.querySelector(".total-saldo");

const costs = [];
const income = [];


// kosten invoer lezen van moment costBtn geklikt wordt
costBtn.addEventListener("click", addingCosts);
incomeBtn.addEventListener("click", addingIncome);
costBtn.addEventListener("click", addingCosts);
incomeBtn.addEventListener("click", addingIncome);


// KeyboardEvent.code Read only
// Returns a string with the code value of the physical key represented by the event.
function handleInputEvent(event) {
  if (event.code === "Enter" )
}



// Mapping of costs 
function addingCosts() {
  costs.push(Number(costInput.value));
    const totalCost = costs.map((mov) => mov).reduce((acc, curr) => acc + curr);
    costInput.value = "";
    costInput.focus();
    console.log(totalCost);
}

function addingIncome() {
  income.push(Number(incomeInput.value));
  const totalIncome = income.map((mov) => mov).reduce((acc, curr) => acc + curr);
  console.log(totalIncome);
}
