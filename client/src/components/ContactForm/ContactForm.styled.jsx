import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

import { themes } from 'styles/themes';

export const Form = styled(FormikForm)`
  padding: 10px;
  width: 320px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${themes.colors.border} button {
    margin-right: 125px;
  }
`;

export const Field = styled(FormikField)`
  display: block;
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${themes.colors.canceled};
`;
