import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

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

  & div {
    padding-left: 21%;

    @media screen and (width > 768px) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }

  /* dynamic input width */
  & #firstN,
  & #lastN,
  span {
    font-size: 16px;
    font-weight: 700;

    @media screen and (width >= 768px) {
      font-size: 18px;
    }

    @media screen and (width >= 1280px) {
      font-size: 20px;
    }

    &::placeholder {
      color: ${themes.colors.placeholder};
    }

    &:first-of-type {
      margin: 0 0 10px 21%;
    }
  }

  & #firstN {
    width: ${({ fnw }) => `${fnw}px`};
  }

  & #lastN {
    width: ${({ lnw }) => `${lnw}px`};
  }

  & span {
    position: absolute;
    left: -100%;
    bottom: -100%;
    color: transparent;
  }
`;

export const Label = styled.label`
  padding-block: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-template-areas: 'key value value value value';
  grid-area: key;
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

  &:not(:last-of-type) {
    border-bottom: 1px solid ${themes.colors.border};
  }
`;

export const Field = styled(FormikField)`
  padding-block: 3px;
  grid-area: value;
  text-align: left;
  background-color: transparent;

  border: 1px solid transparent;
  outline: transparent;
  transition: border-color 250ms;
  font-size: 12px;

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

export const ErrorMessage = styled(FormikError)`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${themes.colors.canceled};
`;
