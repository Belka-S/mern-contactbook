import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/seletors';
import { setFilterValue } from 'redux/Contacts/filterSlice';
import { Label, Button } from './Filter.styled';

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
