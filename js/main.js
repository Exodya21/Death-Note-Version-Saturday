let names = ['JAUME','DIEGO','ERNESTO','LUCAS','ALEXIS','CARLOS','NADIE'];
let causas = [
  "DESAFIO: MINIJUEGO DE MARIO PARTY, QUIEN PIERDA BEBE.",
  "DESAFIO: BEBE EL ULTIMO QUE SE TOQUE LA NARIZ.",
  "DESAFIO: DECIR LA FLDSMDFR",

  "BEBE 1 // 3 CHUPITOS",
  "ELIGE QUIEN BEBE 1 // 3 CHUPITOS",
  "ESTA RONDA LOS 'MAS 2  EQUIVALEN A  2 CHUPITOS",
  "TODO EL MUNDO BEBE 1 CHUPITO",

  "NO JUEGA EN LA SIGUIENTE RONDA",
  "DEBERA  ROBAR CARTAS",
  "PULSA DE 1 // 3 VECES EL BOTON",

  "LA DEATH NOTE JUEGA LA CARTA 0",
  "LA DEATH NOTE PONE DE 1 // 3 BOMBAS",
  "LA DEATH NOTE HACE QUE LLUEVAN CARTAS",
  "LA DEATH NOTE JUEGA EL REVERSE",

  "SE BANEA UN COLOR Y QUIEN LO UTILICE BEBE 1 CHUPITO",
  "SE BANEA UN NUMERO DEL 1 // 9 Y QUIEN LO UTILICE BEBE 1 CHUPITO",
  "SI ADVINIAS QUE NUMERO DEL 1 // 3 QUE HA SALIDO, ELIGES QUIEN BEBE 1 CHUPITO SINO BEBE TU",

  "SE JUEGAN LOS DADOS LVL1, BEBEN LOS NUMEROS IGUALES",
  "SE JUEGAN LOS DADOS LVL2, BEBEN LOS NUMEROS IGUALES Y EL NUMERO MAS ALTO",
  "SE JUEGAN LOS DADOS LVL3, BEBEN LOS NUMEROS IGUALES,  EL NUMERO MAS ALTO Y EL MAS BAJO",
  "SE JUEGAN LOS DADOS LVL4, BEBEN LOS NUMEROS IGUALES,  EL NUMERO MAS ALTO, EL MAS BAJO Y LOS PARES",

  "ELIGES CONTRINCANTE PARA JUGAR A LOS MINIBOLOS",
  "ELIGES CONTRINCANTE PARA JUGAR A LA CARTA MAS ALTA",
  "ELIGES CONTRINCANTE PARA JUGAR A LA CARTA MAS BAJA",
  "TODO EL MUNDO JUEGA A LA CARTA MAS ALTA Y SE APLICAN LAS NORMAS DE LOS DADOS LVL4"
];
let victima = "";
let causa = "";



// Funciones para la musica de fondo
let mysong = document.getElementById("mysong");
let icon = document.getElementById("icon");
icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.src = "img/play.png";
  } else {
    mysong.pause();
    icon.src = "img/pause.png";
  }
};
// funciones del PopUp /////////////////////////////////////////////////////////////////

// Funciones para mostrar o cerrar PopUp
function abrir(mostrar, ocultar) {
  document.getElementById(mostrar).style.display = "flex";
  document.getElementById(ocultar).style.display = "none";
}
function cerrar(ocultar, mostrar) {
  document.getElementById(ocultar).style.display = "none";
  document.getElementById(mostrar).style.display = "flex";
}

// Funciones añadir Victimas
function pushnames(value) {
  if ((inputnombres.value.length >= 4) & (inputnombres.value.length <= 12)) {
    names.push(value);
    mostrarnombres();
    inputnombres.value = "";
  } else {
    inputnombres.value = "";
    alert("Nombre no válido");
  }
}

///ENTER/////
document
  .getElementById("inputnombres")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("sub").click();
    }
  });

// funcion Imprimir en popUp
function mostrarnombres() {
  let localizacion = document.getElementById("impresionarray");
  let todolist = "";
  names.forEach((elemento) => {
    todolist += `<li>
                            <button onclick='upDateName(upDate.value)' class="btnname" id= 'upDate' value='${elemento.toUpperCase()}'>${elemento.toUpperCase()}</button>
                            <button onclick = "borrarVictimas(this)" class = "delete" id = "borrar">X</button>
                         </li>`;
  });
  localizacion.innerHTML = todolist;
}

// Funcion borrar Victimas
function borrarVictimas(elementothis) {
  let victimaABorrar = elementothis.previousElementSibling.value;
  let index = rangeArray(names, victimaABorrar);

  names.splice(index, 1);

  mostrarnombres();
}


//Funcion For Loop con filtro devuelve Indice
function rangeArray(array, filter) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == filter) {
      return i;
    }
  }
}
//////////////////////////////////////////////////////////////////


//funcion numero random
function randomNum(maximo) {
  let num = Math.random() * maximo;
  let redondearNum = Math.floor(num);

  return redondearNum;
}

//funcion elegir elemento de lista random
function kill() {
  victima = names.splice(randomNum(names.length), 1)[0];
  causa = causas.splice(randomNum(causas.length), 1)[0];
  console.log("causa: ", causa, "kill :", victima);
}

// funcion fecha random
function diamuerte() {
  let dia = Math.floor(Math.random() * 30) + 1;
  let mes = Math.floor(Math.random() * 12) + 1;
  let año = Math.floor(Math.random() * (2025 - 2021)) + 2021;

 /* document.getElementById("fecha").innerHTML = `${dia} / ${mes} / ${año}`;
  document.getElementById("victimafecha").innerHTML = `${dia} / ${mes} / ${año}`;*/

let dice1 =  Math.floor(Math.random() * 3) + 1;
let dice2 =  Math.floor(Math.random() * 9) + 1;

  document.getElementById("victimafecha").innerHTML = `${dice1}`;
  document.getElementById("victimafecha2").innerHTML = `${dice2}`;
}

//funcion imprimir elementos en el DOOM
function imprimirEnHoja() {
  let localizacionCausa = document.querySelector("#causaMortal");
  let localizacionVictima = document.querySelector("#victima");

  localizacionCausa.innerHTML = causa.toUpperCase();
  localizacionVictima.innerHTML = victima.toUpperCase();
}

// Funcion restablecer Arrays
function resetAndClose() {
  cerrar("containerDN", "inicio");
  names = ['JAUME','DIEGO','ERNESTO','LUCAS','ALEXIS','CARLOS','NADIE'];
  causas = [
    "DESAFIO: MINIJUEGO DE MARIO PARTY, QUIEN PIERDA BEBE.",
    "DESAFIO: BEBE EL ULTIMO QUE SE TOQUE LA NARIZ.",
    "DESAFIO: DECIR LA FLDSMDFR",
  
    "BEBE 1 // 3 CHUPITOS",
    "ELIGE QUIEN BEBE 1 // 3 CHUPITOS",
    "ESTA RONDA LOS 'MAS 2  EQUIVALEN A  2 CHUPITOS",
    "TODO EL MUNDO BEBE 1 CHUPITO",
  
    "NO JUEGA EN LA SIGUIENTE RONDA",
    "DEBERA  ROBAR CARTAS",
    "PULSA DE 1 // 3 VECES EL BOTON",
  
    "LA DEATH NOTE JUEGA LA CARTA 0",
    "LA DEATH NOTE PONE DE 1 // 3 BOMBAS",
    "LA DEATH NOTE HACE QUE LLUEVAN CARTAS",
    "LA DEATH NOTE JUEGA EL REVERSE",
  
    "SE BANEA UN COLOR Y QUIEN LO UTILICE BEBE 1 CHUPITO",
    "SE BANEA UN NUMERO DEL 1 // 9 Y QUIEN LO UTILICE BEBE 1 CHUPITO",
    "SI ADVINIAS QUE NUMERO DEL 1 // 3 QUE HA SALIDO, ELIGES QUIEN BEBE 1 CHUPITO SINO BEBE TU",
  
    "SE JUEGAN LOS DADOS LVL1, BEBEN LOS NUMEROS IGUALES",
    "SE JUEGAN LOS DADOS LVL2, BEBEN LOS NUMEROS IGUALES Y EL NUMERO MAS ALTO",
    "SE JUEGAN LOS DADOS LVL3, BEBEN LOS NUMEROS IGUALES,  EL NUMERO MAS ALTO Y EL MAS BAJO",
    "SE JUEGAN LOS DADOS LVL4, BEBEN LOS NUMEROS IGUALES,  EL NUMERO MAS ALTO, EL MAS BAJO Y LOS PARES",
  
    "ELIGES CONTRINCANTE PARA JUGAR A LOS MINIBOLOS",
    "ELIGES CONTRINCANTE PARA JUGAR A LA CARTA MAS ALTA",
    "ELIGES CONTRINCANTE PARA JUGAR A LA CARTA MAS BAJA",
    "TODO EL MUNDO JUEGA A LA CARTA MAS ALTA Y SE APLICAN LAS NORMAS DE LOS DADOS LVL4"
  ];

  mostrarnombres();
}

//funcion MAIN
function start() {
  if ((names.length != 0) & (causas.length != 0)) {
    abrir("containerDN", "inicio");
    diamuerte();
    kill();
    imprimirEnHoja();
  }
}
