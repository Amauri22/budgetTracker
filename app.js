'use strict'
const income = document.getElementById("income");
const incomeBtn = document.getElementById("income-btn");
const expenseBtn = document.getElementById("expense-btn");
const expense = document.getElementById("expense");





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

inputContainer.addEventListener("click", function(e) {
    e.preventDefault();
    const clicked = e.target.getAttribute("id");
    if (clicked === "expense-btn" || clicked === "income-btn") {
        clicked = "expense-btn"? console.log("hey")
        
    }
})
