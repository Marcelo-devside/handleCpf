function Init() {
    const entr = document.querySelector("#oito_Numeros2");
    entr.addEventListener("keypress", checkInput, false);
    document.querySelector(".cEst").focus();
}
window.addEventListener("load", Init);
function checkInput(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (char in pattern) {
        return true;
    }
    e.preventDefault();
    alert(`Você digitou \n\n " ${char} " \n\n Digite somente números!`);
}
function btnSearh(option1, option2) {
    const btnSearhSelect = document.querySelector("#BtnPesquisa");
    const btnSearhGerador = document.querySelector("#maker");
    btnSearhGerador.style.visibility = option1;
    btnSearhSelect.style.visibility = option2;
}
function validationOfSize() {
    const typingNamber = document.querySelector(".oito_Numeros").value;
    if (typingNamber.length != 8) {
        btnSearh("visible", "hidden");
        return alert("Você não digitou os oito números!");
    }
}
function clickAddNamber() {
    btnSearh("hidden", "visible");
    validationOfSize();
    const typingNamber = document.querySelector(".oito_Numeros").value;
    const typingEstate = document.querySelector(".cEst").value;
    const showScream = document.querySelector(".res");
    const handleNumber = typingNamber + typingEstate;
    let noveNumeros = handleNumber.substring(0, 9);
    const handleNumberTen = () => {
        let soma = 0;
        for (let i = 10; i > 1; i--) {
            soma += noveNumeros.charAt(10 - i) * i;
        }
        let resultados = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        return resultados;
    };
    const handleNumber2 = handleNumber + handleNumberTen();
    const handleNumberEleven = () => {
        let somas = 0;
        noveNumeros = handleNumber2.substring(0, 10);
        for (let k = 11; k > 1; k--) {
            somas += noveNumeros.charAt(11 - k) * k;
        }
        let resultado = somas % 11 < 2 ? 0 : 11 - (somas % 11);
        return resultado;
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
const areaInputMask = () => {
    const araseResult = document.querySelector(".res");
    const initalValue = "00000000000";
    araseResult.innerText = initalValue.replace(
        /^(\d{3})+(\d{3})+(\d{3})/,
        "$1.$2.$3-"
    );
};
function areaInput() {
    btnSearh("visible", "hidden");
    const araseInput = document.querySelector("#oito_Numeros2");
    const defaultEst = document.querySelector(".cEst");
    araseInput.value = "";
    areaInputMask();
    defaultEst.value = "7";
    Init();
}
