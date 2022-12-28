import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contacts/contacts-actions';
import { nanoid } from 'nanoid';
import { Input, Label, BtnAdd, Form, FieldName } from './AddContactForm.styled';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = { name, number, id: nanoid() };

    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <FieldName>Name:</FieldName>

        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>
      <Label>
        <FieldName>Number:</FieldName>

        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </Label>

      <BtnAdd>Add contact</BtnAdd>
    </Form>
  );
};

export default AddContactForm;
