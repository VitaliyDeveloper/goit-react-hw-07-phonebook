import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { filterContact } from 'redux/filter/filterSlice';

import {
  FilterContainer,
  FilterLabel,
  FilterText,
  FilterInput,
} from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  console.log(filter);
  const dispatch = useDispatch();

  const changeFilter = event =>
    dispatch(filterContact(event.currentTarget.value));

  return (
    <FilterContainer>
      <FilterLabel>
        <FilterText>Search contacts</FilterText>
        <FilterInput type="text" value={filter} onChange={changeFilter} />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
