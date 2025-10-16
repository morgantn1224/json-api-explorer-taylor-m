// so much empty


const fetchButton = document.getElementById('fetchButton');
const postList = document.getElementById('postList');
const submitButton = document.getElementById('submitButton');


fetchButton.addEventListener('click', () => {


    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {

        response.json().then(data => {
            console.log(data);

            console.log(data[0]);

            for (i = 0; i <= data.length - 1; i++) {
                postList.innerHTML += `<h1>${data[i].title}</h1>\n<p>${data[i].body}<\p>`;
            }
        });
    });

});


submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('titleInput').value;
    const body = document.getElementById('bodyInput').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            title,
            body
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(json => console.log(json));

    postList.innerHTML += `<h1>${title}</h1>\n<p>${body}<\p>`;
    loadingDisplay.innerHTML = `Loading...`;   
    setTimeout(()=>{
        loadingDisplay.innerHTML = `Post submitted! Title: ${title}`;
    }, 3000);

})