function EntrarLogin() {
    var nome = document.getElementById('ilogin').value;

    if (nome.trim() !== "") { // Verifica se o campo não está vazio
        localStorage.setItem('nomeUsuario', nome); // Armazena o nome no localStorage com o "código"  > (nomeUsuario)
        window.location.href = "index_02.html"; // Redireciona para a página secundária
    } else {
        alert("Por favor, digite seu nome!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var nomeUsuario = localStorage.getItem('nomeUsuario'); // Obtém o nome armazenado
    
    var welcome = window.document.getElementById('ola')

    if (nomeUsuario) {
        welcome.innerHTML = `Seja bem vindo/Welcome(a) ${nomeUsuario}!`; // Atualiza a saudação
        // document.getElementById('ola').innerText = `Oi, ${nomeUsuario}!`;
        // Poderia ser esse também
    } else {
        welcome.innerHTML = `Sr. Misterioso...`
        // Caso não tenha nome salvo
        // document.getElementById('ola').innerText = "Oi, visitante!"; // poderia ser esse também
    }
});


document.getElementById('btnCoração').addEventListener('click', function() {
    const coracoesDiv = document.getElementById('coracoes');
    
    // Criar o coração
    const coracao = document.createElement('div');
    coracao.classList.add('coração');
    coracao.innerHTML = '❤️ ❣️ ❤️ ❣️';  // Emoji do coração
    
    // Posição aleatória na tela
    coracao.style.left = Math.random() * 100 + '%'; // Aleatório na largura
    coracao.style.top = Math.random() * 100 + '%'; // Aleatório na altura

    // Adicionando o coração à tela
    coracoesDiv.appendChild(coracao);
    
    // Adiciona a classe 'subindo' para animar o coração
    setTimeout(() => {
        coracao.classList.add('subindo');
    }, 10);
    
    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 1000); // Remove após 1 segundo (quando a animação terminar)
});



let traduzido = false;


function btnTraduzir() {
    let apresentação_texto = window.document.getElementById('ola')

    let primeiro_texto = window.document.getElementById('texto_apresentação')

    let segundo_texto = window.document.getElementById('meu_contato')

    let terceiro_texto = window.document.getElementById('estudos')


    if (!traduzido) {
        
        primeiro_texto.innerHTML = `Hello! My name is Antoniel, but i am  better known as NielS2. I am a Computer Science student, and this is my portfolio. Although my knowledge of HTML, CSS, and jVAsCRIPT (that is, in front-end developmente) is still basic, I am always learning and evolving. Feel free to follow my journey!`

        segundo_texto.innerHTML = `My first contact with programming happened through the study of databases, where I began to understand the importance of organizing and manipulating information. Soon after, I deepened my knowledge of Python, a versatile language widely used in the market. Throughout my learning journey, I explored various fundamental programming concepts and structures, including:`

        terceiro_texto.innerHTML = `
        <li>Programming logic</li>
        <li>Repetition structures: <code>while</code> and <code>for</code></li>
        <li>Repetition structures with <code>while True</code></li>
        <li>Combined use of <code>while</code>, <code>for</code>, and <code>if</code></li>
        <li>Tuples, lists, and dictionaries</li>
        <li>Common and composite variables</li>
        <li>Concept and use of functions</li>
        <li>Code versioning with Git and GitHub</li>`;

    } else {
        primeiro_texto.innerHTML = `Olá, meu nome é Antoniel, mas sou mais conhecido como NielS2. Sou estudante de Ciências da Computação e este é o meu portfólio. Embora meus conhecimentos em HTML, CSS e JavaScript, ou seja, em front-end, ainda sejam básicos, estou sempre aprendendo e evoluindo. O site ainda está em processo de desenvolvimento, então fiquem à vontade para acompanhar a jornada! :)`

        segundo_texto.innerHTML = `Meu primeiro contato com a programação aconteceu por meio do estudo de bancos de dados, onde comecei a entender a importância da organização e manipulação de informações. Logo em seguida, aprofundei meus conhecimentos em Python, uma linguagem versátil e amplamente utilizada no mercado. Ao longo da minha jornada de aprendizado, explorei diversos conceitos e estruturas fundamentais da programação, incluindo:`

        terceiro_texto.innerHTML = `                
        <li>Lógica de programação</li>
        <li>Estruturas de repetição: <code>while</code> e <code>for</code></li>
        <li>Estruturas de repetição com <code>while True</code></li>
        <li>Uso combinado de <code>while</code>, <code>for</code> e <code>if</code></li>
        <li>Tuplas, listas e dicionários</li>
        <li>Variáveis comuns e compostas</li>
        <li>Conceito e uso de funções</li>
        <li>Versionamento de código com Git e GitHub</li>`;
    }

    traduzido = !traduzido;
    /* 
    traduzido = !traduzido; simplesmente inverte o valor da variável traduzido. 
    Se traduzido for false, ela vira true.
    Se traduzido for true, ela vira false.
    */
}





















// 1️⃣ document → Representa a página web (o DOM - Document Object Model).

// 2️⃣ addEventListener("DOMContentLoaded", function() {...})

// addEventListener() → Escuta eventos (ações que ocorrem no site).
// "DOMContentLoaded" → Um evento que ocorre quando todo o HTML foi carregado, mas antes das imagens e estilos.
// function() { ... } → Código que será executado quando o HTML terminar de carregar







/* 
function EntrarLogin() {
    var nome = document.getElementById('ilogin').value;

    if (nome.trim() !== "") { // Verifica se o campo não está vazio
        localStorage.setItem('nomeUsuario', nome); // Armazena o nome no localStorage com o "código"  > (nomeUsuario)
        window.location.href = "secundaria.html"; // Redireciona para a página secundária
    } else {
        alert("Por favor, digite seu nome!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var nomeUsuario = localStorage.getItem('nomeUsuario'); // Obtém o nome armazenado
    
    var welcome = window.document.getElementById('ola')

    if (nomeUsuario) {
        document.getElementById('ola').innerText = `Oi, ${nomeUsuario}!`; // Atualiza a saudação
    } else {
        document.getElementById('ola').innerText = "Oi, visitante!"; // Caso não tenha nome salvo
    }
});


// 1️⃣ document → Representa a página web (o DOM - Document Object Model).

// 2️⃣ addEventListener("DOMContentLoaded", function() {...})

// addEventListener() → Escuta eventos (ações que ocorrem no site).
// "DOMContentLoaded" → Um evento que ocorre quando todo o HTML foi carregado, mas antes das imagens e estilos.
// function() { ... } → Código que será executado quando o HTML terminar de carregar
 */