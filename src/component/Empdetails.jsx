import { useParams } from "react-router-dom";

const Empdetails = ()=>{
    const {id,name} = useParams();
  return(
   
    <div>
        <h2>
            Employee Details : {id} {name && <b>({name})</b>}
        </h2>
    </div>
  )
}
export default Empdetails;