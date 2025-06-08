const user = localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.getElementById("user-name").innerText = useData.name;
document.getElementById("user-bal").innerText = useData.balance;

const editBtn = document.getElementById("edit-btn");
const inputFields = document.getElementById("input-fields-section");

editBtn.addEventListener("click", () => {
  console.log("clicked");
  inputFields.classList.remove("hidden-section1");
});

let addExp=document.getElementById("add-exp-btn");//enter btn
let expName=document.getElementById("expense-name").value;
let expPrice=document.getElementById("expPrice").value;
addExp.addEventListener("click",()=>{
    if(expName !=''&& expPrice!=''){
        let newBal = useData.balance - expPrice;
         useData.balance = newBal;
        document.getElementById("user-bal").innerText = newBal;
         alert(`Expense added: ${ExpName} - ₹${ExpPrice}`);

        const exp = {
              item : expName,
              price : expPrice
          }
          expenses.push(exp);
         localStorage.setItem("Expense",JSON.stringify(expences));
            }else{
        alert("Please enter expenses");
      }
});