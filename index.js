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


// Mapping of costs 
function addingCosts() {
  costs.push(Number(costInput.value));
  console.log(costs);
    const totalCost = costs.map((mov) => mov).reduce((acc, curr) => acc + curr);
    console.log(totalCost);
}

function addingIncome() {
  income.push(Number(incomeInput.value));
  console.log(income);
}
