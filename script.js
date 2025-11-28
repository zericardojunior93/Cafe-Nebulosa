// =========================================================
// JS BÁSICO PARA PROJETOS DE INICIANTE (script.js)
// =========================================================

// 1. CONFIRMAÇÃO DE CARREGAMENTO
// Este comando é a primeira coisa que rodará. Use para verificar se o arquivo JS
// está conectado corretamente ao seu HTML (use F12 para ver o console do navegador).
console.log("Olá, José Ricardo! O script.js do Café Nebulosa foi carregado com sucesso.");


// 2. FUNÇÃO DE INTERAÇÃO SIMPLES (CLIQUE NO BOTÃO)
// Esta função é um exemplo de como fazer o site reagir a algo (como um clique).
// Você precisará ter um botão no seu HTML com o atributo 'onclick="mudarCorDoTexto()"'
function mudarCorDoTexto() {
    // Encontra o elemento que tem o ID 'mensagem-inicial'
    let elemento = document.getElementById("mensagem-inicial");
    
    // Verifica se o elemento foi encontrado para evitar erros
    if (elemento) {
        // Altera a cor do texto para o laranja de destaque
        elemento.style.color = "#FF9900"; 
        
        // Altera o texto do elemento
        elemento.innerHTML = "O JavaScript alterou este texto e a cor!";
        
        console.log("Interação JS concluída.");
    } else {
        console.log("Erro: Elemento com ID 'mensagem-inicial' não encontrado.");
    }
}


// 3. CÓDIGO QUE RODA APÓS O CARREGAMENTO TOTAL DA PÁGINA
// Use esta estrutura se quiser que algo aconteça assim que a página estiver pronta.
window.onload = function() {
    console.log("A página está totalmente pronta para interação.");
    // Exemplo: Você pode chamar a função 'mudarCorDoTexto()' aqui para rodar
    // automaticamente no carregamento, se quiser.
};