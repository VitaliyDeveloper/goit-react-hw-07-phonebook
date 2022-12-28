import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
`;

export const ContactItem = styled.li``;

export const FieldContact = styled.p`
  font-size: medium;
`;

export const BtnDelete = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: #fff;
  border: none;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--accent-color);
  }
`;
