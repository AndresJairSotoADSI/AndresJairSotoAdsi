let cantidadepersonas=Number(prompt("ingresar la cantidad de personas:"));
let cont=1;
while (cont<=cantidadepersonas){
    let nombre=String(prompt("escriba el nombre:"));
    let apellido=String(prompt("escriba el apellido:"));
    let edad=Number(prompt("numero de edad:"));
    let notapro=Number(prompt("ingresar le nota promedio:"));
    let datospersonales=("nombre"+nombre+"apellido"+apellido+"edad"+edad+"notanotapro"+notapro);
    alert("los datos por personas son:"+datospersonales);
    cont+=1;
}
alert("Fin del proceso");  





