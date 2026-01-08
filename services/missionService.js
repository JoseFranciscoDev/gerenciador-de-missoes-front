export const cadastrarMissao = async (titulo, descricao) => {
    const dataAtual = new Date
    const dataFormatada = dataAtual.toLocaleString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    })

    const data = {
        nomeMissao: titulo,
        comandante: sessionStorage.getItem('username'),
        data: dataFormatada,
        descricao: descricao
    }

    const response = await fetch("http://localhost:3000/missoes", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

export const buscarMissoes = async () => {
    const response = await fetch('http://localhost:3000/missoes')
    return await response.json()
}

export const excluirMissao = async (id) => {
    await fetch(`http://localhost:3000/missoes/${id}`, {
        method: 'DELETE'
    })
}