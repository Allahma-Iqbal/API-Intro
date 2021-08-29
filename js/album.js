function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
        .then(response => response.json())
        .then(data => displayAlbum(data))
}

loadAlbum();
function displayAlbum(albums) {
    console.log(albums)
    const albumContainer = document.getElementById('albums');

    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumContainer.appendChild(p);
    }

}