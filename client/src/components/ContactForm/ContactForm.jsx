import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Field, Label } from 'components/ContactForm/ContactForm.styled';
import { name, phone } from 'utils/constants/regExp';
import { ErrorMessage } from 'components/ContactForm/ContactForm.styled';
import { selectContacts } from 'store/seletors';
import { addContactThunk } from 'store/contacts/contactsOperations';

const ContactSchema = object().shape({
  firstName: string()
    .matches(name.regExp, name.msg)
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  phone: string()
    .matches(phone.regExp, phone.msg)
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ handleAddContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = (values, actions) => {
    console.log('values: ', values);
    const isInContacts = contacts.some(
      el => el.firstName.toLowerCase() === values.firstName.toLowerCase()
    );
    if (isInContacts) {
      return alert(`${values.firstName} is already in contacts!`);
    }

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
