import './App.css';
import { useEffect, useState } from 'react';

import { addContact, getAllContacts, initDB, updateContact } from './service';

import Form from './components/Form/Form';
import List from './components/List/List';
import Search from './components/Search/Search';

function App() {

  const [contacts, setContacts] = useState([]);       // Contact array from DB
  const [contact, setContact] = useState(null);       // New contact set when creating or updating contact
  const [edit, setEdit] = useState('');               // State variable to determine UI behaviour and certain triggers
  const [filtered, setFiltered] = useState([]);       // Filtered contact array when search is used
  const [searching, setSearching] = useState(false);  // State variable to display filtered or original contact array

  useEffect(() => {
    initDB();                                         // Creating DB if needed when opening app
    getAllContacts(setContacts);                      // Getting all contacts and setting them to state variable
  }, []);

  useEffect(() => {
    if(contact !== null) {
      if(edit === '') {
        addContact(contact, setContacts);                                               // adding new contact to DB
      }else if (edit !== '') {
        updateContact(contact, edit, setContacts);                                      // updating existing contact in DB
        setFiltered(filtered.map(el => el.ID === edit ? {ID: edit, ...contact} : el));  // Updates filtered list if EDIT is being done while SEARCH is active
      }
      setContact(null);
      setEdit('');
    }
  }, [contact]);                                                                        // triggering useEffect when newContact object is created and set to state (when adding or updating contact)

  return (
    <div className="App">
      <h1>{edit ? 'Edit selected contact' : 'Add new contact'}</h1>
      <Form setContact = {setContact} edit = {edit} setEdit = {setEdit}/>
      <Search contacts = {contacts} setFiltered = {setFiltered} setSearching = {setSearching}/>
      <List contacts = {searching ? filtered : contacts} setContacts = {setContacts} edit = {edit} setEdit = {setEdit} setFiltered = {setFiltered}/>
    </div>
  );
}

export default App;