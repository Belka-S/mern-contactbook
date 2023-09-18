import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { List } from './ContactList.styled';
import { fetchContactsThunk } from 'store/contacts/contactsOperations';
import { deleteContactThunk } from 'store/contacts/contactsOperations';
import { setActiveContact } from 'store/contacts/contactsSlice';
import { useContacts } from 'utils/hooks';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, activeContact, filterValue, isLoading } = useContacts();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    // remove previous '.active' class
    let activeEl = document.querySelector('li[data-id].active');
    activeEl?.classList.remove('active');
    // set '.active' class
    activeEl = document.querySelector(`li[data-id="${activeContact?._id}"]`);
    if (!activeEl) {
      activeEl = document.querySelector('li[data-id]');
    }
    activeEl?.classList.add('active');
  }, [activeContact, isLoading]);

  const filtredContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const handleClick = e => {
    const { id } = e.target.dataset;
    const activeContact = contacts.find(el => el._id === id);
    dispatch(setActiveContact(activeContact));
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
