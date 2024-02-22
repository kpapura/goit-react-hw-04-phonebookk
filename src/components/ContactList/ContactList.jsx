import PropTypes from "prop-types";

import { Button, List, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={(e) => deleteContact(id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  deleteContact: PropTypes.func.isRequired,
}
