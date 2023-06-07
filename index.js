// capturar evnto de submit do formulário

let formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);

    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(mensagem, true)


});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) {
        return nivel[5];
    }else if(imc >= 34.9) {
        return nivel[4];
    }else if(imc >= 29.9) {
        return nivel[3];
    }else if(imc >= 24.9) {
        return nivel[2];
    }else if(imc >= 18.5) {
        return nivel[1];
    }else if(imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarParagrafo() {
    const p = document.createElement('p')
    return p;
}

function setResultado(mensagem, isValid) {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarParagrafo();
    if(isValid) {
        p.classList.add('paragrafoResultado')
    }else {
        p.classList.add('bad')
    }
    p.innerHTML = mensagem
    resultado.appendChild(p)
}
