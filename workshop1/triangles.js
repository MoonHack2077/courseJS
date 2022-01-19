document.addEventListener('DOMContentLoaded',()=>{
    const triangle_type_input = document.getElementById('triangle_type_input');
    const triangle_type = document.getElementById('triangle_type');
    const calTriangle  = document.getElementById('calTriangle');
    const triangleResult = document.getElementById('triangleResult');
    const triangleMeasure = document.getElementById('triangleMeasure');

    triangle_type.onchange=()=>{
        const triangle_type_value = triangle_type.value;

        if(triangle_type_value === 'equi'){
            triangle_type_input.innerHTML=
            `
                <p>Type the side length: </p>
                <input type="number" id="equi_value">
            `
            const equi_value = document.getElementById('equi_value');
            calTriangle.onclick=()=>{
                const equiValue = parseFloat(equi_value.value);
                if( !( isNaN(equiValue) ) ){
                    triangleResult.innerHTML=`<b>Area: ${aT(equiValue, equi_H(equiValue))} ${triangleMeasure.value}² <br> Perimeter: ${equi_P(equiValue)} ${triangleMeasure.value}</b><br>`
                }
            }
        }
        
        else if(triangle_type_value === 'iso'){
            triangle_type_input.innerHTML=
            `
                <p>Type the length of the equal sides: </p>
                <input type="number" id="iso_value">

                <p>Type the base length: </p>
                <input type="number" id="base_value">
            `
            const iso_value = document.getElementById('iso_value');
            const base_value = document.getElementById('base_value');
            calTriangle.onclick=()=>{
                const isoValue = parseFloat(iso_value.value);
                const baseValue = parseFloat(base_value.value);
                if( baseValue >= isoValue*2 ){
                    triangleResult.innerHTML='The base can´t be larger than the others sides'
                }else if( !( isNaN(isoValue) || isNaN(baseValue) )  ){
                    triangleResult.innerHTML=`<b>Area: ${aT( baseValue, iso_H(isoValue, baseValue))} ${triangleMeasure.value}² <br> Perimeter: ${iso_P(isoValue, baseValue)} ${triangleMeasure.value}</b><br>`
                }
            }
        }
        
        else if(triangle_type_value === 'esca'){
            triangle_type_input.innerHTML=
            `
                <p>Type the side 1 length: </p>
                <input type="number" id="esca_value">
                <p>Type the side 2 length: </p>
                <input type="number" id="esca2_value">
                <p>Type the base length: </p>
                <input type="number" id="esca3_value">
            `
            const esca_value = document.getElementById('esca_value');
            const esca2_value = document.getElementById('esca2_value');
            const esca3_value = document.getElementById('esca3_value');
            calTriangle.onclick=()=>{
                const escaValue = parseFloat(esca_value);
                const esca2Value = parseFloat(esca2_value);
                const esca3Value = parseFloat(esca3_value);
                if( !( isNaN(escaValue) || isNaN(esca2Value) || isNaN(esca3Value) ) ){
                    triangleResult.innerHTML=`<b>Area: ${aT(esca3Value, esca_H(escaValue, esca2Value, esca3Value))} ${triangleMeasure.value}² <br> Perimeter: ${pT(escaValue, esca2Value, esca3Value)} ${triangleMeasure.value}</b><br>`
                }
            }
        }
        
        else if(triangle_type_value === 'recta'){
            triangle_type_input.innerHTML=
            `
                <p>Type the side length: </p>
                <input type="number" id="equi_value">
            `
            const equi_value = document.getElementById('equi_value');
            calTriangle.onclick=()=>{
                if( !( isNaN(equi_value.value) ) ){
                    triangleResult.innerHTML=`<b>Area: ${aT(equi_value.value, equi_H(equi_value.value))} ${triangleMeasure.value}² <br> Perimeter: ${equi_P(equi_value.value)} ${triangleMeasure.value}</b><br>`
                }
            }
        }
        
        else if(triangle_type_value === 'acu'){
            triangle_type_input.innerHTML=
            `
                <p>Type the side length: </p>
                <input type="number" id="equi_value">
            `
            const equi_value = document.getElementById('equi_value');
            calTriangle.onclick=()=>{
                if( !( isNaN(equi_value.value) ) ){
                    triangleResult.innerHTML=`<b>Area: ${aT(equi_value.value, equi_H(equi_value.value))} ${triangleMeasure.value}² <br> Perimeter: ${equi_P(equi_value.value)} ${triangleMeasure.value}</b><br>`
                }
            }
        }
        
        else if(triangle_type_value === 'obtu'){
            triangle_type_input.innerHTML=
            `
                <p>Type the side length: </p>
                <input type="number" id="equi_value">
            `
            const equi_value = document.getElementById('equi_value');
            calTriangle.onclick=()=>{
                if( !( isNaN(equi_value.value) ) ){
                    triangleResult.innerHTML=`<b>Area: ${aT(equi_value.value, equi_H(equi_value.value))} ${triangleMeasure.value}² <br> Perimeter: ${equi_P(equi_value.value)} ${triangleMeasure.value}</b><br>`
                }
            }
        }
    }

    const pT = (side1, side2, base) => side1 + side2 + base;
    const aT = (base, height) => (base * height) / 2; 

    const equi_P = side => side*3; 
    const equi_H = side => Math.sqrt(side**2-(side/2)**2);

    const iso_P = (side1, side2) => (side1*2) + side2;
    const iso_H = (side1, side2) =>  Math.sqrt( side1**2 - (side2/2)**2);

    const esca_H = (side1, side2, base) => {
        const S = (side1 + side2 + base) / 2;
        const H = 2/base * Math.sqrt(S*(S-side1)(S-side2)(S-base));
        console.log(H);
        return H;
    }
})