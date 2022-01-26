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
                    if(name === '' || address === '') return    // Name and Address are required

                    let newContact = {                          // Creating new object from input values
                        name: name.trim(),
                        address: address.trim()
                    }

                    if(image === '') {
                        newContact.picture = undefined          // if picture is not supplied default placeholder image will be set from undefined value
                        setContact(newContact);
                    }else if(image !== '') {
                        let reader = new FileReader();          // if picture is provided it will be converted from File to base64 to be stored in DB
                        reader.readAsDataURL(image);
                        reader.onload = function () {        
                            newContact.picture = reader.result;
                            setContact(newContact);
                        };
                        reader.onerror = function (error) {
                            console.log('Error: ', error);
                        };
                    }
                    reset();
                }}>{edit ? 'Save changes' : 'Add contact'}</button>
                {edit ? <button className="cancel" onClick={() => {setEdit(''); reset();}} >Cancel Edit</button> : '' /* Displaying or hiding button for Edit cancel depending on edit state variable*/} 
            </div>
        </StyledForm>
    );
}
 
export default Form;