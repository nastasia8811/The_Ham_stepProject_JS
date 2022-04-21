
// function filterBy(testArr,string){
// }
// filterBy(testArr = [454,1111,"gjgjgj",55555,"fhff"], "jffjgfk");
// let newArray = testArr.filter(function(elem) {
//     if (!isNaN(elem)) {
//         return arguments;
//     }
// });
// console.log(newArray);

let filterBy = (elementArr = null,type = null) => {
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
console.log(filterBy([135, "nnnbnbnb", 765,{}, null, undefined], 'number'));

