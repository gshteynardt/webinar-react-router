import "./App.css";
import api from "../../api/api";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Input from "../Input/Input";
import Button from "../Button/Button";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("Moscow");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = () => {
    if (searchQuery !== "") {
      setIsLoading(true);
      api
        .search(searchQuery)
        .then((response) => {
          const cards = response.results.map((item) => {
            return {
              id: item.id,
              src: item.urls.regular,
              title: item.description,
              subtitle: item.user.name,
            };
          });

          setCards(cards);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  console.log("cards:", cards);
  console.log("searchQuery:", searchQuery);
  return (
    <div className="app">
      <div className="app__content">
        <form className="app__search" onSubmit={handleFormSubmit}>
          <Input
            placeholder={"Search free high-resolution photos"}
            handleChange={handleInputChange}
          />
          <Button text={"Search"} />
        </form>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="app__cards">
            {cards.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
