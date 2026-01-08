const isAuthenticated = sessionStorage.getItem('isAuthenticated');
const username = sessionStorage.getItem('username')
const spanUsername = document.querySelector('.bem-vindo-span')
const criarMissaoBotao = document.querySelector('.criar-missão-botao')
const listaMissoes = document.querySelector('.lista-missoes')

import { buscarMissoes, excluirMissao } from "../services/missionService.js";

if (!isAuthenticated) {
    window.location.href = '/pages/login.html';
}

spanUsername.textContent = `Bem vindo, Comandante ${username}`

criarMissaoBotao.addEventListener('click', () => {
    window.location.href = '/pages/createMission.html'
})


const criarCardMissao = (missao) => {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">${missao.nomeMissao}</h5>
                    </div>

                    <h6 class="card-subtitle mb-2 text-white-50">
                        Comandante ${missao.comandante ?? 'Desconhecido'}
                    </h6>

                    <p class="card-text small">
                        ${missao.descricao}
                    </p>

                    <button class="btn btn-sm btn-light w-100 mt-2 text-dark fw-bold botao-excluir" data-id=${missao.id}>
                    Excluir missão
                    </button>
                </div>
            </div>
        </div>
    `
}

const renderizarMissoes = async () => {
    const missoes = await buscarMissoes()
    listaMissoes.innerHTML = ''

    missoes.forEach(missao => {
        listaMissoes.innerHTML += criarCardMissao(missao)
    })
}


listaMissoes.addEventListener('click', async (event) => {
    const botao = event.target

    if (!botao.classList.contains('botao-excluir')) return

    const id = botao.dataset.id
    console.log('clicou para excluir missão', id)

    const confirmar = confirm('Deseja excluir essa missão?')
    if (!confirmar) {
        return
    }
    excluirMissao(id)
    renderizarMissoes(buscarMissoes())
})
renderizarMissoes(buscarMissoes)


