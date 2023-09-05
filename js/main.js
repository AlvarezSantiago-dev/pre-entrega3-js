let valorEntradas = 1000; // variable global
//Arrow functions, utilizar mas abajo
const suma = (a, b,) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
const multiplica = (a, b) => a * b;
const porcent = (x) => x * 0.3;

//registro
const peliculas = [
    { id: 1, nombre: "Barbie", imagen: "../img/peliculabarbie.jpg" },
    { id: 2, nombre: "AlmaMula", imagen: "../img/peliculaalmamula.jpg" },
    { id: 3, nombre: "Contrareloj", imagen: "../img/peliculacontrareloj.jpg" },
    { id: 4, nombre: "Asteroid", imagen: "../img/peliculaasteroid.jpg" },
    { id: 5, nombre: "La Monja", imagen: "../img/peliculalamonja.jpg" },
    { id: 6, nombre: "Poderes Ocultos", imagen: "../img/peliculapoderesocultos.jpg" },
    { id: 7, nombre: "Oppenheimer", imagen: "../img/peliculaoppenheimer.jpg" },
    { id: 8, nombre: "Hablame", imagen: "../img/peliculahablame.jpg" },
    { id: 9, nombre: "Fragmentada", imagen: "../img/peliculafragmentada.jpg" },
    { id: 10, nombre: "Gran Turismo", imagen: "../img/peliculagranturismo.jpg" },
    { id: 11, nombre: "Elementos", imagen: "../img/peliculaselementos.jpg" },
    { id: 12, nombre: "Megalodon 2", imagen: "../img/peliculamegalodon2.jpg" },
];
const diassemana = [
    { id: 1, dia: "Lunes" },
    { id: 2, dia: "Martes" },
    { id: 3, dia: "Miercoles" },
    { id: 4, dia: "Jueves" },
    { id: 5, dia: "Viernes" },
    { id: 6, dia: "Sabado" },
    { id: 7, dia: "Domingo" },
];
//funcion para mostrar primer galeria
function mostrarGaleria(item) {
    const galeriapelis = document.createElement("div");
    galeriapelis.innerHTML = `
        <p>${item.nombre}</p>
        <img src="${item.imagen}">
        <button class="btn" id="boton${item.id}">Seleccionar</button>
    `;
    return galeriapelis;
}
//Funcion primer click
function paso1(item) {
// oculto mi galeria anterior
    ocultargaleria();
//Creo una const y div donde muestro la img de la peli y creo un form
    const seleccpelicula = document.createElement("div");
    seleccpelicula.innerHTML = `
        <img src="${item.imagen}">
        <form>
            <label>La cantidad mínima es 1 entrada y la máxima es de 6.</label>
            <input type="number" id="valorMultiplicar" name="quantity" min="1" max="6">
            <button class="btn" id="paso2">Agregar al carrito</button>
        </form>
    `;
//agrego en el body
    document.body.append(seleccpelicula);
//creo el boton para el siguiente paso

}
function mostrarDias(item){
        const seleccdia = document.createElement("div");
        seleccdia.innerHTML = `
        <button class="btn" id="${item.id}">${item.dia}</button>`
        return seleccdia;
}
function ocultargaleria() {
    galeriapelis.style.display = "none";
}

peliculas.forEach((item) => {
    const div = mostrarGaleria(item);
    galeriapelis.append(div);

    const btnpelis = document.getElementById(`boton${item.id}`);
    btnpelis.addEventListener("click", () => {
        paso1(item);
    });
});

// Agregar un solo manejador de eventos para los botones de día de la semana
const diasSemanaContainer = document.getElementById("diasSemanaContainer");
diassemana.forEach((item) => {
    const btnDia = mostrarDias(item);
    btnDia.addEventListener("click", () => {
        // Aquí puedes agregar la lógica para manejar el día seleccionado
        console.log(`Se ha seleccionado el día: ${item.dia}`);
    });
    diasSemanaContainer.append(btnDia);
});
// Crear elementos de película y agregar eventos al hacer clic
/*
peliculas.forEach((item) => {
    const div = mostrarGaleria(item);
    galeriapelis.append(div);

    const btnpelis = document.getElementById(`boton${item.id}`);
    btnpelis.addEventListener("click", () => {
        paso1(item);
        //
        
    const btnpelis2 = document.getElementById(`paso2`);
    btnpelis2.addEventListener("click",() => {
        mostrarDias(item);
    })
        
    });
});
*/