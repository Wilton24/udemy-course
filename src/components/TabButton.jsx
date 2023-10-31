export default function TabButton({ tabContent, setTabContent, btns }) {
  function tabClick(event) {
    setTabContent(event);
    console.log(tabContent);
  }

  return (
    <>
      {btns.map((btn, index) => {
        return (
          <li key={index}>
            <button onClick={() => tabClick(btn)}>{btn}</button>
          </li>
        );
      })}
    </>
  );
}
