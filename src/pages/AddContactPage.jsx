import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contacts/contacts-actions';
import { nanoid } from 'nanoid';

const AddContactPage = () => {
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Number:
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button>Add contact</button>
    </form>
  );
};

export default AddContactPage;
