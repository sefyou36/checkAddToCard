const result = document.querySelector(".compteur");
const increments = document.querySelectorAll(".add");
const panier = document.querySelector(".panier");
const page = document.querySelector(".container");
const sideNav = document.createElement("paniers-container");
const productsInCart = new Map(); 

let total = 0.00;
let uniqueId = 1; 

for (let increment of increments) {
    increment.addEventListener("click", function () {
        result.innerText++
        const priceElement = increment.previousElementSibling;
        const price = parseFloat(priceElement.innerText);

        const card = increment.closest(".card");
        const productName = card.querySelector("h4").innerText;
        const productImage = card.querySelector("img").src;

        if (!productsInCart.has(productName)) {
            productsInCart.set(productName, { quantity: 1, id: uniqueId }); 
            uniqueId++;

            const panierItem = document.createElement("div");
            panierItem.classList.add("panier-item");
            panierItem.innerHTML = `
                <img src="${productImage}" alt="${productName}" class="panier-image">
                <div class="panier-info"><br>
                    <p class="panier-name">${productName}</p>
                    <p class="panier-price">${price.toFixed(2)}</p>
                    <span class="compteurs" data-product-id="${productsInCart.get(productName).id}">× 1</span>
                </div>
            `;

            sideNav.appendChild(panierItem);
        } else {
            
            productsInCart.get(productName).quantity++;
            const productId = productsInCart.get(productName).id;

            const counterElement = sideNav.querySelector(`[data-product-id="${productId}"]`);
            counterElement.innerText = `× ${productsInCart.get(productName).quantity}`;
        }

        total += price;
        updateTotal();
    });
}



function updateTotal() {
    const totalElement = document.querySelector(".addition");
    totalElement.innerText = total.toFixed(2); 
}
sideNav.setAttribute("class","paniers-container cach")
sideNav.innerHTML = `
<h1 class="side">Card</h1>
<button class="total">
    <span class="addition">0.00</span>
</button>
<button class="exit">Close</button>
`;

    
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








