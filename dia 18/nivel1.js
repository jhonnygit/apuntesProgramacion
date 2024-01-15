import fetch from 'cross-fetch';
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const paises=fetch(countriesAPI)
.then((response)=>response.json())
.then((data)=>{
    //console.log(data); 
    data.forEach(element => {
       //console.log(element.name);
       console.log(element.name,element.capital,element.languages,element.population,element.area);      
    }); 
})
.catch((error)=>console.error(error));

