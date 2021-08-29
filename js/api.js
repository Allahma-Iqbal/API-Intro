
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.userId))
};


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(res => res.json())
        .then(data => loadDisplayComments(data))
}

function loadDisplayComments(data) {
    const ol = document.getElementById('comment')
    for (const comments of data) {
        // console.log(comments)
        const li = document.createElement('li');
        li.innerText = `name: ${comments.name}`;
        ol.appendChild(li);
    }
}



// loadPosts();

function displayUsers(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}


