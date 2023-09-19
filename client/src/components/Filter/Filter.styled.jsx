import styled from 'styled-components';

const heightSize = '30px';
const fontSize = '14px';

export const Div = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;

  input {
    width: 100%;
    height: ${heightSize};
    padding-inline: ${heightSize};
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    outline: transparent;
    transition: border-color 250ms;

    &:hover,
    &:focus {
      border-color: blue;
    }

    &::placeholder {
      width: fit-content;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      transition: left 300ms, transform 300ms;
      font-size: ${fontSize};
    }

    &:focus::placeholder {
      left: 0;

      transform: translateX(${heightSize});
    }

    & + svg {
      position: absolute;
      top: 50%;
      left: calc(50% - 2.5 * ${fontSize});
      transform: translate(-50%, -50%);
      transition: left 300ms, transform 300ms;
      cursor: text;
    }

    &:focus + svg,
    &:not(:placeholder-shown) + svg {
      left: calc(${heightSize} * 0.55);
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: calc(${heightSize} * 0.55);
  width: 20px;
  height: 20px;

  transform: translate(50%, -50%);
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: gray;
  color: white;
  font-weight: 700;
  font-size: ${fontSize};
`;
