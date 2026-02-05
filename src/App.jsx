

import { useState } from 'react';
import  { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Coreconcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';





function App() {
  const [selectedtopic, setselectedtopic] = useState('components');

   function handleSelect(selectedButton){
    //selectedButton =>'Components', jsx,props,states
        setselectedtopic(selectedButton);
        console.log(selectedtopic);
    }

  return (
    <div>
      <Header />
       <section id = "core-concepts" >
        
        <h2>Core Concepts</h2>
        <ul>
            <Coreconcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
          <Coreconcept {...CORE_CONCEPTS[1]}/>

          <Coreconcept  {...CORE_CONCEPTS[2]} />
          <Coreconcept {...CORE_CONCEPTS[3]}
          />
          
        </ul>
       </section> 
       <section id = 'example'>
        <h2>Examples</h2>
        <menu>
           <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        <div id = "tab-content">
          <h3>{EXAMPLES[selectedtopic].title}</h3>
          <p>{EXAMPLES[selectedtopic].description}</p>
          <pre>
            <code>
              <code>{EXAMPLES[selectedtopic].code}</code>
            </code>
          </pre>
        </div>
       </section>
     
      <main>
        
      </main>
    </div>
  );
}

export default App;
