import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    function handleDelete(_id) {
        console.log(_id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('user deleted successfully');
                    const remainingUsers = users.filter(user => user._id !== _id);
                    setUsers(remainingUsers);
                }
            });
    }

    return (
        <div>
            <h1>Total User: {users.length}</h1>
            <div>
                {users.map( user => 
                    <h3 key={user._id}>{user.name}: {user.email} : {user._id}
                    <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                    </Link>
                     <button onClick={()=>handleDelete(user._id)}>X</button> </h3>
                    )}
            </div>
        </div>
    );
};

export default Users;