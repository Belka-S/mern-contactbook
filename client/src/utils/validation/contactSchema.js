import * as Yup from 'yup';

import { regExp } from 'utils/constants';

const pattern = regExp => [regExp.pattern, regExp.msg];

export const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(...pattern(regExp.NAME))
    .required('Required'),
  lastName: Yup.string().matches(...pattern(regExp.NAME)),
  phone: Yup.string()
    .matches(...pattern(regExp.PHONE))
    .required('Required'),
  email: Yup.string().matches(...pattern(regExp.EMAIL)),
  whatsapp: Yup.string().matches(...pattern(regExp.PHONE)),
  viber: Yup.string().matches(...pattern(regExp.PHONE)),
  telegram: Yup.string().matches(...pattern(regExp.TELEGRAM)),
  linkedin: Yup.string().matches(...pattern(regExp.LINKEDIN)),
  github: Yup.string().matches(...pattern(regExp.GITHUB)),
  address: Yup.string().matches(...pattern(regExp.ADDRESS)),
  birthday: Yup.string().matches(...pattern(regExp.DATE)),
  notes: Yup.string(),
});
