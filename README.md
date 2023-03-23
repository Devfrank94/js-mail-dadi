# JS Mail Dadi

**Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

**Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?

## Passaggi Controllo Mail

1. Genero array con all'interno delle mail fittizie
2. Attraverso il prompt chiedo all'untente di inserire una mail
3. Creo un ciclo for che verichi se la mail inserita è strettamente uguale all'elemento interno all'array.
4. Stampo il messaggio in pagina.

## Passaggi Gioco Dadi

1. Genero un numero a caso con Math.random che va da 1 a 6 per utente
2. Genero un numero a caso con Math.random che va da 1 a 6 per pc
3. Creo una condizione che verifichi nel caso in cui i valori siano < > rispetto al loro avversario per decretare un vincitore  e nel caso in cui i numeri generati siano uguali decretare un pareggio.