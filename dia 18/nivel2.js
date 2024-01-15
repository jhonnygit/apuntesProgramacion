import fetch from 'cross-fetch';
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const catNames=async () =>{
    try{
        const response=await fetch(catsAPI);
        const namecats=await response.json();
        namecats.forEach(element => {
            console.log(element.name);
        });
    }catch(err){
        console.error(err);
    }
};

catNames();
