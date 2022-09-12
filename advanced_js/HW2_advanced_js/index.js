"use strict"

const root = document.getElementById("root");

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

class PriceList {
    constructor(ob) {
        this.author = ob.author;
        this.name = ob.name;
        this.price = ob.price;
    }

    render(root) {
        if (this.author && this.name && this.price) {
            this.list = document.createElement("li");
            this.listItemAuthor = document.createElement("p");
            this.listItemAuthor.innerText = "Автор: " + this.author;
            this.listItemName = document.createElement("p");
            this.listItemName.innerText = "Назва: " + this.name;
            this.listItemPrice = document.createElement("p");
            this.listItemPrice.innerText = "Ціна: " + this.price;
            this.list.append(this.listItemAuthor, this.listItemName, this.listItemPrice);
            root.append(this.list);
        }
    }
}

class BooksList {
    constructor(array, drowHtml) {
        this.array = array;
        this.drowHtml = drowHtml;
    }

    render() {
        this.ulList = document.createElement("ul");
        this.array.forEach((item, index) => {
            let libraryItem = new PriceList(item);
            libraryItem.render(this.ulList);
            let notes = Object.entries(libraryItem);
            notes.forEach((item) => {
                if (!item[1]) {
                    try {
                        throw new Error("Number " + `${index + 1}` + " missing " + `${item[0]}` + " is " + item[1]);
                    } catch (error) {
                        console.log(error.name + ': ' + error.message);
                    }
                }
            });
        });
        this.drowHtml.append(this.ulList);
    }
}

const BooksListFirst = new BooksList(books, root);
BooksListFirst.render();
