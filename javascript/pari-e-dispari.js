//2.Pari e Dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//scelta tra pari o dispari
  //prompt

const userChoice = prompt('Scegli \'pari o dispari\'').toLowerCase();//string --- 'pari' ||'dispari'
console.log(userChoice);

  //validazione pari o dispari
  if(userChoice  !== 'pari' && userChoice !== 'dispari'){
    alert('la scelta effettuata non è consentita. \n Ricaricare la pagina e scegliere tra \"pari\" o \"dispari\"');
    location.reload(); 
    
  }
  //scelta numero da parte dell'utente da 1 a 5
  //prompt
const nUser = Math.round(prompt('inserisci un numero da 1 a 5'));//number

console.log(`il numero che hai scelto è: ${nUser}`)

  //condizione- SE numero maggiore di 5 O minore di 1
  if (nUser < 1 || nUser > 5){
    //-alert e ricarica pagina
    alert('Il numero inserito non è corretto, ricaricare la pagina per ricominciare');
    location.reload();
  }
  
//generare numero random da 1 a 5 per il computer (funzione)
function randomIntBetween(min, max) {
  //math.random e math.floor per la generazione di un numero da 1 a 5
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nCpu = randomIntBetween(1, 5);
console.log(`numero CPU: ${nCpu}`);
  
//funzione verifica numero pari o dispari
//funzione con calcolo numero % 2 => resto === 0
//stabilire se la somma dei due numeri sia pari o dispari
function isEven(num){
  let even = num % 2; // 0 - 1

  // console.log(even)

  if(even === 0){
    return true
  } else {
    return false
  }
}

let sum = nCpu + nUser; // somma numeri
let sumOddOrEven = isEven(sum); //booleano per confronto con input utente
console.log(`la somma dei due numeri è ${sum}`);

//SE l'utente ha scelto peri o dispari e la somma e' uguale alla scelta dell'utente
  if(userChoice === 'pari' && sumOddOrEven === true){
    console.log('hai vinto');
  } else if (userChoice === 'dispari' && sumOddOrEven === false){
    console.log('hai vinto');
  } else {
    console.log('hai perso');
  }
  //-l'utente vince
    //altrimenti perde
      
