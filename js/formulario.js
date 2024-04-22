document.getElementById('enviar').addEventListener('click', function () {

    let nombre = document.getElementById('nombre').value.trim();

    let correo = document.getElementById('correo').value.trim();

    let telefono = document.getElementById('telefono').value.trim();

    let direccion = document.getElementById('direccion').value.trim();

    let mensaje = document.getElementById('mensaje').value.trim();

    let autorizo = document.getElementById('autorizo').checked;


    if (nombre === "" || nombre.length > 45) {
        document.getElementById('nombre').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('nombre').classList.remove('is-invalid');
        document.getElementById('nombreError').style.display = 'none';
    }

    if (correo === "" || !validateEmail(correo)) {
        document.getElementById('correo').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('correo').classList.remove('is-invalid');
        document.getElementById('correoError').style.display = 'none';
    }


    if (telefono === "" || telefono.length !== 10) {
        document.getElementById('telefono').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('telefono').classList.remove('is-invalid');
        document.getElementById('telefonoError').style.display = 'none';
    }


    if (direccion === "" || direccion.length > 100) {
        document.getElementById('direccion').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('direccion').classList.remove('is-invalid');
        document.getElementById('direccionError').style.display = 'none';
    }


    if (mensaje === "" || mensaje.length > 200) {
        document.getElementById('mensaje').classList.add('is-invalid');
        return;
    } else {
        document.getElementById('mensaje').classList.remove('is-invalid');
        document.getElementById('mensajeError').style.display = 'none';
    }
    if (!autorizo) {
        document.getElementById('autorizoError').style.display = 'block';
        return;
    } else {
        document.getElementById('autorizoError').style.display = 'none';
    }
    document.getElementById('mensajeExito').style.display = 'block';
    document.getElementById('enviar').style.display = 'none';
});


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}