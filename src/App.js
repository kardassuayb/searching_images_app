import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import ImageList from "./Components/ImageList";
import { useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    setImages(await searchImages(term));
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
