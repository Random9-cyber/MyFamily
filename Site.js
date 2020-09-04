var AllContent = document.getElementById("AllContent");
var Caixa = document.querySelector(".Caixa");

document.addEventListener("scroll", () => {

    const PositionY = window.pageYOffset

    // console.log(window.pageYOffset)

    // if (pagePositionY == 381.6000061035156)
    //     Caixa.append("oi");
    // Caixa.innerHTML = parseInt(PositionY)

    if (PositionY <= 948) {
        Caixa.innerHTML = "Meu pai";
    } else {
        Caixa.innerHTML = "Minha mãe ";
    }

    if (PositionY >= 1907) {
        Caixa.innerHTML = "Meu irmão";
    }

    if (PositionY >= 2792) {
        Caixa.innerHTML = "Eu";
    }

    if (PositionY == 0) {
        Caixa.innerHTML = "Uma BREVE biografia da minha familia:";
    }

    // /    switch (window.pageYOffset) {
    //         case 400:
    //             Caixa.innerHTML = "Meu pai";
    //             break;

    //         case 424:
    //             Caixa.innerHTML = "Minha mae";
    //             break;

    //         case 975:
    //             Caixa.innerHTML = "Meu irmao";
    //             break;
    //     }/

})