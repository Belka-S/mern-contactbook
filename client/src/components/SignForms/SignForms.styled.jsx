import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage as FormikError } from 'formik';

import { themes } from 'styles/themes';

export const Form = styled(FormikForm)`
  padding: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  border-radius: ${themes.radius.m};
  background-color: ${themes.colors.white};
`;

export const Field = styled(FormikField)`
  padding: 10px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }

  border: 1px solid ${themes.colors.border};
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  font-weight: 400;

  color: ${themes.colors.failed};
`;

export const Div = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & h2 {
    margin: 0 0 0 0;
    font-size: 24px;
  }
`;
