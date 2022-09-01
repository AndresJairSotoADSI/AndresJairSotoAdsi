# CSS Selectores

#  Selectores Universales * 
Selecciona todos los selectores

Selector
*{
propiedad   valor
   color:   red;
}

#  Selectores De tipo <etiquetas> 
todas las etiquetas que usamos de html h1, p, span etc.
h1{
 propiedad   valor
   color:   red;
}

#  Selectores De Clases . el nombre del selector
Todas las clases que deseemos para algo especifico

.navigation  {
propiedad    valor
   padding:   red;
}

#  Selectores Por Id # Que es elemento unico
Todos los selectores Id son identificadores unicos y lo recomedable es tener un solo id por elemento  pero  toca tener cuidado cuando usamos javascript al 
modificarlo el id tienen mas rango de especifidad.

#logo{
propiedad   valor
   color:   red;
}

# Selectores Por atributo
[value="texto"]{

}

# Selectores desendientes
 1- Seleccionamos el contenedor
h2 p{
   color:blue;

}
Lo podemos hacer tambien con clases
.navigation a{
   tex-decoration:none;
}

# Selectores seudo-Clases
si queremos que un boton o texto tengo un color o otra cosa cuando le paemos el mause por encima
p:hover{
  color:blue;
}

