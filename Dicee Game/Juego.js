
const divDiceJugador1=document.querySelector('.divDiceJugador1');
const divDiceJugador2=document.querySelector('.divDiceJugador2');


const dice1=()=>{
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage= "dice"+randomNumber1+".png";

    const imgDice1=document.createElement('img');
    imgDice1.src=`images/${randomDiceImage}`;
    divDiceJugador1.append(imgDice1);

    let randomNumber2= Math.floor(Math.random()*6)+1;
    let randomDiceImage2= "dice"+randomNumber2+".png";

    const imgDice2=document.createElement('img');
    imgDice2.src=`images/${randomDiceImage2}`;
    divDiceJugador2.append(imgDice2);


    if(randomNumber1>randomNumber2){

        let pWin= document.querySelector('#winner');
        pWin.innerText=('Player 1 Wins!');

    } else if (randomNumber1<randomNumber2){
        let pWin= document.querySelector('#winner');
        pWin.innerText=('Player 2 Wins!');
    } else{
        let pWin= document.querySelector('#winner');
        pWin.innerText=('It is a Draw!');
    }


}
dice1();









