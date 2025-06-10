# 🌤️ Previsão do Tempo

Um **web-app leve e responsivo** que exibe a previsão do tempo de qualquer cidade do mundo **e** mostra a bandeira do país correspondente.  
Construído com **HTML**, **CSS** e **JavaScript Vanilla** no frontend, e um **servidor Node.js + Express** que faz a ponte com as APIs externas.

> “Digite uma cidade, pressione Enter ou clique na lupa e veja o clima aparecer em tempo real — bandeira incluída!” 🚀

---

## ✨ Principais recursos

| Recurso | Descrição |
|---------|-----------|
| 🌡️ **Clima atual** | Temperatura, mín/max, umidade, vento, descrição e ícone do clima. |
| 🇧🇷 **Bandeira do país** | Imagem servida pela **CountryFlags API** baseada no código ISO do país. |
| 🕒 **Histórico inteligente** | Guarda as **5 últimas cidades** pesquisadas (com bandeira, ícone do clima e temperatura). |
| 🧹 **Limpar histórico** | Botão “Apagar tudo” remove as listas salvas com um clique. |
| 🔄 **Loading feedback** | Indicador de carregamento enquanto espera a resposta da API. |
| 🎨 **UI responsiva** | CSS puro com fonte Google *Tilt Neon* e ícones animados `.gif`. |

---

## 🛠️ Tecnologias & APIs

- **Frontend**: HTML + CSS + JavaScript (Vanilla)
- **Backend**: Node.js 18+ com [Express](https://expressjs.com/)
- **APIs**  
-[OpenWeather API](https://openweathermap.org/api) – dados meteorológicos  
-[CountryFlags API](https://countryflagsapi.com/) – imagens de bandeiras

## 🚀 Guia rápido: rodando localmente

1) Instale as dependências
```bash
npm install
```
3) Adicione sua chave do OpenWeather
echo "OPENWEATHER_API_KEY=SUA_CHAVE_AQUI" > .env

4) Suba o servidor
  npm start

Acesse em seguida http://localhost:3000 no navegador. ✔️
