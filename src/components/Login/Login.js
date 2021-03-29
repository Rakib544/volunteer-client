import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        margin: '10px'
    },
    grid: {
        padding: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(3)
    },
    formStyle: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

const Login = () => {
    const classes = useStyles()
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className={classes.formStyle}>
            <Grid lg="5" justify="center" className={classes.grid}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Login Here</Typography>
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <TextField name="name" label="Full Name" className={classes.input} inputRef={register} />
                        <TextField name="email" label="Enter Your Email" className={classes.input} inputRef={register} />
                        <TextField name="password" label="Enter Your password" className={classes.input} inputRef={register} />
                        <TextField name="description" label="Description" className={classes.input} inputRef={register} />
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;