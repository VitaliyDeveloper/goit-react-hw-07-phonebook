import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'components/redux/contacts/contacts-selectors';
import { deleteContact } from 'components/redux/contacts/contacts-actions';
import avatar from '../../img/no-photo.jpg';

import {
  ContactsList,
  ContactItem,
  ContactContainer,
  BtnDelete,
  FieldContact,
  Avatar,
} from 'components/Contacts/Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactContainer>
            <Avatar src={avatar} width="50" height="50" />
            <FieldContact>Name: {name}</FieldContact>
            <FieldContact>Number: {number}</FieldContact>
          </ContactContainer>
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
