import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    //check if name already exists
    const result = persons.find((person) => person.name === newName);

    if (result) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const noteObject = {
      name: newName,
      content: newName,
    };
    setPersons(persons.concat(noteObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const personsToShow = persons;
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <span>
        {personsToShow.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </span>
    </div>
  );
};

export default App;
