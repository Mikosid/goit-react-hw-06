import initialContacts from "../../data/contacts.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { useEffect, useState } from "react";

import "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [searchBox, setSearchBox] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox velue={searchBox} onSearchBox={setSearchBox} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
