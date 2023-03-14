/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* L’utente inserisce due numeri in successione, */
const numberone = Number(prompt ('inserisci un numero'))
console.log(numberone)
const numbertwo = Number(prompt ('inserisci un numero'))
console.log(numbertwo)
if(numberone > numbertwo){
    console.log('il primo numero è il maggiore');
}else if(numberone == numbertwo){
    console.log('i due numero sono uguali')
}
else{
    console.log('il secondo numero è maggiore');
}