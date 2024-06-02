import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "Austin", "Dallas", "Birmingham", "Los Angeles"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
