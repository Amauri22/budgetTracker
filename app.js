'use strict'
const income = document.getElementById("income");
const incomeBtn = document.getElementById("income-btn");



class User {
    constructor(name) {
        this.name = name;
        this.income = 0;
        this.expenses = 0;
        this.categories = {};
        this.balance = 0;


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

incomeBtn.addEventListener("click", function () {
    marlon.addIncome(income.value);
    console.log(marlon);
    document.getElementById("balance").textContent = marlon.calculateBalance();
})
