/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// String || Number || Boolean || Undefined || Null

/* SCRIVI QUI LA TUA RISPOSTA */

/*
La String è un tipo di dato non numerico. ESEMPIO: var nome = "Gianluca"; (questa è una stringa)

Il number è un tipo di dato che come indica il nome stesso è numerico. ESEMPIO: var a = 10; (questa è un dato di tipo number)

il Boolean è un tipo di dato che può rappresentare due valori (Vero o Falso)

il Undefined è un tipo di dato non definito

il Null è un tipo di dato nullo
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var name = "Gianluca";
let name3 = "Gianluca";
console.log(name);
console.log(name3);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var a = 12;
var b = 20;
var somma = a + b;
console.log(somma);


let c = 12;
let d = 20;
let somma2 = c + d;
console.log(somma2);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA*/
/*name = "Quaranta";
const cognome = "Quaranta";
cognome = "Rossi";

console.log(name);
console.log(cognome);

//VA IN ERRORE

*/
 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var z = 4;
var sottrazione = x - z;
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";
let test = name1 === name2;
console.log(test)
