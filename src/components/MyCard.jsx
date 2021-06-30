import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React,{useState} from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import { getMatchDetail } from "../api/Api.jsx";
const API_KEY="SZ5pcaz1Zrdel8jtcTBhEdq9sKz2";

const MyCard = (props) => {

    const [detail, setDatail] = useState({});
    const [open, setOpen] = useState(false);

    function handleClick(id){
        getMatchDetails(id)
        .then((data)=>{
            console.log("Match Data",data)
            setDatail(data);
            handleClickOpen();
            })
        .catch((error)=>console.log(error));
    }

    const getMatchDetails=(id)=>{
        const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
        return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.log(error));
    }

    const getMatchCard=()=>{
        return(
            <>
            <Card style={{marginTop:50}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                    
                        <Grid item>
                            <Typography variant="h5">{props.match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                        <img
                        style={{ width: 85 }}
                        src={require("../img/abhi.png").default}
                        alt="hae ram"
                        />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{props.match["team-2"]}</Typography>
                        </Grid>

                    </Grid>
                </CardContent>

                <CardActions>
                    <Grid container justify="center">
                        <Button variant="contained" color="primary" onClick={()=>{
                            handleClick(props.match.unique_id);
                        }}>
                            Show Details
                        </Button>
                        <Button style={{marginLeft:19}} variant="contained" color="primary">
                            {/* {new Date().toString()} */}
                            Start Time {new Date(props.match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
            </>
        )
    }

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

    const getDialog=()=>(
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>{detail.stat}</Typography>
            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.matchStarted ? "Started" : "Still not started"}
              </span>
            </Typography>
            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {" "}
                {detail.score}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
    return (
        <>
        {getMatchCard()}
        {getDialog()}
        </>
    )
}

export default MyCard;
