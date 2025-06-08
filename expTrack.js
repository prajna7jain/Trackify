const user1 = localStorage.getItem("User-info1");
let useData1 = JSON.parse(user1);
console.log(useData1.name);
console.log(useData1.balance);

document.getElementById("user-name").innerText = useData1.name;
document.getElementById("user-bal").innerText = useData1.balance;

const editBtn = document.getElementById("edit-btn");
const editSection = document.getElementById("edit-section");
const addbalBtn = document.getElementById("addbal-btn");
const editbalBtn = document.getElementById("editbal-btn");

const inputFields = document.getElementById("input-fields-section");

editBtn.addEventListener("click", () => {
  console.log("clicked");
  inputFields.classList.remove("hidden-section1");
});


let addExp=document.getElementById("add-exp-btn");
addExp.addEventListener("click",()=>{
    let expName=document.getElementById("expense-name").value;
    let expPrice=document.getElementById("expPrice").value;
    console.log(expName,expPrice);
    if(expName !="" && expPrice!=""){
        console.log("amount entered");
        let updatedbal=document.getElementById("user-bal").innerText = useData1.balance-expPrice;

        const userAmount= {
                expName : expName,
                updatedbal: updatedbal
            }
            
            localStorage.setItem("expenses",JSON.stringify(userAmount));
        
    }else{
        alert("Fill all the fields");
    }
});