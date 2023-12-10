import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('sammy')
    const [pending, setpending] = useState(false);

    const history = useHistory()

        
           const handleSubmit = (e) => {
                e.preventDefault();
                const blog = {title, body, author};
                setpending(true);
    
    
                fetch('http://localhost:8000/blogs',{
                    method:'POST',
                    headers: {"content-Type": "application/json" },
                    body: JSON.stringify(blog)
                }).then(() =>{
                    console.log("new blog added")
                    setpending(false)
                    history.push('/');

                })
        }


       



    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title:</label>
                <input type="text" required value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="">Blog body:</label>
                <textarea required value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label htmlFor=""> Blog author:</label>
                <select
                    value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value="sammy">sammy</option>
                    <option value="Tobi">Tobi</option>
                    <option value="Tayo">Tayo</option>
                </select>
               {!pending &&   <button>Add Blog</button>}
               {pending &&   <button disabled> Adding Blog.....</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;