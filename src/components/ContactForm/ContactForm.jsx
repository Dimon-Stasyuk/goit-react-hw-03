import { Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const nameID = useId();
  const numberId = useId();
  const id = nanoid();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required!"),
  });

  const onFormSubmir = (values, actions) => {
    const newContact = { ...values, id };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={onFormSubmir}
      validationSchema={ContactSchema}>
      <Form className={s.form}>
        <label htmlFor='nameId'>Name</label>
        <Field type='text' name='name' id={nameID} />
        <ErrorMessage className={s.errMessage} name='name' component='span' />
        <label htmlFor='numberId'>Number</label>
        <Field type='text' name='number' id={numberId} />
        <ErrorMessage className={s.errMessage} name='number' component='span' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}
