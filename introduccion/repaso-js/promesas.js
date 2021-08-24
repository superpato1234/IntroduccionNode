const empleados = [
    {
        id:1,
        nombre:'Pablo',

    },
    {
        id:2,
        nombre:'Naye',
        
    },
    {
        id:3,
        nombre:'Ana',
        
    },
];

const salarios= [
    {
        id:1,
        salario: 20000,
    },
    {
        id:2,
        salario:15000,
    },
];

const getEmpleado = (id) => {

    return new Promise ((resolve,reject)=>{

        const empleado = empleados.find( e => e.id === id )

        empleado
            ? resolve(empleado.nombre) 
            : reject(`No se encontro el usuario ${id}`)
    });
}

const getSalario = (id) => {
    return new Promise((resolve,reject)=>{
        const salario = salarios.find( e => e.id === id );
        salario
            ? resolve(salario.salario)
            : reject(`El salario del empleado con id ${id} no existe`);
    })
}
/* getSalario(1)
    .then(console.log)
    .catch(console.log)
getEmpleado(1)
    .then(console.log)
    .catch(console.log) */

/* const id=4;
getEmpleado(id)
    .then(empleado=>{
        getSalario(id)
            .then((salario)=>{
                console.log(empleado,salario)
            })
            .catch(console.log)
    })
    .catch(console.log) */
let nombre;
const id=4;
getEmpleado(id)
    .then( empleado => {
        nombre=empleado;
        return getSalario(id)
    })
    .then( salario => {
        console.log(`el empleado ${nombre} tiene un salrio de ${salario}`)
    })
    .catch(console.log)

