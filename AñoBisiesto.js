var year= prompt("Introduce a Year: ");

    var resto4= (year%4)
         
    var resto100= (year%100);
        
    var resto400= (year%400);

if (resto4=== 0 || resto100===0 && resto400===0) {
    alert("It's Leap Year!")
    
} else {
    alert("It's no a Leap Year!")
    
}

