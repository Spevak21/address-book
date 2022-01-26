import { deleteById, exportContacts } from "../../service";
import StyledContact from "./StyledContact";

const Contact = ({contact, setContacts, edit, setEdit, setFiltered}) => {
    // Passing edit variable to styled component to determine color of contact depending on variable state
    
    return (
        <StyledContact edit = {edit}>   
            <div className="info">
                <div className="img-container">
                    <img src={(contact.picture !== 'undefined' && contact.picture !== undefined) ? contact.picture : process.env.PUBLIC_URL + '/placeholder-image.jpg'} alt={contact.picture !== 'undefined' ? contact.name + ' profile image' : 'placeholder image'} />
                </div>
                <div className="credentials">
                    <p><span>Name: </span>{contact.name}</p>
                    <p><span>Address: </span>{contact.address}</p>
                </div>
            </div>
            <div className="btns">
                <button className="edit" onClick={() => {setEdit(contact.ID)}}>EDIT</button>
                <button className="delete" onClick={() => {
                    deleteById(contact.ID, setContacts);
                    setFiltered(prev => {
                        return [...prev].filter(el => el.ID !== contact.ID);
                    });
                }}>DELETE</button>
                <button className="export" onClick={() => {exportContacts([contact])/* Export button to export only one contact if needed*/}}>EXPORT</button>
            </div>
        </StyledContact>
    );
}
 
export default Contact;