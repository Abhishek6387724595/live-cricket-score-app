import React,{useEffect,useState} from 'react';
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import Grid from '@material-ui/core/Grid';
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
            setMatches(await response.matches);
            console.log(response.matches);
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
            <Grid container>
                <Grid sm="3"></Grid>
                <Grid sm="6">
                {matches.map((match)=>{
                return(
                    <>
                    <MyCard key={match.unique_id} match={match} />
                    </>
                )
            })}
                </Grid>
                <Grid sm="3"></Grid>
            </Grid>
        </div>
        </>
    )
}

export default App;