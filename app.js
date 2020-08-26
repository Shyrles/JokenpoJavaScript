let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
const userScore_span = document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");
const resultado_p = document.querySelector("#result");
const paperButton_img = document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");

// 3 tipos de variáveis!
// let -> pode usar semmpre;
// var -> pode evitar;
// const -> pode usar, quando não for alterar o valor!

//FUNÇÂO JAVASCRIPT
// declarada: function nomeDaFuncao(parametro)
//
// ARROW FUNCTION
// não declarada, sintaxe:
// () => {
    // codigo funcao
// }
// () => codigo funcao

function jogo(cliqueDoUsuario){
    jogadasPossiveisComputador = ["Pedra", "Papel", "Tesoura"]
    n = Math.floor(Math.random() * 3);
    cliqueDoComputador = jogadasPossiveisComputador[n];
    console.log("Você escolheu " + cliqueDoUsuario + " e o Computador escolheu " + cliqueDoComputador)
  
        //vitória do usuário
        //derrota do usuário
        //empate
        //default para algum erro   paperButton rockButton scissorsButton

//        rockButtonrockButton - empata
//        scissorsButtonscissorsButton - empata
//        paperButtonpaperButton - empata

//        rockButtonrockscissors - ganha
//        scissorsButtonpaper - ganha
//        paperButtonrock - ganha


    if(cliqueDoUsuario == 'rockButton'){
        cliqueDoUsuario = 'Pedra';
    }else if(cliqueDoUsuario == 'scissorsButton'){
        cliqueDoUsuario = 'Tesoura';
    }else if(cliqueDoUsuario == 'paperButton'){
        cliqueDoUsuario = 'Papel';
    }

    switch(cliqueDoUsuario + cliqueDoComputador) {

        case 'PedraPedra':
        case 'TesouraTesoura':
        case 'PapelPapel':
            result.innerText = " Vocês EMPATARAM jogando "  + cliqueDoUsuario + " - " + cliqueDoComputador
            break
        
        case 'PedraTesoura':
        case 'TesouraPapel':
        case 'PapelPedra':
            result.innerText = " Você GANHOU jogando "  + cliqueDoUsuario + " e o Computador jogando " + cliqueDoComputador
            pontuacaoUsuario = pontuacaoUsuario + 1;
            userScore.innerHTML = pontuacaoUsuario;
            break

        default:
            result.innerText = " Você PERDEU jogando "  + cliqueDoUsuario + " e o Computador jogando " + cliqueDoComputador
            pontuacaoComputador = pontuacaoComputador + 1;
            compScore.innerHTML = pontuacaoComputador;
            break
    }
}

function principal() {
    paperButton_img.addEventListener("click", () => jogo("paperButton") );
    rockButton_img.addEventListener("click", () => jogo("rockButton") );
    scissorsButton_img.addEventListener("click", () => jogo("scissorsButton") );
}

principal();