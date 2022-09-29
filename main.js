let suma=0;
let cant_alum=2;
let cant_nota=5;
let cont_alum=1;
let cont_nota=1;
let cant_nivel=0;
let promedio;
let notas;
while (cont_alum<=cant_alum){
    while(cont_nota<=cant_nota){
        
        notas=Float(prompt('digite las notas:'))
        suma=suma+notas;
        cont_nota+=1;
        cont_alum+=1;
    promedio=suma/cant_nota;
    alert(promedio);
    if (promedio<3.0){
        cant_nivel+=1;
        alert("Su nivel es"+cant_nivel);
    }
     
    }
}
alert("Fin del proceso");  





