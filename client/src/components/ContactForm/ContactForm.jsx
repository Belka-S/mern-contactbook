import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Field, Label } from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage } from 'components/ContactForm/ContactForm.styled';
import { selectContacts } from 'store/seletors';
import { addContactThunk } from 'store/contacts/contactsOperations';

const ContactSchema = object().shape({
  firstName: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ handleAddContact }) => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const onSubmit = (values, actions) => {
    // const isInContacts = contacts.some(
    //   el => el.name.toLowerCase() === values.name.toLowerCase()
    // );
    // if (isInContacts) {
    //   return alert(`${values.name} is already in contacts!`);
    // }

    dispatch(addContactThunk(values));
    handleAddContact(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ firstName: '', phone: '' }}
      validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Label>
          Fitst Name
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </Label>
        <Label>
          Phone
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = { handleAddContact: PropTypes.func };
