import { cadastrarMissao } from "../services/missionService.js"

const botaoCancelar = document.querySelector('.botaoCancelar')
const botaoCadastrar = document.querySelector('.botaoCadastrar')

botaoCancelar.addEventListener('click', () => {
    window.location.href = '../index.html'
})

botaoCadastrar.addEventListener('click', async (e) => {
    e.preventDefault()
    const nomeMissaoInput = document.querySelector('#inputNome').value
    const descricao = document.querySelector('#inputDescricao').value
    const novaMissao = await cadastrarMissao(nomeMissaoInput, descricao)
    if (novaMissao.status === 201) {
        window.location.href = '../index.html'
        return
    }
})