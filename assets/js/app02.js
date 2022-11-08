const imagen = document.querySelector("#img_01");
const amount01 = document.querySelector("#amount01");
const amount02 = document.querySelector("#amount02");
const amount03 = document.querySelector("#amount03");


btnVerify.addEventListener("click", ()=>{
	//console.log("Estamos ok"+amount01.value);
	
	let am01 = parseInt(amount01.value);
	let am02 = parseInt(amount02.value);
	let am03 = parseInt(amount03.value);
	
	
	
	let sumStikers = am01 + am02 + am03;
	//console.log(sumStikers);

	if (sumStikers > 10){
		//console.log("muchos Stikers");
		document.getElementById("msgStikers").innerHTML=sumStikers +" Stikers, lleva demasiados!"
		return
	}

	if (sumStikers === 0){
		//console.log("muchos Stikers");
		document.getElementById("msgStikers").innerHTML="No ha seleccionado Stikers!"
		return
	}
	
	document.getElementById("msgStikers").innerHTML = "Usted lleva " + sumStikers + " Stikers"

})