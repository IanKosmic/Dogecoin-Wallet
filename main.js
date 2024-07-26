// Definición de la función que valida el formulario
function validateForm() {
    // Obtener el valor del campo de usuario y contraseña
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    // Obtener el elemento donde se mostrarán los mensajes de error
    let errorMessage = document.getElementById('error-message');
    // Arreglo para almacenar los mensajes de error encontrados
    let errorMessages = [];

    // Validación del campo de usuario
    if (username === "") {
        errorMessages.push("Por favor, ingrese su usuario.");
    } else if (username.length < 3) {
        errorMessages.push("El usuario debe tener al menos 3 caracteres.");
    }
    // Validación del campo de contraseña
    if (password === "") {
        errorMessages.push("Por favor, ingrese su contraseña.");
    } else if (password.length < 6) {
        errorMessages.push("La contraseña debe tener al menos 6 caracteres.");
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        errorMessages.push("La contraseña debe contener al menos una letra y un número.");
    }
    // Si se encontraron errores, mostrarlos en el mensaje de error
    if (errorMessages.length > 0) {
        errorMessage.textContent = errorMessages.join(' ');
    } else {
        // Si no hay errores, limpiar el mensaje de error
        errorMessage.textContent = "";
        // Aquí se puede agregar la lógica para enviar el formulario o realizar la autenticación
        alert("Inicio de sesión exitoso!");
        window.location.href = "cajero.html";
    }
}

// Función para cerrar sesión
function logOut() {
    if (logOut) {
        window.location.href = "index.html";
    }
}

//Local Storage
// Definimos la variable 'balance' para manejar el saldo, y le asignamos un saldo inicial.
let balance = 4694200.69; 

// Obtenemos una referencia al elemento HTML que muestra el saldo en la página.
const balanceElement = document.getElementById('balance');

// Esta función actualiza el texto del elemento de saldo con el valor actual del saldo,
// formateado a dos decimales y precedido por el símbolo de dólar.
function updateBalanceDisplay() {
    balanceElement.textContent = `$${balance.toFixed(2)}`;
}

// Esta función maneja el retiro de dinero.
function balanceWithdraw() {
    // Pedimos al usuario que ingrese el monto a retirar usando un cuadro de diálogo prompt.
    let amount = prompt("Enter the amount to withdraw:");
    
    // Convertimos el monto ingresado a un número decimal.
    amount = parseFloat(amount);
    
    // Verificamos si el monto ingresado no es un número o si es menor o igual a 0.
    if (isNaN(amount) || amount <= 0) {
        // Si el monto es inválido, mostramos un mensaje de alerta.
        alert("Invalid amount entered.");
    } 
    // Verificamos si el monto a retirar es mayor que el saldo disponible.
    else if (amount > balance) {
        // Si no hay suficientes fondos, mostramos un mensaje de alerta.
        alert("Insufficient funds.");
    } 
    // Si el monto es válido y hay suficientes fondos.
    else {
        // Restamos el monto del saldo.
        balance -= amount;
        
        // Actualizamos la pantalla para mostrar el nuevo saldo.
        updateBalanceDisplay();
        
        // Mostramos un mensaje de alerta confirmando el retiro.
        alert(`Successfully withdrew $${amount.toFixed(2)}`);
    }
}

// Esta función maneja el depósito de dinero.
function balanceDeposit() {
    // Pedimos al usuario que ingrese el monto a depositar usando un cuadro de diálogo prompt.
    let amount = prompt("Enter the amount to deposit:");
    
    // Convertimos el monto ingresado a un número decimal.
    amount = parseFloat(amount);
    
    // Verificamos si el monto ingresado no es un número o si es menor o igual a 0.
    if (isNaN(amount) || amount <= 0) {
        // Si el monto es inválido, mostramos un mensaje de alerta.
        alert("Invalid amount entered.");
    } 
    // Si el monto es válido.
    else {
        // Sumamos el monto al saldo.
        balance += amount;
        
        // Actualizamos la pantalla para mostrar el nuevo saldo.
        updateBalanceDisplay();
        
        // Mostramos un mensaje de alerta confirmando el depósito.
        alert(`Successfully deposited $${amount.toFixed(2)}`);
    }
}

// Esta función maneja el envío de dinero.
function balanceTransfer() {
    // Pedimos al usuario que ingrese el monto a enviar usando un cuadro de diálogo prompt.
    let amount = prompt("Enter the amount to send:");
    
    // Convertimos el monto ingresado a un número decimal.
    amount = parseFloat(amount);
    
    // Verificamos si el monto ingresado no es un número o si es menor o igual a 0.
    if (isNaN(amount) || amount <= 0) {
        // Si el monto es inválido, mostramos un mensaje de alerta.
        alert("Invalid amount entered.");
    } 
    // Verificamos si el monto a enviar es mayor que el saldo disponible.
    else if (amount > balance) {
        // Si no hay suficientes fondos, mostramos un mensaje de alerta.
        alert("Insufficient funds.");
    } 
    // Si el monto es válido y hay suficientes fondos.
    else {
        // Restamos el monto del saldo.
        balance -= amount;
        
        // Actualizamos la pantalla para mostrar el nuevo saldo.
        updateBalanceDisplay();
        
        // Mostramos un mensaje de alerta confirmando el envío.
        alert(`Successfully sent $${amount.toFixed(2)}`);
    }
}

// Esta función maneja el cierre de sesión.
function logOut() {
    // Redirigimos al usuario a la página "index.html".
    window.location.href = "index.html";
}

// Escuchamos el evento 'DOMContentLoaded' para asegurarnos de que el DOM esté completamente cargado
// antes de ejecutar la función 'updateBalanceDisplay'. Esto asegura que el saldo mostrado
// esté actualizado al cargar la página.
document.addEventListener('DOMContentLoaded', updateBalanceDisplay);


// addEventListener 

// Esta esperando (escuchando) que pase algo para que despues --> un evento ocurra 

document.getElementById('miBoton').addEventListener('click',Saludar)

function Saludar(){
    alert("Hola")
}

//DOMContentLoaded - Avisa que nuestra pagina este al 100% para poder utilizarla

// Documet (HTML) DOM 

document.addEventListener('DOMContentLoaded', function(){
    console.log("La pagina esta lista para ser usada")
})