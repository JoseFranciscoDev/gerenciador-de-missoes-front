import { registerUser } from '../services/authService.js';
const botaoRegistrar = document.querySelector('.btn-registrar')

botaoRegistrar.addEventListener('click', (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const regimento = document.querySelector('#regimento').value
    registerUser(username, password, regimento)
})