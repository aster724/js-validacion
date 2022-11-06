export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  }
  
  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if(!mayorDeEdad(fechaCliente)){
        mensaje = 'debes tener al menos 18 años de edad'
    }
    
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciasFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(), 
    fecha.getUTCDate()
    );
    
    return diferenciasFechas <= fechaActual;
}