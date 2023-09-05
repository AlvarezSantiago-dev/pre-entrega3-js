//Traigo el form a js
const registroForm = document.getElementById("registroForm");
//Traigo el boton a js
const registrarBtn = document.getElementById("registrarBtn");

//Creo un objeto de usuario vacio.
let usuarioRegistrado = {};

//Trabajo sobre el boton.
registrarBtn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    //Como se van a guardar los datos
    usuarioRegistrado = { nombre, contraseña };
    alert("Registro exitoso");
    mostrarFormLogin();
});
//Datos guardados...

//Creamos una funcion para no mostrar mas el form de registro. Y la idea es ejecutarla arriba, una vez clickeamos en el boton.
function mostrarFormLogin() {
    registroForm.style.display = "none"; //Busque en google la forma de accesder a las propiedades de css.

    //Creamos un nuevo formulario para el acceso
    const loginForm = document.createElement("form");
    loginForm.innerHTML = `
        <label for="usuarioLogin">Usuario:</label>
        <input type="text" id="usuarioLogin" required>
        <label for="contraseñaLogin">Contraseña:</label>
        <input type="text" id="contraseñaLogin" required>
        <button type="button" id="loginBtn">Ingresar</button>
    `;

    //Seleccionamos el .container para aplicar los mismos estilos al login form.
    document.querySelector(".container").appendChild(loginForm);
    //Creamos un boton para validar los datos anteriormente creados en el registro.
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", verificarDatos);
};
// Creamos una funcion para validar los datos ingresados anteriormente
function verificarDatos() {
    const usuarioLogin = document.getElementById("usuarioLogin").value; //Me traigo el .value del formulario nuevo creado en la linea 25(el valor del imput 28)
    const contraseñaLogin = document.getElementById("contraseñaLogin").value;

//Ultimo paso, acceso concedido o denegado, dependiendo si los datos guardados coinciden con los nuevos ingresados.
    if (usuarioLogin === usuarioRegistrado.nombre && contraseñaLogin === usuarioRegistrado.contraseña) {
        alert(`Genial, bienvenid@ a mi simulacion de "Cine". Esta es la tercer pre-entrega camino al proyecto final de JavaScript. 😊`);
        window.location.href = "../pages/accseso.html"; //Busque en google la forma de acceder o dar acceso a otro html para mayor comodidad.
    } else {
        alert("El nombre de usuario o la contraseña no son validos. Proba ingresando los datos nuevamente.❗❗");
    }
};

