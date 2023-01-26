import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {

    //let name ="abi";
    const [blogs,setBlogs]= useState(null);
    const [isPending,setisPending] = useState(true);
    const [error,setError] = useState(null);
   const Abortconst = new AbortController();

    useEffect(()=>{
        fetch('http://localhost:8000/blogs',{signal:Abortconst.signal})
          .then(res =>{
            if(!res.ok){
                throw Error("could not get the data");
            }
            return res.json();
          })
          .then(data=>{
            
            setBlogs(data);
            setisPending(false);
            setError(null);
          })
          .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
            setisPending(false);
            setError(err);
            }
            return () => Abortconst.abort();
          })
         
    });

    

    return (      

    <div className="home">
           {error && <div>{error}</div>}
           {isPending && <div>Loading......</div>}
           {blogs &&<Bloglist blogs={blogs}/>}
          
           
        </div>  
     );
}
 
export default Home;