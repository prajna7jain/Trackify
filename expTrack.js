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
         alert(`Expense added: ${expName} - ₹${expPrice}`);

        const exp = {
              item : expName,
              price : expPrice
          }
          expenses.push(exp);
         localStorage.setItem("Expense",JSON.stringify(expenses));
            }else{
        alert("Please enter expenses");
      }
      let showExpense = JSON.parse(localStorage.getItem("Expense"))|| [];
   
});

if (showExpense.length > 0) {
  document.getElementById("showItem").innerText = showExpense.map(exp => exp.item).join(", ");
  document.getElementById("showPrice").innerText = showExpense.map(exp => exp.price).join(", ");
} else {
  document.getElementById("showItem").innerText = "No expenses found";
  document.getElementById("showPrice").innerText = "";
}
   


// let showExpense = JSON.parse(localStorage.getItem("Expense"))|| [];
// let expenseList = document.getElementById("showItem");
// if (showExpense.length > 0) {
//   showExpense.forEach((exp, index) => {
//     let expenseDiv = document.createElement("div");
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.id = `exp-${index}`;
//     checkbox.value = exp.item;

//     // Create label for checkbox
//     let label = document.createElement("label");
//     label.htmlFor = `exp-${index}`;
//     label.innerText = `${exp.item} - ₹${exp.price}`;

//     // Create delete button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.style.marginLeft = "20px"; // Add spacing
//     deleteBtn.onclick = function () {
//       // Remove from array
//       showExpense.splice(index, 1);
//       localStorage.setItem("Expense", JSON.stringify(showExpense));
      
//       // Refresh the expense list
//       location.reload();
//     };

//     // Append elements to expenseDiv
//     expenseDiv.appendChild(checkbox);
//     expenseDiv.appendChild(label);
//     expenseDiv.appendChild(deleteBtn);

//     // Append expenseDiv to the main container
//     expenseList.appendChild(expenseDiv);
//   });
// } else {
//   expenseList.innerText = "No expenses found";
// }
