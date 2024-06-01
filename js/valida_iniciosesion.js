
const form = document.querySelector('form');

// Agrega un evento de escucha para cuando se envía el formulario
form.addEventListener('submit', (event) => {
    // Si la validación del formulario no es exitosa
    if (!validateForm()) {
        // Muestra un mensaje en la consola indicando que el formulario no es válido
        console.log('El formulario no es válido. Por favor, corrige los errores.');
        // Evita que el formulario se envíe
        event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
    } else {
        // Si la validación del formulario es exitosa, muestra un mensaje en la consola
        console.log('El formulario es válido. Enviar datos...');
        //window.open("../index.html");
        acceder();
        //window.location.href = "http://127.0.0.1:5500/index.html";
        // Aquí puedes enviar los datos del formulario o realizar otras acciones
    }
});

// Función para validar todo el formulario
const validateForm = () => {
    let isValid = true;

    // Validar campo de email
    isValid = validateEmailField('email', 'El correo electrónico no es válido') && isValid;

    // Validar campo de contraseña
    isValid = validateField('password', 'La contraseña es obligatoria') && isValid;

    return isValid;
};

// Función para validar un campo específico
const validateField = (fieldId, errorMessage) => {
    // Obtiene el elemento del campo mediante su ID
    const field = document.getElementById(fieldId);
    // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
    const value = field.value.trim();
    // Si el valor del campo está vacío
    if (value === '') {
        // Establece un mensaje de error para el campo
        //setErrorFor(field, errorMessage);
        // Devuelve false indicando que la validación ha fallado
        return false;
    } else {
        if (value === '1234')
        {
        // Si el valor del campo no está vacío, elimina cualquier mensaje de error anterior
        //setSuccessFor(field);
        // Devuelve true indicando que la validación ha tenido éxito
        return true;
        }
        else
        {
            //setSuccessFor(field);
            return false;
        }
    }
};

// Función para validar el campo de correo electrónico
const validateEmailField = (fieldId, errorMessage) => {
    // Obtiene el elemento del campo de correo electrónico mediante su ID
    const field = document.getElementById(fieldId);
    // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
    const email = field.value.trim();
    // Si el campo de correo electrónico está vacío
    if (email === '') {
        // Establece un mensaje de error para el campo de correo electrónico
        //setErrorFor(field, 'El correo electrónico es obligatorio');
        // Devuelve false indicando que la validación ha fallado
        return false;
    // Si el campo de correo electrónico no está vacío pero no es válido
    } else if (!isEmail(email)) {
        // Establece un mensaje de error para el campo de correo electrónico
        //setErrorFor(field, errorMessage);
        // Devuelve false indicando que la validación ha fallado
        return false;
    } else {
        if (email === 'pablo12@gmail.com')
        {
        // Si el campo de correo electrónico es válido, elimina cualquier mensaje de error anterior
        //setSuccessFor(field);
        // Devuelve true indicando que la validación ha tenido éxito
        return true;
        }
    }
};

// Función para validar si una cadena es una dirección de correo electrónico válida
const isEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Verifica si el correo electrónico cumple con el formato
    return re.test(email);
};

function acceder()
{
    window.open("./pages/principal.html");
    // const sesion = document.getElementsByClassName('iniciarSesion');
    // sesion.value="Cerrar Sesión";

    //document.getElementById('form').submit();
}