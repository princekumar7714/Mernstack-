const axcesskey = "KlpsxaMSRqhA8JesdlbcGNkK9zCwIh1nvw-E-OqqNUM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmore = document.getElementById("show-more-btn");
// KlpsxaMSRqhA8JesdlbcGNkK9zCwIh1nvw-E-OqqNUM

let keyword ="";
let page = 1;

async function SearchImage(){
    keyword = searchBox.value;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${axcesskey}';

   const response = await fetch(url);
   const data = await response.json();
   console.log(data);
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    SearchImage();
})