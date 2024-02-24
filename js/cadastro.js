function cadastro() { // inicia a função para abrir a table
    const dados = [] // inicia a lista vazia

    const table = JSON.stringify(dados) // declara a variavel que vai receber os dados e strigfica ela pra poder aparecer no inspetor
    localStorage.setItem('table', table) // vamo usar o localstorage e vamo nomear a tabela de table e ela vai receber a table strigificada
}

// CRUD

function cadastrar() {
    const dados = JSON.parse(localStorage.getItem('table')) || [] // chama a table que ja foi iniciada

    nm = document.querySelector('#name').value // chama os valores dos inputs q vao ser usados
    em = document.querySelector('#email').value
    ps = document.querySelector('#password').value
    conf_ps = document.querySelector('#confirmPass').value

    if (ps != conf_ps) {
        document.querySelector('#error1').textContent = "as senhas não são iguais!"

    } else {
        if (nm != "" && em != "" && ps != "") {
            let data = { id: dados.length + 1, name: nm, email: em, password: ps, status: false } // declara a estrutura de como os dados vao ser recebidos dentro da table
            dados.push(data) // envia o data para dentro da const dados

            const table = JSON.stringify(dados) // stringifica a table
            localStorage.setItem('table', table) // seta a localstorage para receber a table novamente
            alert('Cadastro realizado!')
            limparCampos()

        } else {
            alert('não é possivel se cadastrar sem preencher os campos')
        }
    }
}

function logar() {
    const dados = JSON.parse(localStorage.getItem('table')) || []

    em = document.querySelector('#logEmail').value
    ps = document.querySelector('#logPassword').value

    if (em == "" && ps == "") {
        alert('Não é possivel logar sem preencher os campos!')
        return
    }

    for (let i = 0; i < dados.length; i++) { // loga só o escolhido
        if (em == dados[i].email && ps == dados[i].password) { // caso o valor dentro dos daods tenha algum parecido com o que foi informado pelo input...
            let data = { id: dados[i].id, name: dados[i].name, email: dados[i].email, password: dados[i].password, status: true }
            dados[i] = data

            const table = JSON.stringify(dados)
            localStorage.setItem('table', table)

            alert('Logado com sucesso!')
            history.back()
            break
        } else {
            document.querySelector('#error2').textContent = "E-mail ou senha incorretos!"
        }
    }
}

function localizar() { // fiz a função, mas ela nem é usada aqui
    const dados = JSON.parse(localStorage.getItem('table'))

    em = document.querySelector('#email').value

    for (let i = 0; i < dados.length; i++) { // contador for normal
        if (em == dados[i].email) { // caso o valor dentro dos daods tenha algum parecido com o que foi informado pelo input...
            alert('Cadastro encontrado!')
        }
    }
}

function alterar() {
    const dados = JSON.parse(localStorage.getItem('table'))

    id = document.querySelector('#id').value
    nm = document.querySelector('#name').value
    em = document.querySelector('#email').value
    ps = document.querySelector('#password').value

    for (let i = 0; i < dados.length; i++) {
        if (id == dados[i].id) {
            let data = { id: dados[i].id, name: nm, email: em, password: ps }

            dados[i] = data
            localStorage.setItem('table', JSON.stringify(dados)) // versao resumida de como stringificar e setar ao msm tempo
            alert('dados atualizados')
            break
        }
        localStorage.setItem('table', JSON.stringify(dados))
    }

}

function apagar() {
    const dados = JSON.parse(localStorage.getItem('table'))
    id = document.querySelector('#id').value

    for (let i = 0; i < dados.length; i++) {
        if (id == dados[i].id) {
            delete dados[i]
            dados.splice(i, 1);
            alert('cadastro apagado')
            break
        }
    }
    sair()
    localStorage.setItem('table', JSON.stringify(dados))
}

function choiceApagar() {
    let userResponse = window.confirm("Tem certeza de que deseja apagar sua conta?");

    if (userResponse) {
        apagar()
    } else {
        console.log("Ação cancelada.");
    }
}


function limparCampos() { // limpa os campos dos inputs, só isso
    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#password').value = ''
    document.querySelector('#confirmPass').value = ''
}

function exibe() {
    const dados = JSON.parse(localStorage.getItem('table'))
    ft = document.querySelector('#ft')


    for (let i = 0; i < dados.length; i++) {
        if (dados[i].status == true) {
            document.querySelector('#id').value = 'Seu ID: ' + dados[i].id
            document.querySelector('#name').value = dados[i].name
            document.querySelector('#email').value = dados[i].email
        }
    }

}

function stats() { // verifica se tem alguém com o status no true, se tiver, muda o header para a versão logada
    const dados = JSON.parse(localStorage.getItem('table'))

    const user = document.querySelectorAll('#user')
    const a = document.querySelectorAll('a')
    const buyButton = document.querySelector('#buy')
    const logout = document.querySelectorAll('.logDesactive, .logActive')

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].status == true) {
            for (let i = 0; i < user.length; i++) {
                user[i].src = "img/icons/conf.png"
                user[i].setAttribute('class', 'log')
            }
            a[2, 5].setAttribute('href', 'user.html')
            a[5].innerHTML = a[5].innerHTML + 'Seu perfil';

            if (buyButton) {
                buyButton.setAttribute('onclick', 'compra()');
            }
            logout[0, 1].classList.replace('logDesactive', 'logActive')
        }else{
            a[5].innerHTML = a[5].innerHTML + 'Fazer o Login';
        }
    }

}

function sair() { // serve para mudar o status de true para false, assim a função status vai entender q não tem ninguem logado
    const dados = JSON.parse(localStorage.getItem('table'))

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].status == true) {
            let data = { id: dados[i].id, name: dados[i].name, email: dados[i].email, password: dados[i].password, status: false, image: dados[i].image }
            dados[i] = data

            const table = JSON.stringify(dados)
            localStorage.setItem('table', table)
            alert('deslogado com sucesso!')
            window.location = "index.html"
        }
    }
}
