const form = document.querySelector('form');
console.log(form);



form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    const BMI = (weight / Math.pow((height / 100), 2));
    let text = '';
    result.innerHTML = '';
    if (height == '' || height <= 0 || isNaN(height)) {

        result.style.backgroundColor = '#White';
        text = document.createTextNode(`Invalid Height: ${height}`);
        result.appendChild(text);
    }
    else if (weight == '' || weight <= 0 || isNaN(weight)) {

        result.style.backgroundColor = '#White';
        text = document.createTextNode(`Invalid Weight: ${weight}`);
        result.appendChild(text);
    }
    else if (BMI < 16 && BMI > 0) {

        result.style.backgroundColor = '#ADD8E6';
        text = document.createTextNode(`BMI Score Is: ${BMI} Severely underweight`);
        result.appendChild(text);
    }
    else if (BMI >= 16 && BMI < 18.4) {

        result.style.backgroundColor = '##FFFFE0';
        text = document.createTextNode(`BMI Score Is: ${BMI.toFixed(2)}   underweight`);
        result.appendChild(text);
    }
    else if (BMI >= 18.5 && BMI < 24.9) {

        result.style.backgroundColor = '#90EE90';
        text = document.createTextNode(`BMI Score Is: ${BMI.toFixed(2)}   Normal weight`);
        result.appendChild(text);
    } else if (BMI >= 25 && BMI < 29.9) {

        result.style.backgroundColor = '#FFD700';
        text = document.createTextNode(`BMI Score Is: ${BMI.toFixed(2)}   Overweight`);
        result.appendChild(text);
    }
    else if (BMI >= 30) {

        result.style.backgroundColor = '#FF4500';
        const text = document.createTextNode(`BMI Score Is: ${BMI.toFixed(2)}   Severely Overweight`);
        result.appendChild(text);
    }
    else {
        result.style.backgroundColor = 'white';
        const text = document.createTextNode(`Invalid Input Please Try again`);
        result.appendChild(text);
    }
})
