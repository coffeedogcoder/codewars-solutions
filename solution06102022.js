let number=function(array){
    let newArr = []
    if(array.length === 0){
        return []
    }else{
        for(let i = 0; i < array.length; i += 1){
            newArr.push((i + 1) + ': ' + array[i]);
        }
    } 
    return newArr
}