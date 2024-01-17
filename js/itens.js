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