
let botao = document.getElementById(`botao`)
botao.addEventListener(`click`, function(){
    let dados = Math.floor(Math.random() * 6) -1;
    let elementosDado = [];
    for(let i = 1; i <= 6; ++i){
        let elemento = document.getElementById('dado' + i);
        elementosDado.push(elemento)
    }
    switch(dados){
        case 1: {
            elementosDado[0].style.display = `block`
            elementosDado[1].style.display = `none`
            elementosDado[2].style.display = `none`
            elementosDado[3].style.display = `none`
            elementosDado[4].style.display = `none`
            elementosDado[5].style.display = `none`
            break
        }
        case 2: {
            elementosDado[1].style.display = `block`
            elementosDado[0].style.display = `none`
            elementosDado[2].style.display = `none`
            elementosDado[3].style.display = `none`
            elementosDado[4].style.display = `none`
            elementosDado[5].style.display = `none`
            break
        }
        case 3: {
            elementosDado[2].style.display = `block`
            elementosDado[0].style.display = `none`
            elementosDado[1].style.display = `none`
            elementosDado[3].style.display = `none`
            elementosDado[4].style.display = `none`
            elementosDado[5].style.display = `none`
            break
        }
        case 4: {
            elementosDado[3].style.display = `block`
            elementosDado[1].style.display = `none`
            elementosDado[0].style.display = `none`
            elementosDado[2].style.display = `none`
            elementosDado[3].style.display = `none`
            elementosDado[4].style.display = `none`
            elementosDado[5].style.display = `none`
            break
        }
        case 5: {
            elementosDado[4].style.display = `block`
            elementosDado[0].style.display = `none`
            elementosDado[1].style.display = `none`
            elementosDado[2].style.display = `none`
            elementosDado[3].style.display = `none`
            elementosDado[5].style.display = `none`
            break
        }
        case 6: {
            elementosDado[5].style.display = `block`
            elementosDado[1].style.display = `none`
            elementosDado[0].style.display = `none`
            elementosDado[3].style.display = `none`
            elementosDado[4].style.display = `none`
            break
        }
    }
})