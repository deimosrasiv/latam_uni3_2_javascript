const digito01 = document.getElementById("inputdigito01");
const digito02 = document.getElementById("inputdigito02");
const digito03 = document.getElementById("inputdigito03");


btnVerify.addEventListener("click", () => {
    //console.log("entramos");
    let password = digito01.value + digito02.value + digito03.value;
    //console.log(password);

    if (password == 911) {
        //console.log("ok");
        document.getElementById("msgPassword").innerHTML = "Password 1, es Correcta!"
        return
    }

    if (password == 714) {
        //console.log("ok2");
        document.getElementById("msgPassword").innerHTML = "Password 2, es Correcta!"
        return
    }
    if (password == 000) {
        //console.log("ok2");
        document.getElementById("msgPassword").innerHTML = "Una clave con 3 ceros, no es segura!"
        return
    }

    document.getElementById("msgPassword").innerHTML = "Password Incorrecto!"

    //console.log("mal");
})