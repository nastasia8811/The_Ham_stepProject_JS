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
console.log(filterBy([135, "LLLLL", 765,{}, null, undefined], 'number'));

