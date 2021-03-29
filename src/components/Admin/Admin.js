import { Button, ButtonBase, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../images/Group 1329.png';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fileInput: {
        display: 'none',
    },
    input: {
        width: '100%',
        margin: '10px',
    },
    formStyle: {
        padding: '20px',
        margin: '30px'
    },
    submitBtnStyle: {
        marginTop: '10px',
        display: 'block',
        marginLeft: 'auto'
    },
    paper: {
        padding: theme.spacing(3)
    },
    typography: {
        padding: '10px 0',
        color: 'deepSkyBlue'
    }
}));

const Admin = () => {
    const classes = useStyles()
    const [imageURL, setImageURL] = useState(null)

    const { register, handleSubmit } = useForm();
    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log(err))
    }
    const onSubmit = data => {
        const img = imageURL && imageURL
        let eventData = { img, ...data }
        fetch('http://localhost:8080/addEvent', {
            method: "POST",
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(eventData)
        })
    };

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>

                    <Grid item lg={3}>
                        <ButtonBase>
                            <img src={logo} alt="logo" style={{ height: '70px', margin: '20px' }} />
                        </ButtonBase>
                        <Typography variant="subtitle1">
                            <PeopleAltIcon style={{ color: 'deepSkyBlue' }} /> Volunteer register list
                        </Typography>
                        <Button style={{ color: 'deepskyblue', marginTop: '20px' }} startIcon={<AddIcon />} variant="outlined">add new event</Button>

                    </Grid>

                    <Grid container item lg={8} direction="column">
                        <Grid item lg={12}>
                            <Typography variant="h4" className={classes.typography}>
                                Add Event
                            </Typography>
                        </Grid>
                        <Grid item lg={12}>
                            <Paper>
                                <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
                                    <TextField name="eventName" label="Event Title" className={classes.input} inputRef={register} />
                                    <TextField name="eventDescription" label="Event Description" className={classes.input} inputRef={register} />
                                    <div className={classes.root}>
                                        <input
                                            accept="image/*"
                                            className={classes.fileInput}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            onChange={handleImageUpload}
                                            name="image"
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button size="small" variant="contained" color="primary" component="span" startIcon={<PhotoCamera />}>
                                                Upload Image
                                        </Button>
                                        </label>
                                    </div>
                                    <Button className={classes.submitBtnStyle} type="submit" variant="contained" color="primary">Submit</Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Admin;