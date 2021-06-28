import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6">
                          Live Score
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
