
/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa 
in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

// 1-una variabile per il giocatore e una variabile per il computer;
/*2-crearle con il let almeno poi ci metto la funzione Math.random(ricordarsi che voglio i valori da 1 a 6);
-3 stabilisci il vincitore in base a chi fa il punteggio piu alto e stampa a console the winner!*/
 //o mettere la funzione math random dentro a dado e i due giocatori come costanti singole?

 let humanPlayer = Math.round(Math.random()*5 + 1);
 let cpuPlayer = Math.round(Math.random()*5 + 1);
 console.log(humanPlayer);
 console.log(cpuPlayer);


if(humanPlayer > cpuPlayer){
    console.log(`eh ci devi ancora arrivare all uomo macchina!!`);
}
else if(humanPlayer === cpuPlayer){
    console.log(`incredibile pareggio!!`)
}
else{
    console.log(`terminator è vicino!!`);
}