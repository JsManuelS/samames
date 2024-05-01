const evento = document.getElementById('sendMessageButton');

const enviarFormulario = () => {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let celular = document.getElementById('celular').value;
    let archivoInput = document.getElementById('archivo');
    let descripcion = document.getElementById('descripcion').value;
    let numero = 51907278764;

    // Verificar si se ha seleccionado un archivo
    if (archivoInput.files.length > 0) {
        let archivo = archivoInput.files[0].name;

        // Generar el mensaje con la información del formulario y el archivo adjunto
        var mensaje = `Hola, mi nombre es ${nombre}. Mi correo electrónico es ${correo}. Mi número de celular es ${celular}. Mi mensaje es: ${descripcion}. Adjunto: ${archivo}.`;
    } else {
        // Generar el mensaje solo con la información del formulario
        var mensaje = `Hola, mi nombre es ${nombre}. Mi correo electrónico es ${correo}. Mi número de celular es ${celular}. Mi mensaje es: ${descripcion}.`;
    }

    // Codificar el mensaje para incluirlo en el enlace de WhatsApp
    var mensajeCodificado = encodeURIComponent(mensaje);

    // Abrir una ventana nueva con el enlace para enviar el mensaje de WhatsApp
    var win = window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, '_blank');
}

evento.addEventListener('click', enviarFormulario);
