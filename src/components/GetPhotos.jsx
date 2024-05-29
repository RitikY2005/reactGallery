import { useEffect, useState } from "react";
import axios from 'axios';
import './GetPhotos.css';
import DisplayPhoto from "./DisplayPhoto";
import { Link } from "react-router-dom";


function GetPhotos(){
 
  const [photos,setPhotos]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [offset,setOffset]=useState(0);
  const[PHOTOS_URL,setPHOTOS_URL] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=10`);

  async function getPhotos(){
     console.log('this is photos_url',PHOTOS_URL);
     setIsLoading(true);
  	 const response = await axios.get(PHOTOS_URL);
  	
     console.log(response.data);
  	 const photosList=response.data.photos.map((photo)=> { return  {
  	 	title:photo.title,description:photo.description,image:photo.url,id:photo.id
  	 } });
  	 

  	  setPhotos([ ...photosList ]);
      setIsLoading(false);
  } 
 

  useEffect(()=>{
  	getPhotos();
  },[PHOTOS_URL]);

  useEffect(()=>{
      setPHOTOS_URL(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=10`);
  },[offset]);
  
  function nextOffset(){
        setOffset((offset)+10);
       
  }

  function previousOffset(){
      setOffset((offset)-10);
      
  }


   return (  isLoading? 'Loading':(
          <div className="photos-list-wrapper">
               
             
               {
                   photos.map((photo,idx)=>(
                            <Link className="photos-list-a" to={`photo/${photo.id}`} key={idx} >
   
                           <div className="photos-list" >
                    <img src={photo.image} alt="gallery photo" />
                    
                    </div>
   
                     </Link>
                       ))
               }

               <div className="controls">
                   <button disabled={offset===0} onClick={()=>previousOffset()}>Prev</button>
                   <button  disabled={offset>=123} onClick={()=>nextOffset()}>Next</button>
               </div>
          
          
                 
   
          </div>
          )
   	)

}


export default GetPhotos;