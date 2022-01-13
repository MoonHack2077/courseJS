document.addEventListener('DOMContentLoaded',()=>{

    console.group('Square');
    const square = document.getElementById('square');
    const squareSide = document.getElementById('squareSide');
    const calSquare = document.getElementById('calSquare');
    const pS = side => side *4;
    const aS = side => side **2; 
    console.groupEnd();

    console.group('Triangle');
    const triangle = document.getElementById('triangle');
    const t1  = document.getElementById('t1');
    const t2  = document.getElementById('t2');
    const base  = document.getElementById('base');
    const height  = document.getElementById('height');
    const calTraingle = document.getElementById('calTriangle');

    const pT = (side1, side2, side3) => side1 + side2 + side3;
    const aT = (base, height) => (base * height) / 2; 
    console.groupEnd();

    console.group('Circle');
    const Circle  = document.getElementById('Circle');
    const circleR  = document.getElementById('circleR');
    const calCircle = document.getElementById('calCircle');
    const dC = r => r * 2;
    const pC = r => dC(r) * Math.PI;
    const aC = r => Math.pow(r,2) * Math.PI; 
    console.groupEnd();

    //EVENTS
    calSquare.addEventListener('click' ,()=>{
        const squareSideValue = parseFloat(squareSide.value);
        if(!(isNaN(squareSideValue))){
            square.innerHTML+=`<b>Area:</b> ${aS(squareSideValue)}, <b>perimeter:</b> ${pS(squareSideValue)}`
        }
    })

    calTraingle.onclick=()=>{
        const t1Value = parseFloat(t1.value);
        const t2Value = parseFloat(t2.value);
        const baValue = parseFloat(base.value);
        const heValue = parseFloat(height.value);
        if(!( isNaN ( t1Value, t2Value, baValue, heValue ) )){
            triangle.innerHTML+=`<b>Area:</b> ${aS(squareSideValue)}, <b>perimeter:</b> ${pS(squareSideValue)}`
        }
    }

    calCircle.onclick=()=>{
    }

})