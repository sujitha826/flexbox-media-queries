import React from "react";
import HOC from "./HocDataLoad";

const UsersList = ({ isLoading, data }) => {
    if (!isLoading) return <p>Hold on, fetching data might take some time.</p>;
    let renderUsers = data.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        );
    });
    return (
        <div>
            <div>{renderUsers}</div>
        </div>
    );
};

const FetchUsers = HOC(UsersList);
export default FetchUsers;