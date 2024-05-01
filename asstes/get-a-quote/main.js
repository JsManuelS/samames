const evento = document.getElementById('sendMessageButton');

const enviarFormulario = () => {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let asunto = document.getElementById('asunto').value;
    let celular = document.getElementById('celular').value;
    let empresa = document.getElementById('empresa').value;
    let horarioElement = document.getElementById('horario'); // Obtener el elemento select del horario
    let horarioSeleccionado = horarioElement.options[horarioElement.selectedIndex].text; // Obtener el texto del horario seleccionado
    let archivoInput = document.getElementById('archivo');
    let descripcion = document.getElementById('descripcion').value;
    let numero = '51907278764'; // Número de WhatsApp

    // Verificar si se ha seleccionado un archivo
    let archivoAdjunto = archivoInput.files.length > 0 ? archivoInput.files[0].name : '';

    // Construir el mensaje con la información del formulario y archivo adjunto
    let mensaje = `Hola, mi nombre es ${nombre}. Mi correo electrónico es ${correo}. Mi asunto es ${asunto}. Mi número de celular es ${celular}.`;
    mensaje += ` Mi empresa es ${empresa}. Mi horario preferido es ${horarioSeleccionado}. Mi mensaje es: ${descripcion}.`;

    // Si se adjuntó un archivo, agregarlo al mensaje
    if (archivoAdjunto) {
        mensaje += ` Adjunto: ${archivoAdjunto}.`;
    }

    // Codificar el mensaje para incluirlo en el enlace de WhatsApp
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Abrir una ventana nueva con el enlace para enviar el mensaje de WhatsApp
    window.open(`https://wa.me/${numero}?text=${mensajeCodificado}`, '_blank');
}

evento.addEventListener('click', enviarFormulario);
