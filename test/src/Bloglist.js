const Bloglist = ({blogs,handleDelete}) => {
    
    return ( 
<div className="blogList">
{blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                      <h2>{blog.title}</h2>
                      <p>Written By{blog.author}</p>
                      
                </div>
            ))}
</div>
     );
}
 
export default Bloglist;