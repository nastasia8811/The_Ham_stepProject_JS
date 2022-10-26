const post = 'https://ajax.test-danit.com/api/json/posts';
const user = 'https://ajax.test-danit.com/api/json/users';
// const postContainer = document.createElement('div');
// postContainer.setAttribute('class', 'post');
// document.body.append(postContainer);
// const usersInfo = document.createElement('div');
// usersInfo.setAttribute('class', 'user');
// postContainer.append(usersInfo);

class Card {
    constructor(title, body, username, name, email) {
        this.title = title;
        this.body = body;
        this.username = username;
        this.name = name;
        this.email = email;
        this.btn = null;
    }
    findPost() {
        return fetch(post)
            .then((response) =>  response.json())
            .then((postTwitter) =>console.log(json))

    }

    findUser() {
        return fetch(user)
            .then((response) => response.json())
            .then((userTwitter) => console.log(userTwitter))
    }

    render(){
        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");
        document.body.append(postContainer);

        const usersInfo = document.createElement('div');
        usersInfo.setAttribute('class', 'user');

        const postInfo = document.createElement('div');
        postInfo.classList.add('post');
        postContainer.append(usersInfo, postInfo);

        this.btn = document.createElement('button');
        const {btn} = this;
        btn.append(postContainer);
        return btn;
    }
    createPost(){

        this.findUser.forEach({name, username, email})
        postContainer.insertAdjacentHTML('beforeend', `<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}`)


        this.findPost.forEach(({title, body}) => {
            postContainer.insertAdjacentHTML('beforeend',` <h4>${this.title}</h4> <p>${this.body}</p>`)
        })

    }
    createBtn(){
        this.btn.addEventListener()
    }
}


// const postContainer = document.createElement('div');
// postContainer.setAttribute('class', 'post');
// document.body.append(postContainer);
// const usersInfo = document.createElement('div');
// usersInfo.setAttribute('class', 'user');
// postContainer.append(usersInfo);
//
// class Card {
//     constructor(title, body, username, name, email) {
//         this.title = title;
//         this.body = body;
//         this.username = username;
//         this.name = name;
//         this.email = email;
//     }
//
//     render() {
//         return `<h4>${this.title}</h4> <p>${this.body}</p> <h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p>`
//     }
//
// }
//
// fetch('https://ajax.test-danit.com/api/json/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then((elemArr) => {
//         elemArr.forEach(({title, body}) => {
//             postContainer.insertAdjacentHTML('beforeend',  `<h4>${this.title}</h4> <p>${this.body}</p>`)
//         })
//     })
//
//
// fetch('https://ajax.test-danit.com/api/json/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((usersArr) => {
//         usersArr.forEach(({name, username, email}) => {
//             postContainer.insertAdjacentHTML('beforeend', `<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}`)
//
//         })
//     })