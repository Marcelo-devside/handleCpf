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
// function tcPress(event){
//     console.log(event)
//     let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     if ( event.key in numbers ){
//         console.log(event.key)
//         }else {
//             alert("Digite apenas Números")
//             window.location.reload()
//             }
        
// }
// window.addEventListener("keydown", tcPress)

function clickAddNamber(){
    let capitura = document.querySelector('.oito_Numeros')
    let capituras = capitura.value
    let capitura2 = document.querySelector('.cEst')
    let capituras2 = capituras + capitura2.value 
    let ref =document.querySelector('.res')
    ref.innerText = capituras2
    Array.from(document.querySelectorAll('.res')).map(function(elemento, indece, arrayBase){
        const multDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2]
        console.log(typeof(parseInt(elemento.textContent)))
    })
}

