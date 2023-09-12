import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'store/seletors';
import { List } from './ContactList.styled';
import { fetchContactsThunk } from 'store/contacts/contactsOperations';
import { deleteContactThunk } from 'store/contacts/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filtredContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <List>
      {filtredContacts.map(contact => (
        <li key={contact._id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContactThunk(contact._id))}>
            Delete
          </button>
        </li>
      ))}
    </List>
  );
};
