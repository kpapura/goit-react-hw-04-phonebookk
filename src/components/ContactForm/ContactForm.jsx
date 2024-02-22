import { Button, Form, Input, Label } from "./ContactForm.styled";
import { useLocalStorage } from "components/hooks/useLocalStorage";
import PropTypes from "prop-types";

const initialValue = {
  name: '', 
  number:''
}
function ContactForm({addContact}) {
  // const [name, setName] = useState('')
  // const [number, setNumber] = useState('')

  const [form, setForm] = useLocalStorage(initialValue, "contactsForm");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]:value}
})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
    setForm(initialValue);
  };
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={form.name}
          required
        />
        </Label>

        <Label>
          Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={form.number}
          required
        />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
};


ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}
export default ContactForm;
