import React from "react";

const Users = (props) => {
    return (
        <div>
            {
               props.users.map(u => <div>
                    <div>{u.name}</div>
               </div>) 
            }
        </div>
    )
}

export default Users;