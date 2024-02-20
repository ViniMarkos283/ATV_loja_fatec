// carrega o item numa pagina só dele com suas informações
function chosenProduct(num){
    sessionStorage.setItem('product', num)
    const platform = document.querySelectorAll('#platform');
    sessionStorage.setItem('platform', platform[num].value)
}

function loadProduto() {
    const itens = produtos()
    const n = sessionStorage.getItem('product')
    const plat = sessionStorage.getItem('platform')
    
    image = document.getElementById('image')
    product = document.getElementById('product')
    platform = document.getElementById('platform')
    prices = document.getElementById('prices')
    
    document.title = 'Comprar ' + itens[n].desc // muda o titulo da pag, apenas
    image.src = itens[n].img
    platform.value = 'Plataforma: ' + plat
    product.value = 'Jogo: ' + itens[n].desc
    prices.value = 'Preço: R$' + itens[n].price
    
    loadIcons(n)
}

function chosenCarrinho(){
    number = sessionStorage.getItem('product')
    addCarrinho2(number)
}

function addCarrinho2(num) {
    const carrinho = JSON.parse(sessionStorage.getItem("shopCart"));
    const itens = produtos()

    let im = itens[num].img
    let plat = sessionStorage.getItem('platform')
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
        alert('Item adicionado ao carrinho!')
    }
}

