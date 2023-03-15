const listaNumber =[

]
for (let i = 0; i < 10; i++) {
    let createNumber = Number(prompt('scegli un numero che non sia Fabio '))
    if(createNumber % 2 == 0){
        listaNumber.push (createNumber)
    }
}
console.log(listaNumber);