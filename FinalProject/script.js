$(document).ready(function () {
    let githubReposDiv = document.querySelector('.githubRepos');
    const xhttp = new XMLHttpRequest();

    githubReposDiv.innerHTML += `<ul>`

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.response);

           result.forEach(el => {
               githubReposDiv.innerHTML += `<li> <a href='${el.html_url}'>${el.name}</a> </li>`
           });
        }
    }
    githubReposDiv.innerHTML += `</ul>`
    xhttp.open('get', 'https://api.github.com/users/RwbyPanda/repos', true);
    xhttp.send();




    $('.fab').hover(function () {
            // over
            $(this).removeClass('fa-2x');
            $(this).addClass('fa-3x');
        }, function () {
            // out
            $(this).removeClass('fa-3x');
            $(this).addClass('fa-2x');
        }
    );
});