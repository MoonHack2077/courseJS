document.addEventListener('DOMContentLoaded',()=>{
    const arrow = document.getElementById('arrow');
    const geometryFigures = document.getElementById('geometry_figures');
    const discount = document.getElementById('discount');
    const stats = document.getElementById('stats');

    const scrollUp = () =>{
        const currentScroll= document.documentElement.scrollTop || document.body.scrollTop;
        if( currentScroll > 0 ){
            // window.requestAnimationFrame(scrollUp);
            window.scrollTo( 0, 0 );
        }
    }
    arrow.addEventListener('click', scrollUp);
    
    window.onscroll=()=>{
        const currentScroll= document.documentElement.scrollTop || document.body.scrollTop;
        if(window.innerWidth <= 977 ){
            if( currentScroll > 900 ){
                arrow.style.transform= 'scale(1)'
            }else if( currentScroll<900 ){
                arrow.style.transform= 'scale(0)'
            }
        }else{
            if( currentScroll > 680 ){
                arrow.style.transform= 'scale(1)'
            }else if( currentScroll < 700 ){
                arrow.style.transform= 'scale(0)'
            }
        }

    }

    geometryFigures.onclick=()=>{
        if(window.innerWidth <= 977 ){
            window.scrollTo( 0,1110 );
        }else{
            window.scrollTo( 0,700 );
        }
    }
    discount.onclick=()=>{
        if(window.innerWidth <= 977 ){
            window.scrollTo( 0,2000 );
        }else{
            window.scrollTo( 0,1595 );
        }
    }
    stats.onclick=()=>{
        if(window.innerWidth <= 977 ){
            window.scrollTo( 0,2600 );
        }else{
            window.scrollTo( 0,2600 );
        }
    }
})