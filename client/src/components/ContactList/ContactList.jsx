import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List } from './ContactList.styled';
import { selectContacts, selectFilterValue } from 'store/seletors';
import { fetchContactsThunk } from 'store/contacts/contactsOperations';
import { deleteContactThunk } from 'store/contacts/contactsOperations';

export const ContactList = ({ setActiveContactId }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filtredContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const handleClick = e => {
    const activeEl = e.target.closest('ul').querySelector('.active');
    activeEl?.classList.remove('active');
    e.target.classList.add('active');
    setActiveContactId(e.target.dataset.id);
  };

  return (
    <List>
      {filtredContacts.map(contact => (
        <li key={contact._id} data-id={contact._id} onClick={handleClick}>
          {contact.name}
          <button onClick={() => dispatch(deleteContactThunk(contact._id))}>
            Delete
          </button>
        </li>
      ))}
    </List>
  );
};
