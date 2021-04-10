// function  calculoFinal (resultado) {
//     resultado = resultado % 11;  
//     if (resultado != 0 && resultado != 1) {
//         resultado = 11 - resultado 
//     } else {
//         resultado = 0
//             }
//     console.log(resultado)
// }
// calculoFinal(13)

//     clickAddNamber()
// function multiNamber(digitos){
    //     for (i = 10 ; i > 1; i-- ) {
        //         formula = i * digitos
        //     }
        //     return formula
    // }
    
//     function somaTudo(digitos){
    //         let total = 0
//         for (let num of digitos){
    //         total = total + num
//     }
//     return total
// }

// let arrayNumeros = [3, 5, 2]
// let resulta = multiNamber(arrayNumeros)
// console.log(resulta)

// let arrayNumeros = [3, 5, 2]
// let resulta = somaTudo(arrayNumeros)
// console.log(resulta)

// function clickStateLocal(){ 
//     let capitura = document.querySelector("#localname")
//     console.log(capitura.value)
// }

function clickAddNamber(){
    let capitura = document.querySelector('#oito_Numeros')
    let capituras = capitura.value
    let capitura2 = document.querySelector('#cEst')
    let capituras2 = capitura2.value
    // return capituras
    let ref = document.querySelector('#addSaida')
    let add = document.createElement('h3')
    ref.appendChild(add)
    return add.innerHTML = (capituras + capituras2)
}


