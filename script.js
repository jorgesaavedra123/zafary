function login_validation() {
    var username = $('#username').val();
    var password = $('#password').val();

    var correct_user = 'ejemplo@gmail.com';
    var correct_pass = 123456;

    if (username == correct_user) {
        if (password == correct_pass) {
            console.log('Iniciando sesion ...')
        } else {
            console.log('Contraseña incorrecta ...');
        }
    } else {
        console.log('Email incorrecto ...');
    }
}