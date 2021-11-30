const content = document.getElementById("content")
const contentP = document.getElementById("post")

const data = fetch('https://jsonplaceholder.typicode.com/users/')

    .then((response) => response.json())
    .then((json) => {

        json.forEach((user) => {
            user1 = user.id;
            let name = document.createElement('div');
            name.innerHTML = `<p>${user.name}<p/>`
            name.setAttribute('id', user.id);
            content.appendChild(name)
            name.addEventListener("click", async function(event){
console.log(event)
                const data1 = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user1}`)
                    
                    .then((response) => response.json())
                    .then((json) => {

                        json.forEach((user) => {

                            let title = document.createElement('div');
                            title.innerHTML = `<p>Title: ${user.title} , Body: ${user.body}<p/>`
                            contentP.appendChild(title)
                        })
                    })
            })
        })
    })





const valeur1 = document.getElementById("id");
const OKButton = document.getElementById("OK");

console.log(OKButton);



// function affiche(valeur1) {

//     fetch(`https://jsonplaceholder.typicode.com/users/${valeur1}`)
//          .then((response) => response.json())
//          .then((json) => console.log(json));
//  }

//  OKButton.addEventListener('click', function () {
//      affiche(valeur1.value)
//  })