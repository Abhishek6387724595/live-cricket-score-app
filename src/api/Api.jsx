const API_KEY="SZ5pcaz1Zrdel8jtcTBhEdq9sKz2";

const getUser=async()=>{
    const response=await fetch(`https://cricapi.com/api/matches?apikey=${API_KEY}`);
    const data=await response.json();
    console.log(data);
}

export {getUser};
