import CardList from "./components/cardlist/CardList";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchBox from "./components/search-box/SearchBox";
function App() {
  const [users, setUser] = useState([]);
  const [searchField, setSearchField] = useState("");

  const listData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    setUser(res.data);
  };

  useEffect(() => {
    listData();
  }, []);

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };
  const filteredUser = users.filter((user) =>
    user.email.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className='App'>
      <h1>Monesters Rolodex</h1>
      <SearchBox
        placeholder='Search itmes'
        handleSearch={handleSearch}
        searchField={searchField}
      />
      {/* <CardList users={users} /> before filter apply*/}
      <CardList users={filteredUser} />
    </div>
  );
}

export default App;
