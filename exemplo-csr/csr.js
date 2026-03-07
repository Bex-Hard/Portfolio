const app = document.getElementById('app');

const conteudo = `
    <h1>Meu Portfólio (CSR)</h1>
    <p>Este conteúdo foi injetado pelo JavaScript após a página carregar.</p>
    <img src="images/image-1.png" width="200">
`;

setTimeout(() => {
    app.innerHTML = conteudo;
}, 1000);