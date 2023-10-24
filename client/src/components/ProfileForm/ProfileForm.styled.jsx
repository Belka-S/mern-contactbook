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

export const Avatar = styled(FormikField)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 12px 0 20px 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Averia Sans Libre', sans-serif;
  font-size: 72px;
  font-weight: 700;

  border: 1px solid ${themes.colors.border};
  border-radius: 50%;
  background-color: ${themes.colors.white};
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  cursor: pointer;
  color: transparent;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ abbr }) => `content:"${abbr}"`};
    width: 198px;
    height: 198px;
    color: ${themes.colors.placeholder};
  }

  // &::-webkit-file-upload-button
  &::file-selector-button {
    display: none;
  }
`;
