import styled from "styled-components";

const StyledSearch = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2.5rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }

    div {
        display: flex;
        align-items: center;
        height: auto;
        width: fit-content;
        padding: 2rem;
        border-radius: .5rem;
        background-color: #ffd25f;
        box-shadow: .1rem .1rem .5rem rgba(63, 63, 63, 0.6);

        @media only screen and (max-width: 430px) {
            padding: 1rem;
        }
    }

    input {
        width: 35rem;
        padding: .5rem 1rem;
        font-size: 1.6rem;
        border: 1px solid white;
        border-radius: .5rem;
        background-color: #ffe39b;
        color: #504426;
        box-shadow: .2rem .2rem .5rem rgba(110, 96, 61, .3);

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
        padding: 1rem 2rem;
        font-size: 1.6rem;
        color: #504426;
        border: 1px solid white;
        border-radius: .5rem;
        box-shadow: .2rem .2rem .5rem rgba(110, 96, 61, .3);
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
    }
`

export default StyledSearch;