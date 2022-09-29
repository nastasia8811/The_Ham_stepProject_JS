// let arr = ['https://ajax.test-danit.com/api/json/posts', 'https://ajax.test-danit.com/api/json/users']
// arr.forEach((elem) => {
//     fetch('https://ajax.test-danit.com/api/json/posts')
//         .then((response) => {
//             return response.json();
//         })
//         .then((elemArr) => {
//             elemArr.forEach(({title, body}) => {
//                 postContainer.insertAdjacentHTML('beforeend', new Post(title, body).render())
//             })})
//
//     fetch('https://ajax.test-danit.com/api/json/users')
//         .then((response) => {
//             return response.json();
//         })
//         .then((usersArr) => {
//             usersArr.forEach(({name, username, email}) => {
//                 postContainer.insertAdjacentHTML('beforeend', new Users(name, username, email).render())
//
//             })
//
//         })
// })
//
// const postContainer = document.createElement('div');
// postContainer.setAttribute('class', 'post');
// document.body.append(postContainer);
// const usersInfo = document.createElement('div');
// usersInfo.setAttribute('class', 'user');
// postContainer.append(usersInfo);
//
// class Post {
//     constructor(title, body,) {
//         this.title = title;
//         this.body = body;
//     }
//
//  render() {
//    return `<h4>${this.title}</h4> <p>${this.body}</p> `
//  }
// }
//
//
//
//
// class TwitterPost extends Post{
//     constructor(title, body, username, name, email) {
//         super(title, body)
//         super.title = title;
//         super.body = body;
//         this.username = username;
//         this.name = name;
//         this.email = email;
//     }
//     render() {
//         return `<h4>${this.title}</h4> <p>${this.body}</p> <h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p>`
//     }
//
// }
// fetch('https://ajax.test-danit.com/api/json/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then((elemArr) => {
//         elemArr.forEach(({title, body}) => {
//             postContainer.insertAdjacentHTML('beforeend', new Post(title, body).render())
//
//         })})
//     fetch('https://ajax.test-danit.com/api/json/users')
//         .then((response) => {
//             return response.json();
//         })
//         .then((usersArr) => {
//             usersArr.forEach(({name, username, email}) => {
//                 postContainer.insertAdjacentHTML('beforeend', new TwitterPost(title, body, username, name, email).render())
//
//             })
//
//         })

//
//         })
//         .then((usersArr) => {
//             usersArr.forEach(({name, username, email}) => {
//                 postContainer.insertAdjacentHTML('beforeend', `<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p>`)
//             })
//         })
// )


// class Users {
//     constructor(username, name, email) {
//         this.username = username;
//         this.name = name;
//         this.email = email;
//     }
//
//     render() {
//         return `<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p>`
//     }
//
// }

//
// class Card {
//     constructor(Post, Users) {
//
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

    render() {
        return `<h4>${this.title}</h4> <p>${this.body}</p> <h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p>`
    }

}

    fetch('https://ajax.test-danit.com/api/json/posts')
        .then((response) => {
            return response.json();
        })
        .then((elemArr) => {
            elemArr.forEach(({title, body}) => {
                postContainer.insertAdjacentHTML('beforeend', new Card(title, body).render())
            })
        })


    fetch('https://ajax.test-danit.com/api/json/users')
        .then((response) => {
            return response.json();
        })
        .then((usersArr) => {
            usersArr.forEach(({name, username, email}) => {
                postContainer.insertAdjacentHTML('beforeend', new Card(name, username, email).render())

            })
        })


// const twitterCard = (e) => {
//     e.preventDefault();
// }

//<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p>
//  this.username = username;
//         this.name = name;
//         this.email = email;


// class Card {
//     requestPosts() {
//         fetch(urlPosts)
//             .then((response) => {
//                 return response.json();
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//
//     }
//
//     requestUsers() {
//         fetch(urlUsers)
//             .then((response) => {
//                 return response.json();
//             })
//             .catch((e) => {
//                 console.log(e)
//
//             })
//
//     }
//     render() {
//          return `<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p><h4>${this.title}</h4> <p>${this.body} </p>`
//     }
// }

// class Card {
//     constructor(urlPosts, urlUsers) {
//         this.urlPosts = urlPosts;
//         this.urlUsers = urlUsers;
//
//     }
//     request(email, name, username, id = "") {
//         return fetch(`${this.urlPosts}${entity}/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(response);
//                 } else {
//                     return response.json();
//                 }
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     }
//     render() {
//         this.request("people").then((data) => {
//             const select = document.createElement("select");
//             const options = data.map(({ email, name, username }) => {
//                 const option = document.createElement("option");
//                 option.value = email;
//                 option.textContent = username;
//                 return option;
//             });
//             select.append(...options);
//             this.urlUsers.append(select);
//             select.addEventListener("change", (e) => {
//                 const planetId = e.target.value.split(`${this.urlPosts}planets/`)[1];
//                 this.request("planets", planetId).then((data) => {
//                     this.renderPlanetInfo(data);
//                 });
//             });
//         });
//     }
//     renderPlanetInfo({
//                          username,
//                          name,
//                          email,
//                          title,
//                          body,
//
//                      }) {
//         const divPlanets = document.createElement("div");
//         divPlanets.innerHTML = `<p>name: ${name}</p>
//                 <p>climate: ${username}</p>
//                 <p>diameter: ${name}</p>
//                 <p>orbitalPeriod: ${email}</p>
//                 <p>population: ${title}</p>
// <p>population: ${body}</p>`;
//         this.urlUsers.append(divPlanets);
//     }
// }
//
// new Card(urlPosts, urlUsers).render();


// fetch('https://ajax.test-danit.com/api/json/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((elemArr) => {
//
//         console.log(elemArr);
//     })
//
// const postContainer = document.createElement('div');
// postContainer.setAttribute('class', 'post');
// document.body.append(postContainer);
//
// class Card {
//     constructor(username, name, email, title, body) {
//         this.username = username;
//         this.name = name;
//         this.email = email;
//         this.title = title;
//         this.body = body;
//     }
//
//     render() {
//         return `<h3>${this.username}</h3><h3>${this.name}</h3> <p>${this.email}</p><h4>${this.title}</h4> <p>${this.body} </p>`
//     }
// }


// fetch('https://ajax.test-danit.com/api/json/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then((elemArr) => {
//         elemArr.forEach(({title, body}) => {
//             postContainer.insertAdjacentHTML('beforeend', new Card(this.title, this.body).render())
//         })
//     })
// fetch('https://ajax.test-danit.com/api/json/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((usersArr) => {
//         console.log(usersArr);
//         usersArr.forEach(({email, name, username}) => {
//             postContainer.insertAdjacentHTML('beforeend', new Card(this.name, this.body, this.username).render())
//         })
//
//     })
// const twitterCard = (e) => {
//     e.preventDefault();
// }
