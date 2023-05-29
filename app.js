'use strict'
const income = document.getElementById("income");
const incomeBtn = document.getElementById("income-btn");
const expenseBtn = document.getElementById("expense-btn");
const expense = document.getElementById("expense");
const balance = document.getElementById("balance")

class User {
    constructor(name) {
        this.name = name;
        this.income = 0;
        this.expenses = 0;
        this.categories = {};
        this.balance = 0;
        this.movements = []


    }

    addIncome(amount) {
        this.income += amount;
    }

    addExpense(amount) {
        this.expenses += amount;
    }

    calculateBalance() {
        return this.balance = this.income - this.expenses;
    }


}

let marlon = new User("Marlon Hamaekers");

// incomeBtn.addEventListener("click", function () {
//     marlon.addIncome(Number(income.value));
//     console.log(marlon);
//     document.getElementById("balance").textContent = marlon.calculateBalance();
// })
//
// expenseBtn.addEventListener("click", function() {
//     marlon.movements.push(Math.abs(Number(expense.value)) * -1);
//     console.log(marlon.movements);
// })
//
// console.log(marlon.movements)

const inputContainer = document.querySelector(".inputs");

inputContainer.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the id of the element
    const clicked = e.target.getAttribute("id");
    // check if id is one of the buttons due to event
    if (clicked === "expense-btn" || clicked === "income-btn") {
        // get the element
        const el = document.getElementById(clicked).dataset.tab;
        
        // storing in the correct category
        const movement = document.querySelector(`.${el}-movements`);
        const movementValue = Number(movement.value);
        movement === income ? marlon.addIncome(movementValue) : marlon.addExpense(movementValue);
        balance.textContent = marlon.calculateBalance()
        marlon.movements.push(movementValue);
        
        // add to movementslist and add a - when expense
        const movementsList = document.querySelector(".movements-list")
        const html = `${movement === income ? `<li>${movementValue}</li>`: `<li> -${movementValue}</li>`}`;
        movementsList.insertAdjacentHTML("afterbegin", html);

    }
})
