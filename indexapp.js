"use strict"
/***Login Screen***/
const loginScreen = document.querySelector(".login-screen");
const loginBtn = document.getElementById("login-btn");

/***Totals header ***/
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const totalBalance = document.getElementById("total-balance");

/*** INPUTS ***/
const inputFieldsContainer = document.getElementById("input-fields")
const inputIncome = document.getElementById("income-input-field");
const btnIncome = document.getElementById("income-btn");
const inputExpense = document.getElementById("expense-input-field");
const btnExpense = document.getElementById("expense-btn");

const list = document.querySelector(".overview-movements-list")


/***CLASS CREATION***/

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.movements = []; 

    }

    addMovement(mov){
        this.movements.push(mov);
        this.appendList(mov)
    }
    
    appendList(el) {
        const html = `<li>${el}</li>`
        list.insertAdjacentHTML("afterbegin", html)
    }
    

}



const marlon = new User ("Marlon", "Hamaekers", 31);

/***Script login***/
loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    loginScreen.classList.add("hidden");
})

// AddingMovements
inputFieldsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target === btnExpense || e.target === btnIncome) {
        const clicked = e.target.dataset.addBtn;
        const inputField = document.querySelector(`#${clicked}-input-field`);
        const amount = inputField.id === "expense-input-field"? Number(-(inputField.value)): Number(inputField.value);
        marlon.addMovement(amount);
        inputField.value = ""
        console.log(marlon)
        
        
        
    }
    
})

