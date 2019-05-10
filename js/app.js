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

  // Displays a message {correct or invalid}
  printMessage(message, className) {
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("text-center", "alert", className);
    messageWrapper.appendChild(document.createTextNode(message));

    // Insert into HTML
    document
      .querySelector(".primary")
      .insertBefore(messageWrapper, addExpenseForm);

    // Clear the error
    setTimeout(function() {
      document.querySelector(".primary .alert").remove();
      //   addExpenseForm.reset();
    }, 3000);
  }
  //Displaying the expenses from the form into the list
  addExpenseToList(name, amount) {
    const expensesList = document.querySelector("#expenses ul");

    // Create a li
    const li = document.createElement("li");
    li.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    // Create the template
    li.innerHTML = `
    ${name}
    <span class="badge badge-primary badge-pill">$ ${amount}</span>
    `;

    // Insert into the HTML
    expensesList.appendChild(li);
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

    // Read the input values
    const expenseName = document.querySelector("#expense").value;
    const amount = document.querySelector("#amount").value;

    if (expenseName === "" || amount === "") {
      html.printMessage(
        "There was an error, all fields are mandatory!",
        "alert-danger"
      );
    } else {
      // Add the Expenses into the list
      html.addExpenseToList(expenseName, amount);
    }
  });
}
