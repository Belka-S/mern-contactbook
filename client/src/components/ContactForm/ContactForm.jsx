import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';

import { Form, Field, Label } from 'components/ContactForm/ContactForm.styled';
import { ErrorMessage } from 'components/ContactForm/ContactForm.styled';
import { NAME, PHONE, EMAIL, TELEGRAM, DATE, COUNTRY } from 'utils/constants';
import { RENDER_FIELDS, FORM_FIELDS, LINKEDIN, GITHUB } from 'utils/constants';
import { useContacts } from 'utils/hooks';
import { addContactThunk } from 'store/contacts/contactsOperations';
import { updateContactThunk } from 'store/contacts/contactsOperations';
import GrigWrap from 'components/common/GrigWrap/GrigWrap';
import Button from 'components/common/Button/Button';

const ContactSchema = object().shape({
  firstName: string().matches(NAME.regExp, NAME.msg).required('Required'),
  lastName: string().matches(NAME.regExp, NAME.msg),
  phone: string().matches(PHONE.regExp, PHONE.msg).required('Required'),
  email: string().matches(EMAIL.regExp, EMAIL.msg),
  whatsapp: string().matches(PHONE.regExp, PHONE.msg),
  viber: string().matches(PHONE.regExp, PHONE.msg),
  telegram: string().matches(TELEGRAM.regExp, TELEGRAM.msg),
  linkedin: string().matches(LINKEDIN.regExp, LINKEDIN.msg),
  github: string().matches(GITHUB.regExp, GITHUB.msg),
  address: string().matches(COUNTRY.regExp, COUNTRY.msg),
  birthday: string().matches(DATE.regExp, DATE.msg),
  notes: string(),
});

const ContactForm = ({ triggerForm, isContactForm }) => {
  const dispatch = useDispatch();
  const { contacts, activeContact } = useContacts();
  const [name, setName] = useState({ firstWidth: 75, lastWidth: 100 });

  const getInitialValues = bool => {
    const initialValues = {};
    FORM_FIELDS.forEach(
      key => (initialValues[key] = bool === 'edit' ? activeContact[key] : '')
    );
    return initialValues;
  };

  const onChange = e => {
    const { name, value, placeholder } = e.target;
    const spanEl = document.querySelector('span');
    spanEl.innerHTML = value ? value : placeholder;
    const getWidth = el => el.getBoundingClientRect().width + 15;

    if (name === 'firstName') {
      setName(prevState => ({ ...prevState, firstWidth: getWidth(spanEl) }));
    }
    if (name === 'lastName') {
      setName(prevState => ({ ...prevState, lastWidth: getWidth(spanEl) }));
    }
  };

  const onSubmit = (values, actions) => {
    const { firstName } = values;
    const isInContacts = contacts.some(
      el => el.firstName.toLowerCase() === firstName.toLowerCase()
    );
    if (isInContacts && isContactForm === 'add') {
      return alert(`${firstName} is already in contacts!`);
    }

    dispatch(
      isContactForm === 'add'
        ? addContactThunk(values)
        : updateContactThunk({ id: activeContact._id, contact: values })
    );

    triggerForm(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={getInitialValues(isContactForm)}
      validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      <Form onChange={onChange} fnw={name.firstWidth} lnw={name.lastWidth}>
        <ErrorMessage name="firstName" component="div" />
        <ErrorMessage name="lastName" component="div" />
        <Field id="firstN" type="text" name="firstName" placeholder="Name" />
        <Field id="lastN" type="text" name="lastName" placeholder="Surname" />

        {RENDER_FIELDS.map(key => (
          <div className="wrapper" key={key}>
            <Label>
              {key}
              <Field type="text" name={key} />
            </Label>
            <ErrorMessage name={key} component="div" />
          </div>
        ))}
        <span></span>
        <GrigWrap mm="40px" cg="3vw" gtc="1fr 1fr 1fr">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={() => triggerForm(false)}>
            Cancel
          </Button>
        </GrigWrap>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = { triggerForm: PropTypes.func };
