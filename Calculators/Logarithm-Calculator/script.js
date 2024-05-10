function calculateLog() {
	const number = parseFloat(document.getElementById('number').value);
	const base = parseFloat(document.getElementById('base').value);

   
	if (!isNaN(number) && !isNaN(base) && number > 0 && base > 0 && base !== 1) {
		const result = Math.log(number) / Math.log(base);
		document.getElementById('result').innerText = `Log base ${base} of ${number} is ${result.toFixed(4)}`;
	} else {
		alert('Invalid input. Please enter positive numbers for both the base and the number, and ensure that the base is not equal to 1.')
	}
}
function validateInput(){
	var input=document.getElementById('base');
	if(input.value==1 || input.value==0){
		alert("Invalid input log's base can take value between 0 & 1 or positive value except 1");
	}
}