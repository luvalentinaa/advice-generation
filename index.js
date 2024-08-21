let btnDice = document.querySelector('.btn-dice')
let device = document.querySelector('#advice')
let description = document.getElementsByClassName('.description')




btnDice.addEventListener('click', () => {

    buscandoConselhos()
    idConselho()


})

async function conselhosAleatorios() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url) //---O FETCH É RESPONSÁVEL POR BUSCAR OS DADOS DA AP
    return await resposta.json()

}

async function conselhos(slip_id) {
    const url = `https://api.adviceslip.com/advice/${slip}`
    const resposta = await fetch(url)
    return await resposta.json()

}

async function buscandoConselhos() {
    let device = await conselhosAleatorios()
    let conselho = device.slip.advice
    document.getElementById('description').textContent = '"'+  conselho + ' "'
}
async function idConselho() {
    let deviceId = await conselhosAleatorios()
    let id = deviceId.slip.id
    document.getElementById('number-advice').textContent = 'adivice #' +  id

    
}

