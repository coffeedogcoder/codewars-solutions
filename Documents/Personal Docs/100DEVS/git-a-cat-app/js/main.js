//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  

  const url = `https://api.thecatapi.com/v1/images/search?api_key=edea17-a2aa-4df5-91b8-9e355ffe0373`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data[0].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}




