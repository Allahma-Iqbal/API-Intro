function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

loadPost()

function displayPost(posts) {
    const postContaier = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `;
        postContaier.appendChild(div);
        console.log(post.title)
    }
}