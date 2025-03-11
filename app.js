let amigos = []  // Array vazia para armazenar os integrantes

// Função para armazenamento de integrantes

function adicionarAmigoSecreto() {
    const inputAmigo = document.getElementById('amigo');  // Para obter o elemento de DOM com id 'amigo'
    const nomeAmigo = inputAmigo.value.trim();  // Para obter o texto adicionado no campo, eliminando espaços do início ao fim

    // Verificar que o campo não está vazio

    if (nomeAmigo === '') {  // Verifica se o campo de entrada está vazio
        alert('O campo não pode estar vazio, por favor informe um nome.');  // Mostra uma mensagem de alerta caso o campo esteja vazio
        return;  // Retorna a execução da função
    }

    // Verifica se o nome está repetido

    if (amigos.includes(nomeAmigo)) {  // Verifica se o nome já existe na array 'amigos'
        alert(`O amigo ${nomeAmigo} já existe na lista`);  // Alerta que o nome já foi adicionado
        return;  // Retorna a execução da função
    }

    // Adicionar um nome à array de amigos

    amigos.push(nomeAmigo);  // Adiciona o nome à array 'amigos'

    // Exibir o nome adicionado abaixo do campo de entrada

    const listaAmigos = document.getElementById('listaAmigos')
          listaAmigos.innerHTML += `Amigo: ${nomeAmigo}<br>`;

    // Limpa o campo de entrada

    inputAmigo.value = '';  // Limpa o campo de entrada para que o usuário possa adicionar outro nome

    // Atualizar a lista no HTML

    atualizarLista();  // Chama a função 'atualizarLista' para atualizar a interface do usuário
}

// Função para fazer a atualização da lista no HTML

function atualizarLista() {
    const listaAmigos = document.getElementById('ListaAmigos');  // Pega o elemento da DOM com id 'ListaAmigos'

    // Limpar o conteúdo atual da lista

    listaAmigos.innerHTML = '';  // Limpa o conteúdo prévio da lista

    // Usar a array 'amigos' para atualizar a lista no HTML

    for (let i = 0; i < amigos.length; i++) {  // Itera sobre cada elemento da array 'amigos'
        const li = document.createElement('li');  // Cria um novo elemento de lista (li)
        li.textContent = amigos [1];  // Coloca o nome do amigo dentro do elemento <li>
        listaAmigos.appendChild(li);  // Adiciona o novo item à lista na DOM
    }
}

// Função para sortear o amigo secreto de forma aleatória

function sortearAmigo() {
    // Verificar se há amigos na lista
    if (amigos.length === 0) {  // Comprova se a array 'amigos' está vazia
        alert('Não há amigos prontos para o sorteio, favor adicionar amigos.');  // Alerta se não houver amigos na lista
        return;  // Retorna a execução da função
    }

    // Gera um índice aleatório

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  // Gera um número aleatório entre 0 e o tamanho da array 'amigos'

    // Seleciona o nome do amigo sorteado

    let amigoSorteado = amigos[indiceAleatorio];  // Usa o índice aleatório para pegar o nome da array

    // Mostra o resultado no HTML
    
    let resultado = document.getElementById('resultado');  // Pega o elemento da DOM com id 'resultado'
    resultado.innerHTML = `Amigo sorteado: <em><strong>${amigoSorteado}</strong></em>`;  // Exibe o nome do amigo sorteado no HTML
}