'use strict'
const square= (Element) => Element ** 2;
const numberArray= [1,2,3,4,5];
const numberSquare=numberArray.map(square);

function myFunction() {
    document.getElementById('demo').innerHTML='The numbers are: 1 ,2 ,3 ,4 ,5'+'<br>'+
     'The square of numbere are: '+numberSquare;
}
