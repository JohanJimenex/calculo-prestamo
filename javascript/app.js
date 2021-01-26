"use strict";

var button = document.querySelector('button');
var tema = document.querySelector('#tema');
var monto;
var capital;
var tasa;
var tiempo;
var cuotaMensual;
var tBody = document.querySelector("tbody");

button.addEventListener('click', (e) => {
	e.preventDefault()

	monto = Number(document.querySelector('#monto').value);
	tasa = Number(document.querySelector('#tasa').value) / 12;
	tiempo = Number(document.querySelector('#tiempo').value);
	var saldoInicial = monto;


	cuotaMensual = monto * (
		(Math.pow((1 + tasa / 100), tiempo) *
			(tasa / 100)
		) /
		(Math.pow((1 + tasa / 100), tiempo)
			- 1
		)
	);

	//Dar formato con comas y decimales
	//Nota: primero se deben hacer las operaciones matematicas deseadas antes de utilizar el metodo 'toLocalString()'
	var cuotaFormtaeada = cuotaMensual.toLocaleString("en-US", { style: "currency", currency: "USD" });
	var cuotaAnualFormateada = (cuotaMensual * tiempo).toLocaleString("en-US", { style: "currency", currency: "USD" });


	for (var i = 0; i < tiempo; i++) {


		var interes = saldoInicial * tasa / 100;
		capital = cuotaMensual - interes;
		var balance = saldoInicial - capital;

		tBody.innerHTML += `
			<tr>
                <th scope="row">${i + 1}</th>
				<td>${cuotaFormtaeada}</td>
                <td>${(interes).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                <td>${(capital).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                <td>${(balance).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
			</tr>	
			
			
		`
		saldoInicial = saldoInicial - capital;
	}



	if (monto == "" || tasa == "" || tiempo != Number) {

		document.querySelector("p").innerHTML = "<div class='btn alert-danger'> Debe llenar todos los campos </div>"

		setTimeout(() => {
			document.querySelector("p").innerHTML = "Llene todos los campos"
		}, 3000);

	} else {
		document.querySelector('h1').innerHTML = cuotaFormtaeada;
		document.querySelector('h3').innerHTML = cuotaAnualFormateada;

		document.querySelector("#boton").innerHTML = "<button id='btn' class='btn btn-success' >Calcular otro préstamo</button>"
		var btnReinicio = document.querySelector("#btn");
		btnReinicio.addEventListener("click", () => location.reload());
	}






});








