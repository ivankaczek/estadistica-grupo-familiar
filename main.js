const $botonAgregar = document.querySelector('#agregar');
const $areaInputs = document.querySelector('#area-inputs');
const $botonCalcular = document.querySelector('#calcular');
console.log($botonCalcular);


function calcularEstadisticas(event){
    const edades = leerDatos();
    console.log(edades);
    
    

    for(let i=0; i<edades.length; i++) {
        if (edades[i] < 0) {
            document.querySelector('#area-error').className = "";
            document.querySelector('#area-error').textContent = "la edad debe ser mayor a cero!";

        } else if(edades[i] >100) {
            document.querySelector('#area-error').className = "";
            document.querySelector('#area-error').textContent += " | es raro que la edad sea mayor a 100!";
        } else {
            let $mayorEdad = document.querySelector('#mayor-edad');
    
            $mayorEdad.textContent = `${devolverMaximo(edades)} anios`;

            let $menorEdad = document.querySelector('#menor-edad');
            $menorEdad.textContent = `${devolverMinimo(edades)} anios`;

            let $promedioEdad = document.querySelector('#promedio-edad');
            $promedioEdad.textContent = `${promedio(edades)} anios`;

        }
    }
    


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



