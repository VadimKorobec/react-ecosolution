import { Field,Form } from "formik";
import styled from "styled-components";

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #eaedf1;
  padding: 36px 12px;

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
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  border: none;
  outline: none;
  background-color: #eaedf1;
  margin-bottom: 8px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 28px;
`;

export const Lina = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 16px;
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
  color: red;
`