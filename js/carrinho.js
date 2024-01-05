function loadItens(){
    const itens = [
        //ação
        {img:'img/rdr2.png', desc:'Red Dead Redemption 2', price:'299.90'},
        {img:'img/re4.png', desc:'Resident Evil 4', price:'249.00'},
        {img:'img/tlou.png', desc:'The Last of Us: Part I', price:'249.90'},
        {img:'img/dg.png', desc:'Days Gone', price:'199,90'},
        //aventura
        {img:'img/gow.png', desc:'God of War', price:'199.90'},
        {img:'img/mine.png', desc:'Minecraft', price:'160.82'},
        {img:'img/sp2.png', desc:'Spider-man 2', price:'349.90'},
        {img:'img/forza5.png', desc:'Forza Horizon 5', price:'249.99'},
        //RPG
        {img:'img/elden_ring.png', desc:'Elden Ring', price:'299.90'},
        {img:'img/acValhalla.png', desc:'Assassins Creed Valhalla', price:'199.99'},
        {img:'img/lies_of_p.png', desc:'Lies of P', price:'249.90'},
        {img:'img/Tw3.png', desc:'The Witcher III Wild Hunt', price:'129.99'},
        //tiro
        {img:'img/r6.png', desc:'Rainbow Six', price:'59.99'},
        {img:'img/gta.png', desc:'Grand Theft Auto 5', price:'82,41'},
        {img:'img/cod.png', desc:'Call of Duty: Modern Warfare III', price:'299.00'},
        {img:'img/cyber.png', desc:'Cyberpunk 2077', price:'199.90'},
        //luta
        {img:'img/SoF6.png', desc:'Street of Fighter 6', price:'249.00'},
        {img:'img/mk1.png', desc:'Mortal Kombat 1', price:'279.90'},
        {img:'img/sekiro.png', desc:'Sekiro: Shadows Die Twice', price:'274.00'},
        {img:'img/dmc5.png', desc:'Devil My Cry 5', price:'99,90'},
    ]

    image = document.querySelectorAll('#img')
    description = document.querySelectorAll('#desc')
    price = document.querySelectorAll('#price')

    for(let i = 0; i < itens.length; i++){
        image[i].src = itens[i].img
        description[i].value = itens[i].desc
        price[i].value = itens[i].price
    }

    let produtos = JSON.stringify(itens)
    sessionStorage.setItem('produtos', produtos)
}


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
