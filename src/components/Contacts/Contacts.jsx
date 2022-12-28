import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'components/redux/contacts/contacts-selectors';
import { deleteContact } from 'components/redux/contacts/contacts-actions';

import {
  ContactsList,
  ContactItem,
  BtnDelete,
  FieldContact,
} from 'components/Contacts/Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <FieldContact>Name: {name}</FieldContact>
          <FieldContact>Number: {number}</FieldContact>
          <BtnDelete
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </BtnDelete>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
