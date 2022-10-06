# estadistica-grupo-familiar
Proyecto para trabajar con etiquetas HTML, lógica de validaciones y pruebas unitarias 

Nota: este proyecto es parte de la formación del curso r/Argentina-Programa de Fabricio Sodano.

Objetivo: 

1. Escribir una interface en JavaScript que permita mostrar en un archivo HTML una encuesta sobre cantidad de personas en el grupo familiar. Mostrar un botón que cree tantos labels e inputs según la cantidad de personas para poder ingresar sus edades. Como paso siguiente, a través de un botón para calcular las estadísticas, mostrar la mayor edad, la menor edad y la edad promedio.

2. Agregar un botón para recomenzar el proceso y lograr reutilizar la interface sin necesidad de refrescar la página.

3. Agregar validaciones y pruebas unitarias.

# Index HTML

1. Creo un html desde 0 con la plantilla mínima de VSCode. Tenemos en cuenta de mover los scripts al final del body para que se ejecuten luego de cargar el index.html
2. Creo el título y 3 áreas diferentes en el main: 
  a) para pedir la cantidad de personas
  b) para mostrar los labels e inputs para ingresar los datos
  c) para mostrar los resultados (que tiene que estar oculta al principio del programa)

# Script Main

1. Declaro los elementos HTML con los que voy a trabajar, que son los botones agregar integrantes, calcular, y las zonas para ingresar datos y para mostrar resultados

# Script Funciones

1. Funciones para mostrar el area de inputs que estaba oculta;
2. Funciones para crear labels con una numeración y para crear inputs con clase="datos" para luego leer esta información

1. Creo diferentes scripts en JS para a) guardar las funciones matemáticas que necesite, b) esribir las pruebas unitarias

# CSS

1. Este archivo lo armo desde cero y guardo información para modificar algunos colores, pero también para poder ocultar elementos cuando es necesario utilizando la propiedad display : none;, y marcar errores de modo visual con un borde rojo.

