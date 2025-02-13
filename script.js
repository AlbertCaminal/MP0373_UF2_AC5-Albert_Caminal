window.onload = function () {
  let logo = document.querySelector(".logo");
  logo.addEventListener("contextmenu", rightClick);
  logo.addEventListener("click", leftClick);
  logo.addEventListener("mouseenter", hoverLogo);
  document.addEventListener("keydown", teclaPulsada);
  document.addEventListener("keydown", cambiarLetra);
  document.addEventListener("keydown", contadorG);

  let btnCrear = document.getElementById("crear");
  btnCrear.addEventListener("click", crearElemento);

  crearTarjeta();

  let btnCrearTarjetas = document.getElementById("crearTarjetas");
  btnCrearTarjetas.addEventListener("click", crearTarjetas);

  red = document.querySelector(".red");
  blue = document.querySelector(".blue");
  green = document.querySelector(".green");
  orange = document.querySelector(".orange");
  yellow = document.querySelector(".yellow");
  purple = document.querySelector(".purple");
};

let counterRed = 0;
let red;

function leftClick(event) {
  counterRed++;
  console.log(counterRed);
  event.target.classList.toggle("activo");
  red.innerHTML = counterRed;
}

let counterBlue = 0;
let blue;

function rightClick(event) {
  event.preventDefault();
  counterBlue++;
  console.log(counterBlue);
  event.target.classList.toggle("activo");
  blue.innerHTML = counterBlue;
}

let counterGreen = 0;
let green;

function hoverLogo(event) {
  event.target.classList.add("activo");
  counterGreen++;
  green.innerHTML = counterGreen;
  console.log(counterGreen);
}

let counterOrange = 0;
let orange;

function teclaPulsada(event) {
  event.target.classList.add("activo");
  counterOrange++;
  orange.innerHTML = counterOrange;
  console.log(counterOrange);
}

let yellow;

function cambiarLetra(event) {
  yellow.innerHTML = event.key;
  console.log(event.key);
}

let counterPurple = 0;
let purple;

function contadorG(event) {
  if (event.key === "g") {
    counterPurple++;
    purple.innerHTML = counterPurple;
  }
}

let contadorElementos = 0;

function crearElemento() {
  contadorElementos++;
  let ul = document.getElementById("llista");
  let li = document.createElement("li");

  li.textContent = "Aquest és l’element " + contadorElementos + " de la llista";

  li.classList.add("element");

  li.id = "element" + contadorElementos;

  ul.appendChild(li);
}

let user = {
  nombre: "Roberto",
  apellido: "Heras",
  edad: 35,
  aficiones: ["Escalada", "Sushi", "Papiroflexia"],
};

const filosofos = [
  {
    nombre: "Platón",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
    pais: "Grecia",
    corriente: "Idealismo",
    arma: "Dialéctica",
  },
  {
    nombre: "Aristóteles",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg",
    pais: "Grecia",
    corriente: "Naturalismo",
    arma: "Lógica",
  },
  {
    nombre: "Descartes",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    pais: "Francia",
    corriente: "Racionalismo",
    arma: "Meditación",
  },
  {
    nombre: "Kant",
    imagen:
      "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
    pais: "Alemania",
    corriente: "Trascendentalismo",
    arma: "Crítica",
  },
  {
    nombre: "Hume",
    imagen:
      "https://www.lavanguardia.com/files/content_image_mobile_filter/files/fp/uploads/2022/04/27/626933e5f1a81.r_d.2255-1412.jpeg",
    pais: "Escocia",
    corriente: "Empirismo",
    arma: "Escepticismo",
  },
];

function crearTarjeta() {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  let body = document.querySelector("body");
  body.append(tarjeta);

  let nombre = document.createElement("h1");
  nombre.innerHTML = user.nombre + " " + user.apellido;
  tarjeta.append(nombre);

  let edad = document.createElement("p");
  edad.innerHTML = "Edad: " + user.edad;
  tarjeta.append(edad);

  let aficionesTitulo = document.createElement("h2");
  aficionesTitulo.innerHTML = "Aficiones:";
  tarjeta.append(aficionesTitulo);

  let listaAficiones = document.createElement("ul");
  user.aficiones.forEach(function (aficion) {
    let li = document.createElement("li");
    li.innerHTML = aficion;
    listaAficiones.append(li);
  });
  tarjeta.append(listaAficiones);
}

function crearTarjetas() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  filosofos.forEach((filosofo) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const titulo = document.createElement("h1");
    titulo.textContent = filosofo.nombre;
    tarjeta.appendChild(titulo);

    const pais = document.createElement("p");
    pais.textContent = "País: " + filosofo.pais;
    tarjeta.appendChild(pais);

    const corriente = document.createElement("p");
    corriente.textContent = "Corrent: " + filosofo.corriente;
    tarjeta.appendChild(corriente);

    const arma = document.createElement("p");
    arma.textContent = "Arma: " + filosofo.arma;
    tarjeta.appendChild(arma);

    const imagen = document.createElement("img");
    imagen.src = filosofo.imagen;
    imagen.alt = filosofo.nombre;
    tarjeta.appendChild(imagen);

    app.appendChild(tarjeta);
  });

  
}
