const discount =( price, percentage )=> ( price * ( 100 - percentage) ) / 100

const totalPrice = document.getElementById('price');
const discountPercentage = document.getElementById('discount');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', ()=>{
    const totalPriceValue = parseInt(totalPrice.value);
    const discountPercentageValue = parseInt(discountPercentage.value);

    result.innerHTML+=`The total to pay is: $${discount(totalPriceValue, discountPercentageValue)} <br>`;
})