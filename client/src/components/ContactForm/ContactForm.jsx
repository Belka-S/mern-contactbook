import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';

import { Form, Field, Label } from 'components/ContactForm/ContactForm.styled';
import { NAME, PHONE, FIELDS_ON } from 'utils/constants';
import { useContacts } from 'utils/hooks';
// import { ErrorMessage } from 'components/ContactForm/ContactForm.styled';
import { addContactThunk } from 'store/contacts/contactsOperations';
import GrigWrap from 'components/common/GrigWrap/GrigWrap';
import Button from 'components/common/Button/Button';

// const ContactSchema = object().shape({
//   firstName: string()
//     .matches(NAME.regExp, NAME.msg)
//     .min(2, 'Too Short!')
//     .max(20, 'Too Long!')
//     .required('Required'),
//   phone: string()
//     .matches(PHONE.regExp, PHONE.msg)
//     .min(5, 'Too Short!')
//     .max(20, 'Too Long!')
//     .required('Required'),
// });

const ContactForm = ({ handleAddContact }) => {
  const dispatch = useDispatch();
  const { contacts, activeContact } = useContacts();
  const [name, setName] = useState({ firstWidth: 75, lastWidth: 100 });

  const initialValues = {};
  FIELDS_ON.forEach(key => (initialValues[key] = ''));

  const onChange = e => {
    const { name, value, placeholder } = e.target;
    if (name === 'firstName') {
      const firstNameSpanEl = document.querySelector('span');
      firstNameSpanEl.innerHTML = value ? value : placeholder;
      const firstWidth = firstNameSpanEl.getBoundingClientRect().width + 15;
      setName(prevState => ({ ...prevState, firstWidth }));
    }
    if (name === 'lastName') {
      const lastNameSpanEl = document.querySelector('span');
      lastNameSpanEl.innerHTML = value ? value : placeholder;
      const lastWidth = lastNameSpanEl.getBoundingClientRect().width + 15;
      setName(prevState => ({ ...prevState, lastWidth }));
    }
  };

  const onSubmit = (values, actions) => {
    // const isInContacts = contacts.some(
    //   el => el.firstName.toLowerCase() === values.firstName.toLowerCase()
    // );
    // if (isInContacts) {
    //   return alert(`${values.firstName} is already in contacts!`);
    // }

    dispatch(addContactThunk(values));
    handleAddContact(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      <Form onChange={onChange} fnw={name.firstWidth} lnw={name.lastWidth}>
        <Field id="firstN" type="text" name="firstName" placeholder="Name" />
        <Field id="lastN" type="text" name="lastName" placeholder="Surname" />

        {FIELDS_ON.map(key => (
          <Label key={key}>
            {key}
            <Field type="text" name={key} />
            {/* <ErrorMessage name={key} component="div" /> */}
          </Label>
        ))}
        <span></span>
        <GrigWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
          <Button type="submit">Submit</Button>
        </GrigWrap>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = { handleAddContact: PropTypes.func };
