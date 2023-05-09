"use strict";

const costInput = document.querySelector(".input-costs");
const costBtn = document.querySelector(".btn--costs");
const incomeInput = document.querySelector(".input-income");
const incomeBtn = document.querySelector(".btn--income");
const totalIncomes = document.querySelector(".total-incomes");
const totalCosts = document.querySelector(".total-costs");
const saldoTotal = document.querySelector(".total-saldo");

const costs = [];
const income = [];

let totalCost = 0;
let totalIncome = 0;

// kosten invoer lezen van moment costBtn geklikt wordt
costBtn.addEventListener("click", handleInput);
incomeBtn.addEventListener("click", handleInput);
refreshMovements()
// Input behandelen
function handleInput(event) {
  if (event.target === costBtn) {
    costs.push(Number(costInput.value));
    totalCost = costs.map((mov) => mov).reduce((acc, curr) => acc + curr);
    costInput.value = "";
    costInput.focus();
    totalCosts.textContent = totalCost;
  } else if (event.target === incomeBtn) {
    income.push(Number(incomeInput.value));
    totalIncome = income.map((mov) => mov).reduce((acc, curr) => acc + curr);
    incomeInput.value = "";
    incomeInput.focus();
    totalIncomes.textContent = totalIncome;
    

  }
  saldoTotal.textContent = totalIncome - totalCost;
  refreshMovements()
}


// Ik moet hier nog een array maken dmv map methode, om de 2 arrays om te vormen tot 1, en ze dan als 1 lijst te laten samekomen
/* VOORBEELDCODE
*
Gecombineerde functie om zowel positieve als negatieve bewegingen weer te geven
function refreshMovements() {
  const movementsList = document.getElementById("movements-list");
  movementsList.innerHTML = "";

  // Combineer negatieve en positieve bewegingen in één array
  const allMovements = costs.map((mov) => ({ value: mov, type: "negative" }))
    .concat(income.map((mov) => ({ value: mov, type: "positive" })));

  // Omgekeerde volgorde, zodat nieuwe bewegingen bovenaan komen
  allMovements.reverse();

  // Bewegingen toevoegen aan de lijst
  allMovements.forEach(function (mov) {
    const html = `<li class="${mov.type}">${mov.value}</li>`;
    movementsList.insertAdjacentHTML("beforeend", html);
  });
}
*/

// nu krijg ik 2 verschillende arrays waardoor dit ze niet telkens van boven beginnen
function refreshMovements() {
  const movementsList = document.getElementById("movements-list");
  movementsList.innerHTML = "";
  
  income.forEach(function (mov) {
    const html = `<li>${mov}</li>`;
    movementsList.insertAdjacentHTML(
      "beforeend", html)
  })

  costs.forEach(function (mov) {
    const html = `<li>${mov}</li>`;
    movementsList.insertAdjacentHTML(
      "beforeend", html)
    })
}

