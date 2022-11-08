const imagen = document.querySelector("#img_01");
const btnVerify = document.querySelector("#btnVerify");
let estado = 0;
//console.log(estado);

imagen.addEventListener("click", () => {
    //console.log("estamos ok");
    let borderImg = document.getElementById("img_01");
    //console.log(borderImg);

    if (estado === 0) {
        borderImg.classList.remove("borderImg", "borderImg_2");
        borderImg.classList.add("borderImg_2");
        estado = 1;
        //console.log(estado);
        return;
    }

    borderImg.classList.remove("borderImg_2", "borderImg");
    borderImg.classList.add("borderImg");
    estado = 0;
    //console.log(estado);
});