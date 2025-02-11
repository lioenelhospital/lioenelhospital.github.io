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
     * 1 - Evento 1 completado. (Ya resolvió ambulancia)
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
   * 3. Funciones de salida
   *****************************************************/
  function addNarrativeOutput(text) {
    const p = document.createElement("p");
    p.innerHTML = text;
    outputDiv.appendChild(p);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    gameState.lastOutput = text; 
  }
  
  function addAuxOutput(text) {
    const p = document.createElement("p");
    p.innerHTML = text;
    outputDiv.appendChild(p);
    outputDiv.scrollTop = outputDiv.scrollHeight;
    gameState.lastAuxOutput = text;
  }
  
  function addCommandEcho(command) {
    const p = document.createElement("p");
    p.innerHTML = `<span style='color: #4caf50;'>> ${command}</span>`;
    outputDiv.appendChild(p);
    outputDiv.scrollTop = outputDiv.scrollHeight;
  }
  
  /*****************************************************
   * 4. Mostrar ayuda (sin comando "continuar")
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
      - tomar agua / beber agua: Bebe el agua de la botella (debes tenerla en el inventario y estar en el Cuarto de Celadores).<br>
      - inventario: Muestra lo que llevas.<br>
      - ver localizaciones: Muestra la lista de localizaciones disponibles (usa exactamente la notación interna, por ejemplo, <em>cuarto_celadores</em>).<br>
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
  
    // Comandos globales
    if (command === "ayuda") {
      showHelp();
      return;
    }
    if (command === "repetir") {
      addNarrativeOutput(gameState.lastOutput);
      return;
    }
    // Nuevo comando para mostrar las localizaciones disponibles
    if (command === "ver localizaciones") {
      const locKeys = Object.keys(locations);
      addNarrativeOutput("<strong>Localizaciones disponibles:</strong><br>" + locKeys.join(", "));
      return;
    }
  
    // Antes de iniciar
    if (!gameState.started) {
      if (command === "comenzar") {
        gameState.started = true;
        addNarrativeOutput("Inicias tu turno en el Cuarto de Celadores. El caos de urgencias te espera.");
        addNarrativeOutput("Escribe 'ayuda' para ver los comandos, o 'ir a hall' para salir.");
      } else {
        addNarrativeOutput("Debes escribir 'comenzar' para iniciar o 'ayuda' para ver los comandos disponibles.");
      }
      return;
    }
  
    // Comando "ir a [dest]"
    if (command.startsWith("ir a ")) {
      let dest = command.substring(5).trim();
      let currentLoc = locations[gameState.currentLocation];
  
      // Verificamos que sea vecino
      if (!currentLoc.neighbors.includes(dest)) {
        addNarrativeOutput("No puedes ir directamente a ese lugar desde aquí.");
        return;
      }
  
      // Despacho cerrado si no ha salido la supervisora
      if (dest === "despacho" && !gameState.supervisoraTriggerDone) {
        addNarrativeOutput("El despacho está cerrado con llave... Hasta que no veas a la supervisora, no puedes entrar.");
        return;
      }
  
      // Cambiamos ubicación
      gameState.currentLocation = dest;
      let newLoc = locations[dest];
      addNarrativeOutput(newLoc.arrivalText);
  
      // Eventos al llegar:
      // 1) Si entras en pasillo => posible supervisora
      if (dest === "pasillo") {
        triggerSupervisoraEvent();
      }
      // 2) Si entras en zona_ambulancias y storyState=0 => define ambulanciaChoice
      if (dest === "zona_ambulancias") {
        triggerAmbulanciaEvent();
      }
      // 3) Lógica de completado (Evento 1 y 2)
      handleArrivalLogic(dest);
  
      return;
    }
  
    // Comando "mirar"
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
  
    // >>>> Bloque específico para la máquina de café <<<<
    if (command.startsWith("tomar cafe ")) {
      if (gameState.currentLocation !== "maquina_cafe") {
        addNarrativeOutput("No hay ninguna máquina de café aquí.");
        return;
      }
      let tipoCafe = command.substring(10).trim();
      if (["solo", "cortado", "irlandes"].includes(tipoCafe)) {
        // Controlamos la cantidad de cafés servidos
        if (gameState.coffeeCount < 3) {
          gameState.coffeeCount++;
          addNarrativeOutput(`Te sirves un café ${tipoCafe}. Te sientes un poco más despierto.`);
        } else {
          addNarrativeOutput("Te has pasado de café, deberías volver a trabajar.");
        }
      } else {
        addNarrativeOutput("La máquina solo ofrece café solo, cortado o irlandés.");
      }
      return;
    }
  
    // >>>> Bloque genérico para "tomar X" <<<<
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
  
    // Comando "hablar con X"
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
  
    // Comando "tomar agua" o "beber agua" (Evento 4)
    if (command === "tomar agua" || command === "beber agua") {
      if (gameState.currentLocation === "cuarto_celadores") {
        if (gameState.storyState === 3) {
          if (gameState.inventory.includes("botella de agua")) {
            gameState.inventory = gameState.inventory.filter(item => item !== "botella de agua");
            gameState.storyState = 4;
            addNarrativeOutput("Bebes el agua de la botella y alivias tu sed. El episodio llega a su fin. ¡Enhorabuena!");
          } else {
            addNarrativeOutput("No tienes una botella de agua para beber. Busca una en el Cuarto de Celadores.");
          }
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
  
    // Comando "inventario"
    if (command === "inventario") {
      if (gameState.inventory.length === 0) {
        addNarrativeOutput("No llevas ningún objeto ahora mismo.");
      } else {
        addNarrativeOutput("Llevas: " + gameState.inventory.join(", "));
      }
      return;
    }
  
    // Si no se reconoce
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
   * 8. Mensaje inicial (respetando tu texto exacto)
   *****************************************************/
  addNarrativeOutput(
    "Para comenzar tu turno, escribe <strong>'comenzar'</strong> y pulsa Enviar.<br>"
  );
  