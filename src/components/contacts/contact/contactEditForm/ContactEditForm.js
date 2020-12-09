import * as Yup from 'yup'
import { Formik, Field, Form } from "formik";

import React from 'react'
import s from './ContactEditForm.module.css'
import mailIkon from '../../../../assets/img/mail.png'
import webIkon from '../../../../assets/img/web.png'
import phoneIkon from '../../../../assets/img/phone.png'
import confirmIkon from '../../../../assets/img/confirm.png'
import manIkon from '../../../../assets/img/man.png'
import recordkon from '../../../../assets/img/record.png'

const ContactEditForm = (props) => {
    const {id, name, email, website, phone} = props;
    return (
        <li>
            <Formik
                /* -----------------------Form settings-----------------------  */
                initialValues={{
                    id: id,
                    name: name,
                    email: email,
                    website: website,
                    phone: phone
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Field is required'),
                    email: Yup.string()
                        .required('Field is required'),
                    website: Yup.string()
                        .required('Field is required'),
                    phone: Yup.string()
                        .required('Field is required')
                })}
                onSubmit={(values, /* { setSubmitting } */ formProps) => {
                    props.submit(values);
                    formProps.resetForm();
                    formProps.setSubmitting(false);
                }}
            >
                {/* -----------------------Form body----------------------- */}
                {({ errors, touched }) => (
                    <Form className={s.contactWithButtons}>
                        <div className={s.infoBlock} >
                            <h3 title='Name'>{name}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src={recordkon} alt='record' className={s.ikon} /></td>
                                        <td>Запись:</td>
                                        <td>
                                            <Field
                                                name="id"
                                                disabled
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={manIkon} alt='mail' className={s.ikon} /></td>
                                        <td>Имя:</td>
                                        <td>
                                            <Field
                                                className={errors.name && touched.name && s.error}
                                                name="name"
                                                placeholder="name"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={mailIkon} alt='mail' className={s.ikon} /></td>
                                        <td>Почта:</td>
                                        <td>
                                            <Field
                                                className={errors.email && touched.email && s.error}
                                                name="email"
                                                placeholder="email"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={webIkon} alt='web' className={s.ikon} /></td>
                                        <td>Сайт:</td>
                                        <td>
                                            <Field
                                                className={errors.website && touched.website && s.error}
                                                name="website"
                                                placeholder="website"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={phoneIkon} alt='web' className={s.ikon} /></td>
                                        <td>Телефон:</td>
                                        <td>
                                            <Field
                                                className={errors.phone && touched.phone && s.error}
                                                name="phone"
                                                placeholder="phone"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={s.contactButtonsBlock} >
                            <button
                                type="submit"
                            >
                                <img src={confirmIkon} alt='confirmIkon' className={s.ikon} />
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </li>
    )
}

export default ContactEditForm;