import React,{useEffect,useState} from 'react';
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
//import {getMatches} from "./api/Api.jsx";
//import { Container, Grid } from "@material-ui/core";
const API_KEY="SZ5pcaz1Zrdel8jtcTBhEdq9sKz2";

function App() {

    const [matches,setMatches]=useState([]);

    // useEffect(()=>{
    //     getMatches()
    //     .then((data)=>setMatches(data.matches))
    //     .catch((error)=>alert('Jai shree ram'));
    // },[]);

    const getMatches=async()=>{
        try{
            const resp=await fetch(`https://cricapi.com/api/matches?apikey=${API_KEY}`);
            const response=await resp.json();
            console.log(response.matches);
            setMatches(await response.matches);
        }
        catch(error){
            console.log("my error is"+error);
        }
    }

    useEffect(()=>{
        getMatches();
    },[]);

    return(
        <>
        <div className="App">
            <Navbar/>
            <h1 className="text-center">Welcome to Cricket Live Score App</h1>
            <MyCard/>
            {matches.map((match)=>{
                return(
                    <>
                    <MyCard match="match" />
                    </>
                )
            })}
        </div>
        </>
    )
}

export default App;