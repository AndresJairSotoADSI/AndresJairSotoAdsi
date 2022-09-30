/*for*/
const miFuncion = () => {
   let miValor = 2;
   console.log(miValor);

   const funcionHija = () => {
        console.log(miValor += 1);
   }

   return funcionHija;
}

const resultado = miFuncion();
console.log(resultado);
resultado();
resultado();
resultado();




