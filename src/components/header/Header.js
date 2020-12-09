import React from 'react';
import s from './Header.module.css'

class Header extends React.Component {
    render() {
        return (
            <div className={s.headerWrapper} >
                <input placeholder='Поиск контакта' onChange={event => this.props.getFiltredContacts(event.target.value)} />
            </div>
        )
    }
}

export default Header;