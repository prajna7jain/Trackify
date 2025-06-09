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

    if (addbalance!='' && addbalance > 0) {
      let newBal = useData.balance + addbalance;
      useData.balance = newBal;
      document.getElementById("user-bal").innerText = newBal;
      localStorage.setItem("User-info", JSON.stringify(useData));
      alert(`Balance added: ₹${addbalance}`);
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
      alert(`Balance updated: ₹${updatebalbalance }`);
    } else {
      alert("Enter a valid amount!");
    }
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

 