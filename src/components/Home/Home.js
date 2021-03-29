import { Container, Grid, InputBase, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SingleEventCart from '../SingleEventcart/SingleEventCart';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        width: '80%',
        display: 'block',
        margin: 'auto'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const Home = () => {
    const classes = useStyles()
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" color="primary" align="center" style={{ padding: '20px 0' }}>
                I Grow By Helping People In Need
            </Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    style={{width: '100%'}}
                />
            </div>
            <Grid container spacing={3}>
                {
                    events.map(event => <SingleEventCart event={event} key={event._id} />)
                }
            </Grid>
        </Container>
    );
};

export default Home;