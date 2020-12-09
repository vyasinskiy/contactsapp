import React from 'react';
import { connect } from 'react-redux';
import { editContact, deleteContact } from '../../redux/contactsReducer'
import Contact from './contact/Contact';

class ContactsContainer extends React.Component {
    mapContacts = () => {
        return this.props.contacts.map(contact => {
            return (
                <Contact key={contact.id} {...contact} editContact={this.props.editContact} deleteContact={this.props.deleteContact} />
            )
        })
    }
    render() {
        return (
            <ul>
                {this.mapContacts()} {/* Transformation contacts from array to <li> */}
            </ul>
        )
    }
}

ContactsContainer = connect(null, { editContact, deleteContact })(ContactsContainer);

export default ContactsContainer;