import React, { useEffect, useState } from "react";

const HOC = (WrappedComponent) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users`)               // API pulling users list that might take some time 
            .then((json) => json.json())
            .then((users) => {
                console.log(users);
                setIsLoading(false);
                setUsers(users);
            })
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <WrappedComponent isLoading={isLoading} data={users}></WrappedComponent>
        </div>
    );
}

export default HOC;