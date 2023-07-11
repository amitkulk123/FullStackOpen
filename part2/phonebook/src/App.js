import { useEffect, useState } from "react";
import axios from "axios";

/** do this is you really want to. Not necessary imo */
const Filter = ({ filter, handleFilter }) => {
  return <div></div>;
};

const PersonForm = () => {
  return <div></div>;
};

const Persons = () => {
  return <div></div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    // this prevents the default action of submitting the form
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const noteObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      // check if noteObject is in persons
      setPersons(persons.concat(noteObject));
      setNewName("");
    }
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilter = (event) => setFilter(event.target.value);
  const handleName = (event) => setNewName(event.target.value);
  const handleNumber = (event) => setNewNumber(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilter} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
