const GET_CONTACTS = 'GET_CONTACTS';
const EDIT_CONTACT = 'EDIT_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const ADD_CONTACT = 'ADD_CONTACT';

const getContactsSuccess = (contacts) => ({ type: GET_CONTACTS, contacts });
const editContactSuccess = (values) => ({ type: EDIT_CONTACT, values })
const deleteContactSuccess = (id) => ({ type: DELETE_CONTACT, id })
const addContactSuccess = (values) => ({ type: ADD_CONTACT, values })

let initialState = {
    contacts: [],
    lastUsedId: 10 /* Set this ID + 1 to the new created contact */
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS: {
            return {
                ...state,
                contacts: action.contacts
            };
        }
        case EDIT_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.id === action.values.id) {
                        for (let prop in contact) {
                            if (action.values[prop] && contact[prop] !== action.values[prop]) {
                                contact[prop] = action.values[prop]
                            }
                        }
                        return contact;
                    }
                    return contact;
                })
            }
        }
        case ADD_CONTACT: {
            return {
                ...state,
                contacts: [action.values, ...state.contacts]
            }
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== +action.id)
            }
        }
        default:
            return state;
    }
}

export const getContacts = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => dispatch(getContactsSuccess(response)))
}

export const editContact = (values) => (dispatch) => {
    /* PUT request doesn`t work correctly at JSON Placeholder.
    Here we edit the contact offline, but in real project we would send the PUT request to API*/
    dispatch(editContactSuccess(values))
}

export const deleteContact = (id) => (dispatch) => {
    dispatch(deleteContactSuccess(id))
}

export const addContact = (values) => (dispatch, getState) => {
    let lastUsedId = getState().contacts.lastUsedId;
    let payload = values;
    payload.id = lastUsedId + 1;
    dispatch(addContactSuccess(payload));
}

export default contactsReducer;