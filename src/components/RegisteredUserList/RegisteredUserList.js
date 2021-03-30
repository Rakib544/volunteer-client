import React, { useEffect, useState } from 'react';

const RegisteredUserList = () => {
    const [registeredUsers, setRegisteredUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/registeredUsers')
        .then(res => res.json())
        .then(users => setRegisteredUsers(users))
    }, [])
    return (
        <div>
            {
                registeredUsers.map(user => <li>{user.name}</li>)
            }
        </div>
    );
};

export default RegisteredUserList;