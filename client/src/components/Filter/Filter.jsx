import { useDispatch, useSelector } from 'react-redux';

import { Label, Button } from './Filter.styled';
import { selectFilterValue } from 'store/seletors';
import { setFilterValue } from 'store/contacts/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const handleSearch = e => dispatch(setFilterValue(e.target.value));

  return (
    <>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleSearch}
        />
      </Label>
      <Button onClick={handleSearch}>New search</Button>
    </>
  );
};
