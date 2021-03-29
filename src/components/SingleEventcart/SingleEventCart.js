import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3)
    }
}))

const SingleEventCart = ({event}) => {
    const classes = useStyles();
    const {img, eventName} = event
    return (
        <Grid item lg={3}>
            <Paper className={classes.paper}>
                <ButtonBase>
                    <img src={img} alt={eventName} style={{width: '100%', height: '250px'}} />
                </ButtonBase>
                <Typography variant="h6" color="primary" align='center'>
                    {eventName}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default SingleEventCart;