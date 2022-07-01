function betterThanAverage(classPoints, yourPoints) {
    
    let total = 0
    for(let i = 0; i < classPoints.length; i++){
        total += classPoints[i]
    }
    let avg = total /classPoints.length
    return yourPoints > total;
  }

  