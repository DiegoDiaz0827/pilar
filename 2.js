// 2.js

const mensajes = [
  {
    pregunta: "¿Qué energía, espacio, conciencia y elección puedo ser para recibir más dinero de lo que jamás imaginé, con total facilidad?",
    respuesta: "La energía de la posibilidad infinita, el espacio de la permisión y la elección de recibirlo todo. ✨"
  },
  {
    pregunta: "¿Qué tomaría para que el dinero me busque a mí como yo busco el café en las mañanas?",
    respuesta: "Convertirte en una energía irresistible para él, llena de gozo y gratitud. ☕️💖"
  },
  {
    pregunta: "Si no tuviera ningún punto de vista sobre el dinero, ¿cuánto podría recibir hoy?",
    respuesta: "Una cantidad ilimitada. ¡Tus puntos de vista crean tus límites! 🚀"
  },
  {
    pregunta: "¿Y si el dinero fuera mi amante, cómo le estaría tratando?",
    respuesta: "Con amor, deseo, atención y gozo... y él te correspondería apasionadamente. 💞"
  },
  {
    pregunta: "¿Qué está creando escasez en mi vida que podría soltar ahora mismo?",
    respuesta: "Todos los juicios, miedos y creencias limitantes que has hecho tuyos. ¡Suéltalos! 🎈"
  },
  {
    pregunta: "¿Qué es el dinero para mí... y de quién aprendí eso?",
    respuesta: "Es una energía de intercambio. Revisa las creencias de tu familia y elige las tuyas. 🌿"
  },
  {
    pregunta: "¿Qué juicios estoy usando para limitar el dinero que puedo elegir?",
    respuesta: "Los juicios de 'no merezco', 'es difícil', 'es malo'. ¡Destrúyelos y descréalos ahora! 💥"
  },
  {
    pregunta: "¿Qué me impide reconocer que ya soy una energía de riqueza?",
    respuesta: "La creencia de que la riqueza está fuera de ti, cuando en realidad es tu estado natural. 👑"
  },
  {
    pregunta: "¿Cuánto más dinero podría tener si me atreviera a disfrutar sin culpa?",
    respuesta: "Infinito. La culpa repele, el gozo y el disfrute atraen. 🎉"
  },
  {
    pregunta: "¿Qué posibilidades infinitas con el dinero están disponibles hoy que aún no he reconocido?",
    respuesta: "Más de las que puedes contar. ¡Abre los ojos a la magia y pregunta por ellas! 🔮"
  },
  {
    pregunta: "¿Qué debo dejar de controlar para que el dinero fluya con más gozo?",
    respuesta: "El cómo, el cuándo y el dónde. Suelta el control y permite que el universo te sorprenda. 🌊"
  },
  {
    pregunta: "¿Estoy dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
    respuesta: "Solo tú tienes la respuesta. Di 'SÍ' en voz alta y mira lo que sucede. 😉"
  },
  {
    pregunta: "¿Qué estoy evitando o defendiendo que me impide ser millonaria?",
    respuesta: "Quizás el juicio de otros o tu 'zona de confort'. ¡Es hora de expandirse! 🤸‍♀️"
  },
  {
    pregunta: "¿Qué más es posible con el dinero que nunca nadie me enseñó?",
    respuesta: "Crear, jugar, contribuir y cambiar el mundo con facilidad y alegría. 🌎"
  },
  {
    pregunta: "¿Qué pasaría si dejara de rechazar ser rica?",
    respuesta: "Permitirías que la abundancia que ya eres se manifieste en tu realidad. 💎"
  },
  {
    pregunta: "¿Y si el dinero no fuera un problema… qué elegiría hoy?",
    respuesta: "Esa elección es la clave que desbloquea la abundancia que buscas. ¿Cuál es? 🤔"
  },
  {
    pregunta: "¿Qué estoy copiando de mi familia sobre el dinero que ya no me sirve?",
    respuesta: "Sus miedos, sus luchas y sus limitaciones. Es tiempo de elegir diferente. ✂️"
  },
  {
    pregunta: "¿Qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
    respuesta: "Que lo pidas y estés dispuesto(a) a recibirlo así. ¡Pídelo! ✨"
  },
  {
    pregunta: "¿Qué nivel de gratitud y gozo puedo ser hoy para duplicar mis ingresos?",
    respuesta: "Un nivel expansivo, que vibre tan alto que el dinero no pueda evitar encontrarte. 😄"
  },
  {
    pregunta: "¿Cuánto dinero estoy dispuesto(a) a tener sin perder mi esencia?",
    respuesta: "Todo el que quieras. El dinero solo magnifica lo que ya eres. ¡Sé una esencia grandiosa! 💖"
  },
  {
    pregunta: "¿Qué conciencia del dinero estoy listo(a) para recibir hoy?",
    respuesta: "La conciencia de que es una herramienta divertida y una energía disponible para ti. 🧠💡"
  },
  {
    pregunta: "¿Qué energía puedo ser para atraer clientes que me paguen con gozo?",
    respuesta: "La energía de la confianza en tu valor y el gozo por lo que haces. 🤝"
  },
  {
    pregunta: "¿Qué más puedo vender, crear o elegir que sea una contribución financiera para mí y para el mundo?",
    respuesta: "Tus talentos únicos, tus ideas brillantes y tu magia personal. ¡El mundo lo espera! 🎁"
  },
  {
    pregunta: "¿Qué estoy haciendo más difícil de lo que realmente es con el dinero?",
    respuesta: "Probablemente todo. ¿Y si eliges la facilidad en su lugar? 🍃"
  },
  {
    pregunta: "¿Qué parte de mi magia estoy ignorando que crearía más dinero de inmediato?",
    respuesta: "Esa parte juguetona y creativa que cree que todo es posible. ¡Úsala! 🧙‍♀️"
  },
  {
    pregunta: "¿Qué me impide ser el imán que realmente soy para el dinero?",
    respuesta: "Los polos opuestos que creas con tus dudas y juicios. ¡Invierte la polaridad! 🧲"
  },
  {
    pregunta: "¿Qué tomaría para elegir más dinero sin tener que justificarlo?",
    respuesta: "Reconocer que mereces recibirlo simplemente porque existes. Sin peros. 💯"
  },
  {
    pregunta: "¿Y si el dinero no fuera serio ni pesado, cómo sería?",
    respuesta: "Sería un juego divertido, una aventura emocionante y un flujo constante de energía. 🎈"
  },
  {
    pregunta: "¿Qué riqueza energética está disponible para mí ahora mismo?",
    respuesta: "Toda la riqueza del universo está a tu disposición. Solo tienes que sintonizar con ella. 📡"
  },
  {
    pregunta: "¿Qué puedo ser o hacer hoy que cree más dinero ahora y para toda la eternidad?",
    respuesta: "Ser la energía de la gratitud y la acción inspirada. ¡Elige algo que te dé alegría! 🌟"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  mostrarMensaje();
});

function mostrarMensaje() {
  const random = mensajes[Math.floor(Math.random() * mensajes.length)];

  const mensajeDiv = document.getElementById("mensaje");
  const respuestaDiv = document.getElementById("respuesta");
  const footer = document.getElementById("footer-respuesta");

  // Mostrar la pregunta dentro de la bola
  mensajeDiv.innerHTML = `💫 <strong>${random.pregunta}</strong>`;
  mensajeDiv.classList.add("mostrar");

  // Mostrar la respuesta en el footer
  respuestaDiv.textContent = random.respuesta;
  footer.classList.add("mostrar");

  // Sacudir la bola
  const bola = document.getElementById("bola");
  bola.classList.remove("sacudir"); // reinicia animación si ya está
  void bola.offsetWidth; // truco para reiniciar animación
  bola.classList.add("sacudir");

  // Eliminar clase sacudir después de 1 segundo
  setTimeout(() => bola.classList.remove("sacudir"), 1000);
}