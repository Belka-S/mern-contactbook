import styled from 'styled-components';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  padding: 10px;
  width: 320px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  button {
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
  color: tomato;
`;
