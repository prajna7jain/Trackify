const user = localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.getElementById("user-name").innerText = useData.name;
document.getElementById("user-bal").innerText = useData.balance;


const editBtn = document.getElementById("edit-btn");
const inputFields = document.getElementById("input-fields-section");
const addbalbtn = document.getElementById("addbal-btn");
const addbalinput = document.getElementById("add-bal-input");
const newbalbtn = document.getElementById("editbal-btn");
const newbalinput = document.getElementById("new-bal-input");

function Inputs() {
  addbalinput.classList.add("hidden-section1");
  newbalinput.classList.add("hidden-section2");
}
editBtn.addEventListener("click", () => {
  Inputs();
  inputFields.classList.remove("hidden-section");
});
addbalbtn.addEventListener("click", () => {
  Inputs();
  addbalinput.classList.toggle("hidden-section1");
});
newbalbtn.addEventListener("click", () => {
  Inputs();
  newbalinput.classList.toggle("hidden-section2");
});

//add balance
const addb = document.getElementById("addb");

  addb.addEventListener("click", () => {
    let addbalance = parseFloat(document.getElementById("price").value);

    if (!isNaN(addbalance) && addbalance > 0) {
      let currentBalance = parseFloat(useData.balance) || 0;
      let newBal = currentBalance + addbalance;
      useData.balance = newBal;
      document.getElementById("user-bal").innerText = newBal;
      localStorage.setItem("User-info", JSON.stringify(useData));
    } else {
      alert("Enter a valid amount!");
    }
  });
  

//update balance
const updatebtn= document.getElementById("newbtn");

  updatebtn.addEventListener("click", () => {
    let updatebalbalance = parseFloat(document.getElementById("price2").value);

    if (updatebalbalance!='' && updatebalbalance > 0) {
       useData.balance = updatebalbalance;
      document.getElementById("user-bal").innerText = useData.balance ;
      localStorage.setItem("User-info", JSON.stringify(useData)); 
    } else {
      alert("Enter a valid amount!");
    }
  });
//add expenses
let expenses = JSON.parse(localStorage.getItem('Expense'))|| [];
let addExp=document.getElementById("add-exp-btn");//enter btn

addExp.addEventListener("click",()=>{
    let expName=document.getElementById("expense-name").value;
    let expPrice= document.getElementById("expPrice").value;
    if(expName !=''&& expPrice!='' && expPrice >0){
        let newBal = useData.balance - expPrice;
         useData.balance = newBal;
        document.getElementById("user-bal").innerText = newBal;
        localStorage.setItem("User-info", JSON.stringify(useData)); 
        const exp = {
              item : expName,
              price : expPrice
          }
          expenses.push(exp);
         localStorage.setItem("Expense",JSON.stringify(expenses));
          displayExpenses();
            }else{
        alert("Please enter expenses");
      }
      
   
});
  //expenses tracker

function displayExpenses() {
  let showExpense = JSON.parse(localStorage.getItem("Expense")) || [];
  let expenseList = document.getElementById("showItem");

  expenseList.innerHTML = "";

  if (showExpense.length > 0) {
    showExpense.forEach((exp, index) => {
      let expenseDiv = document.createElement("div");
      expenseDiv.style.display = "flex";
      expenseDiv.style.alignItems = "center";
      expenseDiv.style.justifyContent = "space-between";
      expenseDiv.style.padding = "10px";
      expenseDiv.style.marginTop = "13px";
      expenseDiv.style.borderBottom = "1px solid #ccc"; 

      // Expense name 
      let label = document.createElement("span");
      label.innerText = exp.item;
      label.style.fontSize = "18px";
      label.style.fontWeight = "bold";

      // Expense price 
      let priceSpan = document.createElement("span");
      priceSpan.innerText = `₹${exp.price}`;
      priceSpan.style.fontSize = "16px";
      priceSpan.style.margin = "0 20px";
      priceSpan.style.color = "green";

      // delete button 
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.style.borderRadius = "8px";
      deleteBtn.style.padding = "8px 16px";
      deleteBtn.style.fontSize = "14px";
      deleteBtn.style.backgroundColor = "black"; 
      deleteBtn.style.color = "white";
      deleteBtn.style.border = "2px solid";
      deleteBtn.style.cursor = "pointer";
      deleteBtn.style.marginLeft = "20px";

      // Delete expense logic 
      deleteBtn.onclick = function () {
        showExpense.splice(index, 1);
        localStorage.setItem("Expense", JSON.stringify(showExpense)); 
        displayExpenses(); 
      };

      // Append elements to expenseDiv
      expenseDiv.appendChild(label);
      expenseDiv.appendChild(priceSpan);
      expenseDiv.appendChild(deleteBtn);

      // Append to main container
      expenseList.appendChild(expenseDiv);
    });
  } else {
    expenseList.innerText = "No expenses found";
  }
}
window.onload = displayExpenses;
