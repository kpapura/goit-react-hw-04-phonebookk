import { nanoid } from "nanoid";
import { useCallback, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const useContacts = () => {
    const [contacts, setContacts] = useLocalStorage(initialContacts, "contactsList");
    const [isLoading, setIsLoading] = useState(false);

    const addContact = useCallback(
        (newContact) => {
    const contactExist = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactExist) {
      alert(`${newContact.name} has been already added`);
      return;
    }
     setIsLoading(true)
            setTimeout(() => {
                setContacts(prevContacts => [...prevContacts, { ...newContact, id: nanoid() }]);
                setIsLoading(false);
            }, 1000);
        }, [contacts, setContacts, setIsLoading]
    );

    const deleteContact = useCallback(
        (id) => {
    setContacts(prevContacts => prevContacts.filter(prevContact => prevContact.id !== id));
        }, [setContacts]);
    
    return {contacts, addContact, deleteContact, isLoading }
}
