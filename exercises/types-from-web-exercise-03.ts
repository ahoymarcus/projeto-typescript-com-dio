const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
	const i = event.currentEvent as HTMLInputElement;
	
	console.log(i.value);
});







