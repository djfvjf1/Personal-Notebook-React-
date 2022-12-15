import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Sorry bro</h2>
            <p>That page can't be found</p>
            <Link to='/'>Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;