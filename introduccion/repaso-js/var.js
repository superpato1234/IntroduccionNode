/* var se unsa de manera global */
/* let tiene un scope */
/* const no se le puede adiganr un valor mas de una vez */
/* const no tiene un scope global */

var nombre = "Aleman"
const raper ="Drake"

if (true){
    var nombre = "Gera " 
    const raper = "kendrick"
    console.log(raper)
}


console.log(raper)
console.log(nombre)