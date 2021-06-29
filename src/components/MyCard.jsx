import { Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
//import { getMatchDetail } from "../api/Api.jsx";

const MyCard = (props) => {

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
                        <Button variant="contained" color="primary">
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
    return (
        getMatchCard()
    )
}

export default MyCard;
