import { object, string } from 'yup';

import { NAME, PHONE, EMAIL, TELEGRAM } from 'utils/constants';
import { DATE, ADDRESS, LINKEDIN, GITHUB } from 'utils/constants';

export const contactSchema = object().shape({
  firstName: string().matches(NAME.regExp, NAME.msg).required('Required'),
  lastName: string().matches(NAME.regExp, NAME.msg),
  phone: string().matches(PHONE.regExp, PHONE.msg).required('Required'),
  email: string().matches(EMAIL.regExp, EMAIL.msg),
  whatsapp: string().matches(PHONE.regExp, PHONE.msg),
  viber: string().matches(PHONE.regExp, PHONE.msg),
  telegram: string().matches(TELEGRAM.regExp, TELEGRAM.msg),
  linkedin: string().matches(LINKEDIN.regExp, LINKEDIN.msg),
  github: string().matches(GITHUB.regExp, GITHUB.msg),
  address: string().matches(ADDRESS.regExp, ADDRESS.msg),
  birthday: string().matches(DATE.regExp, DATE.msg),
  notes: string(),
});
