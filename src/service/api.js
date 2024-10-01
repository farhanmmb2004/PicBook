import axios from 'axios';
let URL='https://pixabay.com/api/';
let KEY='44401170-af74c4d624fed378eb4dca7a6';
let base_URL=`${URL}?key=${KEY}`;
let vidio_url=`${URL}?key=${KEY}`;
export let fetchImages=async(query='')=>{
try{
    let random=Math.floor(Math.random()*20);
    if(query===''){
        let response=await axios.get(`${base_URL}&page=${random}&per_page=10`);
        console.log(response.data.hits);
        return response.data;
    }
    else{
        let response=await axios.get(`${base_URL}&q=${query}&page=${random}&per_page=10`);
        return response.data;
    }
}
catch(error){
console.log(error);
}
}
export let fetchVidios=async(query='')=>{
    try{
        let random=Math.floor(Math.random()*20);
        if(query===''){
            let response=await axios.get(`${vidio_url}&page=${random}&per_page=5`);
            console.log(response.data.hits);
            return response.data;
        }
        else{
            let response=await axios.get(`${vidio_url}&q=${query}&page=${random}&per_page=5`);
            return response.data;
        }
    }
    catch(error){
    console.log(error);
    }
    }