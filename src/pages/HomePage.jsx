import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'components/redux/contacts/contacts-selectors';
import { deleteContact } from 'components/redux/contacts/contacts-actions';

const HomePage = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
          <button
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
