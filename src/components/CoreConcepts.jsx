import Coreconcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";


export default function CoreConcepts(){
    return(
<section id = "core-concepts" >
        
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((conceptItem)=> (
          <Coreconcept key={conceptItem.title}{...conceptItem}/>
        ))}
          
        </ul>
       </section> 
    );
}