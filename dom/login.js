import { login } from '../services/authService.js';
const botaoLogin = document.querySelector('.btn-login')

botaoLogin.addEventListener('click', (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const regimento = document.querySelector('#regimento').value
    login(username, password, regimento)
})