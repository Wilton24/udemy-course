import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import TabContent from "./TabContent";
import TabButton from "./TabButton";

export default function Examples() {
  const [tabContent, setTabContent] = useState();
  const btns = ["components", "jsx", "props", "state"];

  let tabDetails = <p>Please select a topic</p>;

  if (tabContent) {
    tabDetails = (
      <TabContent
        EXAMPLES={EXAMPLES}
        tabContent={tabContent}
        setTabContent={setTabContent}
      />
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          tabContent={tabContent}
          setTabContent={setTabContent}
          btns={btns}
        />
      </menu>
      {tabDetails}
    </section>
  );
}
