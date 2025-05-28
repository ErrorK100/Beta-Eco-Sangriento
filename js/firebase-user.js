// js/firebase-user.js
import { db } from './firebase-config.js';
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

let userId = localStorage.getItem("eco_user_id");

export async function loginComoConvidado(username) {
  if (!userId) {
    userId = gerarIdUnico();
    localStorage.setItem("eco_user_id", userId);

    const userRef = ref(db, `usuarios/${userId}`);
    await set(userRef, {
      nome: username,
      moedas: 500,
      skinAtual: "soldado",
      skins: ["soldado"],
      criadoEm: new Date().toISOString()
    });

    console.log(`Novo usuário criado: ${userId}`);
  } else {
    const snapshot = await get(child(ref(db), `usuarios/${userId}`));
    if (!snapshot.exists()) {
      localStorage.removeItem("eco_user_id");
      return loginComoConvidado(username);
    } else {
      console.log(`Usuário existente: ${userId}`);
    }
  }

  return userId;
}

export function getUserId() {
  return userId;
}

function gerarIdUnico() {
  return 'eco_' + Math.random().toString(36).substring(2, 12);
}
