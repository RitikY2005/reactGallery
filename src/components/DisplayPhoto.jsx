import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './DisplayPhoto.css';

function DisplayPhoto(){
     const [photo,setPhoto]=useState({});
       const [isLoading,setIsLoading]=useState(true);
     
    const {id } = useParams();


    async function getPhoto(){
    	 const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
    	

        	 const photosList=response.data.photo;

     setPhoto({...photosList});
      setIsLoading(false);

    }

    useEffect(()=>{
    	 getPhoto();
    },[])
     
	return (  isLoading? 'Loading ': 
 <div className="photo-list-wrapper">
            
          
            
            	
                        

                        <div className="photo-list" >
            	 <img src={photo.url} alt="gallery photo" />
            	 <p className="photo-title"> {photo.title} </p>
            	 <p className="photo-des"> {photo.description} </p>
                 </div>

                
            	
            
       
       
              

       </div>
		)
}

	export default DisplayPhoto;