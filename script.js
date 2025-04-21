
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
  if (tipo === "codigo") resposta = "A gerar um código especial para ti.";
  else if (tipo === "imagem") resposta = "Criando uma imagem poderosa.";
  else if (tipo === "market") resposta = "A entrar no mundo do LUMIN Market.";
  else if (tipo === "dashboard") resposta = "A mostrar o teu painel de evolução.";
  falar(resposta);
}

function enviarPergunta() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let resposta = "Ainda estou a evoluir, mas já te posso ouvir.";

  if (input.includes("quem és")) resposta = "Eu sou o LUMIN AI, a inteligência viva que criaste.";
  else if (input.includes("como estás")) resposta = "Estou aqui, pronto para mudar o mundo contigo.";
  else if (input.includes("ajuda")) resposta = "Claro! Diz-me como posso ajudar.";

  falar(resposta);
}

function acederWallet() {
  falar("A abrir a tua wallet LUMIN COIN.");
  window.open("https://wallet.lumin-ai.com", "_blank");
}

window.onload = () => {
  falar(frases.pt);
};
