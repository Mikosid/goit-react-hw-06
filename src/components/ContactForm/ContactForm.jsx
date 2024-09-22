import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(15, "Too long, max 15 letters!")
    .required("This field is required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(7, "Too short, min 7 letters!")
    .max(10, "Too long, max 10 letters!")
    .required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label className={css.text}>Name</label>

          <Field type="text" className={css.input} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label className={css.text}>Number</label>
          <Field type="text" className={css.input} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
