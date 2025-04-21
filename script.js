
const frases = {
  pt: "Bem-vindo ao LUMIN AI. A inteligência verdadeira.",
  en: "Welcome to LUMIN AI. The true intelligence."
};

function falar(texto) {
  const utter = new SpeechSynthesisUtterance(texto);
  utter.lang = "pt-PT";
  utter.rate = 1;
  utter.pitch = 1;
  speechSynthesis.speak(utter);
}

function mudarIdioma(lang) {
  const frase = frases[lang];
  document.getElementById("frase").innerText = frase;
  falar(frase);
}

function responder(tipo) {
  let resposta = "";
  if (tipo === "codigo") resposta = "Vou gerar um código agora.";
  else if (tipo === "imagem") resposta = "A criar uma imagem única.";
  else if (tipo === "market") resposta = "Bem-vindo ao mercado LUMIN.";
  else if (tipo === "dashboard") resposta = "Aqui está o teu painel.";
  falar(resposta);
}

function enviarPergunta() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let resposta = "Desculpa, ainda estou a aprender.";

  if (input.includes("quem és")) resposta = "Eu sou o LUMIN, a inteligência viva.";
  else if (input.includes("como estás")) resposta = "Estou sempre pronto para te ajudar.";
  else if (input.includes("ajuda")) resposta = "Claro! Diz-me o que precisas.";

  falar(resposta);
}
