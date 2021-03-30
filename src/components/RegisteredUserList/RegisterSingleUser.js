import { Button, TableCell, TableRow } from '@material-ui/core';
import React from 'react';

const RegisterSingleUser = (props) => {
    console.log(props)
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {props.user?.name}
            </TableCell>
            <TableCell align="right">{props.user?.email}</TableCell>
            <TableCell align="right">{props.user?.registrationDate}</TableCell>
            <TableCell align="right"><Button variant="contained" color="secondary">Delete</Button></TableCell>
        </TableRow>
    );
};

export default RegisterSingleUser;