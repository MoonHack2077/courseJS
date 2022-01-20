const discount = ( price, percentage ) => Math.round(( price * ( 100 - percentage) ) / 100);

const totalPrice = document.getElementById('price');
const discountPercentage = document.getElementById('discount');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', ()=>{
    const totalPriceValue = parseInt(totalPrice.value);
    const discountPercentageValue = parseFloat(discountPercentage.value);

    if( totalPriceValue<0 && discountPercentageValue<0 ){
        result.innerHTML='<b>What?, Negative?</b>'
    }else if( totalPriceValue<0  ){
        result.innerHTML='<b>Price negative?</b>'
    }else if( discountPercentageValue<0 ){
        result.innerHTML='<b>Discount negative?</b>'
    }else if( !(isNaN(totalPriceValue) || isNaN(discountPercentageValue)) ){
        if( discountPercentageValue > 100 ){
            result.innerHTML='<b>What?, discont greater than 100%?</b>'
        }else{
            result.innerHTML=`<b>The total price to pay is: $${discount(totalPriceValue, discountPercentageValue)}</b>`
        }
    }
})  