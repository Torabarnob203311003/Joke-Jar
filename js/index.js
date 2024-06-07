const loadJoke = () =>{

  fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => console.log (data));

}
loadJoke()

const DisplayJoke = jokes=>{
//   const Textarea=document.getElementById('text-area')
//   Textarea.innerHTML = quote.quote;
//   document.getElementById('text-ares').innerHTML = jokes.punchline;

console.log(DisplayJoke)

}
