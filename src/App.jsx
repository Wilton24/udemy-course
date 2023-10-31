import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data.js";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((value, index) => {
              return (
                <CoreConcepts
                  image={value.image}
                  title={value.title}
                  description={value.description}
                  key={index}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton />
          </menu>
          Dynamic Content
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
