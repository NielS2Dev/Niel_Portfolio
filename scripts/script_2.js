let pares = 0, impares = 0, total = 0, acabou = false;


// quando o botão for cliclado.
document.getElementById('adicionar_numero').onclick = function(){

    // se o programa tiver acabado já, não faz mais nada no caso 
    // se acabou == true ele retorna e finaliza o programa.
    if (acabou) return;

    // pega o campo do input
    let campo = document.getElementById('numero');
    let valorDigitado = campo.value; // guarda o valor digitado em uma variavel chamada valorDigitado

    if (valorDigitado === '') return; // se o valor for vazio ele saí da função.

    let numero = Number(valorDigitado); // Conversão do valor para número

    if (numero === 999){
        acabou = true;

        document.getElementById('resultado').innerHTML += '<a href="../index_02.html"><img src="../media/game_over.png" alt="" id="game_over"></a>';
        return
    }

    // verificar se par ou ímpar e atualizar os contadores

    if (numero % 2 === 0){
        pares ++;
    } else {
        impares ++;
    }

    total ++;

    document.getElementById('resultado').innerHTML = `
        <p>Total de números: ${total} </p> 
        <p>Pares: ${pares} </p> 
        <p>Ímpares: ${impares}</p> 
        <p>(Digite 999 para finalizar)</p>
        <a href="../index_02.html" class="botao_voltar">Voltar a tela Inicial</a>
    `;


    
}