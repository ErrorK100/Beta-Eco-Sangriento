# 🎮 Eco Sangriento

**Eco Sangriento** é um jogo de tiro PvP em desenvolvimento, inspirado em grandes títulos mobile e de PC como Free Fire e Call of Duty Mobile. O foco está em oferecer uma experiência realista, dinâmica e multiplataforma com modos como Battle Royale, 1x1, 2x2, entre outros.

---

## 📌 Funcionalidades já implementadas

- ✅ Tela de login com opção de convidado (Firebase)
- ✅ Seleção de nome de usuário
- ✅ Tela de carregamento
- ✅ Sistema de partidas (automáticas e salas privadas)
- ✅ Loja com skins e sistema de moedas
- ✅ HUD de combate funcional
- ✅ Mapas aleatórios: Cidade e Floresta
- ✅ Gráficos com três níveis: Suave, Padrão e Alto
- ✅ Integração com Firebase para autenticação e dados

---

## 🚧 Em desenvolvimento

- 🎯 Sistema de progressão e perfil do jogador
- 🧠 Anti-Cheat robusto
- 💬 Chat e comunicação entre jogadores
- 🔊 Efeitos sonoros e trilha sonora
- ✨ Efeitos visuais (partículas, sangue, explosões)

---

## 🧪 Tecnologias utilizadas

- HTML5, CSS3, JavaScript
- Firebase (Authentication, Realtime Database)
- Canvas 2D / WebGL (futuramente)
- Mobile First + PC Compatibility

---

## 🗂️ Estrutura do Projeto

```

eco-sangriento/
├── index.html           # Tela inicial
├── loja.html            # Loja de skins
├── jogo.html            # Arena de combate
├── css/
│   ├── global.css
│   ├── jogo.css
│   └── efeitos.css
├── js/
│   ├── auth.js
│   ├── firebaseConfig.js
│   ├── login.js
│   ├── loja.js
│   ├── sala.js
│   └── utils.js
├── assets/
│   ├── img/
│   │   ├── logo.png
│   │   ├── bg-cidade.jpg
│   │   ├── bg-floresta.jpg
│   │   └── icones de armas/skins
│   └── audio/
│       ├── tiro.mp3
│       └── clique.mp3

````

---

## 🛠️ Como rodar localmente

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/eco-sangriento.git ```


2. Abra o arquivo `index.html` com um navegador moderno.

3. Para rodar com Firebase funcionando:

   * Crie um projeto no [Firebase](https://console.firebase.google.com/)
   * Configure o `firebaseConfig.js` com suas credenciais

4. Ou use um servidor local (ex: Live Server no VSCode ou Python):

   ```bash
   python -m http.server
   ```

---

## 🚀 Objetivo final

Criar um jogo completo e competitivo, com sistema anti-cheat, matchmaking real e progressão de jogadores — ideal para aprendizado, testes e possível publicação.

---

## 📬 Contribuições

Ideias, bugs e melhorias são sempre bem-vindas! Abra uma [issue](https://github.com/seu-usuario/eco-sangriento/issues) ou envie um pull request.

---

## 🧑‍💻 Autor

**SleepXploit**
Projeto criado com foco em aprendizado e exploração do desenvolvimento de jogos + sistemas de segurança e anti-cheat.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

```
