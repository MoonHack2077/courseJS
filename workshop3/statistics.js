const average = arr => arr.reduce((acc,el)=> acc+el) / arr.length;

const middle = arr =>{
    arr = arr.sort((a,b)=> a-b);
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

const fashion= arr =>{
    const list = {};
    
    arr.map( x => {
        if(list[x]){
            list[x]+=1;
        }else{
            list[x]=1
        }
    })

    const fash= Object.entries(list).sort((a,b)=> a[1]-b[1]);
    return fash.pop()[0];
}