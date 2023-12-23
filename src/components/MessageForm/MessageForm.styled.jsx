import { Field, Form } from "formik";
import styled from "styled-components";

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #eaedf1;
  padding: 36px 12px;
  gap: 28px;

  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    padding: 48px 48px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const Input = styled(Field)`
  border: none;
  outline: none;
  background-color: #eaedf1;
  border-bottom: 1px solid #97d28b;
  padding-bottom: 8px;

  &::placeholder {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #bdbdbd;
  }
`;

export const InputMessage = styled(Field)`
  border: none;
  outline: none;
  background-color: #eaedf1;
  border-bottom: 1px solid #97d28b;
  height: 147px;

  &::placeholder {
    position:absolute;
    top: 0;
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #bdbdbd;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  height: 147px;
  resize: none;
  background-color: #eaedf1;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 99px;
  height: 39px;
  border-radius: 500px;
  padding: 4px 4px 4px 16px;
  border: 1px solid #97d28b;
  background-color: #eaedf1;
  gap: 12px;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: #173d33;
    border-color: #173d33;
    color: #97d28b;
  }
`;

export const Icon = styled.img`
  padding: 8px;
  background-color: #97d28b;
  border-radius: 50%;
`;

export const Error = styled.div`
  right: 0;
  top: 69px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  position: absolute;
  color: #d28b8b;
`;
