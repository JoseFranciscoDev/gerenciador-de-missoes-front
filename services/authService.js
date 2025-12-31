export const registerUser = async (nameUser, password, regimento) => {
    const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: nameUser,
            regimento: regimento,
            password: password,
        }),
    })

    if (response.status === 201) {
        sessionStorage.setItem('isAuthenticated', 'ok');
        window.location.href = './index.html';
    }
}

export const login = async (nameUser, passwordUser, regimentoUser) => {
    const response = await fetch(`http://localhost:8000/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: nameUser,
            regimento: regimentoUser,
            password: passwordUser,
        }),
    });
    if (response.status == 200) {
        sessionStorage.setItem('isAuthenticated', 'ok');
        window.location.href = '/index.html';
    }
    else {
        console.log(response.value)
    }
    return response.value;
}