const user=localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.getElementById('user-name').innerText = useData.name;
document.getElementById('user-bal').innerText = useData.balance;


// const editBtn= document.getElementById('edit-btn');
// const editSection = document.getElementById('edit-section');
// const addbalBtn = document.getElementById('addbal-btn');
// const editbalBtn = document.getElementById('editbal-btn');


//  editBtn.addEventListener('click', () => {
//     console.log("clicked");
//             addbalBtn.classList.add('hidden-section1');
//             editbalBtn.classList.add('hidden-section1');
 
//         });

let addExpense=document.getElementById("add-exp-btn");
addExpense.addEventListener("click",()=>{
    let expName=document.getElementById("expense-name").value;
    let price=document.getElementById("price2").value;
    if(expName !="" && price!=""){
        
    }

});


