const raper={
    nombre: "Tino el pinguino",
    disco: "de vuelta al lodo",
    activo: false,
    getNombre: ()=>{
        return nombre
    },
}

/* 
const nombre = raper.nombre
const disco = raper.disco
const activo = raper.activo
 */

const {nombre, disco: cd, activo}=raper;


console.log(nombre,cd,activo)