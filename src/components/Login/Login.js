import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, initializedApplication, signInWithEmailAndPassword, signInWithGoogle } from './LoginManager';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        margin: '10px'
    },
    grid: {
        padding: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(3)
    },
    formStyle: {
        display: 'flex',
        justifyContent: 'center'
    },
    span: {
        color: 'tomato',
        cursor: 'pointer',
    },
    googleButton: {
        display: 'block',
        margin: '10px auto'
    }
}))

const Login = () => {
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm();

    const [showLogin, setShowLogin] = useState(true)
    const [userInfo, setUserInfo] = useState({name: '', email: '', success: false, error: ''})
    initializedApplication();

    const onSubmit = data => {
        if (!showLogin) {
            const userInfo = createUserWithEmailAndPassword(data.name, data.email, data.password)
            console.log(userInfo)
            setUserInfo(userInfo)
        }
        else {
            const userInfo = signInWithEmailAndPassword(data.email, data.password)
            // console.log(userInfo)
            // console.log(userInfo.error)
        }


    }

    // console.log(userInfo)
    return (
        <div className={classes.formStyle}>
            <Grid container item lg={5} md={8} sm={12} xs={12} justify="center" className={classes.grid}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">
                        {showLogin ? 'Login Here' : 'Registration'}
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {!showLogin &&
                            <TextField
                                name="name"
                                label="Full Name"
                                className={classes.input}
                                inputRef={register({
                                    required: 'Name is required'
                                })}
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message}
                            />
                        }
                        <TextField
                            name="email"
                            label="Enter Your Email"
                            className={classes.input}
                            inputRef={register({
                                required: 'email is required'
                            })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            name="password"
                            label="Enter Your password"
                            className={classes.input}
                            inputRef={register({
                                required: 'password is required'
                            })}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            type="password"
                        />
                        {!showLogin &&
                            <TextField
                                name="description"
                                label="Description"
                                className={classes.input}
                                inputRef={register({
                                    required: 'Description is required'
                                })}
                                error={Boolean(errors.description)}
                                helperText={errors.description?.message}
                            />
                        }
                        <Button type="submit" variant="contained" color="primary">
                            {showLogin ? ' Login' : 'Registration'}
                        </Button>
                    </form>
                    <Button variant="contained" color="primary" className={classes.googleButton} onClick={() => signInWithGoogle()}>
                        Continue WIth Google
                    </Button>
                    <Typography variant="subtitle1" align="center">
                        {showLogin ? "Don't Have any account ?" : "Already Have an account ? "}
                        <strong className={classes.span} onClick={() => setShowLogin(!showLogin)}>
                            {showLogin ? 'Registration Here' : 'Login Here'}
                        </strong>
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                        {userInfo.success && showLogin ? 'User login Successfully' : userInfo.error}
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;