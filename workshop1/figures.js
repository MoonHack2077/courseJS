document.addEventListener('DOMContentLoaded',()=>{
    //SQUARE 
    const squareSide = document.getElementById('squareSide');
    const calSquare = document.getElementById('calSquare');
    const squareMeasure = document.getElementById('squareMeasure');
    const squareResult = document.getElementById('squareResult');
    const pS = side => side *4;
    const aS = side => side **2; 

    //CIRCLE
    const circleR  = document.getElementById('circleR');
    const circleMeasure = document.getElementById('circleMeasure');
    const calCircle = document.getElementById('calCircle');
    const circleResult = document.getElementById('circleResult');

    const dC = r => r * 2;
    const pC = r => dC(r) * Math.PI;
    const aC = r => Math.pow(r,2) * Math.PI; 

    //EVENTS
    const isPositive = num => num > 0;

    calSquare.onclick =()=>{
        const squareSideValue = parseFloat(squareSide.value);

        if(isPositive(squareSideValue)){
            if( !(isNaN(squareSideValue)) ){
                squareResult.innerHTML=
                `
                    <b>Area: ${aS(squareSideValue)} ${squareMeasure.value}² <br>
                    Perimeter: ${pS(squareSideValue)} ${squareMeasure.value}</b> <br>
                `
            }
        }else{
            squareResult.innerHTML='<b>The side must be greater than 0!!</b>'
        }
    }
    
    calCircle.onclick=()=>{
        const radioValue = parseFloat(circleR.value);
        if( isPositive(radioValue) ){
            if( !(isNaN(radioValue)) ){
                circleResult.innerHTML=
                `
                    <b>Area: ${aC(radioValue)} ${circleMeasure.value}² <br>
                    Perimeter: ${pC(radioValue)} ${circleMeasure.value}</b><br>
                `
            }
        }else{
            circleResult.innerHTML='<b>The radio must be greater than 0!!</b>'
        }
    }
})