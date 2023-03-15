/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */
 //lista invitati alle festa
 const invitati = [
    'pippo',
    'pluto',
    'paperino',
    'Fabio Pacifici'
 ]
 const nomeUtente = prompt('qual è il tuo nome?') 
 let permesso = false
 //ciclo for
/*  for (let i = 0; i < invitati.length; i++) {
     const nomeInvitato = invitati[i];
     if(nomeInvitato == nomeUtente){
         permesso = true
     }
    }
*/
    //ciclo while
    let i = 0
    while(i<invitati.length){
        const nomeInvitato = invitati[i];
        if(nomeInvitato == nomeUtente){
            permesso = true
        }
        i++
    }
    if(permesso == true){
        console.log('Puoi entrare')
    }else{
        console.log('non puoi passare')
    } 