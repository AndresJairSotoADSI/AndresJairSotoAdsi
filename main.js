
let numerogalli=Number(prompt("INGRESE LA  CANTIDAD DE GALLINAS: "));
let cont=1;

while (cont<=numerogalli){
    let pg=Number(prompt("INGRESE EL PESO DE LA GALLINA(KG): "));
    let ag=Number(prompt("INGRESE LA ALTURA DE LA GALLINA(CM): "));
    let numerohp=Number(prompt("INGRESE LOS HUEVOS PUESTOS POR LA GALLINA: "));
    let calidad=(pg*ag)/numerohp;
    alert("CALIDAD DEL HUEVO DE 1 GALLINA: "+calidad)
    let precio=calidad*1000;
    alert("PRECIO DE KILO DE HUEVO: "+precio);
    cont+=1;
    
}
  alert("Fin del proceso") 




