import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();
    function handleDelete(_id) {
        console.log(_id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div>
            <h1>Total User: {users.length}</h1>
            <div>
                {users.map( user => 
                    <h3 key={user._id}>{user.name}: {user.email} : {user._id} <button onClick={()=>handleDelete(user._id)}>X</button> </h3>
                    )}
            </div>
        </div>
    );
};

export default Users;