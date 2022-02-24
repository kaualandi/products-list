# Bem vindo 👋

> Lista de produtos do teste [teste-estagio-front-end](https://github.com/Fnandoz/api-desafio/blob/master/README.md) feito com [Create React App](https://github.com/facebook/create-react-app).

## Requisitos 📦

- [Node.js](https://nodejs.org) >= [16.14.0](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) >= [8.3.1](https://www.npmjs.com/package/npm)

## Funcionalidades extras 🪄

- Todos os produtos selecionados estão sendo armazenados em localStorage, possibilitando consultas mesmo após a página ser fechada.
- Botão limpar todos os produtos selecionados.

## Como usar? 💡

### Clone o repositório

Vá para o diretório do projeto e execute:

```bash
git clone https://github.com/kaualandi/products-list.git
```

### Instale as dependências

Com o terminal aberto no local do projeto, execute:

```bash
npm install
```

### Execute o servidor

Para rodar o projeto em modo de desenvolvimento e o servidor, abra o terminal em bash e execute:

```bash
npm start & npm run server
```

Estará disponível localmente em [http://localhost:3000](http://localhost:3000).

O servidor node, é responsável pela requisição da api, já que o React é empedido pelo CORS na mesma tentativa.\
Ele será servido em [http://localhost:5000](http://localhost:5000).

## Produção 🚀

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

## Arquitetura 📚

```text
├── 📁public
│   ├── 📄favicon.ico
│   ├── 📄font.js // FontAwesome
│   ├── 📄index.html
│   ├── 📄logo192.png
│   ├── 📄logo512.png
│   ├── 📄manifest.json
│   └── 📄robots.txt
├── 📁src
│   ├── 📁Application // Funções globais
│   │   ├── 📄getSelectedProducts.jsx // Retorna os produtos selecionados
│   │   ├── 📄productsList.jsx // Trata a lista de produtos
│   │   ├── 📄removeSelectedProducts.jsx // Remove todos os produtos selecionados
│   │   └── 📄setSelectedProducts.jsx // Define os produtos selecionados
│   ├── 📁Infrastructure // Arquivos de API
│   │   └── getProducts.jsx // Recupera os produtos da API
│   ├── 📁Presentation // Componentes/Contêineres
│   │   ├── 📁Components // Pasta dos componentes da aplicação
│   │   │   ├── 📄Loading.jsx // Componente de carregamento
│   │   │   ├── 📄Products.jsx // Componente de listagem de produtos
│   │   │   └── 📄SelectedProducts.jsx // Componente de listagem de produtos selecionados
│   │   ├── 📁Styles // Estilos de cada componente da pasta pai
│   │   │   ├── 📄App.css // Estilos globais e do componente App
│   │   │   ├── 📄Loading.css
│   │   │   ├── 📄Products.css
│   │   │   └── 📄SelectedProducts.css
│   │   └── 📄App.jsx // Componente principal
│   ├── 📄index.css // Normalizador de fontes
│   ├── 📄index.jsx
│   ├── 📄logo.svg
│   └── 📄reportWebVitals.js
├── 📄.gitignore
├── 📄package-lock.json
├── 📄package.json
└── 📄README.md
```
