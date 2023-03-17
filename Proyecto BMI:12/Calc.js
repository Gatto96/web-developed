//--------funcion Calcular con datos del usuario.---------

const btn_Calculate=document.getElementById('btn_calculate');
btn_Calculate.addEventListener('click',function(){

    function bmiCalculate(){
        //--guardar variables del usuario.--
    const weight_U = document.getElementById('kg').value;
    console.log(weight_U);
    const height_U = document.getElementById('cm').value;
    console.log(height_U);
    const result   = document.querySelector('#result');

    const bmi = (weight_U)/(height_U*height_U);
    console.log(bmi);

    
        

    if (bmi < 18.5 ) {
        result.innerHTML=("Your result is " + Math.floor(bmi) + ", you are Underheight.")    
    }
    else if (bmi >= 18.5 && bmi<= 24.9) {
        result.innerHTML=("Your result is " + Math.floor(bmi) + ", you are Normal BMI.")
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML=("Your result is " + Math.floor(bmi) + ", you are OverHeight.")
    } 
    else if (bmi>=30 && bmi <=34.9) {
        result.innerHTML=("Your result is " + Math.floor(bmi) + ", you are Obese.")   
    }
    else if (bmi > 35){
        result.innerHTML=("Your result is " + Math.floor(bmi) + ", you are Extremely obese.")
    }
}
    bmiCalculate();
});
