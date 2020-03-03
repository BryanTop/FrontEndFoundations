function loadDoc() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            let result = JSON.parse(this.responseText);
            let div = document.createElement('div');

            div.innerHTML = `
                    <p> ${result.name}</p>
                    <p> ${result.birthday}</p>
            `

            document.getElementById('example').appendChild(div);
        }
    }

    xhttp.open("get", "einstein.json", true);
    xhttp.send();
}

function loadBio() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);

            document.getElementById('bio').innerHTML = `
                <p> ${result.bio} </p>
            `
        }
    }

    xhttp.open('get', 'einstein.json', true);
    xhttp.send();

}