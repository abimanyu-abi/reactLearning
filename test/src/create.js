import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [author,setAuthor]=useState("mario");

    const history =useHistory();

    const handler =(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            history.push('/');
    
    })
    } 
    
    return (  
        <div className="create">
            <form onSubmit={handler}>
                <label>Blog title :</label>
                <input 
                type="text"
                required
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body :</label>
                <textarea required onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yadho">yadho</option>
                    <option value="luigi">luigi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}
 
export default Create;