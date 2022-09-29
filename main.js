let con=1
let cref=Number(prompt("Digite los creditos de la materia de fundamentos:"));
let creb=Number(prompt("Digite los creditos de la materia bd:"));
let cree=Number(prompt("Digite los creditos de la materia de etica:"));
let can=Number(prompt("Digite la cantidad de estudiantes:"));

while (con<=can){
    let calf=Number(prompt("Digite la calificacion de la materia de funadamentos:"));
    let calb=Number(prompt("Digite la calificacion de la materia de bd:"));
    let cale=Number(prompt("Digite la calificacion de la materia de etica"));
    
    let mat1=calf*cref;
    let mat2=calb*creb;
    let mat3=cale*cree;
    /*suma de creditos lo siguiente*/
    let cre=cref+creb+cree;
    
    /*#sumamos todas las materias divido en el total de sus creditos*/
    let pon=(mat1+mat2+mat3)/cre;
    alert("su promedio ponderado es de:"+pon);
    con+=1 
}
  
  
  /* Datos de salida*/
 





