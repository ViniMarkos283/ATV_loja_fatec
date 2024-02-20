// no lugar de ir mudando pelo HTML. fiz uma list com os dados dos produtos para que sejam carregados por meio de uma função, é mais organizado por aqui
function produtos() { // no total tem 20 produtos, lidos de 0 a 19
    const itens = [
        //ação
        { img: 'img/rdr2.png', desc: 'Red Dead Redemption 2', price: '299.90' },
        { img: 'img/re4.png', desc: 'Resident Evil 4', price: '249.00' },
        { img: 'img/tlou.png', desc: 'The Last of Us: Part I', price: '249.90' },
        { img: 'img/dg.png', desc: 'Days Gone', price: '199,90' },
        //aventura
        { img: 'img/gow.png', desc: 'God of War', price: '199.90' },
        { img: 'img/mine.png', desc: 'Minecraft', price: '160.82' },
        { img: 'img/sp2.png', desc: 'Spider-man 2', price: '349.90' },
        { img: 'img/forza5.png', desc: 'Forza Horizon 5', price: '249.99' },
        //RPG
        { img: 'img/elden_ring.png', desc: 'Elden Ring', price: '299.90' },
        { img: 'img/acValhalla.png', desc: 'Assassins Creed Valhalla', price: '199.99' },
        { img: 'img/lies_of_p.png', desc: 'Lies of P', price: '249.90' },
        { img: 'img/Tw3.png', desc: 'The Witcher III Wild Hunt', price: '129.99' },
        //tiro
        { img: 'img/r6.png', desc: 'Rainbow Six', price: '59.99' },
        { img: 'img/gta.png', desc: 'Grand Theft Auto 5', price: '82,41' },
        { img: 'img/cod.png', desc: 'Call of Duty: Modern Warfare III', price: '299.00' },
        { img: 'img/cyber.png', desc: 'Cyberpunk 2077', price: '199.90' },
        //luta
        { img: 'img/SoF6.png', desc: 'Street of Fighter 6', price: '249.00' },
        { img: 'img/mk1.png', desc: 'Mortal Kombat 1', price: '279.90' },
        { img: 'img/sekiro.png', desc: 'Sekiro: Shadows Die Twice', price: '274.00' },
        { img: 'img/dmc5.png', desc: 'Devil My Cry 5', price: '99,90' },
    ]

    return itens
}

function loadItens() { // a index carregará os produtos por meio do JS de forma automatica
    const itens = produtos() // recebe a lista de outra função e a guarda na constante 'itens'

    image = document.querySelectorAll('#img')
    description = document.querySelectorAll('#desc')
    price = document.querySelectorAll('#price')

    for (let i = 0; i < itens.length; i++) {
        image[i].src = itens[i].img
        description[i].value = itens[i].desc
        price[i].value = itens[i].price
    }
}

function icons() { // os endereços dos icones dos produtos ficarão aqui e serão carregados quando um dos produtos for levado para a pag de compra unicA
    const icon = [ // para funcionar, tanto os produtos quanto os icons precisam ter a msm quantidade de itens na lista
        {
            icon1: 'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=.jpg&quality=91&imagick=/wp-content/uploads/2022/09/Red_Dead_Redemption_2_suporte_oficial_AMD_FSR_2_0.jpg',
            icon2: 'https://assets.xboxservices.com/assets/fb/cd/fbcd8ad3-3a2d-4ea2-bf17-8c3a7822e2de.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_01.jpg',
            icon3: 'https://s2.glbimg.com/ffvbgpQbg2kI04Ew_duXr13M5CI=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/P/Y/mSpQzzSrmk1JzB2d0auQ/2018-02-01-3.jpg',
            icon4: 'https://www.cnet.com/a/img/resize/074b14ef40267c1c4f1070ddd3c86fe8ef35829b/hub/2018/10/25/776b9111-60ec-4e79-9f16-8372eac0635c/red-dead-redemption-2-20181021172719.jpg?auto=webp&width=768'
        }, // produto # 1

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 2

        {
            icon1: 'https://conteudo.imguol.com.br/c/entretenimento/7a/2021/09/24/the-last-of-us-1632507960163_v2_900x506.jpg',
            icon2: 'https://criticalhits.com.br/wp-content/uploads/2020/06/The-Last-of-Us-2-downgrade-1.jpg',
            icon3: 'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2022/08/The-Last-of-Us-Part-1-20.jpg',
            icon4: 'https://static.giga.de/wp-content/uploads/2020/06/the-last-of-us-2-open-world.jpg'
        }, // produto # 3

        {
            icon1: 'https://s2-g1.glbimg.com/GqOOpKcfWdESL3A3CiEjwfiOdh0=/0x0:3840x2066/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/H/M/Bwr9AQRBAGxtx6VYAdlw/days-gone-deacon-freneticos.jpg',
            icon2: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2022/01/days-gone.jpg',
            icon3: 'https://images.kinguin.net/g/carousel-main-mobile/media/images/products/607842613a7e8e00015316bd_3c4fbce03e87bd666f0c25c0c71a8275.jpg',
            icon4: 'https://cdn.mos.cms.futurecdn.net/9AWc6GS9QWzuqyKUByTTXf-1200-80.jpg'
        }, // produto # 4

        {
            icon1: 'https://media.wired.com/photos/5adf78d1c6901c5ee084059a/191:100/w_1280,c_limit/GameofWar.jpg',
            icon2: 'https://static.wixstatic.com/media/a652ef_a5e07be8a8a94f8db8db22f7ec0c50cf~mv2.png/v1/fill/w_1110,h_624,al_c,q_90,usm_0.66_1.00_0.01/a652ef_a5e07be8a8a94f8db8db22f7ec0c50cf~mv2.webp',
            icon3: 'https://assetsio.reedpopcdn.com/-1523515729032.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
            icon4: 'https://s2-g1.glbimg.com/l1EAS7gjnrcGCcYh_y_NFAx8eNI=/0x0:2048x1152/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/w/8/1lqZJvRnyiNIRrrWBbLA/39814594522-17f9fbbe81-k.jpg'
        }, // produto # 5

        {
            icon1: 'https://www.minecraft.net/content/dam/games/badger/screenshots/MinecraftLegends_screenshot3.jpg',
            icon2: 'https://play-lh.googleusercontent.com/kpDAdLN_1FHjyDd6-u7ijOpGl0w7EBMoE5U7suF7Wt7rnG1gKN6_tyAvxX1foiiB6gaM=w526-h296-rw',
            icon3: 'https://www.wallpaperflare.com/static/886/859/742/minecraft-gameplay-wallpaper.jpg',
            icon4: 'https://t2.tudocdn.net/657284?w=1920'
        }, // produto # 6

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 7

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 8

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 9

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 10

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 11

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 12

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 13

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 14

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 15

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 16

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 17

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 18

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 19

        {
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: ''
        }, // produto # 20

    ]
    return icon
}

function loadIcons(num) { 
    const icon = icons() 

    img = document.querySelectorAll('.small')

        img[0].src = icon[num].icon1
        img[1].src = icon[num].icon2
        img[2].src = icon[num].icon3
        img[3].src = icon[num].icon4

}