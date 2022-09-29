let segun=0;
let avion=222222;
let misil=222222;
let aceleracionavion=20;
let aceleracionmilsil=10; 
while(aceleracionavion-aceleracionmilsil<=1000){
    aceleracionavion+=20+aceleracionavion;
    aceleracionmilsil+=10+aceleracionmilsil;
    segun+=1;
    alert("segundo"+segun);
    alert("Distancia del avion"+aceleracionavion);
    alert("Distancia del misil"+aceleracionmilsil);

} 

alert("Fin del proceso");  





