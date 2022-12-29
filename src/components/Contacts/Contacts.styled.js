import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  border-top: 5px solid var(--second-color);
`;

export const ContactItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--second-color);
  min-width: 300px;
  padding: 10px;
  margin: 10px;
  transition: 200ms ease-in-out;

  &::after {
    top: 0;
    height: 10px;
    position: absolute;
    background-color: var(--accent-color);
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FieldContact = styled.p`
  font-size: medium;
  max-width: 100px;
  color: var(--some-white-color);
  margin: 0 10px;
`;

export const BtnDelete = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: var(--some-white-color);
  border: none;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--accent-color);
    color: var(--second-color);
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
