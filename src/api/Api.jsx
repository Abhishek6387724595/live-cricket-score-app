const API_KEY="SZ5pcaz1Zrdel8jtcTBhEdq9sKz2";

const getMatches=async()=>{
    const response=await fetch(`https://cricapi.com/api/matches?apikey=${API_KEY}`);
    const resp=await response.json();
    console.log(resp.matches);

}

export {getMatches};