
function limpiar1(){

   myform1.reset();
   resultado1.innerHTML="";
}
let resultado1=document.getElementById("res1");
function calcular1(){
    let numero=parseInt(document.getElementById("num1").value);
    if(numero < 100){
        resultado1.innerHTML=`El numero es: ${numero} y es menor que 100`;
    }
    else{
        resultado1.innerHTML=`El numero es: ${numero} y es mayor que 100`;
    }
    
}
/*############################### Ejercicio 2 ############################################*/
function limpiar2(){
    myform2.reset();
    resultado2.innerHTML="";
}
let resultado2=document.getElementById("res2");
function calcular2(){
    
    let num1=parseInt(document.getElementById("Num1").value);
    let num2=parseInt(document.getElementById("Num2").value);
    let num3=parseInt(document.getElementById("Num3").value);
    if((num1>num2)||(num2<num3)) {
        resultado2.innerHTML=`El numero mayor es: ${num1}`
    }
    else{
        resultado2.innerHTML=`El numero es menor que`
    }
   
}
/*########################## Ejercicio 3 #################################################*/
function limpiar3(){
    myform3.reset();
    resultado3.innerHTML="";
}
let resultado3=document.getElementById("res3");
function calcular3(){
    
    let num1=parseInt(document.getElementById("n1").value);
    let num2=parseInt(document.getElementById("n2").value);
    let num3=parseInt(document.getElementById("n3").value);
    if(num1>num2 && num1>num3) {
        resultado3.innerHTML=`El numero mayor es: ${num1}`
    }else;
        if(num2>num1 && num2>num3) {
            resultado3.innerHTML=`El numero mayor es: ${num2}`
        }else;
            if(num3>num2 && num3>num1) {
              resultado3.innerHTML=`El numero mayor es: ${num3}`
            }
            else;
}
/*########################## Ejercicio 4 #################################################*/
function limpiartriangulo(){
    myform4.reset();
    respuestatriangulo.innerHTML="";
}
let respuestatriangulo=document.getElementById("restriangulo");
function calculotriangulo(){
    let base=parseInt(document.getElementById("base").value);
    let alt=parseInt(document.getElementById("altura").value);
    let areadetria=(base*alt)/2
    respuestatriangulo.innerHTML=`El area del triangulo es: ${areadetria}`
    
}

function limpiarcirculo(){
    myformcirculo.reset();
    respuestacirculo.innerHTML="";
}
let respuestacirculo=document.getElementById("rescirculo");
let pi=3.14;
function calculocirculo(){
    let radio1=parseInt(document.getElementById("radio").value);
    let area=pi*radio1*radio1
    respuestacirculo.innerHTML=`El area del circulo es: ${area}`
}
/*######################## Ejercicio 5 ###################################################*/
function limpiar5(){
        myform5.reset();
        resultado5.innerHTML="";
    }
let resultado5=document.getElementById("res5");
let areatriangulo;
function calcular5(){
        let lado1=parseInt(document.getElementById("lado1triangulo").value);
        let lado2=parseInt(document.getElementById("lado2triangulo").value);
        if(lado1>0 || lado2>0){
            areatriangulo=lado1*lado2;
            resultado5.innerHTML=`El area del circulo es la adecuada: ${areatriangulo}`
        }
    }
/*######################## Ejercicio 6 ###################################################*/
function limpiar6(){
    myform6.reset();
}

function calcular6(){
    let presion=parseInt(document.getElementById("inputpresion").value);
    let temperatura=parseInt(document.getElementById("inputempe").value);
    if(presion>200 || temperatura>100){
        Swal.fire({
            title: 'Peligro',
            text: "Temperatura alta o Presion alta",
            icon: 'warning',
            showConfirmButton: false,
            timer: 3500
           
          })
        }
        else{
            Swal.fire({
                icon: 'success',
                title: 'Todo esta bien',
                showConfirmButton: false,
                timer: 3500
              })
        }
    }
/*######################## Ejercicio 7 ###################################################*/
function limpiar7(){
    myform7.reset();
    resultado7.innerHTML="";
}

let resultado7=document.getElementById("res7");
function calcular7(){
    let total=0;
    let  porcentaje=0.15;
    let  descuento;
    let pagos=parseInt(document.getElementById("inputpago").value);
    if(pagos>130000){
        descuento=pagos*porcentaje;
        total=pagos-descuento;
        resultado7.innerHTML=`Por su compra recibes un 15% de descuento total a paga es:${total}`
    }
    else{
        resultado7.innerHTML=`su pago sin descuento es de ${pagos}`
    }
   
}
/*######################## Ejercicio 8 ###################################################*/
 let planta=20000;
 let adminis=10000;
function limpiartrabajador(){
    myformtrabajador.reset();
    respuestabajador.innerHTML="";
}
let respuestabajador=document.getElementById("restrabajador");
function calculotrabajador(){
    let Horas=parseInt(document.getElementById("inputabajador").value);
    let pagos=planta*Horas
    respuestabajador.innerHTML=`Las horas trabajadas son${Horas} y el pago es: ${pagos}`
    
}
function limpiargerente(){
    myformgerente.reset();
    respuestgerente.innerHTML="";
}
let respuestgerente=document.getElementById("resgerente");
function calculogerente(){
    let Horas=parseInt(document.getElementById("inputgerente").value);
    let pago=adminis*Horas
    respuestgerente.innerHTML=`Las horas trabajadas son${Horas} y el pago es: ${pago}`
}
/*######################## Ejercicio 9 ###################################################*/
function limpiar9(){
    myform9.reset();
    resultado9.innerHTML="";
}
    
let resultado9=document.getElementById("res9");
    
function calcular9(){
    let suma=0;
    let multi=0;
    let num11=parseInt(document.getElementById("numero1").value);
    let num22=parseInt(document.getElementById("numero2").value);
    let num33=parseInt(document.getElementById("numero3").value);
    let num44=parseInt(document.getElementById("numero4").value);
    let numa1=num11%2;
    let numb2=num22%2;
    let numc3=num33%2;
    let numd4=num44%2;
    console.log(num1)
    if (numa1==0||numb2==0||numc3==0||numd4==0){
        suma=num11+num22+num33+num44;
        resultado9.innerHTML=`La suma de los pares son: ${suma}`;
        console.log(suma);
    }
    else{
        multi=numa1*numb2*numc3*numd4;
        resultado9.innerHTML=`El producto de los impares es: ${multi}`;
       }
       
    }
    /*######################## Ejercicio 10 ###################################################*/
function limpiar10(){
    myform10.reset();
    resultado10.innerHTML="";
}
    
let resultado10=document.getElementById("res10");
 
function calcular10(){
    let iva=0.19;   
    let valor1=parseInt(document.getElementById("nume1").value);
    let valor2=parseInt(document.getElementById("nume2").value);
    let valor3=parseInt(document.getElementById("nume3").value);
    let valor4=parseInt(document.getElementById("nume4").value);
    let valor5=parseInt(document.getElementById("nume5").value);
    let subproducto=valor1+valor2+valor3+valor4+valor5;
    let valoriva=subproducto*iva
    let total=valoriva+subproducto;
    
    resultado10.innerHTML=`el subtotal es: ${(subproducto)} y el iva es: ${(valoriva)} el total es: ${(total)}`
    }
/*######################## Ejercicio 12 ###################################################*/
function limpiar12(){
        myform12.reset();
        resultado12.innerHTML="";
    }
let resultado12=document.getElementById("res12");
let resta=0;
function calcular12(){
        let numero1=parseInt(document.getElementById("inputnum1").value);
        let numero2=parseInt(document.getElementById("inputnum2").value);
        if(numero1>numero2){
            resta=numero1-numero2;
            resultado12.innerHTML=`el resultado de la resta es: ${resta}`;
        }
    
        else{
        resultado12.innerHTML=`Fin de la operacion`;
        }
}
/*######################## Ejercicio 13 ###################################################*/
function limpiar13(){
    myform13.reset();
    resultado13.innerHTML="";
}
let resultado13=document.getElementById("res13");
function calcular13(){
    let bronce=0.10;
    let plata=0.15;
    let oro=0.20;
    let v1=0;
    let v2=0;
    let v3=0;
    let valor=parseInt(document.getElementById("inputcomprar").value);
    let miembros=document.getElementById("membresia");
    if(miembros.value==1){
        v1=(valor)-(valor*oro);
        resultado13.innerHTML=`Valor apagar con descuento del 20% es: ${v1} COP`;
    }
    if(miembros.value==2){
        v2=(valor)-(valor*plata);
        resultado13.innerHTML=`Valor apagar con descuento del 15% es: ${v2}COP `;
    }
    if(miembros.value==3){
        v3=(valor)-(valor*bronce);
        resultado13.innerHTML=`Valor apagar con descuento del 10% es: ${v3} COP`;
        }
    
    if(miembros.value==4){
        resultado13.innerHTML=`Valor apagar sin descueto es: ${valor} COP`;
    }
}
  