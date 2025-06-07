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
//   Remove Madu edanna 
  addBalBtn.classList.add("hidden-section");
  editBalBtn.classList.add("hidden-section");
  
//   E line aa add madu 
// inputFields.classList.remove("hidden-section");
});
