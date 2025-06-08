const user1=localStorage.getItem("User-info1");
let useData1 = JSON.parse(user1);
console.log(useData1.name);
console.log(useData1.balance);

document.getElementById('user-name').innerText = useData1.name;
document.getElementById('user-bal').innerText = useData1.balance;


// const editBtn= document.getElementById('edit-btn');
// const editSection = document.getElementById('edit-section');
// const addbalBtn = document.getElementById('addbal-btn');
// const editbalBtn = document.getElementById('editbal-btn');


//  editBtn.addEventListener('click', () => {
//     console.log("clicked");
//             addbalBtn.classList.add('hidden-section1');
//             editbalBtn.classList.add('hidden-section1');
 
//         });

userBalance=document.getElementById('user-bal');
let addExpense=document.getElementById("add-exp-btn");
addExpense.addEventListener("click",()=>{
     console.log("clicked");
     alert("in");
    let expName=document.getElementById("expense-name").value;
    let price=document.getElementById("price2").value;
    if(expName !="" && price!=""){
         if(price<=user-bal){
            userBalance=userBalance-price;
            userBalance.innerText = userBalance;

         }
    }

});


