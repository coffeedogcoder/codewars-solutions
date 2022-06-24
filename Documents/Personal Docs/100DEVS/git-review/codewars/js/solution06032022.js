var humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears <= 1){
    let catYears = 15
    let dogYears = 15
    return [humanYears, catYears, dogYears];
  }else if(humanYears === 2){
      let dogYears = 24
      let catYears = 24
    return [humanYears, catYears, dogYears];
    }else{
        let humanYearsTwo = humanYears -2
        let catYears = humanYearsTwo * 4 +24
        let dogYears = humanYearsTwo * 5 + 24
    return [humanYears, catYears, dogYears];

    }
}