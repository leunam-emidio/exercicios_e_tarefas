class Conta{
    constructor(email, senha, senhaConfirmacao){
        this.email = email
        this.senha = senha
        this.senhaConfirmacao = senhaConfirmacao
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        if(this.senha === this.senhaConfirmacao){
            return true
        }else{
            return false
        }
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d){
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodasContas(){
        //array de contas
        let contas = Array()

       let id = localStorage.getItem('id')

       //Recupera todas as contas cadastras em localStorage
       for(let i = 1; i <= id; i++){
            //Recuperar as contas
            let conta = JSON.parse(localStorage.getItem(i))

            //Verificar se existe um indice que foi pulado/removido
            if(conta === null){
                continue
            }
            conta.id = i
            contas.push(conta)
       }
       return contas
    } 

    pesquisar(conta){
        let contasFiltradas = Array()
        contasFiltradas = this.recuperarTodasContas()
        
        console.log(conta)
        console.log(contasFiltradas)

        //email
        if(conta.email != ''){
            console.log('filtro de email')
            contasFiltradas = contasFiltradas.filter(c => c.email == conta.email)
        }
        
        //senha
        if(conta.senha != ''){
            console.log('filtro de senha')
            contasFiltradas = contasFiltradas.filter(c => c.senha == conta.senha)
            console.log(contasFiltradas)
        }
        return contasFiltradas
    }

    removerConta(id){
        localStorage.removeItem(id)
    }
}

let bd = new Bd()

function cadastrarConta(){
    
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let senhaConfirmacao = document.getElementById('senhaConfirmacao')
   
    let conta = new Conta(
        email.value, 
        senha.value,
        senhaConfirmacao.value
    )

    if(conta.validarDados()){
        //Dialog de sucesso
        bd.gravar(conta)
        console.log('Sucesso no cadastro')
        location.href='home.html'
    }else{
        //Dialog de erro
        console.log('Erro ao cadastrar')
    }
}


function iniciarSecao(){
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    
    console.log(email, senha)
    let conta = new Conta(email, senha)

    let contaEncontrada = bd.pesquisar(conta)

    console.log(contaEncontrada)
    console.log(contaEncontrada[0].email)
    if(email === contaEncontrada[0].email){
        if(senha === contaEncontrada[0].senha){
            location.href='home.html'
        }else{
            alert('Senha Incorreta')
        }
    }else{
        alert('Email Incorreto')
    }
}

function recuperarConta(){
    let email = document.getElementById('email').value
    let todasContas = bd.recuperarTodasContas()

    console.log(todasContas)
    for(let i in todasContas){
        console.log(todasContas[i])
        if(todasContas[i].email == email){
            alert(`A sua senha é ${todasContas[i].senha}`)
        } 
    }
    
}

function entrarInicioSecao(){
    location.href='./index.html'
}

function voltar(){
    location.href='./index.html'
}


function entrarCadastro(){
    location.href='./cadastro.html'
}

