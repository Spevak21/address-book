import { exportContacts } from "../../service";
import StyledSearch from "./StyledSearch";

const Search = ({contacts, setFiltered, setSearching}) => {

    return (
        <StyledSearch>
            <div className="search-container">
                <input type="text" placeholder="Search by name" onChange={(e) => {
                    let tmp = [];
                    if(e.target.value !== ''){
                        tmp = contacts.filter(contact => contact.name.toLowerCase().includes(e.target.value.toLowerCase()));
                    }else {
                        tmp = [];
                    }
                    setFiltered(tmp);
                    e.target.value !== '' ? setSearching(true) : setSearching(false);
                }} />
            </div>
            {contacts.length !== 0 ? <div><button onClick={() => {  // Button to export all contacts (hidden if list is empty)
                exportContacts(contacts);
            }}>Export All</button></div> : ''}
        </StyledSearch>
    );
}
 
export default Search;