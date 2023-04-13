document.getElementById("Km").addEventListener("input",function(e){

    const kilometers = e.target.value;
    document.getElementById("Miles").innerHTML= ( kilometers/1.609);
    document.getElementById("Yards").innerHTML= ( kilometers*1093.61);
    document.getElementById("Inches").innerHTML= ( kilometers*39370.1);

});