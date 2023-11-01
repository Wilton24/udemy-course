import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples";
import TabContent from "./components/TabContent";

export default function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((value, index) => (
              <CoreConcepts key={index} {...value} />
            ))}
          </ul>
        </section>
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
