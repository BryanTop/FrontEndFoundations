function regexChecker() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    nameRegex = /^[A-Z][a-z]+/g

    symbolRegex = /\W/g
    let p = document.createElement('p');
    let container = document.getElementById('container');
    if(firstName.match(symbolRegex) || lastName.match(symbolRegex)) {
        p.innerText = 'Oh no! Thats an invalid format!';
        container.appendChild(p);
    } else {
        if(firstName.match(nameRegex) && lastName.match(nameRegex)) {
            p.innerText = 'Yay! Your inputs were all correct!';
            container.appendChild(p);
        } else {
            p.innerText = 'Oh no! Thats an invalid format!';
            container.appendChild(p);
        }
    }

    
}