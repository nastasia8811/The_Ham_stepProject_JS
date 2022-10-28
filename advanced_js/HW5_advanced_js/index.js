class Card {
    constructor(title, body, username, name, email, id, userId) {
        this.title = title;
        this.body = body;
        this.username = username;
        this.name = name;
        this.email = email;
        this.container = document.createElement('div');
        this.deleteButton = document.createElement("button");
        this.id = id;
        this.userId = userId;
    }

    createElements() {
        this.container.insertAdjacentHTML('beforeend', `<h1 class="post_name">${this.username}</h1><h3 class="post_name">${this.name}</h3><p class="post_email">${this.email}</p><h4 class="post_title">${this.title}</h4> <p class="post_body">${this.body}</p>`);
        this.container.className = 'post';
        document.body.append(this.container);
        this.deleteButton.innerHTML = "Delete";
        this.container.append(this.deleteButton);
        this.deleteButton.addEventListener("click", (e) => {
            const{id:postId} = fetch('https://ajax.test-danit.com/api/json/posts/${postId}', {
                method: "DELETE"
            })
                .then((response) => response.json())
                .then(({status}) => {
                    if (status === 'success') {
                        this.container.remove()
                    }
                })
                .catch(err => console.log(err));
        })
    }
}

fetch('https://ajax.test-danit.com/api/json/users')
    .then((response) => response.json())
    .then((usersArr) => {
        usersArr.forEach(({name, username, email, id, userId}) => {
            fetch('https://ajax.test-danit.com/api/json/posts')
                .then((response) => response.json())
                .then((userPost) => {
                    const filterPost = userPost.filter((post) => post.userId === id);
                    filterPost.forEach(({title, body}) => {
                            new Card(title, body, name, username, email, id).createElements();
                        }
                    )
                })
                .catch((elem) => console.log(elem.message));
        })
    })
    .catch((elem) => console.log(elem.message));





