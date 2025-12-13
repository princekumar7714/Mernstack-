const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "http://api.quotable.io/random";
async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  // console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
  window.open(
    " https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---by" +
      author.innerHTML,
    "tweet window",
    "width = 600",
    "height=300"
  );
}

// fetch("http://api.quotable.io/random").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     // console.log(data);
//     quote.innerHTML = data.content;
//     author.innerHTML = data.author;
// }).catch((err)=>{
//     console.log(err);
// })
