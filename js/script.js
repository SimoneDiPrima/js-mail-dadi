/*
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo.
 ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
 */

//  1-creare un array con il nome delle mail autorizzate e inserirlo in una variabile array
// 2-chiedo una mail all utente(forse meglio come input che come prompt);
// 3-verifico se l email è autorizzata o no e quindi se fa parte della lista delle mail autorizzate o no

const Autorizzate = [`simone.diprimagenova@virgilio.it`,`mario.diprimagenova@virgilio.it`,
        `paolo.diprimagenova@virgilio.it`,`pietro.diprimagenova@virgilio.it`,`mauro.diprimagenova@virgilio.it`];

   const emailUtente= prompt(`scrivi l email d accesso`) ;
   
        for(let i=0 ; i < Autorizzate.length ; i++){
            if (emailUtente == Autorizzate[i]){
                console.log(`bienvenidos`);
              }
            else{
                console.log('scappa!');
            }
           
        }
      