import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const Menubar = () => {
    const classes = useStyles();

    const history = useHistory();

    const goHomePage = () => {
        history.push('/')
    }
    const goDestinationPage = () => {
        history.push('/destination')
    }
    const goEventsPage = () => {
        history.push('/events')
    }
    const goBlogPage = () => {
        history.push('/blog')
    }
    const goLoginPage = () => {
        history.push('/login')
    }
    const goAdminPage = () => {
        history.push('/admin')
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit" onClick={goHomePage}>Home</Button>
                    <Button color="inherit" onClick={goDestinationPage}>Destination</Button>
                    <Button color="inherit" onClick={goEventsPage}>Events</Button>
                    <Button color="inherit" onClick={goBlogPage}>Blog</Button>
                    <Button variant="outlined" color="secondary" onClick={goLoginPage}>Login</Button>
                    <Button color="secondary" variant="contained" onClick={goAdminPage}>Admin</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}