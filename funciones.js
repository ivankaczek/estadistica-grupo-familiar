// ACA SOLO LAS FUNCIONES MATEMATICAS O DE LECTURA






function mostrarAreaInputs(){
    const $areaInputs = document.querySelector('#area-inputs');
    $areaInputs.className = "";
}


function leerCantidadIntegrantes(){
    const $cantidad = document.querySelector('#cantidad');
    
    const cantidadIntegrantes = $cantidad.value;
    console.log(cantidadIntegrantes);
    return cantidadIntegrantes;
}

function agregarVariosLabelInputs($nodo,cantidad){
    for (let i = 1; i <= cantidad; i++) {
        agregarLabelInput($nodo,i);      
    }
}

function agregarLabelInput($nodo,numero){
    const $renglonNuevo = document.createElement('div');
    const $label = agregarLabel(numero);
    $renglonNuevo.appendChild($label);
    const $input = agregarInput();
    $renglonNuevo.appendChild($input);
    $nodo.appendChild($renglonNuevo);
}

function agregarLabel(numero){
    const $label = document.createElement('label');
    $label.innerText = `Persona #: ${numero}`;
    return $label;
}

function agregarInput(){
    const $input = document.createElement('input');
    $input.type = "number";
    $input.className = "datos";
    return $input;
}