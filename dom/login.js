import { login } from '../services/authService.js';
const botaoLogin = document.querySelector('.btn-login')

botaoLogin.addEventListener('click', async (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const regimento = document.querySelector('#regimento').value
    resposta = await login(username, password, regimento)
})