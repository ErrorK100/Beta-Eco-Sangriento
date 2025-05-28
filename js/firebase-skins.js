// js/firebase-skins.js
import { db } from './firebase-config.js';
import { ref, get, set, update, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getUserId } from './firebase-user.js';

export async function obterDadosDoJogador() {
  const userId = getUserId();
  const snapshot = await get(child(ref(db), `usuarios/${userId}`));
  return snapshot.exists() ? snapshot.val() : null;
}

export async function comprarSkin(nomeSkin, preco) {
  const userId = getUserId();
  const userRef = ref(db, `usuarios/${userId}`);
  const dados = await obterDadosDoJogador();

  if (dados.skins.includes(nomeSkin)) {
    return { sucesso: false, mensagem: "Skin já adquirida." };
  }

  if (dados.moedas >= preco) {
    const novasSkins = [...dados.skins, nomeSkin];
    const novasMoedas = dados.moedas - preco;

    await update(userRef, {
      skins: novasSkins,
      moedas: novasMoedas
    });

    return { sucesso: true, mensagem: "Skin comprada com sucesso!" };
  } else {
    return { sucesso: false, mensagem: "Moedas insuficientes." };
  }
}

export async function selecionarSkin(nomeSkin) {
  const dados = await obterDadosDoJogador();
  if (!dados.skins.includes(nomeSkin)) {
    return { sucesso: false, mensagem: "Você não possui essa skin." };
  }

  const userId = getUserId();
  await update(ref(db, `usuarios/${userId}`), {
    skinAtual: nomeSkin
  });

  return { sucesso: true, mensagem: "Skin selecionada!" };
}
