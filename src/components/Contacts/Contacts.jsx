import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Avatar from 'react-avatar';
import { useEffect } from 'react';

import {
  ContactsList,
  ContactItem,
  ContactContainer,
  BtnDelete,
  FieldContact,
  FieldContactContainer,
} from 'components/Contacts/Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normolizedFilter = filter.toLowerCase();
    console.log(normolizedFilter);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, mail, id }) => (
        <ContactItem key={id}>
          <ContactContainer>
            <Avatar name={name} size="50" />
            <FieldContactContainer>
              <FieldContact>Name: {name}</FieldContact>
              <FieldContact>Number: {number}</FieldContact>
              <FieldContact>E-mail: {mail}</FieldContact>
            </FieldContactContainer>

            <BtnDelete
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              Delete
            </BtnDelete>
          </ContactContainer>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
