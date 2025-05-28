// js/loja.js
import { obterDadosDoJogador, salvarDadosDoJogador } from './firebase-skins.js';

const skins = [
  { nome: "soldado", preco: 0 },
  { nome: "tatico", preco: 100 },
  { nome: "sniper", preco: 200 }
];

const lojaContainer = document.getElementById("lojaContainer");
const saldoSpan = document.getElementById("saldo");

async function carregarLoja() {
  const dados = await obterDadosDoJogador();
  const skinsCompradas = dados?.skinsCompradas || ["soldado"];
  const saldo = dados?.moedas || 0;
  const skinAtual = dados?.skinAtual || "soldado";

  saldoSpan.textContent = saldo;

  skins.forEach(skin => {
    const card = document.createElement("div");
    card.className = "skin-card";

    const imagem = document.createElement("img");
    imagem.src = `assets/skins/${skin.nome}.png`;
    imagem.alt = skin.nome;

    const nome = document.createElement("p");
    nome.textContent = skin.nome;

    const botao = document.createElement("button");

    if (skinsCompradas.includes(skin.nome)) {
      botao.textContent = skin.nome === skinAtual ? "Selecionado" : "Selecionar";
      botao.disabled = skin.nome === skinAtual;
      botao.addEventListener("click", async () => {
        await salvarDadosDoJogador({ ...dados, skinAtual: skin.nome });
        location.reload();
      });
    } else {
      botao.textContent = `Comprar (${skin.preco} moedas)`;
      botao.disabled = skin.preco > saldo;
      botao.addEventListener("click", async () => {
        if (saldo >= skin.preco) {
          const novoSaldo = saldo - skin.preco;
          skinsCompradas.push(skin.nome);
          await salvarDadosDoJogador({
            ...dados,
            moedas: novoSaldo,
            skinsCompradas,
            skinAtual: skin.nome
          });
          location.reload();
        } else {
          alert("Saldo insuficiente.");
        }
      });
    }

    card.appendChild(imagem);
    card.appendChild(nome);
    card.appendChild(botao);
    lojaContainer.appendChild(card);
  });
}

carregarLoja();
