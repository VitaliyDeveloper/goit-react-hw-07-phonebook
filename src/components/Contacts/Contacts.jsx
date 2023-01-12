import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Avatar from 'react-avatar';

import {
  ContactsList,
  ContactItem,
  ContactContainer,
  BtnDelete,
  FieldContact,
  StatusContainer,
  StatusImg,
  FieldContactContainer,
} from 'components/Contacts/Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // console.log(fett);

  const getVisibleContacts = () => {
    // dispatch(fetchContacts());
    const normolizedFilter = filter.toLowerCase();
    console.log(normolizedFilter);

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
            <FieldContactContainer>
              <FieldContact>Name: {name}</FieldContact>
              <FieldContact>Number: {number}</FieldContact>
              <FieldContact>E-mail: {mail}</FieldContact>
            </FieldContactContainer>
            <StatusContainer>
              <StatusImg
                src={status.image}
                alt={status.answer}
                width="50"
                height="50"
              />
              <p>Online: {status.answer}</p>
            </StatusContainer>
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
