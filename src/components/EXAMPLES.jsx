import { useState } from "react";
import { EXAMPLES } from "../data.js";


export default function(){
    
         const [selectedtopic, setselectedtopic] = useState();
        
           function handleSelect(selectedButton){
            //selectedButton =>'Components', jsx,props,states
                setselectedtopic(selectedButton);
                console.log(selectedtopic);
            }
        
            let tabcontent = <p>Please select a topic</p>
            if (selectedtopic) {
              tabcontent = <div id ="tab-content">
        
                  <h3>{EXAMPLES[selectedtopic].title}</h3>
                  <p>{EXAMPLES[selectedtopic].description}</p>
                  <pre>
                    <code>
                      <code>{EXAMPLES[selectedtopic].code}</code>
                    </code>
                  </pre>
                </div>
            }
            return
            }
                {<section id = 'examples'>
        <h2>Examples</h2>
        <menu>
           <TabButton  isSelected={selectedtopic =='components'} onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedtopic =='JSX'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedtopic =='Props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedtopic =='State'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>

        {tabcontent}
      
       </section>
}