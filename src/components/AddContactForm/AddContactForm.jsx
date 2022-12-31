import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/contactsSlice';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Input, Label, BtnAdd, Form, FieldName } from './AddContactForm.styled';
import { getStatus } from 'services/answerApi';
import { getContacts } from 'components/redux/contacts/contacts-selectors';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

  const handleSubmit = async event => {
    event.preventDefault();

    const status = await getStatus();
    const contact = { name, number, mail, id: nanoid(), status };

    const isExist = contacts.find(
      contact => contact.name === name || contact.number === number
    );
    console.log(isExist);

    if (isExist) {
      resetFields();

      return Notify.failure(`${name} is alredy in contacts.`);
    }

    console.log(status);

    dispatch(addContact(contact));

    resetFields();
  };

  const resetFields = () => {
    setName('');
    setNumber('');
    setMail('');
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

export default AddContactForm;
