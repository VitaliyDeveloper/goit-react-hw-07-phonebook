import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Avatar from 'react-avatar';
import { useEffect, useState } from 'react';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';

import {
  ContactsList,
  ContactItem,
  ContactContainer,
  BtnDelete,
  FieldContact,
  FieldContactContainer,
} from 'components/Contacts/Contacts.styled';

const Contacts = () => {
  const [contactUpdate, setContactUpdate] = useState(null);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showUpdateForm = contactId => {
    const contacts = contacts.find(({ id }) => id === contactId);
    setContactUpdate(contacts);
  };

  const closeForm = () => {
    setContactUpdate(null);
  };

  return (
    <ContactsList>
      {contacts.map(({ name, number, mail, id }) => (
        <ContactItem key={id}>
          <ContactContainer>
            <Avatar name={name} size="50" />
            <FieldContactContainer>
              <FieldContact>Name: {name}</FieldContact>
              <FieldContact>Number: {number}</FieldContact>
              <FieldContact>E-mail: {mail}</FieldContact>
            </FieldContactContainer>

            <BtnDelete onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </BtnDelete>
            <BtnDelete onClick={() => dispatch(showUpdateForm(id))}>
              Edit
            </BtnDelete>
          </ContactContainer>
          <UpdateContactForm
            contactUpdate={contactUpdate}
            closeForm={closeForm}
          />
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
