import styled from "styled-components"

const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 1rem;
    height: auto;
    width: fit-content;
    margin-bottom: 2.5rem;
    padding: 2rem;
    border-radius: .5rem;
    background-color: ${props => props.edit ? '#64dd5e' : '#ffd25f'};
    box-shadow: .1rem .1rem .5rem rgba(63, 63, 63, 0.6);

    @media only screen and (max-width: 430px) {
        padding: 1rem;
    }
    
    input,
    button {
        color: #504426;
        box-shadow: .2rem .2rem .5rem rgba(110, 96, 61, .3);
    }

    input {
        width: 35rem;
        padding: .5rem 1rem;
        font-size: 1.6rem;
        border: 1px solid white;
        border-radius: .5rem;
        background-color: ${props => props.edit ? '#a0ff9b' : '#ffe39b'};

        &:focus {
            outline: none;
            border: 1px solid #504426;
        }

        @media only screen and (max-width: 430px) {
            width: 100%;
        }
    }

    button {
        align-self: center;
        height: auto;
        width: fit-content;
        margin-top: 1rem;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        border: 1px solid white;
        border-radius: .5rem;
        white-space: nowrap;
        background-color: ${props => props.edit ? '#a0ff9b' : '#ffe39b'};
        transition: all .3s ease-out;

        &:hover {
            color: #ffe39b;
            background-color: #504426;
        }

        &:active {
            transform: scale(.95);
            box-shadow: .1rem .1rem .3rem rgba(110, 96, 61, .6);
        }

        @media only screen and (max-width: 430px) {
            padding: 1rem;
        }
    }

    .btn-container {
        display: flex;
        justify-content: space-evenly;

        @media only screen and (max-width: 330px) {
            justify-content: space-between;
        }
    }

    .cancel {
        color: white;
        background-color: #ca4040;
    }
`

export default StyledForm;