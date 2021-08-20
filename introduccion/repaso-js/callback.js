const imprimir = (name) => {
    console.log("Hola a todos soy "+name);
}

const callback= (nombre,funcion)=>{
    funcion(nombre);
}

callback("Pablo", imprimir)

/* 
setInterval(() => {
    callback("J. Cole", imprimir)
}, 500);
 */


const temporizador = (limit) => {
    for(let x=0; x<limit;x++){
        setTimeout(()=>{
            console.log("Paso un segundo");
        },1000)
    }
    console.log("Termino")
}

temporizador(5)