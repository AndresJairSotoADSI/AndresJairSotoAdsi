/*----------------Ejercicio 1------------------------------------------*/

let respuesta1=document.getElementById("respuesta1");
function limpiar1(){
    document.getElementById("form1").reset();
}
function sumando(){
    let num1=parseFloat(document.getElementById("n1").value);
    let num2=parseFloat(document.getElementById("n2").value);
    
    let res_suma=num1+num2;
    respuesta1.innerHTML=`La suma es ${res_suma}`;
    form.reset();

}
function restando(){
    let num1=parseFloat(document.getElementById("n1").value);
    let num2=parseFloat(document.getElementById("n2").value);
    let rep_resta=num1-num2;
    respuesta1.innerHTML=`La resta es ${rep_resta}`;
}
function multiplicando(){
    let num1=parseFloat(document.getElementById("n1").value);
    let num2=parseFloat(document.getElementById("n2").value);
    let rep_multi=num1*num2;
    respuesta1.innerHTML=`El resultado es ${rep_multi}`;
}
function dividiendo(){
    let num1=parseFloat(document.getElementById("n1").value);
    let num2=parseFloat(document.getElementById("n2").value);
    let res_divi=num1/num2;
    respuesta1.innerHTML=`El resultado es ${res_divi}`;
}

/*----------------Ejercicio 2------------------------------------------*/
let respuesta2=document.getElementById("res2");
function limpiar2(){
    document.getElementById("form2").reset();
}
function calcular2(){
    let num=parseFloat(document.getElementById("lado1").value);
    let numo=parseFloat(document.getElementById("lado2").value);
    let respu2=num*numo;
    respuesta2.innerHTML=`El area del rectangulo es: ${respu2}`;

}
/*----------------Ejercicio 3------------------------------------------*/
let respuesta3=document.getElementById("res3");
function limpiar3(){
    document.getElementById("form3").reset();
}
function calcular3(){
    let num1=parseFloat(document.getElementById("Num1").value);
    let num2=parseFloat(document.getElementById("Num2").value);
    let num3=parseFloat(document.getElementById("Num3").value);
    let num4=parseFloat(document.getElementById("Num4").value);
    let sumar=num1+num2+num3+num4;
    let respu3=sumar/4;
    respuesta3.innerHTML=`La suma es: ${sumar}     La media es: ${respu3}`;

}
/*----------------   Ejercicio 4 ------------------------------------------*/
let respuesta4=document.getElementById("res4");
function limpiar4(){
    document.getElementById("form4").reset();
}
function calcular4(){
    let num1=parseFloat(document.getElementById("base").value);
    let num2=parseFloat(document.getElementById("altura").value);
    let respu4=(num1*num2)/2;
    respuesta4.innerHTML=`El area del triangulo es: ${respu4}`;

}
/*----------------Ejercicio 5------------------------------------------*/
let respuesta5=document.getElementById("res5");
function limpiar5(){
    document.getElementById("form5").reset();
}
function calcular5(){
    let pi=3.14;
    let radio1=parseFloat(document.getElementById("radio").value);
    let loncircun=2*pi*radio1;
    let areacircun=pi*radio1**2;
    respuesta5.innerHTML=`Longitud circunferencia :${loncircun} <br> Area circunferencia :${areacircun}`;

}
/*----------------Ejercicio 6------------------------------------------*/
let respuesta6=document.getElementById("res6");
function limpiar6(){
    document.getElementById("form6").reset();
}
function calcular6(){
    let kilo=parseFloat(document.getElementById("km").value);
    let minuto=parseFloat(document.getElementById("minutos").value);
    let conkm=(kilo*1000);
    let conminu=(minuto*60);
    let velocidad=conkm/conminu;
    conversion.innerHTML=`Km a Metros=${conkm} <br> Minutos a Segundos=${conminu}`;
    respuesta6.innerHTML=`La velocidad del auto es: ${Number((velocidad).toFixed(2))} m/s`;

}

/*----------------Ejercicio 7------------------------------------------*/
let respuesta7=document.getElementById("res7");
function limpiar7(){
    document.getElementById("form7").reset();
}
function calcular7(){
    let pi=3.14;
    let radio=parseFloat(document.getElementById("Radio").value);
    let volumen=4/3*pi*radio**3;
    respuesta7.innerHTML=`El volumen de la esfera es: ${volumen}`;
}
/*----------------Ejercicio 8------------------------------------------*/
let respuesta8=document.getElementById("res8");
function limpiar8(){
    document.getElementById("form8").reset();
}
function calcular8(){
    let vala=parseFloat(document.getElementById("vala").value);
    let valb=parseFloat(document.getElementById("valb").value);
    let valc=parseFloat(document.getElementById("valc").value);
    let respu8=(vala+7*valc)/(valb+2-vala)+2*valb;
    respuesta8.innerHTML=`El resultado es: ${respu8}`;

}
/*----------------Ejercicio 9------------------------------------------*/
let respuesta9=document.getElementById("res9");
function limpiar9(){
    document.getElementById("form9").reset();
}
function calcular9(){
    let pi=3.14
    let radio=parseFloat(document.getElementById("rd").value);
    let altura=parseFloat(document.getElementById("altu").value);
    let area=(2*(pi*radio**2))+((2*pi*radio))*altura;
    let volumen=(pi*radio**2)*altura;
    respuesta9.innerHTML=`El area del cilindro es:${area} <br> El volumen del cilindro es ${volumen}`;
   
}
/*----------------Ejercicio 10------------------------------------------*/
let respuesta10=document.getElementById("res10");
function limpiar10(){
    document.getElementById("form10").reset();
}
function calcular10(){
    let vala=parseFloat(document.getElementById("val_a").value);
    let valb=parseFloat(document.getElementById("val_b").value);
    let valc=parseFloat(document.getElementById("val_c").value);
    let x=23;
    formula=vala*x**2+valb*x+valc;
    respuesta10.innerHTML=`La raiz de la ecuacion es:" ${Math.sqrt(formula)}`;
    
}
/*----------------Ejercicio 11------------------------------------------*/
let respuesta11=document.getElementById("res11");
function limpiar11(){
    document.getElementById("form11").reset();
}
function calcular11(){
    pi=3.13;
    let altura=parseFloat(document.getElementById("alto").value);
    let anchura=parseFloat(document.getElementById("ancho").value);
    let largura=parseFloat(document.getElementById("largo").value);
    let volumen=(4/3)*pi*altura*anchura*largura;
    respuesta11.innerHTML=`El volumen de la elisoide es: ${volumen}`;
    
}
/*----------------Ejercicio 12------------------------------------------*/
let respuesta12=document.getElementById("res12");
function limpiar12(){
    document.getElementById("form12").reset();
}
function calcular12(){
    let iva=0.20;
    let canidad=parseFloat(document.getElementById("canti").value);
    let valor_m=parseFloat(document.getElementById("valor_m").value);
    let minutos=canidad*valor_m;
    let subtotal=minutos*iva;
    let total=minutos+subtotal;
    respuesta12.innerHTML=`El total a pagar con iva es: ${Number((total).toFixed(2))}`;
}
/*----------------Ejercicio 13------------------------------------------*/
let respuesta13=document.getElementById("res13");
function limpiar13(){
    document.getElementById("form13").reset();
}
function calcular13(){
    let kilo=parseFloat(document.getElementById("km1").value);
    let minuto=parseFloat(document.getElementById("minutos1").value);
    let conkm=(kilo*1000);
    let conminu=(minuto*60);
    let velocidad=conkm/conminu;
    conversion1.innerHTML=`Km a Metros=${conkm} <br> Minutos a Segundos=${conminu} `;
    respuesta13.innerHTML=`La velocidad del auto es: ${Number((velocidad).toFixed(2))} m/s`;
}
/*----------------Ejercicio 14------------------------------------------*/
let respuesta14=document.getElementById("res14");
function limpiar14(){
    document.getElementById("form14").reset();
}
function calcular14(){
    let descuen=0.10;
    let valor=parseFloat(document.getElementById("Valor_m").value);
    let canti=parseFloat(document.getElementById("Can_m").value);
    let preciototal=valor*canti;
    let descu=preciototal*descuen;
    let preciofinal=preciototal-descu;
    descuento.innerHTML=`precio total=${preciototal} <br>menos  El descuento=${descu} `;
    respuesta14.innerHTML=`Precio final a pagar es: ${Number((preciofinal).toFixed(2))}`;
}
/*----------------Ejercicio 15------------------------------------------*/
let respuesta15=document.getElementById("res15");
function limpiar15(){
    document.getElementById("form15").reset();
}
function calcular15(){
    let gradoscenti=parseFloat(document.getElementById("grados").value);
    let gradosfaren=(gradoscenti*9/5)+25;
    grados.innerHTML=`Centigrados`;
    respuesta15.innerHTML=`Los grados farenheint son: ${Number((gradosfaren).toFixed(1))}`;
}
/*----------------Ejercicio 16------------------------------------------*/
let respuesta16=document.getElementById("res16");
function limpiar16(){
    document.getElementById("form16").reset();
}
function calcular16(){
    let porcen1=0.55;
    let porcen2=0.30;
    let porcen3=0.15;
    let no1=parseFloat(document.getElementById("nota1").value);
    let no2=parseFloat(document.getElementById("nota2").value);
    let no3=parseFloat(document.getElementById("nota3").value);
    let examfinal=parseFloat(document.getElementById("examenfin").value);
    let trabajofin=parseFloat(document.getElementById("trabajofin").value);
    let promedionotas=((no1+no2+no3)/3)* porcen1;
    let proexamenfinal=examfinal*porcen2;
    let protrabajofinal=trabajofin*porcen3;
    let notafinal=promedionotas+proexamenfinal+protrabajofinal;
    respuesta16.innerHTML=`La nota final es: ${Number((notafinal).toFixed(1))}`;
}
/*----------------Ejercicio 17------------------------------------------*/
/*----------------Ejercicio 18------------------------------------------*/
/*----------------Ejercicio 19------------------------------------------*/
/*----------------Ejercicio 20------------------------------------------*/