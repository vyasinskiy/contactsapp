import ContactEditForm from "../contacts/contact/contactEditForm/ContactEditForm";
import React from 'react';
import { connect } from "react-redux";
import { addContact } from '../../redux/contactsReducer'
import s from './AddContact.module.css'

class AddContact extends React.Component {
    initialValues = {
        id: 'Новая запись',
        name: '',
        email: '',
        website: '',
        phone: ''
    }
    addNewContact = (values) => {
        this.props.addContact(values);
    }
    render() {
        return (
            <div className={s.AddContactWrapper} >
                <h5>Добавить контакт</h5>
                <ContactEditForm {...this.initialValues} submit={this.addNewContact} />
            </div>

        )
    }
}

AddContact = connect(null, { addContact })(AddContact);

export default AddContact;