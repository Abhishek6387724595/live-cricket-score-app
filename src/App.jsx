import React,{useEffect} from 'react';
import {Button} from '@material-ui/core';
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import {getUser} from "./api/Api.jsx";


const App =()=>{

    useEffect(()=>{
        getUser();
    },[]);
    
    return(
        <>
        <div className="App">
            <Navbar/>
            <h1 className="text-center">Welcum to Live Score App</h1>
            <Button variant="contained" color="secondary">Click Here</Button>
            <MyCard/>

            {}
        </div>
        </>
    )
}

export default App;