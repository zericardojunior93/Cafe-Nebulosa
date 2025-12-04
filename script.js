// O QUE EU FAÇO AQUI É SÓ PRA VER SE O ARQUIVO JS TÁ FUNCIONANDO

// 1. CONFIRMAÇÃO SE O JS TÁ LIGADO
// O primeiro comando a rodar. Se essa mensagem aparecer no F12 (Console), deu certo.
console.log("Olá! O script.js do Café Nebulosa foi carregado com sucesso.");


// 2. FUNÇÃO PARA FAZER O SITE REAGIR A UM CLIQUE
// Eu chamo essa função (mudarCorDoTexto) quando alguém clicar em um botão específico no HTML.
function mudarCorDoTexto() {
    // Procuro no HTML a caixa que tem o ID 'mensagem-inicial'
    let elemento = document.getElementById("mensagem-inicial");
    
    // Vejo se a caixa (elemento) existe pra não dar erro
    if (elemento) {
        // Mudo a cor do texto da caixa pra laranja
        elemento.style.color = "#FF9900"; 
        
        // Mudo o que está escrito dentro da caixa
        elemento.innerHTML = "O JavaScript alterou este texto e a cor!";
        
        console.log("Interação JS concluída.");
    } else {
        console.log("Erro: Não achei a caixa com o ID 'mensagem-inicial'.");
    }
}


// 3. CÓDIGO QUE SÓ RODA DEPOIS QUE A PÁGINA TERMINA DE CARREGAR TUDO
// Isso é pra garantir que o JS não tente mexer em uma caixa que ainda não apareceu na tela.
window.onload = function() {
    console.log("A página está totalmente pronta pra começar a interagir.");
    // Exemplo: Se eu quisesse que a cor mudasse sozinha no início, eu chamaria a função aqui.
};