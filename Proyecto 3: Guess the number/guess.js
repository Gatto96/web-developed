

const guess = Math.floor(Math.random()*10+1);
console.log(guess);

//btn_pedirCarta.addEventListener('click',function()

const number_guess=()=>{


    const number=document.getElementById('number').value;
    console.log(number);

    if(guess==number){

        alert('Congratulation, you guess the number! '+guess);

    }else if(guess<number){
        alert('this number is higher, try again!')
    }else if(guess>number){
        alert('This number is lower, try again!')
    }
    
    else{
        alert("That is not a number, try again.");
    }

};


const btn_number= document.querySelector('#btn_guess');
btn_number.addEventListener('click',function(){

    nu_guess=number_guess();

});
