import styled from 'styled-components';

export const Modal = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin: 10px;
`;

export const FieldName = styled.p`
  font-weight: bold;
  color: var(--first-color-dark);
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 5px;
`;

export const BtnAdd = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: #fff;
  border: none;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: var(--accent-color);
  }
`;
