import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from "formik";
import s from './LoginForm.module.css'

const LoginForm = (props) => {
    const login = props.login;
    return (
        <Formik
            /* -----------------------Form settings-----------------------  */
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('invalid email adress')
                    .required('Field is required'),
                password: Yup.string()
                    .min(3, 'Must be at least 3 characters')
                    .max(15, 'Must be 15 characters or less')
                    .required('Field is required')
            })}
            onSubmit={ async (values, { setSubmitting, resetForm }) => {
                await login(values);
                resetForm();
                setSubmitting(false);
            }}
        >
            {/* -----------------------Form body----------------------- */}
            {({ errors, touched, isSubmitting }) => (
                <Form className={s.formContainer}>
                    <div className={s.fieldWrapper} >
                        <Field
                            name="email"
                            placeholder="your email"
                            type="email"
                            /* className={s.fieldInput + ` ` + errors.email && touched.email && s.fieldError} */
                            className={errors.email && touched.email && s.fieldError}
                        />

                        {errors.email && touched.email && <div className={s.descriptionError}>{errors.email}</div>}
                    </div>
                    <div className={s.fieldWrapper}>
                        <Field
                            name="password"
                            placeholder="your password"
                            type="password"
                            className={errors.password && touched.password && s.fieldError}
                            />
                        {errors.password && touched.password && <div className={s.descriptionError}>{errors.password}</div>}
                    </div>
                    <button type="submit">{isSubmitting ? 'Loading' : 'Submit'}</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;