// Seleciona o elemento da lista dentro do carrossel
const carrossel = document.querySelector('.nav-posters ul');

// Seleciona todos os itens (li) dentro do carrossel
const items = document.querySelectorAll('.nav-posters li');

// Seleciona os botões de navegação
const prevButton = document.getElementById('button-ant'); // Botão "anterior"
const nextButton = document.getElementById('button-prox'); // Botão "próximo"

// Índice atual do carrossel, indicando o item ativo
let currentIndex = 0;

// Função para atualizar a posição do carrossel e as classes dos itens
function updateCarrossel() {
    // Calcula o deslocamento necessário com base no item atual
    const offset = -currentIndex * (items[0].clientWidth + 10); // Inclui 10px de margem
    carrossel.style.transform = `translateX(${offset}px)`; // Move o carrossel horizontalmente

    // Remove classes de todos os itens e adiciona nos itens relevantes
    items.forEach((item, index) => {
        item.classList.remove('active', 'adjacent'); // Remove classes previamente atribuídas
        if (index === currentIndex) {
            item.classList.add('active'); // Adiciona classe ao item ativo
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            item.classList.add('adjacent'); // Adiciona classe aos itens adjacentes
        }
    });
}

// Função para avançar para o próximo item
function nextItem() {
    if (currentIndex < items.length - 1) {
        currentIndex++; // Incrementa o índice se não for o último item
    } else {
        currentIndex = 0; // Volta ao primeiro item se estiver no final
    }
    updateCarrossel(); // Atualiza o carrossel
}

// Função para voltar ao item anterior
function prevItem() {
    if (currentIndex > 0) {
        currentIndex--; // Decrementa o índice se não for o primeiro item
    } else {
        currentIndex = items.length - 1; // Vai para o último item se estiver no início
    }
    updateCarrossel(); // Atualiza o carrossel
}

// Adiciona eventos de clique para os botões de navegação
nextButton.addEventListener('click', nextItem); // Avança para o próximo item
prevButton.addEventListener('click', prevItem); // Volta para o item anterior

// Atualiza o carrossel na inicialização
updateCarrossel();
