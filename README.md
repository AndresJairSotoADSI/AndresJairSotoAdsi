# Glosario de programación

## ¿Que es un ciclo en JavaScript?

En JavaScript los bucles  **son utilizados para realizar tareas repetitivas con base en una condición**. Las condiciones típicamente devuelven true (verdadero) o false (falso) al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva false .

```javascript
var arr = [ 1, 2, 3 ];
    for (var i = 0; i <= arr.length; i++) {
       console.log(arr[i]);
    }
```

### ¿Que es una iteración?

un iterador es un **objeto que permite recorrer una colección y devolver un valor al terminar**. Específicamente, un iterador es un objeto que implementa el protocolo de iteración a través de un método , el cual devuelve un objeto con dos propiedades: valué;

```javascript
for (let valor of miIterable) {
    console.log(valor)
}
// 1
// 2
// 3

// ó

[...miIterable] // [1, 2, 3]
```

## ¿Qué es una cláusula  en JavaScript?

```javascript
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
```

## ¿Que es un operador ternario en JavaScript?

El **operador condicional** (**ternario**) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if

```javascript
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

console.log( access ); // muestra "Acceso Permitido"
```

## Parámetros opcionales en JavaScript

Los parámetros opcionales **se definen al final de la lista de parámetros después de los parámetros necesarios**. Si el autor de la llamada proporciona un argumento para algún parámetro de una sucesión de parámetros opcionales, debe proporcionar argumentos para todos los parámetros opcionales anteriores

```javascript
function foo(a, b=0, c=10) {
  //...
}
```

## ¿Qué es el scope en JavaScript?

El **scope** puede definirse como **el alcance que una variable tendrá en tu código**. En otras palabras, el scope **decide a qué variables tienes acceso** en cada parte del código. Existen dos tipos de scope, el **scope global** y el **scope local**.

### Scope Local
Cuando puedes acceder a una variable únicamente en cierta parte del código
```javascript
function platzi() {
    const soyEstudiante = true;
    console.log(soyEstudiante);
}
platzi(); 
console.log(soyEstudiante);
```
### Scope Global
Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque. 
```javascript
const soyEstudiante = true;

function platzi() {
	console.log(soyEstudiante);
}

platzi(); //true
console.log(soyEstudiante); //true
```
## ¿Qué es el for each?
FOR EACH sirve para moverse por los elementos de una estructra de datos, como podría ser un vector, y realizar acciones para cada una de los elementos.
```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```

## ¿Qué es el filter?
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```
