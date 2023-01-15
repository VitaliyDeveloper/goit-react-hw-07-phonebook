import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin: 10px;
`;

export const FieldName = styled.p`
  color: var(--some-white-color);
  font-weight: bold;
  /* color: var(--first-color-dark); */
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  border-color: var(--some-white-color);

  &:hover {
    border: 2px solid var(--accent-color);
  }
`;

export const BtnAdd = styled.button`
  padding: 10px;
  background-color: var(--second-color);
  color: #fff;
  border: 1px solid var(--accent-color);
  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--second-color);
    background-color: var(--accent-color);
  }
`;
