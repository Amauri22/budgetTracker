"use strict"
/***Login Screen***/
const loginScreen = document.querySelector(".login-screen");
const loginBtn = document.getElementById("login-btn");

/***Totals header ***/
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const totalBalanceElement = document.getElementById("total-balance");

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
        this.positiveMovements = [];
        this.negativeMovements = [];
        this.totalBalance = 0;

    }

    
    // Movements added on list and stored
    addMovement(mov){
        this.movements.push(mov);
        this.appendList(mov);
        
        
        // Check if movement needs to be added to positive list, or negative
        // list
        if (mov > 0) {
            this.positiveMovements.push(mov);
        } else {
            this.negativeMovements.push(mov);
        }
        
    };
    
    // method to insertAdjacentHTML to webpage
    appendList(el) {
        const html = `<li>${el}</li>`
        list.insertAdjacentHTML("afterbegin", html)
    }
    
    // method to calculate the total balance. Negative and positve numbers
    // included
    calcTotalBudget() {
         this.totalBalance = this.movements.reduce((acc, num) => acc + num);
    }
    
    // The totalbalance gets displayed on site
    displayBalances(el){
        el.textContent = this.totalBalance;
    }
    
    
    

}



const marlon = new User ("Marlon", "Hamaekers", 31);

/***Script login***/
// Eventlistener to remove login screen on click
loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    loginScreen.classList.add("hidden");
})

// AddingMovements
inputFieldsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    // check if correct element was clicked then add the listener to e.target
    if (e.target === btnExpense || e.target === btnIncome) {
        
        // create variable clicked, getting the dataset from addBtn =
        // "income || expense"
        const clicked = e.target.dataset.addBtn;
        
        // inputfield var to select the correct input-field according to the
        // data extracted from the above
        const inputField = document.querySelector(`#${clicked}-input-field`);
        
        // Check if expense/income and set the convert the number to a pos
        // or neg
        const amount = inputField.id === "expense-input-field"? Number(-(inputField.value)): Number(inputField.value);
       
       // movements added to lists
        marlon.addMovement(amount);
        inputField.value = ""
        marlon.calcTotalBudget();
        console.log(marlon)
        console.log(marlon.totalBalance)
        marlon.displayBalances(totalBalanceElement)
    }
    
})




