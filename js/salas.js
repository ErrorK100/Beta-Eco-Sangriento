// js/sala.js
import { getDatabase, ref, push, onValue, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app } from "./firebase-init.js";

const db = getDatabase(app);
const auth = getAuth();

const criarSalaBtn = document.getElementById("criarSalaBtn");
const listaSalas = document.getElementById("listaSalas");

criarSalaBtn.addEventListener("click", async () => {
  const user = auth.currentUser;
  if (!user) return alert("Você precisa estar logado.");

  const novaSalaRef = push(ref(db, "salas"));
  const salaId = novaSalaRef.key;

  const dadosSala = {
    host: user.uid,
    jogadores: {
      [user.uid]: true
    },
    status: "esperando"
  };

  await set(novaSalaRef, dadosSala);
  window.location.href = `jogo.html?sala=${salaId}`;
});

function carregarSalas() {
  onValue(ref(db, "salas"), (snapshot) => {
    listaSalas.innerHTML = "";

    snapshot.forEach((child) => {
      const salaId = child.key;
      const sala = child.val();

      const item = document.createElement("div");
      item.className = "sala-item";
      item.textContent = `Sala de ${sala.host.substring(0, 6)}...`;

      const entrarBtn = document.createElement("button");
      entrarBtn.textContent = "Entrar";
      entrarBtn.onclick = async () => {
        const user = auth.currentUser;
        if (!user) return alert("Você precisa estar logado.");

        await set(ref(db, `salas/${salaId}/jogadores/${user.uid}`), true);
        window.location.href = `jogo.html?sala=${salaId}`;
      };

      item.appendChild(entrarBtn);
      listaSalas.appendChild(item);
    });
  });
}

carregarSalas();
