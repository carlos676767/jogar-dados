
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
            if (elementosDado[0].style.display === `none`) {
                elementosDado[0].style.display = `block`
               
            } else{
                elementosDado[0].style.display = `none`
            }
            break
        
        }
        case 2: {
            if (elementosDado[1].style.display === `none`) {
                elementosDado[1].style.display = `block`
            } else{
                elementosDado[1].style.display = `none`
            }
            break
        }
        case 3: {
            if (elementosDado[2].style.display === `none`) {
                elementosDado[2].style.display = `block`
            } else{
                elementosDado[2].style.display = `none`
            }
            break
        }
        case 4: {
            if (elementosDado[3].style.display === `none`) {
                elementosDado[3].style.display = `block`
            } else{
                elementosDado[3].style.display = `none`
            }
            break
        }
        case 5: {
           if (elementosDado[4].style.display === `none`) {
            elementosDado[4].style.display = `block`
           } else{
            elementosDado[4].style.display = `none`
           }
            break
        }
        case 6: {
            if (elementosDado[5].style.display === `none`) {
                elementosDado[5].style.display = `block`
            } else{
                elementosDado[5].style.display = `none`
            }
            break
        }
    }
})