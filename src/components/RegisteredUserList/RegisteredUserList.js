import React, { useEffect, useState } from 'react';
import RegisterSingleUser from './RegisterSingleUser';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@material-ui/core';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const RegisteredUserList = () => {
    const classes = useStyles()
    const [registeredUsers, setRegisteredUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/registeredUsers')
            .then(res => res.json())
            .then(users => setRegisteredUsers(users))
    }, [])
    return (
        <Container maxWidth="lg">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Registration Date</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            registeredUsers && registeredUsers.map(user => <RegisterSingleUser user={user} />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default RegisteredUserList;