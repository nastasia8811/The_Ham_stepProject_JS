const post = 'https://ajax.test-danit.com/api/json/posts';
const user = 'https://ajax.test-danit.com/api/json/users';
const postContainer = document.createElement('div');
postContainer.setAttribute('class', 'post');
document.body.append(postContainer);
const usersInfo = document.createElement('div');
usersInfo.setAttribute('class', 'user');
postContainer.append(usersInfo);

class Card {
    constructor(title, body, username, name, email) {
        this.title = title;
        this.body = body;
        this.username = username;
        this.name = name;
        this.email = email;
    }

    post() {
        return fetch(post)
            .then((response) => {
                return response.json();
            })
            .then((elemArr) => {
                elemArr.forEach(({title, body}) => {
                    postContainer.insertAdjacentHTML('beforeend',` <h4>${title}</h4> <p>${body}</p>`)
                })
    })}

    user() {
        return fetch(user)
            .then((response) => {
                return response.json();
            })
            .then((elemArr) => {

    })}

    render() {
        const postContainer = document.createElement('div');
        postContainer.setAttribute('class', 'post');
        document.body.append(postContainer);
        const usersInfo = document.createElement('div');
        usersInfo.setAttribute('class', 'user');
        postContainer.append(usersInfo);



        return `<h4>${title}</h4> <p>${body}</p> <h3>${username}</h3><h3>${name}</h3> <p>${email}</p>`

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