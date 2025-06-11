
# ☀️ Aplicativo de Previsão do Tempo

Bem-vindo ao projeto **Previsão do Tempo**! Um app simples e funcional que mostra a temperatura atual, condições climáticas e a bandeira do país da cidade pesquisada, usando a **API OpenWeather** e a **CountryFlags API**. Tudo com uma interface bonita, responsiva e com histórico inteligente. 🌤️🌎

---

## 🛠️ Tecnologias utilizadas

* HTML5 + CSS3 + JavaScript
* Node.js (backend simples com Express)
* [OpenWeather API](https://openweathermap.org/) - dados meteorológicos
* [CountryFlags API](https://flagsapi.com/) - bandeiras dos países

---

## 📱 Funcionalidades principais

| Funcionalidade                                                                   | Descrição                                                                                 |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 🌡️ **Clima atual**                                                              | Temperatura, mín/máx, umidade, vento, descrição e ícone do clima.                         |
| <img src="https://flagsapi.com/BR/flat/64.png" width="20"/> **Bandeira do país* | Imagem servida pela **CountryFlags API** baseada no código ISO do país.                   |
| 🕒 **Histórico inteligente**                                                     | Guarda as **5 últimas cidades** pesquisadas (com bandeira, ícone do clima e temperatura). |
| 🧹 **Limpar histórico**                                                          | Botão “Apagar tudo” remove as listas salvas com um clique.                                |
| 🔄 **Loading feedback**                                                          | Indicador de carregamento enquanto espera a resposta da API.                              |
| 🎨 **UI responsiva**                                                             | CSS puro com fonte Google *Tilt Neon* e ícones animados `.gif`.                           |

---

## 🚀 Como rodar o projeto localmente

### 🔧 Pré-requisitos

* Node.js instalado na sua máquina
* Um terminal (CMD, PowerShell, Bash, etc.)

### 📂 Passos para execução

1. Clone o repositório ou baixe os arquivos

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor:

```bash
npm run dev
```

4. O terminal vai mostrar:

```bash
Servidor rodando na porta 3000
```

5. Agora é só acessar o app no navegador:

```
http://localhost:3000
```

---

## 📊 Exemplo de uso

Pesquise por uma cidade (ex: *Rio de Janeiro*) e veja:

* Temperatura atual ☀️
* Clima (nublado, chuvoso, ensolarado...)
* Bandeira correspondente
* E até 5 buscas recentes com resumo visual ✅

---

## 👋 Autor

Desenvolvido por **Yago**. Trabalho para a disciplina **Programação III**.

Feito com café, e muitaaaaaa paciência 

---










