

fetch('https://ajax.test-danit.com/api/json/users')
    .then((response) => response.json())
    .then((usersArr) => {
        usersArr.forEach(({name, username, email, id}) => {
            fetch('https://ajax.test-danit.com/api/json/posts')
                .then((response) => response.json())
                .then((userPost) => {
                    const filterPost = userPost.filter((post) =>  post.userId === id);
                    filterPost.forEach(({title, body}) => {
                            new Card(title, body, name, username, email, id).createElements();
                        }
                    )
                })
                .catch((elem) => console.log(elem.message));
        })
    })
    .catch((elem) => console.log(elem.message));


class Card {
    constructor(title, body, username, name, email, id) {
        this.title = title;
        this.body = body;
        this.username = username;
        this.name = name;
        this.email = email;
        this.container = document.createElement('div');
        this.deleteButton = document.createElement("button");
        this.id = id;
    }

    createElements() {
        this.container.insertAdjacentHTML('beforeend', ` <h4 class="post_title">${this.title}</h4> <p class="post_body">${this.body}</p> `)
        this.container.className = 'post';
        document.body.append(this.container);
        this.container.insertAdjacentHTML("beforeend", `<h3 class="post_name">${this.username}</h3><h3 class="post_name">${this.name}</h3> <p class="post_email">${this.email}</p>`)
        this.deleteButton.innerHTML = "Delete";
        this.container.append(this.deleteButton);
        this.deleteButton.addEventListener("click", () => {
            fetch('https://ajax.test-danit.com/api/json/posts/${this.id}', {
                method: "DELETE"
            })
                .then((response) => response.json())
                .then(({ status, id}) => {
                    console.log("ggg")
                    if (status === 'success') {
                        this.container.remove()
                    }})

                })

    }


}

