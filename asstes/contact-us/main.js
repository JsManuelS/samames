const evento = document.getElementById('sendMessageButton')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let correo = document.getElementById('correo').value;
        let compania = document.getElementById('compania').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 51907278764;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%20,Correo:
${correo}, Compañia:%20${compania}, Asunto:%20${asunto}, Mensaje:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)