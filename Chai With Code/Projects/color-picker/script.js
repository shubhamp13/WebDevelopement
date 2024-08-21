const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
buttons.forEach((a) => {
    a.addEventListener('click', function (e) {
        const choice = e.target.id;
        switch (choice) {
            case choice:
                body.style.backgroundColor = choice;
                break;
        }
    })
})

