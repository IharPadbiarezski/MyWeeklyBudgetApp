// Classes
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetLeft = this.budget;
  }
}

// Everything related to HTML
class HTML {
  // Insert the budget when the user submits it
  insertBudget(amount) {
    // Insert into HTML
    budgetTotal.innerHTML = `${amount}`;
    budgetLeft.innerHTML = `${amount}`;
  }
}

// Varibles
const addExpenseForm = document.querySelector("#add-expense"),
  budgetTotal = document.querySelector("span#total"),
  budgetLeft = document.querySelector("span#left");

let budget, userBudget;

// Instancite the HTML class
const html = new HTML();

// Event Listeners
eventListeners();
function eventListeners() {
  // App Init
  document.addEventListener("DOMContentLoaded", function() {
    // Ask the visitor the weekly budget
    userBudget = prompt(" What's your budget for this week?");
    // validate the user budget
    if (userBudget === null || userBudget === "" || userBudget === "0") {
      window.location.reload();
    } else {
      budget = new Budget(userBudget);

      // Instanciate HTMLclass
      html.insertBudget(budget.budget);
    }
  });

  // When a new expense is added
  addExpenseForm.addEventListener("submit", function(e) {
    e.preventDefault();
  });
}
