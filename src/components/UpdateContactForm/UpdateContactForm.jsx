import { useDispatch, useSelector } from 'react-redux';
import { updateContacts } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import {
  Input,
  Label,
  BtnAdd,
  Form,
  FieldName,
} from './UpdateContactForm.styled';

const UpdateContactForm = (closeForm, contactUpdate) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {};

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'mail':
        setMail(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <FieldName>Name:</FieldName>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>

      <Label>
        <FieldName>Number:</FieldName>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </Label>

      <Label>
        <FieldName>E-mail:</FieldName>
        <Input type="mailto" name="mail" value={mail} onChange={handleChange} />
      </Label>

      <BtnAdd>Add contact</BtnAdd>
    </Form>
  );
};

export default UpdateContactForm;
