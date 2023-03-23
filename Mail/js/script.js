//1. Genero array con all'interno delle mail fittizie
//2. Attraverso il prompt chiedo all'untente di inserire una mail
//3. Creo un ciclo for che verichi se la mail inserita è strettamente uguale all'elemento interno all'array.
//4. Stampo il messaggio in pagina.

const arrayEmail = ['ciao@gmail.com',
                'frank@libero.it',
                'john@libero.it',
                'doe@gmail.com',
                'lorem@gmail.com',
                'red@libero.it',
                'green@gmail.com',];

  console.log(arrayEmail);

const userEmail = prompt('Inserisci una mail da verificare');

let verified = false;

let message;

for(let i = 0; i < arrayEmail.length; i++) {
  console.log(arrayEmail[i]);
  let verEmail = arrayEmail[i];
  if(userEmail === verEmail){
    verified = true;
  }
}

if (verified) {
  message =`
  La mail inserita: ${userEmail} è presente in elenco.
  `
} else {
  message =`
  La mail inserita: ${userEmail} non è presente in elenco.
  `
}

document.querySelector('h1').innerHTML = message;



