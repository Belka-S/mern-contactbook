import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/seletors';
import { List } from './ContactList.styled';
import { fetchContactsThunk } from 'redux/Contacts/contactsOperations';
import { deleteContactThunk } from 'redux/Contacts/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filtredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContactThunk(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </List>
  );
};
