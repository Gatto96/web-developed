document.getElementById("inputKg").addEventListener("input",function(e){

    let kg= e.target.value;
    document.getElementById("pounds").innerHTML= kg * 2.2046;
    document.getElementById("ounces").innerHTML= kg * 35.274;
    document.getElementById("grams").innerHTML = kg * 1000; 





});