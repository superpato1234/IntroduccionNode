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
    {
        id:3,
        salario:30000,
    }
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
    
    const salarioo = salarios.find(e => e.id === id)?.salario;

    if(salario){
        callback(null,salario);
    }
    else{
        callback (`El salario del usuario con id ${id} no existe`);
    }
}
getSalario(11,(err,salario)=>{
    if(err){
        console.error("El salario no existe")
        console.log(err);
    }
    else{
        console.log(salario)
    }
});


getEmpleado(1,(err,empleado) => {
    if(err){
        console.error("Error!")
        return console.log(err);
    }
    console.log(empleado.nombre)
})