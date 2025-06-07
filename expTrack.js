const user=localStorage.getItem("User-info");
let useData = JSON.parse(user);
console.log(useData.name);
console.log(useData.balance);

document.querySelector('h2').innerText = useData.name;
document.querySelector('h3').innerText = useData.balance;
