

import { useState } from 'react';
import  { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Coreconcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';





function App() {
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

  return (
    <div>
      <Header />
       <section id = "core-concepts" >
        
        <h2>Core Concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((conceptItem)=> (
          <Coreconcept key={conceptItem.title}{...conceptItem}/>
        ))}
          
        </ul>
       </section> 
       <section id = 'example'>
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
     
      <main>
        
      </main>
    </div>
  );
}

export default App;
