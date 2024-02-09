// Este código será executado quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
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

function chargeTheme(){
    let body = document.querySelector('body')
    let icon = document.querySelector('#theme')

    if (body.className == 'dark'){
        body.classList.remove('dark')
        icon.src = 'img/icons/moon.png'
    }else{
        body.classList.add("dark")
        icon.src = 'img/icons/sun.png'

    }
}
