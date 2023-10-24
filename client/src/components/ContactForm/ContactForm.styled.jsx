import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { Field as FormikField } from 'formik';
import { ErrorMessage } from 'formik';

import { themes } from 'styles/themes';

export const Form = styled(FormikForm)`
  position: relative;
  font-size: 12px;

  @media screen and (width >= 768px) {
    font-size: 14px;
  }

  @media screen and (width >= 1280px) {
    font-size: 16px;
  }

  & #grid {
    padding-left: 22%;

    @media screen and (width > 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }

  /* dynamic input width */
  & #first,
  & #last,
  span {
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;

    @media screen and (width >= 768px) {
      font-size: 20px;
    }

    @media screen and (width >= 1280px) {
      font-size: 26px;
    }

    &::placeholder {
      color: ${themes.colors.placeholder};
    }

    &:first-of-type {
      margin: 10px 0 10px 22%;
    }
  }

  & #first {
    width: ${({ fnw }) => `${fnw}px`};
  }

  & #last {
    width: ${({ lnw }) => `${lnw}px`};
  }

  & .wrapper:not(:nth-last-of-type(2)) {
    border-bottom: 1px solid ${themes.colors.border};
  }

  & span {
    position: absolute;
    left: 100%;
    bottom: 0;
    color: transparent;
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
  font-size: 12px;

  @media screen and (width >= 768px) {
    font-size: 14px;
  }

  @media screen and (width >= 1280px) {
    font-size: 16px;
  }

  @media screen and (width < 768px) {
    letter-spacing: -1px;
  }
`;

export const Field = styled(FormikField)`
  padding-block: 3px;
  text-align: left;
  background-color: transparent;

  border: 1px solid transparent;
  outline: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${themes.colors.black};
  transition: border-color 250ms;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  }

  @media screen and (width >= 768px) {
    font-size: 14px;
  }

  @media screen and (width >= 1280px) {
    font-size: 16px;
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
