export const btns = ["Components", "JSX", "Props", "State"];

function tabClick(btnName) {
  console.log(`Nayska ${btnName}`);
}

export default function TabButton() {
  return (
    <>
      {btns.map((btn, index) => {
        return (
          <li key={index}>
            <button onClick={(e) => tabClick(e)}>{btn}</button>
          </li>
        );
      })}
    </>
  );
}
