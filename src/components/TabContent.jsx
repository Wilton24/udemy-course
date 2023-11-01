export default function TabContent({ EXAMPLES, tabContent, setTabContent }) {
  return (
    <div id="tab-content">
      <>
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </>
    </div>
  );
}
