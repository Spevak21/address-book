import { useState } from "react";
import StyledForm from "./StyledForm";

const Form = ({setContact, edit, setEdit}) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');

    const reset = () => {   // reseting input values when: new contact is created, existing contact is updated or edit is canceled
        setName('');
        setAddress('');
        setImage('');
        document.querySelector('input[type="file"]').value = '';
    }

    return (
        <StyledForm edit = {edit !== '' ? true : false}>
            <input type="file" accept=".jpg, .jpeg, .png" onChange={(e) => {setImage(e.target.files[0])}} />
            <input value={name} type="text" placeholder="Enter name..." required onChange={(e) => {setName(e.target.value)}} />
            <input value={address} type="text" placeholder="Enter address..." required onChange={(e) => {setAddress(e.target.value)}} />
            <div className="btn-container">
                <button onClick={(e) => {
                    e.preventDefault();
                    if(name !== '' && address !== '') { // Creating new object from input values and seting state variable with it
                        let newContact = {
                            name: name.trim(),
                            address: address.trim(),
                            picture: image ? image : undefined // picture is not required if not supplied default placeholder image will be set  
                        }

                        setContact(newContact);
                    }
                    reset();
                }}>{edit ? 'Save changes' : 'Add contact'}</button>
                {edit ? <button className="cancel" onClick={() => {setEdit(''); reset();}} >Cancel Edit</button> : '' /* Displaying or hiding button for Edit cancel depending on edit state variable*/} 
            </div>
        </StyledForm>
    );
}
 
export default Form;