let tdt=Number(prompt('ingrese los vendedores contratados '));
let sbt=Number(prompt('ingrese el sueldo vase del trabajador '));
let cont=1;

while(cont<=tdt){
    let venta1=Number(prompt('digite la primera venta: '));
    let venta2=Number(prompt('digite la segunda venta: '));
    let venta3=Number(prompt('digite la tercera venta: '));
    let comi=(venta1 + venta2 + venta3)*0.10;
    let sult=comi+sbt;
    alert('las comiciones del trabajador por las tres ventas es '+comi),
    alert('el sueldo total del trabajador por semana es '+sult);
    cont+=1;
}
alert("Fin del proceso");  





