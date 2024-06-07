const loadJoke = () =>{

  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => DisplayJoke (data));

}
loadJoke()

const DisplayJoke = jokes=>{
  const Textarea=document.getElementById('text-area')
  console.log(jokes);
  Textarea.innerText = jokes.setup;
  Textarea.append(document.createTextNode("\n \n🤪 ")); // Append a newline character
  Textarea.append(jokes.punchline);
//   document.getElementById('text-ares').innerHTML = jokes.punchline;



}
