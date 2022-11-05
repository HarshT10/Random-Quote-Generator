let quote = document.getElementById("quote");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let fetchQuote = () => {
    fetch(url)
        .then((value) => value.json())
        .then((getQuote) => {
            quote.innerText = getQuote.content;
        });
};

btn.addEventListener("click", fetchQuote);
btn.addEventListener("click", fetchQuote);
