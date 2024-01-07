import classes from "./AuthForm.module.css";
import { Formik, Field, Form } from "formik";

export function AuthForm() {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={classes.form}>
          <label className={classes.label}>Email</label>
          <label className={classes.label2}>Password</label>
          <Field type="email" name="email" className={classes.input}/>
          <Field type="password" name="password" className={classes.input2}/>
          <button type="submit" className={classes.button}>Continue</button>
        </Form>
      </Formik>
      <p className={classes.p}>New to here?</p>
      <button className={classes.button2}>Create your account</button>
    </>
  );
}
