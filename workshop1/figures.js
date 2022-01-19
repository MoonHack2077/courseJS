document.addEventListener('DOMContentLoaded',()=>{
    //SQUARE    
    // const square = document.getElementById('square');
    const squareSide = document.getElementById('squareSide');
    const calSquare = document.getElementById('calSquare');
    const squareMeasure = document.getElementById('squareMeasure');
    const squareResult = document.getElementById('squareResult');
    const pS = side => side *4;
    const aS = side => side **2; 

    

    //CIRCLE
    // const Circle  = document.getElementById('Circle');
    const circleR  = document.getElementById('circleR');
    const circleMeasure = document.getElementById('circleMeasure');
    const calCircle = document.getElementById('calCircle');
    const circleResult = document.getElementById('circleResult');

    const dC = r => r * 2;
    const pC = r => dC(r) * Math.PI;
    const aC = r => Math.pow(r,2) * Math.PI; 

    //EVENTS
    calSquare.onclick =()=>{
        const squareSideValue = parseFloat(squareSide.value);
        if(!(isNaN(squareSideValue))){
            squareResult.innerHTML=`<b>Area: ${aS(squareSideValue)} ${squareMeasure.value}² <br> Perimeter: ${pS(squareSideValue)} ${squareMeasure.value}</b> <br>`
        }
    }

    

    calCircle.onclick=()=>{
        const radioValue = parseFloat(circleR.value);
        if(!(isNaN(radioValue))){
            circleResult.innerHTML=`<b>Area: ${aC(radioValue)} ${circleMeasure.value}² <br> Perimeter: ${pC(radioValue)} ${circleMeasure.value}</b><br>`
        }
    }
})