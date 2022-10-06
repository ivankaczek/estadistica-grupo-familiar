const $botonAgregar = document.querySelector('#agregar');
const $areaInputs = document.querySelector('#area-inputs');
console.log($areaInputs);




function agregarIntegrantes(event){
    const cantidadIntegrantes = leerCantidadIntegrantes();
    mostrarAreaInputs();
    agregarVariosLabelInputs($areaInputs,cantidadIntegrantes);
    //agregarLabelInput($areaInputs,1);


    event.preventDefault();
}

$botonAgregar.onclick = agregarIntegrantes;



