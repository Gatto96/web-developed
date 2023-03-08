alert("Welcome to BMI Caculator, please introduce your weight and height: ")
var weight= prompt("introduce your Weight: (kg)");
var height= prompt("introduce your Height: (m)");


function bmiCalculator(weight,height){
  
	var bmi = weight/(height*height);
  	//return bmi;
if (bmi < 18.5 ) {
    alert("Your result is " + Math.floor(bmi) + ", you are underheight.")    
}
if (bmi >= 18.5 && bmi<= 24.9) {
     alert("Your result is " + Math.floor(bmi) + ", you are Normal BMI.")
}
if (bmi >= 25 && bmi <= 29.9) {
     alert ("Your result is " + Math.floor(bmi) + ", you are OverHeight.")
} 
if (bmi>=30 && bmi <=34.9) {
    alert("Your result is " + Math.floor(bmi) + ", you are Obese.")   
}
if (bmi > 35){
     alert("Your result is " + Math.floor(bmi) + ", you are Extremely obese.")
}
}

	
bmiCalculator(weight,height);
