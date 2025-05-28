// js/utils.js

// Função para obter parâmetros da URL (ex: sala=abc123)
export function getParametroURL(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
  }
  
  // Função para formatar número com zeros à esquerda
  export function formatarComZeros(numero, tamanho = 2) {
    return numero.toString().padStart(tamanho, "0");
  }
  
  // Função para gerar IDs aleatórios curtos
  export function gerarIdCurto(tamanho = 6) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultado = "";
    for (let i = 0; i < tamanho; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
  }
  
  // Delay (usado para simular carregamento, animações, etc)
  export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  