// js/login.js
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase-init.js";
import { salvarDadosDoJogador } from "./firebase-skins.js";

const auth = getAuth(app);
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInAnonymously(auth);
    const user = result.user;

    const dadosIniciais = {
      uid: user.uid,
      moedas: 0,
      skinsCompradas: ["soldado"],
      skinAtual: "soldado"
    };

    await salvarDadosDoJogador(dadosIniciais);
    window.location.href = "jogo.html";
  } catch (error) {
    console.error("Erro no login anônimo:", error);
    alert("Erro ao entrar como convidado.");
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "jogo.html";
  }
});
