const coinValue = +prompt("внесите монеты", _default:"");
const nameOfDrink = prompt("введите название напиткa", _default:"");
switch (nameOfDrink){
    case "coffee":
    case"Кофе":
        if (coinValue === 25){
            alert("Ваш" + nameOfDrink "напиток готов");
        }
        else if(coinValue >= 25){
            alert("Ваш" + nameOfDrink "напиток готов. заберите сдачу" +(coinValue - 25));
        }
        else{
        alert("недостаточно  денег")
        }
}
        break;
    case "capuchino":
    case "капучино":
        if (coinValue === 50){
            alert("Ваш" + nameOfDrink "напиток готов")
        }
        else if(coinValue >= 50){
            alert("Ваш" + nameOfDrink "напиток готов. заберите сдачу" +(coinValue - 50));
        break;
    case "tea":
    case "чай":
        if (coinValue === 20){
            alert("Ваш" + nameOfDrink "напиток готов");
        }
        else if(coinValue >= 20){
            alert("Ваш" + nameOfDrink "напиток готов. заберите сдачу" +(coinValue - 20));
        break;
    default:
        alert("напиток не найдено, заберите" + coinValue);
        else{
                alert("недостаточно  денег");
            }
}


