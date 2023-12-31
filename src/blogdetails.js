import { useParams , useHistory} from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, pending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    
    const handleDelete=() =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(()=> {
            history.push('/');
        })
    }



    return ( 
        <div className="blog-details">
            {pending && <div><h6>Loading.....</h6></div> }
            {error && <div> {error} </div> }
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>

              <button onClick={handleDelete}>Delete</button>  
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;