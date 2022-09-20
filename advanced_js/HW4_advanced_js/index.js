'use strict'
const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'wrap_${id}');
document.body.append(mainElement);

fetch('https://ajax.test-danit.com/api/swapi/films')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(({episodeId, characters, name, openingCrawl}) => {
            mainElement.insertAdjacentHTML('beforeend', `<p>${episodeId}, <div id="characters"></div>${name}, ${openingCrawl}</p>` )
            const idCharacters = document.querySelector('#characters');

            characters.forEach((url) =>{
                fetch(url)
                    .then(response => response.json())
                    .then(res => {
                            console.log(res.name);
                            console.log(episodeId);

                        idCharacters.append()
                        }
                    )
            })
            console.log(data);
        });
        })








// const xhr = new XMLHttpRequest()
//
// xhr.onload = () => {
//     if (xhr.status === 200) {
//         const starWarArr = (JSON.parse(xhr.response));
//
//         const [{episodeId, name, openingCrawl, characters = [...arr]}] = starWarArr;
//         const [...arr] = characters;
//         console.log(starWarArr);
//
//         const newCharacters = [...arr];
//         console.log(newCharacters);
//
//
//         const htmlArr = starWarArr.map(({episodeId, name, openingCrawl}) => {
//             return `<p> Episode ${episodeId}</p>
//                     <h1>${name}</h1>
//
//                     <p> ${openingCrawl}</p>`
//         });
//         mainElement.innerHTML = htmlArr.join('');
//
//     } else {
//         console.error(`Bad request! Status: ${xhr.status}`);
//     }
// }
//







