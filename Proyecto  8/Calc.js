
//Evento del boton "Result"

const btn_result = document.getElementById('btn');
btn_result.addEventListener('click', function(){

    

    //Funcion para calcular el promedio.
    function result(){

        //Mostrar el resultado de las calificaciones.
        const grade= document.querySelector('#result');

        //Guardar valores en las variables.
        let Maths= document.getElementById('Maths').value;
        console.log(Maths);

        let Phisics= document.getElementById('Phisics').value;
        console.log(Phisics);

        let Chemistry= document.getElementById('Chemistry').value;
        console.log(Chemistry);

        let English= document.getElementById('English').value;
        console.log(English);

        let Computer= document.getElementById('Computer').value;
        console.log(Computer);

        const total= parseFloat(Maths) + parseFloat(Phisics) + parseFloat(Chemistry) + parseFloat(English) + parseFloat(Computer);
        const average= (total/ 5);
        console.log(average);
        console.log(total);



        //Diferentes promedios
        if(average >= 93){
            grade.innerHTML=('Your Grade is A+, Congratulations. ')
        }
        else if(average<=92 && average>=90){
            grade.innerHTML=('Your Grade is A, Congratulations')
        }
        else if (average<=89 && average>=87){
            grade.innerHTML=('Your Grade is B+, You can get better')
        }
        else if (average<=86 && average>=83){
            grade.innerHTML=('Your Grade is B, You can get better')
        }
        else if (average<=82 && average>=80){
            grade.innerHTML=('Your Grade is B-, You can get better')
        }
        else if (average<=79 && average>=77){
            grade.innerHTML=('Your Grade is C+, You need to improve.')
        }
        else if (average<=76 && average>=73){
            grade.innerHTML=('Your Grade is C, You need to improve.')
        }
        else if (average<=72 && average>=70){
            grade.innerHTML=('Your Grade is C-, You need to improve.')
        }
        else if (average<=69 && average>=67){
            grade.innerHTML=('Your Grade is D+, You are pass.')
        }
        else if (average<=66 && average>=63){
            grade.innerHTML=('Your Grade is D, You are pass.')
        }
        else if (average<=62 && average>=60){
            grade.innerHTML=('Your Grade is D-, You are pass.')
        }
        else if (average<59){
            grade.innerHTML=('Your Grade is F, You are fail.')
        }
        

    
    }

    result();


})







