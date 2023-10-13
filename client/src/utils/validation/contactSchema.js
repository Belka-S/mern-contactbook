import * as Yup from 'yup';

import { NAME, PHONE, EMAIL, TELEGRAM } from 'utils/constants';
import { DATE, ADDRESS, LINKEDIN, GITHUB } from 'utils/constants';

export const contactSchema = Yup.object().shape({
  firstName: Yup.string().matches(NAME.regExp, NAME.msg).required('Required'),
  lastName: Yup.string().matches(NAME.regExp, NAME.msg),
  phone: Yup.string().matches(PHONE.regExp, PHONE.msg).required('Required'),
  email: Yup.string().matches(EMAIL.regExp, EMAIL.msg),
  whatsapp: Yup.string().matches(PHONE.regExp, PHONE.msg),
  viber: Yup.string().matches(PHONE.regExp, PHONE.msg),
  telegram: Yup.string().matches(TELEGRAM.regExp, TELEGRAM.msg),
  linkedin: Yup.string().matches(LINKEDIN.regExp, LINKEDIN.msg),
  github: Yup.string().matches(GITHUB.regExp, GITHUB.msg),
  address: Yup.string().matches(ADDRESS.regExp, ADDRESS.msg),
  birthday: Yup.string().matches(DATE.regExp, DATE.msg),
  notes: Yup.string(),
});
