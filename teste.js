const paragrafo = document.querySelector("#paragrafo")
const popupWrapper = document.querySelector(".popup-wrapper")
const numberExit = document.querySelector(".res")
const areaInputMask = () => {
    const araseResult = document.querySelector(".res");
    const initalValue = "00000000000";
    araseResult.innerText = initalValue.replace(
        /^(\d{3})+(\d{3})+(\d{3})/,
        "$1.$2.$3-"
    );
};
const operationDisable = () =>{ 
    let notActiveButton = document.querySelector("#maker").disabled
    notActiveButton = true
    let notActiveInput = typingNamber = document.querySelector(".oito_Numeros").disabled
    notActiveInput = true
    let notActiveEst = document.querySelector(".cEst").disabled
    notActiveEst = true
}
function Init() {
    document.querySelector('.marcar').hidden = true
    const entr = document.querySelector("#oito_Numeros2");
    entr.addEventListener("keypress", checkInput, false);
    // document.querySelector(".cEst").focus();
    areaInputMask()
}
window.addEventListener("load", Init);

popupWrapper.addEventListener('click', (event)=>{
    const spot = event.target.classList.value
    if (spot === "popup-close"){
        popupWrapper.style.display = 'none'
        document.querySelector("#oito_Numeros2").focus();
        areaInputMask()
    }
})
function checkInput(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (char in pattern) {
        return true;
    }
    e.preventDefault();
    paragrafo.textContent = `Você digitou: " ${char.toLocaleUpperCase()} "  Digite somente números!`
    popupWrapper.style.display = 'block'
    operationDisable();
}
const fundo = document.querySelector('body')
const radioButton= document.querySelector(".marcar")
fundo.addEventListener('click', ()=>{ 
     radioButton.setAttribute("checked", "checked")
    })

function btnSearh(option1, option2) {
    const btnSearhSelect = document.querySelector("#BtnPesquisa");
    const btnSearhGerador = document.querySelector("#maker");
    btnSearhGerador.style.display = option1;
    btnSearhSelect.style.display = option2;
}
function validationOfSize() {
    const typingNamber = document.querySelector(".oito_Numeros").value;
    if (typingNamber.length != 8) {
        Init()
        btnSearh("initial", "none");
        popupWrapper.style.display = 'block'
        paragrafo.textContent ="Você não digitou os oito números!";
        return numberExit.preventDefault()
    }
}
function clickAddNamber() {
    btnSearh("none", "initial");
    validationOfSize();
    const typingNamber = document.querySelector(".oito_Numeros").value;
    const typingEstate = document.querySelector(".cEst").value;
    const showScream = document.querySelector(".res");
    const handleNumber = typingNamber.concat(typingEstate);
    let nineNumber = handleNumber.substring(0, 9);
    const handleNumberTen = () => {
        let soma = 0;
        for (let i = 10; i > 1; i--) {
            soma += nineNumber.charAt(10 - i) * i;
        }
        let digitTen = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return digitTen;
    };
    const handleNumber2 = handleNumber + handleNumberTen();
    const handleNumberEleven = () => {
        let somas = 0;
        nineNumber = handleNumber2.substring(0, 10);
        for (let k = 11; k > 1; k--) {
            somas += nineNumber.charAt(11 - k) * k;
        }
        let digitEleven = somas % 11 < 2 ? 0 : 11 - (somas % 11);
        return digitEleven;
    };
    const handleNumber3 = handleNumber2 + handleNumberEleven();
    const resultExitMask = () => {
        showScream.textContent = handleNumber3.replace(
            /^(\d{3})+(\d{3})+(\d{3})/,
            "$1.$2.$3-"
        );
    };
    resultExitMask();
}

function areaInput() {
    btnSearh("initial", "none");
    const araseInput = document.querySelector("#oito_Numeros2");
    const defaultEst = document.querySelector(".cEst");
    araseInput.value= null;
    defaultEst.value = "7";
    Init();
}
