let deck= [];
const tipos= ['C', 'D', 'H', 'S'];
const especiales= ['A', 'J', 'Q', 'K'];
let puntosJugador=0,
    puntosComputadora=0;

//Referencias del HTML

const btn_pedirCarta       = document.querySelector('#btn_pedirCarta');
const btn_detener          = document.querySelector('#btn_detener')
const btn_NuevoJuego       =document.querySelector('#btn_NuevoJuego')
const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas') 
const puntosSmallJ         = document.querySelector('small');
const puntosCompu          = document.querySelector('#puntosCompu');


const crearDeck= () => {

    for ( let i = 2; i <= 10; i++ ) {
        for(let tipo of tipos){
            deck.push(i +tipo);
        }
    }

    for(let tipo of tipos){
        for( let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    //console.log(deck);
    deck=_.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

//Esta funcion me permite tomar una carta.
 const pedirCarta = ( ) =>{

    if( deck.length === 0){
        throw 'No hay cartas en el Deck';
    }
    
    const carta= deck.pop();

    return carta;
 }


// pedirCarta();

const valorCarta= (carta) =>{
    //let puntos=0;
    const valor= carta.substring(0, carta.length - 1);
   return (isNaN(valor))?
            (valor==='A')?11:10
            :valor*1;

} 

//Turno de la computadora

const turnoComputadora=(puntosMinimos)=>{
   do{
        const carta= pedirCarta();

    puntosComputadora=puntosComputadora+ valorCarta(carta);
    puntosCompu.innerText=puntosComputadora;

//<img class="carta" src="cartas/2C.png" alt="">

    const imgCarta= document.createElement('img');
    imgCarta.src=`cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append( imgCarta );

    if(puntosMinimos>21){
        break;
    }


    }while( (puntosComputadora<puntosMinimos) && (puntosMinimos<=21) );

    //Programar un tiempo de espera.
    setTimeout(()=>{
        if(puntosComputadora === puntosMinimos ){
            alert("Nadie Gana");
        } else if(puntosMinimos>21){
            alert("Computadora Gana");
        } else if (puntosComputadora>21) {
            alert("Felicidades!, 21");
        } else {
            alert("Computadora gana");
        }


    },100);
    
}



const valor= valorCarta(pedirCarta());

//Eventos
btn_pedirCarta.addEventListener('click',function() {

    const carta= pedirCarta();

    puntosJugador=puntosJugador+ valorCarta(carta);
    puntosSmallJ.innerText=puntosJugador;

//<img class="carta" src="cartas/2C.png" alt="">

    const imgCarta= document.createElement('img');
    imgCarta.src=`cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if(puntosJugador>21){
        
        btn_pedirCarta.disabled=true;
        btn_detener.disabled=true;
        turnoComputadora(puntosJugador);

    } else if ( puntosJugador === 21 ){
        
        btn_pedirCarta.disabled=true;
        btn_detener.disabled=true;
        
        turnoComputadora(puntosJugador);
        


    }

});

//Boton Detener

btn_detener.addEventListener('click',function(){
    btn_pedirCarta.disabled=true;
    btn_detener.disabled=true;
    turnoComputadora(puntosJugador);
    if(puntosJugador<puntosComputadora){
        

    }
})


//Boton Nuevo Juego

btn_NuevoJuego.addEventListener('click', function(){

    console.clear();

    deck              =[];
    deck              =crearDeck();

    puntosComputadora =0;
    puntosJugador     =0;

    puntosSmallJ.innerText     =0;
    puntosCompu.innerText      =0;

    divCartasComputadora.innerHTML= '';
    divCartasJugador.innerHTML    = '';


    btn_pedirCarta.disabled = false;
    btn_detener.disabled    = false;   

})

