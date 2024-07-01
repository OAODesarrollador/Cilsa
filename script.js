const formulario = document.getElementById('miFormulario');
const boton = document.getElementById('cambiarColorBtn');
const validar = document.getElementById('enviar');


boton.onclick = () => {
    formulario.classList.toggle('contraste-alto');
    formulario.classList.toggle('contraste-bajo');
    if (formulario.classList.contains('contraste-alto')) {
        boton.textContent = 'Cambiar a Contraste Bajo';
    } else {
        boton.textContent = 'Cambiar a Contraste Alto';
    }
};

validar.onclick = () => {
    const vnombre = document.getElementById('nombre').value;
    const vapellido = document.getElementById('apellido').value;
    const vemail = document.getElementById('email').value;
    const vnacimiento = document.getElementById('nacimiento').value;
    const vresidencia = document.getElementById('residencia').value;
    if( vnombre == null || vnombre.length == 0 || /^\s+$/.test(vnombre) ) { 
        alert("Debe ingresar datos en el nombre");
        return false
        }
    if( vapellido == null || vapellido.length == 0 || /^\s+$/.test(vapellido) ) { 
        alert("Debe ingresar datos en el Apellido");
        return false
        }
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(vemail)) ) { 
        alert("Debe ingresar formato válido en el E-mail. valor@valor.valor.valor ");
        return false
        }
    if( !isNaN(vnacimiento) ) {
        alert("Debe ingresar datos en la Fecha"); 
        return false; 
        }
    if( vnombre == null || vnombre.length == 0 || /^\s+$/.test(vresidencia) ) { 
        alert("Debe ingresar datos en la Residencia");
        return false;
        }
}




