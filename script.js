/* Get all the keys from document
var operators = ['+', '-', '*', '/'];
 If clear key is pressed, erase everything
 // Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
 */
function inputValue(x) {
	document.getElementById('input').value += x;
}

function clearInput(y) {
	document.getElementById('input').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('input').value);
	document.getElementById('input').value = result;
}



	
		