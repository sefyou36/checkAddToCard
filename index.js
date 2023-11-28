const result = document.querySelector(".compteur");
const increments = document.querySelectorAll(".add");
const panier = document.querySelector(".panier");
const page = document.querySelector(".container");
const sideNav = document.createElement("div");


let total = 0.00;
for (let increment of increments) {
    increment.addEventListener("click", function () {
        result.innerText++;
        const priceElement = increment.previousElementSibling; 
        const price = parseFloat(priceElement.innerText); 
        
        total += price;
        updateTotal();
    });
}


function updateTotal() {
    const totalElement = document.querySelector(".addition");
    totalElement.innerText = total.toFixed(2); 
}
sideNav.innerHTML = `<div class="paniers-container cach">
<h1 class="side">Card</h1>
<button class="total">
    <span class="addition">0.00</span>
</button>
<button class="exit">Close</button>
</div>`;

    
 page.insertAdjacentElement("beforeend", sideNav);
        const sidenavContainer = page.querySelector(".paniers-container")
        

panier.addEventListener("click",toggleSideNav );

document.addEventListener("click", function (event){
    if (event.target.classList.contains("exit")) {
        sidenavContainer.classList.add("cach")
    }
})




function toggleSideNav() {
    sidenavContainer.classList.toggle("cach");   
}







