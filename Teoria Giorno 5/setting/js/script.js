// Stampa il contenuto delle parentesi tonde nella console degli strumenti per sviluppatori
console.log("Sono nel file esterno");

var v;         // Dichirarazione di un a variabile
v = 'valore'; // Inizializzazione di una variabile
var q = 'valore'; //Dichiarazione e Inizializzazione di una variabile

var g;
var g = 'abc';

// Tipologie di variabili Number | String | Boolean | Null | Undefined
var num1 = 25;                      //Number
var num2 = 15.5;                    //Number
var str1 = "Questa è la somma: ";   //String
var str2 = 'Questo è u\'n "testo"'; //String
var bol1 = true;                    // Boolean
var bol2 = false;                   // Boolean
var emp1 = null;                    // Null
var emp2 = undefined;               // Undefined

var somma = num1 + num2;
var printSomma = str1 + somma;
console.log(printSomma);
console.log(str1 + (num1 + num2));



var test = "Test!";
{
    test = "Nuovo Test!!!!";
    console.log(test);
}


console.log(test);