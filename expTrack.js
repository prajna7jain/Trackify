const user = localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.getElementById("user-name").innerText = useData.name;
document.getElementById("user-bal").innerText = useData.balance;

const editBtn = document.getElementById("edit-btn");
const inputFields = document.getElementById("input-fields-section");
editBtn.addEventListener("click", () => {
  inputFields.classList.remove("hidden-section");
});

const addbalbtn = document.getElementById("addbal-btn");
const addbalinput= document.getElementById("add-bal-input");
addbalbtn.addEventListener("click", () => {
  addbalinput.classList.remove("hidden-section1");
});






let expenses = JSON.parse(localStorage.getItem('Expense'))|| [];
let addExp=document.getElementById("add-exp-btn");//enter btn

addExp.addEventListener("click",()=>{
    let expName=document.getElementById("expense-name").value;
    let expPrice=document.getElementById("expPrice").value;
    if(expName !=''&& expPrice!=''){
        let newBal = useData.balance - expPrice;
         useData.balance = newBal;
        document.getElementById("user-bal").innerText = newBal;
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
});

 