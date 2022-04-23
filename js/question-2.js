

  // question 2 

  const url  =   "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ec7113a19fd74dc18b8793febdcaa3aa";

 // const key  =   ec7113a19fd74dc18b8793febdcaa3aa;

 const resultGames = document.querySelector(".results")


 async function callingApigams(){

try{
  
  const response =  await fetch(url);

  const results = await response.json();

  const games = results.results;

  //console.log(games);

  resultGames.innerHTML = ""; 

  for (let i = 0; i < games.length; i++){

  console.log(games[i].name);
  //console.log(games[i].rating);
  //console.log(games[i].tags.length);

if (i === 8){

  break;
}

  resultGames . innerHTML += 

  ` <div class "results"> ${games[i].name}
  <p class "rating">${games[i].rating}</p>
  <p class "tags">${games[i].tags.length}</p>
  </div> `;
 

 }

}catch(error){

  // console.log(error is found);
   resultGames . innerHTML = "error is found ";
 
   }
}

callingApigams();
