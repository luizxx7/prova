// Diário da Gratidão
function salvarGratidao() {
  const texto = document.getElementById("inputGratidao").value.trim();
  if (!texto) return;

  const lista = JSON.parse(localStorage.getItem("gratidoes") || "[]");
  lista.push({ texto, data: new Date().toLocaleDateString() });
  localStorage.setItem("gratidoes", JSON.stringify(lista));
  document.getElementById("inputGratidao").value = "";
  mostrarGratidao();
}

function mostrarGratidao() {
  const lista = JSON.parse(localStorage.getItem("gratidoes") || "[]");
  const container = document.getElementById("listaGratidao");
  container.innerHTML = "";

  lista.slice(-5).reverse().forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${item.data}</strong>: ${item.texto}`;
    container.appendChild(div);
  });
}

// Dicas de Bem-Estar
const dicas = [
  "Faça uma caminhada ao ar livre.",
  "Tire 5 minutos para respirar fundo.",
  "Escreva uma carta para você mesmo.",
  "Desconecte-se das redes sociais por 1 hora.",
  "Beba água e cuide do seu corpo.",
  "Pratique gratidão diariamente.",
];

function carregarDicas() {
  const ul = document.getElementById("listaDicas");
  dicas.forEach((dica) => {
    const li = document.createElement("li");
    li.textContent = dica;
    ul.appendChild(li);
  });
}

// Teste de Humor
document.getElementById("formHumor").addEventListener("submit", function (e) {
  e.preventDefault();
  const selecionado = document.querySelector('input[name="humor"]:checked');
  const resposta = document.getElementById("respostaHumor");

  if (selecionado) {
    resposta.textContent = `Você está se sentindo "${selecionado.value}". Obrigado por compartilhar!`;
  } else {
    resposta.textContent = "Por favor, selecione uma opção.";
  }
});

// Metas Positivas
function adicionarMeta() {
  const input = document.getElementById("metaInput");
  const texto = input.value.trim();
  if (!texto) return;

  const li = document.createElement("li");
  li.textContent = texto;
  document.getElementById("listaMetas").appendChild(li);
  input.value = "";
}

// Início
document.addEventListener("DOMContentLoaded", () => {
  mostrarGratidao();
  carregarDicas();
});

