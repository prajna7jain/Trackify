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
const addbalinput = document.getElementById("add-bal-input");

addbalbtn.addEventListener("click", () => {
  addbalinput.classList.toggle("hidden-section1");
});

//new balance edit
const newbalbtn = document.getElementById("new-bal-btn");
const newbalinput = document.getElementById("new-bal-input");

newbalbtn.addEventListener("click", () => {
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

const updatebtn= document.getElementById("new-bal-btn");

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

 