import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with", term);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  );
}

export default App;
