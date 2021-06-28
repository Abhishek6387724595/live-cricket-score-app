import React,{useEffect,useState} from 'react';
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import {getMatches} from "./api/Api.jsx";
//import { Container, Grid } from "@material-ui/core";


const App =()=>{

    const [matches,setMatches]=useState([]);

    useEffect(()=>{
        getMatches()
        .then((data)=>setMatches(data.matches))
        .catch((error)=>alert('SORRY'));
    },[]);

    return(
        <>
        <div className="App">
            <Navbar/>
            <h1 className="text-center">Welcum to Live Score App</h1>
            {/* {matches.map((match)=>(
                <MyCard match="match"/>
            ))} */}
        </div>
        </>
    )
}

export default App;