import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { List } from './ContactList.styled';
import { fetchContactsThunk } from 'store/contacts/contactsOperations';
import { setActiveContact } from 'store/contacts/contactsSlice';
import { useContacts } from 'utils/hooks';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, activeContact, filterValue } = useContacts();

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
      const activeContact = contacts.find(el => el._id === activeEl.dataset.id);
      dispatch(setActiveContact(activeContact));
    }
    activeEl?.classList.add('active');
  }, [activeContact, contacts, dispatch]);

  const filtredContacts = contacts.filter(el => {
    const value = filterValue.toLowerCase();
    return (
      el.firstName.toLowerCase().includes(value) ||
      el.lastName.toLowerCase().includes(value)
    );
  });

  const handleClick = e => {
    const { id } = e.target.dataset;
    const activeContact = contacts.find(el => el._id === id);
    dispatch(setActiveContact(activeContact));
  };

  return (
    <List>
      {filtredContacts.map(el => (
        <li key={el._id} data-id={el._id} onClick={handleClick}>
          {el.firstName} {el.lastName}
        </li>
      ))}
    </List>
  );
};

export default ContactList;
