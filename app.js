function criaCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'

    cartão.innerHTML = `
    <div class="cartão__conteúdo">
    <h3>${categoria}</h3>
    <div class="cartão__conteúdo__pergunta">
         <p>${pergunta}</p>
    </div>
   <div class="cartão__conteúdo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVIsivel = false

    function viraCartão() {
        respostaEstaVIsivel = !respostaEstaVIsivel
        cartão.classList.toggle('active', respostaEstaVIsivel)
    }
    cartão.addEventListener('click', viraCartão)


    container.appendChild(cartão)
}