document.addEventListener('DOMContentLoaded',()=>{
    const arrow = document.getElementById('arrow');
    const geometryFigures = document.getElementById('geometry_figures');
    const discount = document.getElementById('discount');
    const stats = document.getElementById('stats');

    const scrollUp = () =>{
        const currentScroll= document.documentElement.scrollTop || document.body.scrollTop;
        if( currentScroll > 0 ){
            // window.requestAnimationFrame(scrollUp);
            window.scrollTo( 0, 100 );
        }
    }
    arrow.addEventListener('click', scrollUp);
    
    window.onscroll=()=>{
        const currentScroll= document.documentElement.scrollTop || document.body.scrollTop;
        if( currentScroll > 900 ){
            arrow.style.transform= 'scale(1)'
        }else if( currentScroll<900 ){
            arrow.style.transform= 'scale(0)'
        }
    }

    geometryFigures.onclick=()=>{
        window.scrollTo( 0,1110 );
    }
    discount.onclick=()=>{
        window.scrollTo( 0,2000 );
    }
    stats.onclick=()=>{
        window.scrollTo( 0,2600 );
    }
})