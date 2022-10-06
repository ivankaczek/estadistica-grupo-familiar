const $botonAgregar = document.querySelector('#agregar');
const $areaInputs = document.querySelector('#area-inputs');
const $botonCalcular = document.querySelector('#calcular');
console.log($botonCalcular);


function calcularEstadisticas(event){
    const edades = leerDatos();
    console.log(edades);
    //mostrarEdad('mayor',edades);
    let $mayorEdad = document.querySelector('#mayor-edad');
    console.log($mayorEdad);
    $mayorEdad.textContent = `${devolverMaximo(edades)} anios`;

    let $menorEdad = document.querySelector('#menor-edad');
    $menorEdad.textContent = `${devolverMinimo(edades)} anios`;

    let $promedioEdad = document.querySelector('#promedio-edad');
    $promedioEdad.textContent = `${promedio(edades)} anios`;


    event.preventDefault();
    
}


function agregarIntegrantes(event){
    const cantidadIntegrantes = leerCantidadIntegrantes();
    mostrarAreaInputs();
    agregarVariosLabelInputs($areaInputs,cantidadIntegrantes);
    mostrarBotonCalcular($botonCalcular);
    mostrarAreaEstadisticas();
    //agregarLabelInput($areaInputs,1);

    
    event.preventDefault();
}



$botonAgregar.onclick = agregarIntegrantes;
$botonCalcular.onclick = calcularEstadisticas;



