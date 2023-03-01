let age= prompt(
    "Introduce your age: "
);


if (Number(age)==age){
    let old= 18-age;
    if(age >= 18){
        alert("You are " + age + ", You old enough to get your Driver License");
    }
    else (alert("In " + old + " more years can get your driver's license"));
}
else ( alert ( "Please type yor age with numbers!"))    
alert("Refresh to check if you can get your Driver's license");
