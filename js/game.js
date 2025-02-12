/*******************************************************
 * 1. Definición del Mapa (Localizaciones)
 *******************************************************/
const locations = {
  "cuarto_celadores": {
    name: "Cuarto de Celadores",
    arrivalText: "Entras al Cuarto de Celadores: pequeño y con un olor a café rancio.",
    lookText: "Ves taquillas metálicas, un banco y una <strong>botella de agua</strong> sobre una repisa. Este es tu punto de inicio.",
    lookText2: "Nada nuevo por aquí, aunque sigues viendo la botella de agua si aún no la has tomado.",
    visited: false,
    neighbors: ["hall", "pasillo"],
    // Se agrega la botella de agua como objeto en esta localización
    items: ["botella de agua"],
    characters: []
  },
  "hall": {
    name: "Hall de Urgencias",
    arrivalText: "Accedes al Hall, donde confluye la entrada principal y otras zonas de urgencias.",
    lookText: "Un trasiego de gente y personal sanitario. Se escuchan teléfonos y avisos por megafonía. Notas varias sillas de ruedas en un lado.",
    lookText2: "Mismas caras de apuro, nada nuevo en el Hall.",
    visited: false,
    neighbors: ["cuarto_celadores", "sala_espera", "pasillo", "zona_ambulancias"],
    items: ["silla"],
    characters: []
  },
  "sala_espera": {
    name: "Sala de Espera",
    arrivalText: "Entras en la Sala de Espera, repleta de sillas y gente impaciente.",
    lookText: "La gente habla en voz baja, algunos con semblante preocupado. Al fondo, ves un acceso a la máquina de café.",
    lookText2: "La espera continúa igual, con rostros de cansancio y preocupación.",
    visited: false,
    neighbors: ["hall", "pasillo", "car", "maquina_cafe", "triaje"],
    items: [],
    characters: []
  },
  "maquina_cafe": {
    name: "Máquina de Café",
    arrivalText: "Te acercas a la máquina de café, con varias opciones para elegir.",
    lookText: "El dispensador tiene tres botones principales: Café Solo, Café Cortado e Irlandés.",
    lookText2: "La máquina sigue igual, esperando que selecciones un tipo de café.",
    visited: false,
    neighbors: ["sala_espera"],
    items: [],
    characters: []
  },
  "car": {
    name: "CAR",
    arrivalText: "Llegas al CAR, el control de acceso con su puerta de radiofrecuencia.",
    lookText: "Una mesa con un viejo monitor y la puerta automática que se abre con mando. Nadie quiere este puesto.",
    lookText2: "Nada ha cambiado: sigue siendo el lugar menos apetecible.",
    visited: false,
    neighbors: ["sala_espera"],
    items: [],
    characters: []
  },
  "zona_ambulancias": {
    name: "Zona de Ambulancias",
    arrivalText: "Sales al exterior, donde las ambulancias traen pacientes críticos. Se oyen sirenas a lo lejos.",
    lookText: "Ves un técnico descargando un paciente. Tu ayuda es imprescindible aquí.",
    lookText2: "La actividad de ambulancias sigue frenética, pero nada nuevo.",
    visited: false,
    neighbors: ["hall"],
    items: [],
    characters: []
  },
  "pasillo": {
    name: "Pasillo de Urgencias",
    arrivalText: "Entras al Pasillo principal, con diversas puertas a boxes, sala de observación, etc.",
    lookText: "El personal corre de un lado a otro, y las camillas ocupan buena parte del pasillo.",
    lookText2: "Misma imagen de estrés y bullicio. Nada destacable adicional.",
    visited: false,
    neighbors: [
      "hall", 
      "sala_espera", 
      "boxes", 
      "sala_observacion", 
      "rx", 
      "trauma", 
      "quirófano_urgencias", 
      "criticos", 
      "triaje",
      "despacho",
      "cuarto_celadores" 
    ],
    items: [],
    characters: []
  },
  "despacho": {
    name: "Despacho de la Supervisora",
    arrivalText: "Accedes al Despacho de la Supervisora, rodeado de informes y papeles.",
    lookText: "Ves a la Supervisora ordenando documentación y verificando protocolos.",
    lookText2: "Todo sigue igual de tenso y ordenado.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: []
  },
  "boxes": {
    name: "Boxes",
    arrivalText: "Accedes a los boxes de atención rápida, cada uno con una cortina y un paciente.",
    lookText: "Ves camillas con diversos pacientes, enfermeros tomando constantes, etc.",
    lookText2: "Nada nuevo, el ajetreo de siempre.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: []
  },
  "sala_observacion": {
    name: "Sala de Observación",
    arrivalText: "Cruzas a la Sala de Observación, donde varios pacientes permanecen en reposo.",
    lookText: "Hay un médico de guardia, aparentemente distraído con su programa de TV en el ordenador.",
    lookText2: "La sala sigue igual: el médico alterna su atención entre la pantalla y los pacientes.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: ["medico"]
  },
  "rx": {
    name: "Radiología (RX)",
    arrivalText: "Entras en Radiología, donde realizan placas y TAC a toda prisa.",
    lookText: "Equipos de rayos X, técnicos concentrados y luces tenues de monitores.",
    lookText2: "Nada distinto, la misma labor intensiva.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: []
  },
  "trauma": {
    name: "Sala de Trauma",
    arrivalText: "Llegas a Trauma, donde se atienden lesiones graves y fracturas.",
    lookText: "El personal va y viene con vendajes, férulas y medicamentos para el dolor.",
    lookText2: "Continúa la actividad frenética, pero sin novedades destacables.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: []
  },
  "quirófano_urgencias": {
    name: "Quirófano de Urgencias",
    arrivalText: "Entras en un quirófano preparado para emergencias inmediatas.",
    lookText: "El instrumental brilla bajo la luz blanca, y el equipo quirúrgico se mueve con precisión.",
    lookText2: "La misma sensación de tensión y profesionalidad.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: []
  },
  "criticos": {
    name: "Críticos",
    arrivalText: "Área destinada a pacientes en estado crítico, con monitores pitando y personal en alerta.",
    lookText: "Cada segundo cuenta. El personal vigila constantes y maneja emergencias.",
    lookText2: "Igual de sobrecargado, sin cambios visibles.",
    visited: false,
    neighbors: ["pasillo"],
    items: [],
    characters: []
  },
  "triaje": {
    name: "Triaje",
    arrivalText: "Accedes a la zona de Triaje, donde clasifican la urgencia de cada paciente.",
    lookText: "Varios enfermeros toman constantes, gente esperando el pase a boxes y personal controlando turnos.",
    lookText2: "Todo fluye con tensión pero sin novedades. El personal va haciendo su trabajo.",
    visited: false,
    neighbors: ["sala_espera", "pasillo"],
    items: [],
    characters: []
  }
};
/******************************************************
 * 2. Estado del Juego y acceso a elementos del DOM
 ******************************************************/
let gameState = {
  started: false,
  episode: 1,
  currentLocation: "cuarto_celadores",
  inventory: [],
  lastOutput: "",       // Último mensaje narrativo
  lastAuxOutput: "",    // Último mensaje auxiliar (ej. ayuda)
  coffeeCount: 0,       // Contador para los cafés servidos en la máquina

  /**
   * storyState controla el progreso global:
   * 0 - Evento 1 (ambulancia) sin completar.
   * 1 - Evento 1 completado (ambulancia).
   * 2 - Evento 2 (Triaje confirm) completado.
   * 3 - Habló con médico (necesidad de agua).
   * 4 - Final (agua bebida en celadores).
   */
  storyState: 0,

  // Evento aleatorio en pasillo
  supervisoraTriggerDone: false,
  // Elección en ambulancia: 'silla' o 'camilla'
  ambulanciaChoice: null
};

const outputDiv = document.getElementById("output");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

/*****************************************************
 * 3. Funciones de salida y tipeo HTML
 *****************************************************/
/**
 * typeHTML:
 *  - Recibe HTML con etiquetas (p.ej. <strong>).
 *  - Lo parsea en un contenedor temporal y luego
 *    va 'tipeando' sus nodos recursivamente en #output.
 * 
 *  speed = milisegundos de retardo entre caracteres
 *  callback = se ejecuta cuando acaba de tipear todo.
 */
function typeHTML(htmlString, destination, speed = 20, callback = null) {
  // Parseamos el HTML en un contenedor temporal
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  function typeNode(node, parent, done) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue;
      let i = 0;
      const span = document.createElement("span");
      parent.appendChild(span);

      function typeChar() {
        if (i < text.length) {
          span.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, speed);
        } else {
          done(); 
        }
      }
      typeChar();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Clonamos la etiqueta
      const newEl = document.createElement(node.nodeName);
      for (let attr of node.attributes) {
        newEl.setAttribute(attr.name, attr.value);
      }
      parent.appendChild(newEl);

      // Tipeamos hijos recursivamente
      const childNodes = Array.from(node.childNodes);
      let idx = 0;
      function processNextChild() {
        if (idx < childNodes.length) {
          typeNode(childNodes[idx], newEl, () => {
            idx++;
            processNextChild();
          });
        } else {
          done();
        }
      }
      processNextChild();
    } else {
      // Comentarios u otros nodos se ignoran
      done();
    }
  }

  // Tipear todos los nodos del tempDiv en secuencia
  const nodes = Array.from(tempDiv.childNodes);
  let current = 0;

  function processNext() {
    if (current < nodes.length) {
      typeNode(nodes[current], destination, () => {
        current++;
        processNext();
      });
    } else {
      if (callback) callback();
    }
  }
  processNext();
}

/**
 * addNarrativeOutput:
 *  - Crea un contenedor <div> en #output
 *  - Llama a typeHTML para “tipear” el HTML.
 *  - Al terminar, hace scroll
 *  - Guarda el HTML en gameState.lastOutput (para "repetir")
 */
function addNarrativeOutput(htmlText) {
  const container = document.createElement("div");
  outputDiv.appendChild(container);

  typeHTML(htmlText, container, 15, () => {
    outputDiv.scrollTop = outputDiv.scrollHeight;
  });

  gameState.lastOutput = htmlText;
}

/**
 * addAuxOutput:
 *  - Inyecta HTML de golpe (sin tipeo).
 *  - Se usa para textos de ayuda o complementarios.
 */
function addAuxOutput(htmlText) {
  const p = document.createElement("p");
  p.innerHTML = htmlText;
  outputDiv.appendChild(p);
  outputDiv.scrollTop = outputDiv.scrollHeight;
  gameState.lastAuxOutput = htmlText;
}

/** addCommandEcho */
function addCommandEcho(command) {
  const p = document.createElement("p");
  p.innerHTML = `<span style='color: #4caf50;'>> ${command}</span>`;
  outputDiv.appendChild(p);
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

/*****************************************************
 * 4. Mostrar ayuda (sin comando 'continuar')
 *****************************************************/
function showHelp() {
  const helpText = `
    <strong>Comandos disponibles:</strong><br>
    - comenzar: Inicia el turno.<br>
    - ayuda: Muestra estos comandos (no afecta a 'repetir').<br>
    - repetir: Repite el último mensaje de la historia.<br>
    - ir a [lugar]: Desplázate (ej: "ir a pasillo").<br>
    - mirar: Observa la ubicación (descripciones alternas).<br>
    - tomar [objeto]: Recoge un objeto (ej: "tomar silla" o "tomar botella de agua").<br>
    - hablar con [personaje]: Interactúa con un PNJ (ej: "hablar con medico").<br>
    - tomar cafe [solo/cortado/irlandes]: En la máquina de café.<br>
    - tomar agua / beber agua: Bebe el agua si la tienes (y estás en el Cuarto de Celadores).<br>
    - inventario: Muestra lo que llevas.<br>
    - ver localizaciones: Muestra la lista de localizaciones del mapa.<br>
  `;
  addAuxOutput(helpText);
}

/*****************************************************
 * 5. Eventos Aleatorios y Lógica de Estados
 *****************************************************/

/** 
 * Evento Aleatorio: Supervisora en Pasillo 
 * (30% de probabilidad al entrar en "pasillo")
 */
function triggerSupervisoraEvent() {
  if (!gameState.supervisoraTriggerDone && Math.random() < 0.3) {
    gameState.supervisoraTriggerDone = true;
    addNarrativeOutput("Te cruzas con la supervisora sin mascarilla en el pasillo. Te riñe: '¡Más cuidado con las mascarillas!'.<br>Ahora podrás acceder a su despacho.");
  }
}

/**
 * Evento 1: Ambulancia (storyState=0)
 * Se decide aleatoriamente silla o camilla la primera vez que entras en 'zona_ambulancias'.
 */
function triggerAmbulanciaEvent() {
  // Solo se activa si storyState=0 y no hemos definido ambulanciaChoice
  if (gameState.storyState !== 0 || gameState.ambulanciaChoice) return;
  
  let choice = Math.random() < 0.5 ? "silla" : "camilla";
  gameState.ambulanciaChoice = choice;
  if (choice === "silla") {
    addNarrativeOutput("El técnico de ambulancias grita: '¡Necesito una silla de ruedas! Ve al Hall, coge una y vuelve aquí.'");
  } else {
    addNarrativeOutput("El técnico de ambulancias indica: 'Movamos la camilla directo a Triaje. ¡Ve a Triaje para ayudar!'");
  }
}

/**
 * Check automatic progression al llegar a una localización:
 * - Resuelve Evento 1 si procede.
 * - Resuelve Evento 2 (Triaje confirm) si procede.
 */
function handleArrivalLogic(dest) {
  // Evento 1: Ambulancia
  if (gameState.storyState === 0) {
    if (gameState.ambulanciaChoice === "silla") {
      // El jugador debe tener 'silla' en inventario y llegar a 'zona_ambulancias'
      if (dest === "zona_ambulancias" && gameState.inventory.includes("silla")) {
        gameState.storyState = 1;
        addNarrativeOutput("El paciente es atendido con la silla. [Ambulancia completada => storyState=1]");
      }
    } else if (gameState.ambulanciaChoice === "camilla") {
      // Debe llegar a 'triaje'
      if (dest === "triaje") {
        gameState.storyState = 1;
        addNarrativeOutput("Trasladas al paciente en camilla hasta Triaje. [Ambulancia completada => storyState=1]");
      }
    }
  }

  // Evento 2: Confirmar Triaje (si storyState=1 y entras de nuevo en triaje)
  if (gameState.storyState === 1 && dest === "triaje") {
    gameState.storyState = 2;
    addNarrativeOutput("El personal de Triaje confirma la recepción final del paciente. [Evento 2 completado => storyState=2]");
  }

  // Por si ya se está en final
  checkEndEpisode();
}

/**
 * checkEndEpisode:
 * Si storyState=4 => final
 */
function checkEndEpisode() {
  if (gameState.storyState === 4) {
    addNarrativeOutput("Ya has completado este episodio, ¡enhorabuena!");
  }
}

/*****************************************************
 * 6. Procesar comandos
 *****************************************************/
function processCommand(command) {
  command = command.trim().toLowerCase();

  // 1) Comandos globales
  if (command === "ayuda") {
    showHelp();
    return;
  }
  if (command === "repetir") {
    if (gameState.lastOutput) {
      addNarrativeOutput(gameState.lastOutput);
    } else {
      addNarrativeOutput("No hay nada que repetir todavía.");
    }
    return;
  }
  if (command === "ver localizaciones") {
    const locKeys = Object.keys(locations);
    addNarrativeOutput("<strong>Localizaciones disponibles:</strong><br>" + locKeys.join(", "));
    return;
  }

  // 2) Antes de iniciar
  if (!gameState.started) {
    if (command === "comenzar") {
      gameState.started = true;
      // Aquí hacemos la introducción narrativa más extensa, presentando a Rodríguez y su equipo
      const introText = `
        <strong>Capítulo 1: El inicio de la Guardia</strong><br><br>
        El reloj marca las 21:00 cuando <em>Rodríguez</em> aparca su viejo coche en el parking del Hospital. 
        Está tan lleno que casi no encuentra sitio, lo que ya presagia una noche ajetreada.
        <br><br>
        Al bajarse, saluda con un leve gesto a <strong>Marco</strong>, su compañero hablador y siempre 
        pendiente de cualquier cirujana que pase. Junto a ellos aparece <strong>Sergio</strong>, el bromista 
        incansable que comenta algo sobre sus noches de fiesta al ritmo de la música bacalao.
        <br><br>
        A unos metros, <strong>Fernando</strong> entra apresurado, tan independiente como siempre, 
        mientras <strong>Marta</strong> se queja de tener que cubrir el CAR otra vez.
        <br><br>
        Al fondo se vislumbra a <strong>Lorenzo</strong>, el guardia de seguridad 
        que, con su mirada perdida, se pregunta si esta noche será tan dura como la anterior.
        <br><br>
        Como un suspiro, tú, Rodríguez entras al servicio de Urgencias. El bullicio de gente, las luces tenues 
        y el incesante sonido de teléfonos conforman la banda sonora de una noche que promete historias. 
        <br><br>
        ...
        <br><br>
        Te encuentras en el <strong>Cuarto de Celadores</strong>, tu punto de partida. 
        Puede que quieras <em>mirar alrededor</em> para orientarte, o usar <em>ir a hall</em> 
        para moverte a otro lugar. 
        <br><br>
        ¡Prepárate! La guardia apenas comienza. Escribe <em>mirar</em> o 
        <em>ayuda</em> para más detalles.
      `;
      addNarrativeOutput(introText);
    } else {
      addNarrativeOutput("Debes escribir 'comenzar' para iniciar o 'ayuda' para ver los comandos disponibles.");
    }
    return;
  }

  // 3) Comando "ir a [dest]"
  if (command.startsWith("ir a ")) {
    let dest = command.substring(5).trim();
    let currentLoc = locations[gameState.currentLocation];

    if (!currentLoc.neighbors.includes(dest)) {
      addNarrativeOutput("No puedes ir directamente a ese lugar desde aquí.");
      return;
    }

    if (dest === "despacho" && !gameState.supervisoraTriggerDone) {
      addNarrativeOutput("El despacho está cerrado con llave... Hasta que no veas a la supervisora, no puedes entrar.");
      return;
    }

    gameState.currentLocation = dest;
    let newLoc = locations[dest];
    addNarrativeOutput(newLoc.arrivalText);

    // Posible evento supervisora
    if (dest === "pasillo") {
      triggerSupervisoraEvent();
    }
    // Evento ambulancia
    if (dest === "zona_ambulancias") {
      triggerAmbulanciaEvent();
    }
    // Lógica de completado (Evento 1 y 2)
    handleArrivalLogic(dest);

    return;
  }

  // 4) Comando "mirar"
  if (command === "mirar" || command === "mirar alrededor") {
    let loc = locations[gameState.currentLocation];
    if (!loc.visited) {
      addNarrativeOutput(loc.lookText);
      loc.visited = true;
    } else {
      addNarrativeOutput(loc.lookText2);
    }
    return;
  }

  // 5) Comando "tomar cafe [tipo]"
  if (command.startsWith("tomar cafe ")) {
    if (gameState.currentLocation !== "maquina_cafe") {
      addNarrativeOutput("No hay ninguna máquina de café aquí.");
      return;
    }
    let tipoCafe = command.substring(10).trim();
    if (["solo", "cortado", "irlandes"].includes(tipoCafe)) {
      if (gameState.coffeeCount < 3) {
        gameState.coffeeCount++;
        addNarrativeOutput(`Te sirves un café ${tipoCafe}. Te sientes un poco más despierto.`);
      } else {
        addNarrativeOutput("Te has pasado de café, deberías volver a trabajar o te dará un infarto.");
      }
    } else {
      addNarrativeOutput("La máquina solo ofrece café solo, cortado o irlandés.");
    }
    return;
  }

  // 6) Comando "tomar X"
  if (command.startsWith("tomar ")) {
    let item = command.substring(6).trim();
    let loc = locations[gameState.currentLocation];
    if (loc.items.includes(item)) {
      loc.items = loc.items.filter(i => i !== item);
      gameState.inventory.push(item);
      addNarrativeOutput(`Has tomado ${item} y ahora está en tu inventario.`);
    } else {
      addNarrativeOutput(`No ves ningún '${item}' aquí.`);
    }
    return;
  }

  // 7) Comando "hablar con X"
  if (command.startsWith("hablar con ")) {
    let person = command.substring(11).trim();
    let loc = locations[gameState.currentLocation];
    if (!loc.characters.includes(person)) {
      addNarrativeOutput(`No ves a ${person} aquí.`);
      return;
    }

    // Caso: medico en sala_observacion
    if (person === "medico" && gameState.currentLocation === "sala_observacion") {
      if (gameState.storyState < 2) {
        addNarrativeOutput("El médico te ignora, enfrascado en su programa. Parece que aún no has completado lo anterior.");
      } else if (gameState.storyState === 2) {
        gameState.storyState = 3;
        addNarrativeOutput("El médico te saluda: 'Gracias por gestionar todo en Triaje. Menuda noche...' <br>Te comenta que pareces cansado y con sed, deberías volver al Cuarto de Celadores.");
      } else if (gameState.storyState >= 3) {
        addNarrativeOutput("El médico ya te ha dado su consejo... Ve a beber agua si no lo has hecho todavía.");
      }
    } else {
      addNarrativeOutput(`Hablas con ${person}, pero no sucede nada especial.`);
    }
    return;
  }

  // 8) Comando "tomar agua" o "beber agua" (Evento final)
  if (command === "tomar agua" || command === "beber agua") {
    if (gameState.currentLocation === "cuarto_celadores") {
      if (gameState.storyState === 3) {
        // El jugador beberá agua y fin
        gameState.storyState = 4;
        addNarrativeOutput("Bebes el agua y alivias tu sed. El episodio llega a su fin. ¡Enhorabuena!");
      } else if (gameState.storyState < 3) {
        addNarrativeOutput("No tienes tanta sed todavía. Quizá debas atender primero otros asuntos.");
      } else {
        addNarrativeOutput("Ya completaste el episodio, bebe tranquilo.");
      }
    } else {
      addNarrativeOutput("Aquí no hay agua disponible. Debes volver al Cuarto de Celadores.");
    }
    return;
  }

  // 9) Comando "inventario"
  if (command === "inventario") {
    if (gameState.inventory.length === 0) {
      addNarrativeOutput("No llevas ningún objeto ahora mismo.");
    } else {
      addNarrativeOutput("Llevas: " + gameState.inventory.join(", "));
    }
    return;
  }

  // 10) Si no se reconoce
  addNarrativeOutput("No entiendo ese comando. Escribe 'ayuda' para ver los comandos disponibles.");
}

/*****************************************************
 * 7. Eventos de Interfaz
 *****************************************************/
sendBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (input !== "") {
    addCommandEcho(input);
    processCommand(input);
    userInput.value = "";
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

/*****************************************************
 * 8. Mensaje inicial
 *****************************************************/
// Reemplazamos el mensaje corto por uno "en blanco" o algo mínimo, 
// pues ya escribiremos la introducción extensa al "comenzar".
addNarrativeOutput(
  "Bienvenido a <strong>Lío en el Hospital</strong>.<br>Escribe <em>'comenzar'</em> para iniciar tu turno."
);
