import React from 'react';
import { connect } from 'react-redux';
import withAuthSecure from '../HOC/withAuthSecure';
import { getContacts, editContact, deleteContact } from '../../redux/contactsReducer'
import ContactsContainer from '../contacts/ContactsContainer';
import Header from '../header/Header';
import AddContact from '../options/AddContact';
import s from './Main.module.css'

class Main extends React.Component {
    state = {
        contacts: this.props.contacts
    }
    componentDidMount() {
        this.props.getContacts()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.contacts !== this.props.contacts) {
            this.setState({
                contacts: this.props.contacts
            })
        }
    }
    getFiltredContacts = (string) => {
        let modifiedString = string.toLowerCase();
        let filtredContacts = this.props.contacts.filter(contact => contact.name.toLowerCase().indexOf(modifiedString) > -1);
        this.setState({
            contacts: filtredContacts
        })
    }
    render() {
        return (
            <div className={s.mainWrapper} >
                <Header getFiltredContacts={this.getFiltredContacts} />
                <div className={s.contentWrapper} >
                    <div className={s.contactsWrapper} >
                        <ContactsContainer contacts={this.state.contacts} />
                    </div>
                    <div>
                        <AddContact />
                        <div className={s.otherOptionsWrapper} >
                            <h5>Другие опции</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts
    }
}

Main = connect(mapStateToProps, { getContacts, editContact, deleteContact })(Main);

export default withAuthSecure(Main);