import { useState } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
      number: newNumber,
    };
    setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const personsToShow = persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} value={filter} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        handleNameChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <span>
        {personsToShow.map((person) => {
          // if filter is empty then we need to show all
          if (!filter) {
            return <Person key={person.name} person={person} />;
          }

          // if filter is defined then we need to search for substring in the persons array
          if (person.name.toLowerCase().includes(filter.toLowerCase().trim())) {
            return <Person key={person.name} person={person} />;
          }
        })}
      </span>
    </div>
  );
};

export default App;
