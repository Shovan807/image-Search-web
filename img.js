const accessKey="g8SKSO8Wq09JXt-S0C0SDHS8Z9FZybCuhNeFY-t38as";

const searchForm=document.getElementById('search-form');
const searchbox=document.getElementById('search-box');
const searchresult=document.getElementById('search-result');
const searchshow=document.getElementById('show-more');


let keyword="";
let page=1;


async function SearchImg() {
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${keyword}&client_id=${accessKey}`;

    const responce=await fetch(url);
   // console.log(responce);
    const data=await responce.json();

    console.log(data);

      const result=data.results;
      result.map((result)=>{
        const imgs=document.createElement('img');
        imgs.src=result.urls.small;
        const imgLink=document.createElement("a");
        imgLink.href=result.links.html;
        imgLink.target="_blank";

        imgLink.appendChild(imgs);
        searchresult.appendChild(imgLink);

       searchshow.style.display = "block"; // show the show more btn

      })


}
searchForm.addEventListener('submit',(e)=>{
 e.preventDefault();
 
    //   if (page === 1) {
        
    // }
 page=1;
 searchresult.innerHTML = "";
 SearchImg();

})


searchshow.addEventListener('click', () => {
    page++;     // go to next page
    SearchImg();
});
