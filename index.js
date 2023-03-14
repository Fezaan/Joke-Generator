const container=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    container.classList.remove("fade");
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        container.textContent= `${item.joke}`;
        container.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();