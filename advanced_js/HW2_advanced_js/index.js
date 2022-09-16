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

books.forEach((elem) => {
    let elementRoot = document.querySelector("#root");
    let priceList = document.createElement('ul')
    let li = document.createElement('li');
    priceList.append(elementRoot);
    li.innerText = elem;
    priceList.append(li);

    try {
        if (!elem.author) {
            throw new SyntaxError("Данные неполны: нет автора");
        } else if (!elem.name) {
            throw new SyntaxError("Данные неполны: нет имени");
        } else if (!elem.price) {
            throw new SyntaxError("Данные неполны: нет цены");
        }
    } catch (e) {
        alert("Error: " + e.message);
    }
});

class CreateProduct {
    constructor(author, name, price) {
        this.name = name;
        this.author = author;
        this.price = price;

    }

    render() {
        this.name = document.createElement("li");
        this.author = document.createElement("li");
    }

}

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