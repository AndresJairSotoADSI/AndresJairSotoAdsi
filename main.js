
let num1=Number(prompt("ingresar el numero 1 a evaluar:"));
let num2=Number(prompt("ingresar el numero 2"));
let cont=1;

while (cont<=10){
   
    let suma=(num1+num2);
    let resta=(num1-num2);
    let multi=(num1*num2);
    let divi=(num1/num2);
    alert(num1+"+"+num2+"="+suma);
    alert(num1+"-"+num2+"="+resta);
    alert(num1+"*"+num2+"="+multi);
    alert(num1+"/"+num2+"="+divi);
    cont+=1;
}
alert("Fin del proceso") ;




