

import { useState } from 'react';
import  { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Coreconcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';






function App() {
  const [selectedtopic, setselectedtopic] = useState('Please click a button');

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
          <Coreconcept {...CORE_CONCEPTS[0]}/>

          <Coreconcept  {...CORE_CONCEPTS[1]} />
          <Coreconcept {...CORE_CONCEPTS[2]}
          />
          <Coreconcept {...CORE_CONCEPTS[3]}/>
        </ul>
       </section> 
       <section id = 'example'>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('PROPS')}>PROPS</TabButton>
          <TabButton onSelect={()=>handleSelect('STATE')}>STATE</TabButton>
        </menu>
        {selectedtopic}
       </section>
     
      <main>
        
      </main>
    </div>
  );
}

export default App;
