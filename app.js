import produtos from './produtos_atualizados.json' with {type: 'json'}

function criarFuncionario(dados) {

    const container = document.getElementById('produto_oferta')
    const produto = document.createElement('content_produto_oferta')
    const categoria = document.createElement('h1')
    const li_nome = document.createElement('li')
    const nome = document.createElement('a')
    const imagem = document.createElement('img')
    const preco = document.createElement('span')
    const li_preco = document.createElement('li')
    const descricao = document.createElement('a')
    const li_descricao = document.createElement('li')
    const pastaimg = "./img/"

    container.classList.add('produto_oferta');
    produto.classList.add('content_produto_oferta');
    
    imagem.src = pastaimg + dados.imagem
    imagem.alt = dados.nome
    nome.textContent = dados.nome
    nome.classList.add('nome')
    cargo.textContent = dados.cargo
    cargo.classList.add('cargo')
    

    container.appendChild(funcionario)
    funcionario.appendChild(imagem)
    funcionario.appendChild(nome)
    funcionario.appendChild(cargo)
}