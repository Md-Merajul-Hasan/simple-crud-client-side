import { useLoaderData } from "react-router-dom";

const Update = () => {

    const user = useLoaderData();

    return (
        <div>
        {console.log(user)};
        </div>
    );
};

export default Update;