


const form = document.querySelector('#form');



form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector("#input-peso")
    const inputAltura = evento.target.querySelector("#input-altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    

    if (!peso){
        setResultado("peso invalido", false)
        return
    }

    if (!altura){
        setResultado("altura invalida", false)
        return
    }
    
    
    const imc = getImc(peso,altura);
    const texto = nivelImc(imc)
    const msg = `seu imc é: ${imc}, vc esta na escala: ${texto}`
    setResultado(msg, true)
    
    
})

function getImc(peso,altura){
    const imc = peso/altura**2
    return imc.toFixed(2)
}


function nivelImc(imc){
    const imcTexto = ["abaixo do peso", "peso normal", "sobrepeso", "obresidade grau 1", "obresidade grau 2", "obresidade grau 3"]

    if(imc > 40) return imcTexto[5]
    if(imc >= 35) return imcTexto[4]
    if(imc >= 30) return imcTexto[3]
    if(imc >= 25) return imcTexto[2]
    if(imc >= 18.5) return imcTexto[1]
    if(imc < 18.5) return imcTexto[0]
}

function criaP(){
    const p = document.createElement('p');
    return p;
}



function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    
    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}



