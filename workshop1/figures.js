document.addEventListener('DOMContentLoaded',()=>{
    //SQUARE    
    // const square = document.getElementById('square');
    const squareSide = document.getElementById('squareSide');
    const calSquare = document.getElementById('calSquare');
    const squareMeasure = document.getElementById('squareMeasure');
    const squareResult = document.getElementById('squareResult');
    const pS = side => side *4;
    const aS = side => side **2; 
    
    //TRAINGLE
    // const triangle = document.getElementById('triangle');
    const t1  = document.getElementById('t1');
    const t2  = document.getElementById('t2');
    const base  = document.getElementById('base');
    const height  = document.getElementById('height');
    const triangleMeasure = document.getElementById('triangleMeasure');
    const calTraingle = document.getElementById('calTriangle');
    const triangleResult = document.getElementById('triangleResult');

    const pT = (side1, side2, base) => side1 + side2 + base;
    const aT = (base, height) => (base * height) / 2; 

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
            squareResult.innerHTML=`<b>Area: ${aS(squareSideValue)} ${squareMeasure.value}² <br> perimeter: ${pS(squareSideValue)} ${squareMeasure.value}</b> <br>`
        }
    }

    calTraingle.onclick=()=>{
        const t1Value = parseFloat(t1.value);
        const t2Value = parseFloat(t2.value);
        const baValue = parseFloat(base.value);
        const heValue = parseFloat(height.value);
        if(!( isNaN(t1Value) || isNaN(t2Value) || isNaN(baValue) | isNaN(heValue) )){
            triangleResult.innerHTML=`<b>Area: ${aT(baValue, heValue)} ${triangleMeasure.value}² <br> perimeter: ${pT(t1Value, t2Value, baValue)} ${triangleMeasure.value}</b><br>`
        }
    }

    calCircle.onclick=()=>{
        const radioValue = parseFloat(circleR.value);
        if(!(isNaN(radioValue))){
            circleResult.innerHTML=`<b>Area: ${aC(radioValue)} ${circleMeasure.value}² <br> perimeter: ${pC(radioValue)} ${circleMeasure.value}</b><br>`
        }
    }
})