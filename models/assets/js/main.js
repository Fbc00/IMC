form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.Altura_x')

    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);
    if (!valorPeso) {
        exibeResultado('peso inválido', false)
        return;
    }
    if (!valorAltura) {
        exibeResultado('altura inválida', false)
        return;
    }
    const valorImc = resultadoImc(valorPeso, valorAltura);

    const mensagem = `Seu imc é: ${valorImc} e vocês está com ${nivelDoImc(valorImc)}`

    exibeResultado(mensagem, true)
})

function nivelDoImc(imc) {
    const tiposDeNivel = ['Abaixo do peso', 'Peso normal', 'SobrePeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc >= 39.9) return tiposDeNivel[5];
    if (imc >= 34.9) return tiposDeNivel[4];
    if (imc >= 29.9) return tiposDeNivel[3];
    if (imc >= 24.9) return tiposDeNivel[2];
    if (imc >= 18.5) return tiposDeNivel[1];
    if (imc < 18.5) return tiposDeNivel[0];
}


function resultadoImc(peso, altura) {
    const valorImc = peso / (altura ** 2)
    return valorImc.toFixed(2);
}
function criaLinha() {
    let linha = document.createElement("p");
    return linha;

}

function exibeResultado(msg, isValid) {
    const resultado = form.querySelector('.result');
    resultado.inneHTML = '';
    const p = criaLinha();
 
    isValid ? p.classList.add('correto') : p.classList.add('erro')
    p.innerHTML = msg;
    resultado.appendChild(p);

    setTimeout(() => {
        resultado.innerHTML = '';
    }, 10000);

}