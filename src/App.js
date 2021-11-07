import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState({ data: [] });
  const [search, setSearch] = useState({ search: "" });

  const filteredMonsters = monsters.data.filter((monster) => {
    return monster.name.toLowerCase().includes(search.search.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters({ data }));
  }, []);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        changeHandler={(e) => setSearch({ search: e.target.value })}
        placeholder="Enter Monster..."
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
