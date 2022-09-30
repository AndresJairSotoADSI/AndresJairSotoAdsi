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