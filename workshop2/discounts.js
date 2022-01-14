const discount =( price, percentage )=> ( price * ( 100 - percentage) ) / 100

const totalPrice = document.getElementById('price');
const coupon = document.getElementById('coupons');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const coupons=[
    { value:'0', discountPer: 15},
    { value:'1', discountPer: 20},
    { value:'2', discountPer: 50}
]

btn.addEventListener('click', ()=>{
    const totalPriceValue = parseInt(totalPrice.value);
    const couponValue = coupon.value;
    const find = coupons.find( c => c.value === couponValue);
    console.log(find);
    if(find){
        result.innerHTML=`<b>The total to pay is:</b> $${discount(totalPriceValue, find.discountPer)} <br>`;
    }

    
})