// 1. Palindroma
// Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//prompt richiesta parola
let word = prompt('Inserisci una parola per la validazione').toLowerCase();

function stringReverse(text){

  let newWord = ''; 

  //ciclo per separazione caratteri ed inversione ordine
  for (let i = 0; i < text.length; i++){
    //console.log(i)

    //inversione ordine ciclo con metodo 'at'
    const char = word.at(-i - 1); //string //usare il metodo 'at' perche' charAt se dati valori negativi ritorna una stringa vuota
    // console.log(i, char);
    newWord += char ; //concatenazione risultati cicli per la formazione della parola inversa
    // console.log(newWord);
  }

  return newWord
}

const reversedWord = stringReverse(word); //string // convertita anche in minuscolo per migliore validazione palindromo
// console.log(reversedWord);

//VALIDAZIONE PALINDROMO
//*A) soluzione dichiarando una variabile con valore booleano
const isPalindrome = word === reversedWord;

if (isPalindrome) {
  console.log(word);
  console.log(reversedWord, 'palindromo');
}else{
  console.log(word);
  console.log(reversedWord, 'non palindromo');
}

//*B) soluzione senza inizializzare una variabile con valore booleano
// if (word === reversedWord) {
//   console.log('palindromo')
// }else{
//   console.log('non palindromo')
// } 


//2.Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.