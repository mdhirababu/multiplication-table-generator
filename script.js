document.getElementById('generateButton').addEventListener('click', function () {
    const numberInput = document.getElementById('numberInput').value;
    const message = document.getElementById('message');
    const output = document.getElementById('output');

    // Reset previous messages and output
    message.innerText = '';
    output.innerText = '';

    // Validation here
    if (!numberInput || isNaN(numberInput)) {
        message.innerText = "Please enter a valid number!";
        message.style.color = "red";
        return;
    }
    if (numberInput <= 0) {
        message.innerText = "Please enter a number greater than 0!";
        message.style.color = "red";
        return;
    }

    // Generate Multiplication Table here
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${numberInput} x ${i} = ${numberInput * i}\n`;
    }
    output.innerText = table;
});