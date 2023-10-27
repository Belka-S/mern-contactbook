import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage } from 'formik';

import { themes } from 'styles/themes';

export const Form = styled(FormikForm)`
  position: relative;

  & .wrapper:not(:nth-last-of-type(2)) {
    border-bottom: 1px solid ${themes.colors.border};
  }

  & #grid:last-of-type {
    padding-left: 21%;

    @media screen and (width > 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  padding-block: 2px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
  text-align: right;
  align-items: center;

  color: ${themes.colors.placeholder};
  font-size: 20px;
  font-weight: 500;
`;

export const Field = styled(FormikField)`
  text-align: left;
  background-color: transparent;
  padding: 5px 0;

  border: 1px solid transparent;
  outline: transparent;
  transition: border-color 250ms;

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${themes.colors.black};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  }

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-left: 22%;
  padding-bottom: 5px;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  color: ${themes.colors.error};
`;
