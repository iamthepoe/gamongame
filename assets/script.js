var gamonSorted = Math.floor(Math.random() * 10001);
var gamonResult = document.querySelector('#result');

document.querySelector('#usernumber').addEventListener('click', ()=>{
	let gamonNumber = document.querySelector('#usernumber').value;
	let audio = document.getElementById("myAudio");
	if(gamonNumber<gamonSorted){
		gamonResult.innerHTML = 'Número baixo';
		document.documentElement.style.setProperty('--main', 'red');
		audio.play();
	}else if(gamonNumber>gamonSorted){
		gamonResult.innerHTML = 'Número alto';
		document.documentElement.style.setProperty('--main', 'yellow');
		audio.play();
	}else{
		gamonResult.innerHTML = 'Número equivalente!';
		document.documentElement.style.setProperty('--main', 'green');
		alert('Parabéns, zé!\n*Número resetado*');
		gamonSorted = Math.floor(Math.random() * 10001);
	}
});

