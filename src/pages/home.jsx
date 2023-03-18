import { Link } from "react-router-dom";

const HOME = () => {
    return ( 
        <div>
            <h1> Hello world </h1>
            <Link to='/'> back to login </Link>        
        </div>
    );
}

export default HOME;