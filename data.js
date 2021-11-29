const content = document.getElementById("content")


    const data = fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((json) => {
            console.log(data)
            json.forEach((user, index) => {
                let name = document.createElement('div');
                name.innerHTML = `<p>${user.name}<p/>`
                content.appendChild(name)
            })
        })

const valeur1 = document.getElementById("id");
const OKButton = document.getElementById("OK");

console.log(OKButton);
function affiche(valeur1) {

    fetch(`https://jsonplaceholder.typicode.com/users/${valeur1}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

OKButton.addEventListener('click', function () {
    affiche(valeur1.value)
})