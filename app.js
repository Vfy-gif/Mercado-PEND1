'use strict'
import produtos_atualizados from './produtos_atualizados.json' with {type: 'json'}

function criarProduto(dados) {
    const container_ofertas = document.querySelector('.produto-ofertas');
    
    const produto = document.createElement('div');
    const id = document.createElement('h1');
    const categoria = document.createElement('h1');
    const imagem = document.createElement('img');
    const nome = document.createElement('a');
    const nome_li = document.createElement('li');
    const preco = document.createElement('span');
    const preco_li = document.createElement('li');
    const descricao = document.createElement('a');
    const descricao_li = document.createElement('li');
    const estrelas = document.createElement('div');
    const pastaimg = "./img/";

    produto.classList.add('produto-ofertado');
    estrelas.classList.add('stars');

    let classificacao = dados.classificacao;
    
    for (let i = 0; i < 5; i++) {
        const starItem = document.createElement('div');
        starItem.classList.add('star-item');
        
        const triangulo1 = document.createElement('div');
        const triangulo2 = document.createElement('div');
        const triangulo3 = document.createElement('div');
        
        triangulo1.classList.add('triangule-star-first');
        triangulo2.classList.add('triangule-star-second');
        triangulo3.classList.add('triangule-star-third');
        
        starItem.appendChild(triangulo1);
        starItem.appendChild(triangulo2);
        starItem.appendChild(triangulo3);
        
        if (i < classificacao) {
            const starItemOff = document.createElement('div');
            starItemOff.classList.add('star-item-off');
            
            const starWhiteItem = document.createElement('div');
            starWhiteItem.classList.add('star-white-item');
            
            const trianguloOff1 = document.createElement('div');
            const trianguloOff2 = document.createElement('div');
            const trianguloOff3 = document.createElement('div');
            
            trianguloOff1.classList.add('triangule-star-first-off');
            trianguloOff2.classList.add('triangule-star-second-off');
            trianguloOff3.classList.add('triangule-star-third-off');
            
            starWhiteItem.appendChild(trianguloOff1);
            starWhiteItem.appendChild(trianguloOff2);
            starWhiteItem.appendChild(trianguloOff3);
            starItemOff.appendChild(starWhiteItem);
            starItem.appendChild(starItemOff);
        }
        
        estrelas.appendChild(starItem);
    }

    imagem.src = pastaimg + dados.imagem;
    imagem.alt = dados.nome;
    nome.textContent = dados.nome;
    descricao.textContent = dados.descricao;
    id.textContent = "id: " + dados.id;
    categoria.textContent = dados.categoria;
    categoria.id = "categoria";

    const precoStr = String(dados.preco); 
    if (precoStr.includes('.')) {
        const partes = precoStr.split('.'); 
        const reais = partes[0];
        const centavos = partes[1] || '00'; 
        preco.textContent = 'R$' + reais; 
        preco_li.textContent = centavos;
    } else {
        preco.textContent = 'R$' + precoStr;
        preco_li.textContent = '00';
    }

 
    produto.appendChild(id);
    produto.appendChild(categoria);
    produto.appendChild(imagem);
    nome_li.appendChild(nome);
    produto.appendChild(nome_li);
    preco.appendChild(preco_li);
    produto.appendChild(preco);
    descricao_li.appendChild(descricao);
    produto.appendChild(descricao_li);
    produto.appendChild(estrelas);
    container_ofertas.appendChild(produto);
}

function carregarProduto() {
    produtos_atualizados.forEach(criarProduto);
}

document.addEventListener('DOMContentLoaded', carregarProduto);