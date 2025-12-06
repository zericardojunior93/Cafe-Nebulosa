# CAFÉ NEBULOSA: Website E-commerce Temático

## Visão Geral do Projeto

O projeto **Café Nebulosa** é um website estático (HTML, CSS, JS) desenvolvido para simular o portal de um e-commerce e menu de uma cafeteria com uma **identidade visual futurista e espacial**. O design é focado em **alto contraste (Dark Mode)**, tipografia de impacto (`Montserrat`), e uso de cores vibrantes (neon/roxo), proporcionando uma experiência imersiva.

## Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica das páginas. |
| **CSS3** | Estilização completa, responsável pelo layout Flexbox, tema escuro e efeitos de cor neon. |
| **JavaScript (ES6)** | Utilizado para aprimorar a interatividade básica do lado do cliente (demonstrado pela função `mudarCorDoTexto`). |
| **Google Fonts** | Importação da fonte 'Montserrat' para tipografia do site. |

---

## Soluções de Design e Estrutura (CSS)

As seguintes técnicas CSS foram implementadas para garantir a consistência e o visual do projeto:

### 1. Barra de Navegação (Nav Bar)

A barra de navegação é estruturada com **Flexbox** para alinhar o logo e os links em extremidades opostas, garantindo um visual limpo:

* **Contêiner (`header`):** Utiliza `display: flex;`, `justify-content: space-between;` e `align-items: center;`.
* **Logo Circular:** A imagem do logo (`#logo-img`) é formatada para ser perfeitamente circular e padronizada em 40x40px, garantindo consistência em todas as páginas:
    ```css
    width: 40px; 
    height: 40px; 
    object-fit: cover; 
    border-radius: 50%; 
    ```

### 2. Estilo e Tema

* **Dark Mode Base:** O fundo (`body`) utiliza a cor `#010823`.
* **Cores Neon/Destaque:** O roxo vibrante (`#a600ff`) é usado para títulos (`h1`, `h2`) e bordas, estabelecendo o tema.
* **Centralização de Títulos:** Todos os títulos principais (`h1`) são centralizados por padrão:
    ```css
    h1 {
        text-align: center;
    }
    ```

### 3. Layout de Produtos (Cards)

Os cards de produtos na página inicial são alinhados horizontalmente usando Flexbox:

* **Seletor `.lista-cards`:** Utiliza `display: flex;` e `justify-content: space-between;`.

---

## Estrutura de Arquivos

A estrutura de diretórios do projeto é organizada da seguinte forma:

cafe-nebulosa/ 

├── index.html 

├── menu.html 

├── Sobre.html 

├── contato.html 

├── style.css 

├── script.js 

└── img/
