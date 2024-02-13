// Este código será executado quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Usando o método fetch para buscar o conteúdo do arquivo 'header.html' do servidor
    fetch('header.html')
        // Manipulação da resposta do fetch, transformando-a em texto
        .then(response => response.text())
        // Manipulação dos dados obtidos do arquivo 'header.html'
        .then(data => {
            // Inserção do conteúdo do cabeçalho na div com o id 'headerContainer'
            document.getElementById('headerContainer').innerHTML = data;
            // Chamada para a função 'stats()', que provavelmente atualiza o estado do cabeçalho
            stats();
            // Rola a página para o topo
            window.scrollTo(0, 0);
        })
        // Captura de erros durante o fetch
        .catch(error => {
            // Imprime no console o erro encontrado durante o carregamento do cabeçalho
            console.error('Erro ao carregar o cabeçalho:', error);
        });
});

function setTheme() { // função que muda o tema da pagina a partir do valor recebido pelo localStorage
    let body = document.querySelector('body')
    let icon = document.querySelector('#theme')

    if (localStorage.getItem('theme') === 'light') {
        body.classList.remove('dark')
        icon.src = 'img/icons/moon.png'
    } else {
        body.classList.add("dark")
        icon.src = 'img/icons/sun.png'

    }
}

function chargeTheme() { // função manual que muda o valor guardado no localStorage
    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
        setTheme()
    } else {
        localStorage.setItem('theme', 'light');
        setTheme()
    }
}

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light');
}
