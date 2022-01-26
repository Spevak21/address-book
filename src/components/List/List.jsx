import Contact from "../Contact/Contact";
import StyledList from "./StyledList";

const List = ({contacts, setContacts, edit, setEdit, setFiltered}) => {
    return (
        <StyledList>
            {contacts.length ? '' : <p className="empty">No contacts found under this name!</p> /* Display message if contact list is empty */}
            {contacts.map(contact => <Contact key={contact.ID} contact = {contact} setContacts = {setContacts} edit = {edit === contact.ID ? true : false} setEdit = {setEdit} setFiltered = {setFiltered} />) /* Mapping contacts array to Contact components */}
        </StyledList>
    );
}
 
export default List;