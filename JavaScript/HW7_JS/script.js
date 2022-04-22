// 1)  Метод forEach дозволяє послідовно перебрати всі елементи масиву.
//     Метод у параметрі отримує функцію, що виконається для кожного елемента масиву. У цю функцію можна передавати 3 параметри.
//     Якщо ці параметри є, то перший автоматично потрапить елемент масиву, другий потрапить його номер у масиві (індекс), а третій - сам масив.
// 2)  let array = [1,2,3,4,5];
//     array = [];
// 3) let myArr = [21,20,98,99]
//   Array.isArray(myArr)

let filterBy = (elementArr = null, type = null) => {
    return elementArr.filter((item)=>{
        if (item === null){
        if (type === "null"){
            return false
        } else {
            return true
        }
    }
    return typeof item !== type
    })
}
console.log(filterBy([123,454, null, undefined, "string"], 'number'));