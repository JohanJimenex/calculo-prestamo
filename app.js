var button = document.querySelector('button');
var tema = document.querySelector('#tema')

button.addEventListener('click', (e) => {
	e.preventDefault()

	var monto = Number(document.querySelector('#monto').value);
	var tasa = Number(document.querySelector('#tasa').value) / 12;
	var tiempo = Number(document.querySelector('#tiempo').value);



	var cuotaMensual = monto * (
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
	var cuotaAnualFormateada = (cuotaMensual*tiempo).toLocaleString("en-US", { style: "currency", currency: "USD" });


	document.querySelector('h1').innerHTML = 'RD$ ' + cuotaFormtaeada;
	document.querySelector('h3').innerHTML = 'RD$ ' + cuotaAnualFormateada;

});

tema.addEventListener('click', (e) => {
	e.preventDefault()

	document.querySelector('#caja').style.background = e.target.id;

})