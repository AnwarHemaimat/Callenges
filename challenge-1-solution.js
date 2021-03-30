'use strict'
const square= (Element) => Element ** 2;
const a= [1,2,3,4,5];
const a2=a.map(square);

function myFunction() {
    document.getElementById('demo').innerHTML='The numbers are: 1 ,2 ,3 ,4 ,5'+'<br>'+
     'The square of numbere are: '+a2;
}
