import { Component } from 'react';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import data from 'data/contacts.json';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount() {
    const lsContacts = JSON.parse(localStorage.getItem(LS_KEY));

    lsContacts && this.setState({ contacts: lsContacts });
    // if (lsContacts) {
    //   this.state({ lsContacts });
    // } else {
    //   this.setState({ contacts: data });
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  }

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      return alert(`${contact.name} is already in contacts!`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  deleteContact = contact =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contact.id),
    }));
  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  setFilter = evt => this.setState({ filter: evt.target.value });

  render() {
    const filtredContacts = this.getFiltredContacts();

    return (
      <>
        <Section mainTitle={'Phonebook'}>
          <ContactForm handleSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <Filter
            filterValue={this.state.filter}
            handleSearch={this.setFilter}
          />
          <br />
          <ContactList
            contacts={filtredContacts}
            handleDelete={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
