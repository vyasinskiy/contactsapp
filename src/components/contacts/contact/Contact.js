import React from 'react'
import s from './Contact.module.css'
import mailIkon from '../../../assets/img/mail.png'
import webIkon from '../../../assets/img/web.png'
import phoneIkon from '../../../assets/img/phone.png'
import editIkon from '../../../assets/img/edit.png'
import deleteIkon from '../../../assets/img/delete.png'
import manIkon from '../../../assets/img/man.png'
import recordkon from '../../../assets/img/record.png'

import ContactEditForm from './contactEditForm/ContactEditForm'

class Contact extends React.Component {
    state = {
        editMode: false
    }
    changeEditMode = () => {
        this.state.editMode ?
            this.setState({ editMode: false }) :
            this.setState({ editMode: true });
    }
    changeContact = (values) => {
        this.props.editContact(values);
        this.changeEditMode();
    }
    deleteContact = (event) => {
        const id = event.currentTarget.getAttribute('data-id');
        this.props.deleteContact(id);
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <ContactEditForm  {...this.props} submit={this.changeContact} /> :
                    <ContactWatchForm {...this.props} changeEditMode={this.changeEditMode} deleteContact={this.deleteContact} />
                }
            </div>
        )
    }
}

const ContactWatchForm = (props) => {
    let {id, name, email, website, phone} = props;
    return (
        <li className={s.contactWithButtons} >
            <div className={s.infoBlock} >
                <h3 title='Name'>{name}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={recordkon} alt='record' className={s.ikon} /></td>
                            <td>Запись:</td><td> {id}</td>
                        </tr>
                        <tr>
                            <td><img src={manIkon} alt='mail' className={s.ikon} /></td>
                            <td>Имя:</td><td>{name}</td>
                        </tr>
                        <tr>
                            <td><img src={mailIkon} alt='mail' className={s.ikon} /></td>
                            <td>Почта:</td><td> <a href={`mailto:${email}`} >{email}</a></td>
                        </tr>
                        <tr>
                            <td><img src={webIkon} alt='web' className={s.ikon} />
                            </td><td>Сайт:</td><td>{website}</td>
                        </tr>
                        <tr>
                            <td><img src={phoneIkon} alt='web' className={s.ikon} /></td>
                            <td>Телефон:</td><td> <a href={`tel:${phone}`}>{phone}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={s.contactButtonsBlock} >
                <button onClick={props.changeEditMode} > <img className={s.ikon} src={editIkon} alt='editIkon' /> </button>
                <button onClick={props.deleteContact} data-id={id} ><img className={s.ikon} src={deleteIkon} alt='deleteIkon' /></button>
            </div>
        </li>
    )
}

export default Contact;