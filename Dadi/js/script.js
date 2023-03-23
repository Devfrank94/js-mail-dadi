//1. Genero un numero a caso con Math.random che va da 1 a 6 per utente
//2. Genero un numero a caso con Math.random che va da 1 a 6 per pc
//3. Creo una condizione che verifichi nel caso in cui i valori siano < > rispetto al loro avversario per decretare un vincitore  e nel caso in cui i numeri generati siano uguali decretare un pareggio.

let btnLaunch = document.querySelector('button');

btnLaunch.addEventListener('click', function(){

let userDice = Math.floor((Math.random() * 6) + 1);
console.log(userDice);
let scoreUser = document.getElementById('userdice');
scoreUser.innerHTML = 'Il punteggio del giocatore è ' + userDice;


let pcDice = Math.floor((Math.random() * 6) + 1);
console.log(pcDice);
let scorePc = document.getElementById('pcdice');
scorePc.innerHTML = 'Il punteggio del pc è ' + pcDice;


  let message= document.getElementById('output');
    
  if(userDice > pcDice){
  message.innerHTML='Il giocatore vince con un punteggio di ' + userDice;

} else if(userDice < pcDice) {
  message.innerHTML='Il pc vince con un punteggio di ' + pcDice;

} else {
  message.innerHTML='Il gioco si ripete, punteggio pari';
}

});
