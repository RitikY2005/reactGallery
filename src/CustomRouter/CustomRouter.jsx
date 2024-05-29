import { Route, Routes } from "react-router-dom";
import App from "../App";
import DisplayPhoto from "../components/DisplayPhoto";


function CustomRouter(){

   return (
     
     <Routes>
     	<Route path="/" element={ <App />} />
     	<Route path="/photo/:id" element={<DisplayPhoto />}  />
     </Routes>
   	)

}


export default CustomRouter;