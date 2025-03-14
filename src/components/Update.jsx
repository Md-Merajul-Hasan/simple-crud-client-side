import { useLoaderData } from "react-router-dom";

const Update = () => {

    const user = useLoaderData();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};
        fetch(`http://localhost:3000/users/${user._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('User info Updated Successfully!');
            }
         })

    }

    return (
        <div>
            <h3>Update Info of {user.name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={user?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={user?.email} id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Update;