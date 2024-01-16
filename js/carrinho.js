// somente para iniciar a lista do carrinho de compras, e tbm serve para zerar a lista quando outras funçoes o chamarem
function carrinho() {
    const carrinho = []

    let shopCart = JSON.stringify(carrinho)
    sessionStorage.setItem("shopCart", shopCart)
}

// função de adicionar, onde os parametros pegarão os valores nos inputs do html e trarão para cá através do onclick, sem precisar repetir o código de add para cada um
function addCarrinho(num) {
    const carrinho = JSON.parse(sessionStorage.getItem("shopCart"));
    const itens = JSON.parse(sessionStorage.getItem("produtos"))

    let im = itens[num].img
    let pt = document.querySelectorAll('#platform');
    let plat = pt[num].value
    let dc = itens[num].desc
    let pc = parseFloat(itens[num].price);

    let item_existe = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].descricao === dc) {
            item_existe = true;
            break;
        }
    }

    if (item_existe) { // confere se o item já existe, se ele ja existe no carrinho, não vai adicionar denovo, pq jogos costumam ser comprados apenas uma cópia por pessoa
        alert('Não é possivel adicionar o mesmo item 2 vezes no carrinho!');
    } else {
        let data = { image: im, plataforma: plat, descricao: dc, preco: pc };
        carrinho.push(data);

        const shopCart = JSON.stringify(carrinho);
        sessionStorage.setItem("shopCart", shopCart);
    }
}


function mostrarCarrinho() { // essa parte funciona exclusivamente para o carrinho de compras
    const carrinho = JSON.parse(sessionStorage.getItem("shopCart"))

    // ao inves de pegar id por id, peguei todos os elementos que possuem a msm classe
    let itens = document.querySelectorAll('.notItem')
    let imgs = document.querySelectorAll('.img')
    let descs = document.querySelectorAll('.desc')
    let plats = document.querySelectorAll('.platform')
    let prices = document.querySelectorAll('.price')

    for (let i = 0; i < carrinho.length; i++) { // o contador vai distribuir os valores na ordem que foram recebidos para os divs
        itens[i].classList.replace('notItem', 'item') // torna as divs visiveis quando os inputs forem preenchidos
        imgs[i].src = carrinho[i].image
        descs[i].value = carrinho[i].descricao
        plats[i].value = carrinho[i].plataforma
        prices[i].value = "R$ " + carrinho[i].preco.toFixed(2)
    }
    somarItens()
}

function somarItens() { // serve para somar os valores dos precos e colocar no total a ser pago
    const carrinho = JSON.parse(sessionStorage.getItem("shopCart"))
    let total = 0

    for (let i = 0; i < carrinho.length; i++) {
        total = total + carrinho[i].preco
    }
    document.querySelector('#total').value = 'Total: R$ ' + total.toFixed(2)
}

function limpar(i) { // remove os itens do carrinho de compras e reorganiza a lista
    const carrinho = JSON.parse(sessionStorage.getItem("shopCart"))

    let itens = document.querySelectorAll('.item')

    carrinho.splice(i, 1);
    // o splice é um delete melhorado, pois tira o item da lista e o espaço que ele ocupou tbm, impedindo de ficar nulo
    itens[i].classList.replace('item', 'notItem')
    sessionStorage.setItem('shopCart', JSON.stringify(carrinho))
    somarItens()
    location.reload();

}

function compra() { // mensagem de compra realizada, junto ao zeramento da lista inteira e do valor total
    alert("Compra realizada com sucesso!")
    location.reload(); // recarrega a pagina
    carrinho() // zera a lista
    somarItens()
}
