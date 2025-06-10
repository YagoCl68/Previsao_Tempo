
/* consulta dados na api , e ocultar  informacoes*/
function mostradados(dados){
   console.log(dados);
    const ocultar= document.querySelector(".ocultar");
    
    if (ocultar) {
        ocultar.classList.remove("ocultar");
        
    }

    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML =Math.floor(dados.main.temp) + "°c"
    document.querySelector(".temp-max").innerHTML =Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML =Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".descrição").innerHTML =dados.weather[0].description
    document.querySelector(".umidade").innerHTML =dados.main.humidity +"%"
    document.querySelector(".vel-vento").innerHTML =Math.floor(dados.wind.speed) +"km/h"
    document.querySelector(".img-do-clima").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    document.querySelector(".Visibilidade").innerHTML = +dados.visibility.toString().slice(0, 2) + "km";
    document.querySelector(".bandeira").src=`https://flagsapi.com/${dados.sys.country}/flat/64.png`
    esconderLoading(); 
}

/* faz a pesquisa  ao click enter */
function isEnter(ev) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        clickbotao();
    }
}

/* funcionabilidade barra de pesquisa  */
function clickbotao(){
    const cidade = document.querySelector(".input-cidade").value;
    var termoPesquisa = document.querySelector(".input-cidade");
    buscarCidade(cidade);
    salvarNoHistorico(cidade);
    termoPesquisa.value = "";
}

/*consulta a cidade na api e valida a cidade  */
let ultimaCidadeValida = null;

async function buscarCidade(cidade) {
    mostrarLoading();
    const res = await fetch(`http://localhost:3000/${cidade}`);
    const dados = await res.json();
    esconderLoading();

    if (dados.cod === 200) {
        // Se os dados da API são válidos, mostra os dados
        ultimaCidadeValida = dados;
        mostradados(dados);
    } else if (ultimaCidadeValida !== null) {
        // Se os dados da API não são válidos, mas tem uma última cidade válida, mostra a última cidade válida
        mostradados(ultimaCidadeValida);
    }

    // Não esqueça de limpar o campo de pesquisa mesmo que a cidade seja inválida
    const termoPesquisa = document.querySelector(".input-cidade");
    termoPesquisa.value = "";
}

// Função para verificar se a cidade já está na lista
function cidadeNaLista(cidade, historicoCidade) {
    const cidades = historicoCidade.querySelectorAll(".cidade-nome");
    for (const cidadeElement of cidades) {
        if (cidadeElement.textContent.trim() === cidade.trim()) {
            return true;
        }
    }
    return false;
}

// salva no historico 

async function salvarNoHistorico(cidade) {
    // Obtém o elemento com a classe "historico-cidade"
    const historicoCidade = document.querySelector(".historico-pesquisa");

    // Verifica se a cidade já está na lista
    if (cidadeNaLista(cidade, historicoCidade)) {
        return;
    }

    // Consulta a API para obter os dados da cidade
    const res = await fetch(`http://localhost:3000/${cidade}`);
    const dados = await res.json();

    // Verifica se os dados da API são válidos
    if (dados.cod !== 200) {
        return; // Sai da função se os dados não forem válidos
    }

    // Verifica se o número de filhos no histórico é igual ou superior ao limite (5)
    if (historicoCidade.children.length >= 5) {
        // Se o limite for atingido, remove o botão mais antigo (o primeiro filho)
        historicoCidade.removeChild(historicoCidade.firstElementChild);
    }

    // Cria um botão para a cidade
    const cidadeButton = document.createElement("button");
    const temperaturaAtual = Math.floor(dados.main.temp) + "°C";
    cidadeButton.addEventListener("click", () => {
        buscarCidade(cidade);
    });

    const iconURL = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;

    // Inclui no botão tanto a temperatura quanto a imagem de previsão
    cidadeButton.innerHTML = `
        <div class="cidade-info">
            <span class="cidade-nome">${cidade}</span>
            <img src="./icons/local.gif" height="15">
            <img class="bandeira-hist" src="https://flagsapi.com/${dados.sys.country}/flat/64.png" style="width: 30px; height: 30px;">
            <div class="previsao-img">
                <img src="${iconURL}" alt="Previsão" style="width: 50px; height: 50px;">
            </div>
            <span class="temperatura-info">${temperaturaAtual}</span>
        </div>`;

    // Adiciona classes de estilo para controle de layout
    cidadeButton.classList.add("cidade-button");
    // Adiciona o botão ao histórico
    historicoCidade.appendChild(cidadeButton);
}

// Adicione este trecho para criar o botão Limpar

document.addEventListener('DOMContentLoaded', function () {
    // Agora, você pode buscar o botão de limpar e adicionar um evento de clique a ele.
    const botaoLimpar = document.querySelector('.limpar');

    if (botaoLimpar) {
        botaoLimpar.addEventListener('click', function () {
            limparHistorico();
        });
    }
});

function limparHistorico() {
    const historicoPesquisa = document.querySelector('.historico-pesquisa');

    // Limpa o conteúdo dentro da div historico-pesquisa
    historicoPesquisa.innerHTML = '';
}

// função responsavel pelo carregamento

function mostrarLoading(){
    const loadingIndicator = document.querySelector("#loading");
    loadingIndicator.style.display = "block";

}

function esconderLoading() {
    const loadingIndicator = document.querySelector("#loading");
    loadingIndicator.style.display = "none";
}

