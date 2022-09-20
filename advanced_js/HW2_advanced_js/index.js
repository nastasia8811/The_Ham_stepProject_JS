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
            throw new SyntaxError("Aвтор відсутній");
        } else if (!elem.name) {
            throw new SyntaxError("Ім'я відсутнє");
        } else if (!elem.price) {
            throw new SyntaxError("Ціна відсутня");
        }
        container.insertAdjacentHTML("beforeend", new CreateProduct(elem.author, elem.name, elem.price).render());
    } catch (e) {
        alert("Error: " + e.message);
    }
});

