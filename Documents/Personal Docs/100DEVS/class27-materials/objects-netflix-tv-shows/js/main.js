//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class Netflix {
    constructor(genre,length,tvOrMovie,mainActor){
    this.genre =genre
    this.length= length
    this.type = tvOrMovie
    this.star = mainActor
}
skip(){
    console.log('next')
}
preview(){
    console.log(('play')
}
lengthPause(){
    console.log(('Are you still watching?')
}
}

let maniac = new Netflix('suspense', '10 episodes','show','jonah hill')