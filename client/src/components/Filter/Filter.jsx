import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { Div, Button } from './Filter.styled';
import { selectFilterValue } from 'store/seletors';
import { setFilterValue } from 'store/contacts/contactsSlice';

const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleClick = e => e.target.previousElementSibling.focus();
  const handleSearch = e => dispatch(setFilterValue(e.target.value));

  return (
    <Div>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        value={filterValue}
        onChange={handleSearch}
      />
      <BsSearch size="16" onClick={handleClick} />
      {filterValue && <Button onClick={handleSearch}>✕</Button>}
    </Div>
  );
};

export default Filter;
