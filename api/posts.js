function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(response => response.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
        console.log(posts);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post'); // add style to an id

        postDiv.innerHTML = `
        <h4>User- ${post.userId}</h4>
        <h5>Posts: ${post.title} </h5>
        <p>${post.body}</p>`;
        postsContainer.appendChild(postDiv);
    }

}

loadPosts();



