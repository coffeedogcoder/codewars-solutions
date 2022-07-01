let capitals = function (word){
    let caps = []
    for(let i =0; i < word.length; i++){
        if(word[i]== word[i].toUpperCase()) caps.push(i);
    }
    return caps 
}