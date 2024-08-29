const fetchMovies = async ({setMovies})=>{
const BASE_URL= "https://raw.githubusercontent.com/movie-monk-b0t/top250/master/top250_min.json"
try{
const res= await fetch(BASE_URL);
if(!res.ok){
    throw new Error("Fel fel fel")
}
const data= await res.json();
setMovies(data)
console.log(data)
}catch(error){
console.error("Något blev fel i fetch")
}
}
export default fetchMovies