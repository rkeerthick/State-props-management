import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../constants/data";
import Section from "./Section";
import Tabs from "./Tabs";
const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = (clickedButton) => {
    setSelectedTopic(clickedButton);
  };

  let content = <p>Please Select a topic</p>;

  if (selectedTopic) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title={Examples} id="examples">
          <Tabs
              buttonWrapper='menu'
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {content}
      </Tabs>
    </Section>
  );
};

export default Examples;
