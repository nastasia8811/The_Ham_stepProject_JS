const user1 = {
    name: "Никлаус",
    "last name": "Майклсон"
};

const user2 = user1;

user1.name = "Ребекка";
console.log(user1.name);
console.log(user2.name);

