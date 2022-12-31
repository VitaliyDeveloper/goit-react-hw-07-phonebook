import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'components/redux/contacts/contacts-selectors';
import { getFilter } from 'components/redux/filter/filter-selectors';
import { deleteContact } from 'components/redux/contacts/contactsSlice';
import Avatar from 'react-avatar';

import {
  ContactsList,
  ContactItem,
  ContactContainer,
  BtnDelete,
  FieldContact,
  StatusContainer,
  StatusImg,
} from 'components/Contacts/Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normolizedFilter = filter.toLowerCase();
    // console.log(normolizedFilter);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, mail, id, status }) => (
        <ContactItem key={id}>
          <ContactContainer>
            <Avatar name={name} size="50" />
            <FieldContact>Name: {name}</FieldContact>
            <FieldContact>Number: {number}</FieldContact>
            <FieldContact>E-mail: {mail}</FieldContact>

            <BtnDelete
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </BtnDelete>
          </ContactContainer>
          <StatusContainer>
            <StatusImg
              src={status.image}
              alt={status.answer}
              width="50"
              height="50"
            />
            <p>Online: {status.answer}</p>
          </StatusContainer>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
