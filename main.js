let veh=Number(prompt("Ingrese la cantidad de vehiculos"));
let tur=0;
let pert=0;
let aut=0;
let cam=0;
let mot=0;
let con=1;
let per;
while (con<=veh){
    let tip=prompt("tipo de vehiculo que pasa(turismo,autobus,camion o motocicleta):")
    con+=1
    
    if(tip=="turismo"){
       per=Number(prompt("cantidad de personas"))
       tur+=1
       pert=pert+pert
    }
      
    else if(tip=="autobus:"){
        aut+=1
    }
      
    else if(tip=="camion"){
        cam+=1
    }
      
    else{
        mot+=1
    }
      

  alert("Cantidad de autobuses"+aut)
  alert("Cantidad de camiones"+cam)
  alert("Cantidad de motocicletas"+mot)
  alert("cantidad de turismo"+ur)
  alert("cantidad de personas en vehiculos de turismo"+pert)
}

             
  
  /* Datos de salida*/
 





