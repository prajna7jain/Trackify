let expences = JSON.parse(localStorage.getItem('Expence'))|| [];

const user = localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.getElementById("user-name").innerText = useData.name;
document.getElementById("user-bal").innerText = useData.balance;

const editBtn = document.getElementById("edit-btn");
const editSection = document.getElementById("edit-section");
const addBalBtn = document.getElementById("addbal-btn");
const editBalBtn = document.getElementById("editbal-btn");

const inputFields = document.getElementById("input-fields-section");

editBtn.addEventListener("click", () => {
  console.log("clicked");

  inputFields.classList.remove("hidden-section");
});

const addExp = document.getElementById("enter-btn");

addExp.addEventListener("click", () => {
  let ExpName = document.getElementById("expense-name").value;
  let ExpPrice = document.getElementById("Expense-price").value;

  if (ExpName != "" && ExpPrice != "") {
    let newBal = useData.balance - ExpPrice;
    useData.balance = newBal;
    document.getElementById("user-bal").innerText = newBal;
    alert(`Expense added: ${ExpName} - ₹${ExpPrice}`);
    const exp = {
      item : ExpName,
      price : ExpPrice
    }

    expences.push(exp);
    localStorage.setItem("Expence",JSON.stringify(expences));
  } else {
    alert("Plese Enter Expences");
  }
});

