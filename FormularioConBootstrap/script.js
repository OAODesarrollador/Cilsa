const formulario = document.getElementById('miFormulario');
const validar = document.getElementById('enviar');

// *---------- Cambio de Modo Oscuro-Claro

const claro = () => {
    document.querySelector('body').setAttribute('data-bs-theme','dark')
    document.querySelector('#iconoModo').setAttribute('class', 'bi bi-sun-fill')
}
const oscuro = () => {
    document.querySelector('body').setAttribute('data-bs-theme','light')
    document.querySelector('#iconoModo').setAttribute('class', 'bi bi-moon-fill')
}
const cambiarTema  = () => {
    document.querySelector('body').getAttribute('data-bs-theme') === 'dark'?
    oscuro() : claro();
}


//  - - - - -  Cartel Alerta de los campos

    function alert(campo, mensaje, tipo) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' +'<i class="bi bi-exclamation-triangle"></i>' +"  "+ mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        var campo = document.getElementById(campo);
        campo.append(wrapper);
        
        }

// --------- Validacion de los datos ---------------


validar.onclick = (e) => {
    e.preventDefault();
    const vnombre = document.getElementById('nombre').value;
    const vapellido = document.getElementById('apellido').value;
    const vemail = document.getElementById('email').value;
    const vnacimiento = document.getElementById('nacimiento').value;
    const vresidencia = document.getElementById('residencia').value;
    let isValid = true;

    if( vnombre == null || vnombre.length == 0 || /^\s+$/.test(vnombre) ) { 
        alert('errorNombre', 'Debes ingresar datos en el nombre', 'danger');
        isValid = false;
    return
    }
    if( vapellido == null || vapellido.length == 0 || /^\s+$/.test(vapellido) ) { 
        alert('errorApellido', "Debe ingresar datos en el Apellido", 'danger');
    return 
    }
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(vemail)) ) { 
        alert('errorEmail', "Debe ingresar formato válido en el E-mail. valor@valor.valor.valor ", 'danger');
    return 
    }
    if( !isNaN(vnacimiento) ) {
        alert("errorFecha", "Debe ingresar datos en la Fecha", 'danger'); 
    return
    }
    if( vresidencia == null || vresidencia.length == 0 || /^\s+$/.test(vresidencia) ) { 
        alert('errorResidencia', 'Debes ingresar datos de la Residencia', 'danger')
    return 
    }
    if (isValid) {
        confirmacion();
        // Enviar el formulario después de mostrar la confirmación
        setTimeout(() => {
            formulario.submit();
        }, 3000); // Ajusta el tiempo según sea necesario
    } 
}
    
function confirmacion() {
    document.getElementById('alertaExito').style.display = 'block';   
    setTimeout(function() {
        document.getElementById('alertaExito').style.display = 'none';
    }, 3000);
    
    }