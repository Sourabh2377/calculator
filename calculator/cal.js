
function appendValue(value) {
    document.getElementById('result').value += value;
}
function calculate() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Invalid calculation');
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

