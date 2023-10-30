function App() {
  const threeLittleBirds = [
    "Fundamental",
    "Core",
    "Main",
    "All",
    "General",
    "The best",
  ];

  function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * threeLittleBirds.length);
    return randomNum;
  }

  const firstWord = threeLittleBirds[generateRandomNumber()];

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {firstWord} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
