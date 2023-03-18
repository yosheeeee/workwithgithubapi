let form = document.forms.search


form.addEventListener('submit', function(event){
  searchValue(form.searchText.value)
  event.preventDefault()
})

async function searchValue(string){
  let queryString = 'q=' + encodeURIComponent(`${string} in:file user:meta`)
  let request = await fetch(`https://api.github.com/search/code?${queryString}`)
  let result = await request.json()
  let output = document.querySelector('#output') 
 output.innerHTML = result["items"][0]["name"]
}