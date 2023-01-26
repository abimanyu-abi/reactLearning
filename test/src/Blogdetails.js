import {useParams} from "react-router-dom";

const Blogdetails = () => {

    const {id}=  useParams()
    return ( 
        <div className="blog-detail">
            Blog Details-{id}
        </div>
     );
}
 
export default Blogdetails;