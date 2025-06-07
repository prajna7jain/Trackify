const user=localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.getElementById('user-name').innerText = useData.name;
document.getElementById('user-bal').innerText = useData.balance;


const editBtn= document.getElementById('edit-btn');
const editSection = document.getElementById('edit-section');
const addBalBtn = document.getElementById('addbal-btn');
const editBalBtn = document.getElementById('editbal-btn');


 editBtn.addEventListener('click', () => {
    console.log("clicked");
            addBalBtn.classList.add('hidden-section');
            editBalBtn.classList.add('hidden-section');

            
        });

