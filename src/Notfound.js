import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
         <p>page not found</p>
         <Link to="/">Back to home page.....</Link>
        </div>
       
     );
}
 
export default Notfound;