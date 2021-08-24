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

const getEmpleado = (id,callback) => {

    const empleado = empleados.find( e => e.id === id )

    if(empleado){
        callback(null,empleado);
    }
    else{
        callback(`empleado con ${id} no existe`)
    }
    
}

const getSalario= (id,callback) => {
    
    const salario = salarios.find(e => e.id === id);
    if(salario){
        callback(null,salario.salario);
    }
    else{
        callback (`El salario del usuario con id ${id} no existe`);
    }
}

const id = 3

getEmpleado(id,(err,empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(id,(err,salario)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`el usurario ${empleado.nombre} tiene un salario de ${salario}`)
        }
    });
})

