function hello() { // se asigna la función
    console.log('hello'); // se imprime el sting.
}
hello();// se llama a la función.
console.log('Dojo'); // se imprime el string. 
// Hello Dojo

//////////////////////////////////////////////////////

function hello() {// se asigna la función.
    console.log('hello');// se imprime el string.
    return 15; //devuelve el resultado y se cambia de hello a 15
}
var result = hello();// se llama a la funcion y el resultado de result es = 15
console.log('result is', result); // se imprime "result is 15" :D

////////////////////////////////////////////

function numPlus(num) {// se asigna la funcion 
    console.log('num is', num);// se imprime el string
    return num+15; // a num se le suma 15 
}
var result = numPlus(3); //el resultado de este es 18
console.log('result is', result); // se imprime el string

//////////////////////////////////////////////

var num = 15; // se asigna una variable.
console.log(num);// se imprime el num. 15
function logAndReturn(num2){ // se asigna la función
   console.log(num2); // imprime el resultado. 10 
   return num2;//  devuelve el resultado
}
var result = logAndReturn(10);// se asigna una variable y hace el llamado a la función. 
console.log(result); // se imprime la variable. 10
console.log(num);// se imprime la variable. 15

////////////////////////////////////

var num = 15; // se asigna la variable.
console.log(num); // se imprime el numero. 15
function timesTwo(num2){// se asigna la función.
   console.log(num2);   // se imprime la iteracion. 10
   return num2*2; // devuelve el resultado multiplicado x2  20
}
var result = timesTwo(10); // se asigna una nueva variable y se llama a la función.
console.log(result);// se imprime el string
console.log(num);// se imprime el string

////////////////////////////////////////

function timesTwoAgain(num) {//se asigna la funcion  
    console.log('num is', num); // se imprime el string.
    var y = num*2;// se asigna una variable.
    return y;// devuelve el resultado.
}
var result = timesTwoAgain(3) + timesTwoAgain(5);// se asigna una nueva variable, se llama la función 2 veces 
console.log('result is', result); // se imprime el resultado.
//result is 16
//////////////////////////////////////

function printSumNums(num1, num2) {// se asigna la función
    console.log(num1);   //se imprime el resultado 
    return num1+num2; // se devuelve el resultado.
 }
 console.log(printSumNums(2,3)) // se imprime el stringse llama la funcion. 5
 console.log(printSumNums(3,5))// se imprime el string y se llama a la funcion. 8
 
////////////////////////////////////////////////

function sumNums(num1, num2)  // se asigna la funcion.
    var sum = num1 + num2; // se asigna la variable.
    console.log('sum is', sum);// se imprime el string
    return sum;//devuelve el resultado
}
var result = sumNums(2,3) + sumNums(3,5); // se asigna una variable quue llama a la función 
console.log('result is', result);// imprime el string
// result is 13

/////////////////////////////

function sumNums(num1, num2) {// se asigna la funcion
    var sum = num1 + num2;// se asigna la variable con el numero colocado en la consola.
    console.log('sum is', sum);// se imprime el resultado
    return sum;// devuelve el resultado de la función llamada.
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));// se asigna la variable con el llamado a la función,(5(6 (8))= 19  
console.log('result is', result);// imprime el resutado que es 19 
