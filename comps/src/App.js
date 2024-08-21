import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "aaa",
      label: "Gibson",
      content:
        "Built for comfort, Gibson's Studio acoustic guitars feature featherlight nitrocellulose satin finishes, player-friendly advanced response necks, and full body",
    },
    {
      id: "bbb",
      label: "Fender",
      content:
        "There's nothing like playing a genuine Fender electric guitar—the sound that both created and redefined musical possibilities. ",
    },
    {
      id: "ccc",
      label: "Prs",
      content:
        "Paul Reed Smith Guitars, also known as PRS Guitars or simply PRS, is an American guitar and amplifier manufacturer located in Stevensville, Maryland.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
