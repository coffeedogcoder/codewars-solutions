//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.message.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
