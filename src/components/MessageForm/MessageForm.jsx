import { Formik, ErrorMessage } from "formik";
import { object, string } from "yup";

import arrowRight from "../../assets/icon/arrowRightSmall.svg";
import {
  Button,
  Error,
  Forma,
  Icon,
  Input,
  Label,
  Lina,
  Line,
} from "./MessageForm.styled";

const nameRegExp = /^(([A-Za-z]+?)*([A-Za-z]+)?\s)+([A-Za-z]+?)*([A-Za-z]+)?$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = object({
  name: string()
    .matches(nameRegExp, "Wrong Fullname")
    .required("Name is required"),
  email: string()
    .matches(emailRegExp, "Wrong Email")
    .required("Email is required"),
  phone: string()
    .matches(phoneRegExp, "Wrong Phone")
    .min(12, "Wrong Phone")
    .max(12, "Wrong Phone")
    .required("Phone is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const MessageForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Forma>
        <Label>* Full name:</Label>
        <Input type="text" placeholder="John Rosie" name="name" />
        <Line></Line>
        <ErrorMessage name="name" render={(msg) => <Error>{msg}</Error>} />
        <Label>* E-mail:</Label>
        <Input type="text" placeholder="johnrosie@gmail.com" name="email" />
        <ErrorMessage name="email" render={(msg) => <Error>{msg}</Error>} />
        <Line></Line>
        <Label>* Phone:</Label>
        <Input type="text" placeholder="380961234567" name="phone" />
        <ErrorMessage name="phone" render={(msg) => <Error>{msg}</Error>} />
        <Line></Line>
        <Label>* Your message:</Label>
        <Input type="text" placeholder="Your message" name="message"></Input>
        <Lina></Lina>
        <Button type="submit">
          Send <Icon src={arrowRight} alt="arrow" />
        </Button>
      </Forma>
    </Formik>
  );
};
