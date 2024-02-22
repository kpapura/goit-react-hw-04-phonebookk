import { useCallback, useMemo, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";
import { useContacts } from "./hooks/useContacts";

function App() {
  const [filter, setFilter] = useState("");
  const { contacts, addContact, deleteContact, isLoading } = useContacts();

  const handleChangeFilter = useCallback((e) => {
    const { value } = e.target;
    setFilter(value);
  }, []);

  const filteredContacts = useMemo(() => {
    if (filter === "") return contacts;
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [contacts, filter]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      {isLoading && <h1>Is Loading...</h1>}

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      {filteredContacts.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      )}
    </Container>
  );
}

export default App;
