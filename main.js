let suma=0;
let suma1=0;
let cali_max=0;
let cali_min=1;
let prom=0;
let n_estud=Number(prompt("ingresar el numero de estudiante a votar:"));
/*para solucionar la incognitas de este ejercicio usaremos el bucle for y la
#sentencia while por que son varios datos a conseguir*/
for (let i=1;i<n_estud;i++){
    let cali_estud=Number(prompt("ingresar la calificacion de los estudiantes:"));

        if ((cali_estud>=1) && (cali_estud<=10)){
            if (cali_estud>=cali_max){
                cali_max=cali_estud;
            }
            else{
                if (cali_estud<cali_min){
                    cali_min=cali_estud;
                }
            suma=suma+1;
            suma1=cali_estud+suma1;
            } 
               
       
            if ((cali_estud>=1) && (cali_estud<=5)){
                document.write(" La comida es Horrible:")
            }
               
            else{
                if ((cali_estud>=6) && (cali_estud<=10)){
                 document.write("La comida es excelete:");
                }
                
            }
               
        }
           
        else{
            if (cali_estud<1 && cali_estud>10){
                document.write("los estudiantes encuestados son:"+suma);
                prom=suma1/suma;
                document.write("el promedio es:"+prom);
                document.write("la calificacion mas alta es:"+cali_max);
                document.write("la calificacion mas baja es:"+cali_min);
                break
            }
        }
           
               
}
        
document.write("los estudiantes en cuestados son:"+suma);
prom=suma1/suma;
document.write("el promedio es:"+prom);
document.write("la calificacion mas alta es:"+cali_max);
document.write("la calificacion mas baja es:"+cali_min);





