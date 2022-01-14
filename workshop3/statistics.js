const average = arr => arr.reduce((acc,el)=> acc+el) / arr.length;


const middle = arr =>{
    arr = arr.sort((a,b)=> a-b);
    console.log(arr);
    if(arr.length % 2 === 0){
        const mit1= arr.length / 2;
        const mit2= mit1-1;
        const av = (arr[mit1] + arr[mit2]) / 2
        return av;
    }else{
        const mit = Math.floor(arr.length/2);
        const po = arr[mit];
        return po;
    }
}

console.log(average([100,200,300,400,500]));
console.log(middle([200,50,30,100,50,10,7]));