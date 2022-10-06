// ACA SOLO LAS FUNCIONES MATEMATICAS O DE LECTURA






function mostrarAreaInputs(){
    const $areaInputs = document.querySelector('#area-inputs');
    const $form = document.formulario;
    console.log($areaInputs);
    $areaInputs.className = "";
    $form.className="";
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
    $renglonNuevo.className = "renglon";
    const $label = agregarLabel(numero);
    $renglonNuevo.appendChild($label);
    const $input = agregarInput();
    $renglonNuevo.appendChild($input);
    $nodo.appendChild($renglonNuevo);
}

function agregarLabel(numero){
    const $label = document.createElement('label');
    $label.innerText = `Edad persona #: ${numero}  `;
    return $label;
}

function agregarInput(){
    const $input = document.createElement('input');
    $input.type = "number";
    $input.className = "datos";
    return $input;
}


/*
function agregarBotonCalcular($nodo){
    const $botonCalcular = document.createElement('button');
    $botonCalcular.type = "submit";
    $botonCalcular.innerText = "calcular";
    $botonCalcular.id="calcular";
    $nodo.appendChild($botonCalcular);
}
*/

function mostrarBotonCalcular($nodo){
    $nodo.className = "";
}

function leerDatos(){
    const edades = [];
    const $datos = document.querySelectorAll('.datos');
    for (let i = 0; i < $datos.length; i++) {
        const valor = Number($datos[i].value);
        if(valor < 0 || valor > 100) {
            $datos[i].className = "error";
            
        }
        edades.push(valor);
        
    }
    console.log(edades);
    return edades;
}

function mostrarAreaEstadisticas(){
    $areaEstadisticas = document.querySelector('#area-estadisticas');
    $areaEstadisticas.className = "";
}

/*
function mostrarEdad(tipo,edades){
    const $elementoEdad = document.querySelector(`'#${tipo}-edad'`);
    console.log($elementoEdad);
}
*/
/*
function mostrarEdadPromedio(){
    let $promedioEdad = document.querySelector('#promedio-edad');
    console.log($mayorEdad);
    $promedioEdad.textContent = `${promedio(edades)} anios`;
    
}
*/
function promedio(numeros){
    let acumulado = 0;
    for(let i = 0; i<numeros.length ; i++){
      acumulado += numeros[i];
    }
    return (acumulado/numeros.length).toFixed(2);
  }

  function devolverMaximo(numeros){
    let resultado = numeros[0];
    for (let i = 0; i<numeros.length ; i++) {
      if(numeros[i] > resultado){
        resultado = numeros[i];
      }
    }
    return resultado;
}

function devolverMinimo(numeros){
    let resultado = numeros[0];
    for (let i = 0; i<numeros.length ; i++) {
      if(numeros[i] < resultado){
        resultado = numeros[i];
      }
    }
    return resultado;
  }


