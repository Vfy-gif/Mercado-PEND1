import produtos from './produtos_atualizados.json' with {type: 'json'}

function criarProduto(dados) {

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
    const id_produto = document.createElement('h1')
    const classificacao = document.createElement('h1')
    const pastaimg = "./img/"

    produto.classList.add('content_produto_oferta');
    imagem.src = pastaimg + dados.imagem
    imagem.alt = dados.nome
    nome.textContent = dados.nome
    categoria.textContent = dados.categoria
    preco.textContent = dados.preco
    descricao.textContent = dados.descricao
    

    container.appendChild(produto)
    produto.appendChild(categoria)
    produto.appendChild(imagem)
    produto.appendChild(li_nome)
    li_nome.appendChild(nome)
    produto.appendChild(preco)
    preco.appendChild(li_preco)
    produto.appendChild(li_descricao)
    li_descricao.appendChild(descricao)
}

function carregarProduto() {
    produtos.forEach(criarProduto)
}

carregarProduto()