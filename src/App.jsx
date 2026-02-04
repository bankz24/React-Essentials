
import  { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import Coreconcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';






function App() {

   function handleSelect(selectedButton){
    //selectedButton =>'Components', jsx,props,states
        console.log(selectedButton);
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
          <TabButton onSelect={()=>handleSelect('state')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('components')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('JSX')}>PROPS</TabButton>
          <TabButton onSelect={()=>handleSelect('props')}>STATE</TabButton>
        </menu>
        Dynamic Content
       </section>
     
      <main>
        
      </main>
    </div>
  );
}

export default App;
