const localtime = document.querySelector(".localtime");


setInterval(function () {
    localtime.innerHTML = "";
    let date = new Date();
    let text = date.toLocaleTimeString();
    let textNode = document.createTextNode(text);
    localtime.appendChild(textNode);
}, 1000)
