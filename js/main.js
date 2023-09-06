//Pude resolver puntos en los que me trabe con la ayuda de CoderAsk.
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

//Traemos los contenedores a js
const conthorario = document.getElementById(`containerhorario`);
const contcombo = document.getElementById(`containercombos`);
const maingaleria = document.getElementById('galeriapelis');
const contdias = document.getElementById(`containerdias`);//DIAS
const contentradas = document.getElementById(`containerentradas`);

//Recorrido del array de peliculas.
for (let i = 0; i < peliculas.length; i++) {
    const divspelis = document.createElement("div");
    divspelis.innerHTML = `
    <img src="${peliculas[i].imagen}">
    <button class="btn" id="${peliculas[i].id}">Elegir Peli</button>`;
    maingaleria.append(divspelis);
};
//creamos la opcion de los dias
    const seleccdia = document.createElement('div');
    seleccdia.innerHTML = `
    <h2>Paso 2: Seleccione un Día</h2>
    <select id="dias">
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miércoles">Miércoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
    </select>`
    contdias.append(seleccdia);

//Creamos la opcion de las entradas
    const seleccentradas = document.createElement("div");
    seleccentradas.innerHTML =`
    <h2>Paso 3: Seleccione la Cantidad de Entradas</h2>
    <input type="number" id="cantidadEntradas" min="1" max="6" value="1"></input>`;
    contentradas.append(seleccentradas);

//Creamos la opcion del horario
    const selecchorario = document.createElement("div");
    selecchorario.innerHTML = `
    <h2>Paso 4: Seleccione un Horario</h2>
    <input type="radio" name="horario" value="18:00 PM"> 18:00 PM
    <input type="radio" name="horario" value="20:00 PM"> 20:00 PM
    <input type="radio" name="horario" value="22:00 PM"> 22:00 PM`;
    conthorario.append(selecchorario);

//Creamos la opcion de los combos
    const selecccombo = document.createElement("div");
    selecccombo.innerHTML = `
    <h2>Paso 5: Seleccione un Combo</h2>
    <input type="radio" name="combo" value="MegaCombo"> MegaCombo: Balde palomitas + 2vasosGrandes + Golosina
    <input type="radio" name="combo" value="ComboGrande"> ComboGrande: Balde palomitas + 2vasosGrandes
    <input type="radio" name="combo" value="ComboChico"> ComboChico: Bolsa palomitas + 2vasosChicos`;
    contcombo.append(selecccombo);

//Ayuda CoderAsk
//Guardamos todos los datos en un obj vacio
const datos = {};
//Seleccionamos los inputs de name = combo para realizarle un forEach solo a ellos
    const combos = document.querySelectorAll('input[name="combo"]');
        combos.forEach((combo) => {
            //al valor guardado le agregamos el evento change
            combo.addEventListener("change", () => {
                datos.combo = combo.value;
            });
        });

//Creamos un bucle for para seleccionar una pelicula segun su id se guarda su nombre.
        for(let i = 0; i < peliculas.length;i++){
            document.getElementById(`${peliculas[i].id}`).addEventListener("click", () => {
                datos.pelicula = `${peliculas[i].nombre}`;
            });
        }
//Llamo al id dias para guardar su valor en datos.dia
        document.getElementById("dias").addEventListener("change", () => {
            datos.dia = document.getElementById("dias").value;
        });
//Llamo al id cantidad entradas y guardo su valor en datos.cantidadEntradas
        document.getElementById("cantidadEntradas").addEventListener("input", () => {
        datos.cantidadEntradas = parseInt(document.getElementById("cantidadEntradas").value);
    });


const horarios = document.querySelectorAll('input[name="horario"]');
        horarios.forEach((horario) => {
            horario.addEventListener("change", () => {
                datos.horario = horario.value;
            });
        });

//Llamo al boton confirmar para agregar el evento click
                document.getElementById("confirmar").addEventListener("click", () => {
// Almacenar los datos seleccionados en el localStorage
                    localStorage.setItem("carrito", JSON.stringify(datos));
                    alert("Datos confirmados y guardadados en el localStorage.");
                });
        