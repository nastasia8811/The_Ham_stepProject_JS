

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
        const usersInfo = document.createElement('div');
        usersInfo.className = 'user';

        this.container.insertAdjacentHTML("beforeend", `<h3 class="post_name">${this.username}</h3><h3 class="post_name">${this.name}</h3> <p class="post_email">${this.email}</p>`)

        this.deleteButton.innerHTML = "Delete";
        this.container.append(this.deleteButton);
        this.deleteButton.addEventListener("click", () => {
            this.deleteButton.remove()
            //console.log(this.id)
            fetch('https://ajax.test-danit.com/api/json/posts/${this.id}', {
                method: "DELETE"
            })
                .then((response) => response.json())
        })

    }

    render() {
        this.createElements()


    }
}

new Card().render()





    fetch('https://ajax.test-danit.com/api/json/users')
        .then((response) => response.json())
        .then((usersArr) => {
            usersArr.forEach(({name, username, email, id}) => {
                fetch('https://ajax.test-danit.com/api/json/posts')
                    .then((response) => response.json())
                    .then((userPost) => {
                        const filterPost = userPost.filter((post) =>  post.userId === id);
                        console.log(filterPost)
                        filterPost.forEach(({title, body}) =>
                            new Card(title, body,name, username, email, id).render()
                        )
                        //const {title, body, id} = userPost.find((userPost) => this.id === this.id)
                        //this.container.insertAdjacentHTML('beforeend', `<h4 class="post_title">${title}</h4> <p class="post_body">${body}</p>`)
                    })
                    .catch((elem) => console.log(elem.message))
                //usersArr.find((usersArr) => this.id === this.userId)
                // this.container.insertAdjacentHTML('beforeend', `<h3 class="post_name">${username}</h3><h3 class="post_name">${name}</h3> <p class="post_email">${email}</p>`)
            })
        })
        .catch((elem) => console.log(elem.message))
