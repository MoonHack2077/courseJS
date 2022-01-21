document.addEventListener('DOMContentLoaded',()=>{
    const average = arr => arr.reduce((acc,el)=> acc+el) / arr.length;

    const middle = arr =>{
        arr = arr.sort((a,b)=> a-b);
        if(arr.length % 2 === 0){
            const mitd= arr.length / 2;
            const mid2= mitd-1;
            const av = (arr[mitd] + arr[mid2]) / 2
            return av;
        }else{
            const mid = Math.floor(arr.length/2);
            const po = arr[mid];
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

        //filtre todos los que son iguales al mayor(fash[fash.length-1][1])
        const b=[];
        for( let i=0; i<fash.length; i++ ){
            if( fash[i][1] === fash[fash.length-1][1] ){
            b.push(fash[i]);
        }
        }
        
        const c=[];
        for( let i=0; i<b.length; i++ ){
            c.push(b[i][0])
        }
        return c;
    }

    const inputNumbers = document.getElementById('input_numbers');
    const btnAdd = document.getElementById('btn_add');
    const list = document.getElementById('list');
    const remove = document.getElementById('remove');
    const cal = document.getElementById('cal');
    const calAll = document.getElementById('cal_all');
    const stats = [];

    btnAdd.onclick=()=>{
        const inputNumbersValue = parseFloat(inputNumbers.value);
        stats.push(inputNumbersValue)
        list.innerHTML = stats;
    }
    remove.onclick=()=>{
        stats.pop();
        list.innerHTML = stats;
    }
    cal.onclick=()=>{
        calAll.innerHTML = 
        `
            Average: ${average(stats)}<br>
            Median: ${middle(stats)}<br>
            Fashion: ${fashion(stats)}
        `
    }
})


