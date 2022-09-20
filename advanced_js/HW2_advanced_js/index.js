'use strict'

const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];
class CreateProduct {
    constructor(author, name, price) {
        this.name = name;
        this.author = author;
        this.price = price;

    }

    render() {
      return `<li>${this.name}, ${this.author}, ${this.price} </li> `

    }

}
let container = document.createElement('ul');
document.body.append(container);

books.forEach((elem) => {
    try {
        if (!elem.author) {
            throw new SyntaxError("Данные неполны: нет автора");
        } else if (!elem.name) {
            throw new SyntaxError("Данные неполны: нет имени");
        } else if (!elem.price) {
            throw new SyntaxError("Данные неполны: нет цены");
        }
        container.insertAdjacentHTML("beforeend", new CreateProduct(elem.author, elem.name, elem.price).render());

    } catch (e) {
        alert("Error: " + e.message);
    }
});



// const htmlArr = books.map((author, name,price) => {
//     return `<p> ${author}</p>
//                 <p>${name}</p>
//                 <p>${price}</p>`
// });
// li.innerHTML = htmlArr.join('');

//     constructor(name, fullName, article, price) {
//         this.name = name;
//         this.fullName = fullName;
//         this.article = article;
//         this.price = price;

// function getNewList(books=[],parent = document.body) {
//
//     books.map(elem => {
//         let li = document.createElement('li');
//         li.innerText = elem;
//         parent.append(li);
//     })
// }
// getNewList([
//     {
//         author: "Люсі Фолі",
//         name: "Список запрошених",
//         price: 70
//     },
//     {
//         author: "Сюзанна Кларк",
//         name: "Джонатан Стрейндж і м-р Норрелл",
//     },
//     {
//         name: "Дизайн. Книга для недизайнерів.",
//         price: 70
//     },
//     {
//         author: "Алан Мур",
//         name: "Неономікон",
//         price: 70
//     },
//     {
//         author: "Террі Пратчетт",
//         name: "Рухомі картинки",
//         price: 40
//     },
//     {
//         author: "Анґус Гайленд",
//         name: "Коти в мистецтві",
//     }
// ], document.querySelector('div'));