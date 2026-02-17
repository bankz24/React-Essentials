import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton";
import Section from "./Sections.jsx";

export default function Examples() {
  const [selectedtopic, setselectedtopic] = useState();

  function handleSelect(selectedButton) {
    setselectedtopic(selectedButton);
  }

  let tabcontent = <p>Please select a topic</p>;

  if (selectedtopic) {
    tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedtopic].title}</h3>
        <p>{EXAMPLES[selectedtopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedtopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title = "Examples" id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedtopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>

        <TabButton
          isSelected={selectedtopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>

        <TabButton
          isSelected={selectedtopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>

        <TabButton
          isSelected={selectedtopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {tabcontent}
    </Section>
  );
} 