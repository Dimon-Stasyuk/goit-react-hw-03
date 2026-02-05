import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const nameID = useId();
  const numberId = useId();

  const onFormSubmir = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={onFormSubmir}>
      <Form className={s.form}>
        <label htmlFor='nameId'>Name</label>
        <Field type='text' name='name' id={nameID} />
        <label htmlFor='numberId'>Number</label>
        <Field type='text' name='number' id={numberId} />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}
