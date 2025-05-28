// js/jogo.js
import { obterDadosDoJogador } from './firebase-skins.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let jogador = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  largura: 40,
  altura: 40,
  skin: null,
  cor: "blue",
  velocidade: 5
};

let tiros = [];

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
    case "ArrowUp":
      jogador.y -= jogador.velocidade;
      break;
    case "s":
    case "ArrowDown":
      jogador.y += jogador.velocidade;
      break;
    case "a":
    case "ArrowLeft":
      jogador.x -= jogador.velocidade;
      break;
    case "d":
    case "ArrowRight":
      jogador.x += jogador.velocidade;
      break;
  }
});

canvas.addEventListener("click", (e) => {
  const angulo = Math.atan2(e.clientY - jogador.y, e.clientX - jogador.x);
  tiros.push({
    x: jogador.x,
    y: jogador.y,
    dx: Math.cos(angulo) * 8,
    dy: Math.sin(angulo) * 8
  });
});

function atualizarTiros() {
  for (let i = 0; i < tiros.length; i++) {
    tiros[i].x += tiros[i].dx;
    tiros[i].y += tiros[i].dy;
  }

  // Remover tiros fora da tela
  tiros = tiros.filter(tiro => (
    tiro.x > 0 && tiro.x < canvas.width &&
    tiro.y > 0 && tiro.y < canvas.height
  ));
}

function desenharJogador() {
  if (jogador.skin) {
    ctx.drawImage(jogador.skin, jogador.x - 20, jogador.y - 20, 40, 40);
  } else {
    ctx.fillStyle = jogador.cor;
    ctx.fillRect(jogador.x - 20, jogador.y - 20, jogador.largura, jogador.altura);
  }
}

function desenharTiros() {
  ctx.fillStyle = "yellow";
  for (let tiro of tiros) {
    ctx.beginPath();
    ctx.arc(tiro.x, tiro.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function loopDoJogo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  atualizarTiros();
  desenharTiros();
  desenharJogador();
  requestAnimationFrame(loopDoJogo);
}

async function carregarSkin() {
  const dados = await obterDadosDoJogador();
  const skinAtual = dados?.skinAtual || "soldado";
  const imagem = new Image();
  imagem.src = `assets/skins/${skinAtual}.png`;
  imagem.onload = () => {
    jogador.skin = imagem;
    loopDoJogo();
  };
}

carregarSkin();
