import styled from "styled-components";

const StyledContact = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    color: #504426;
    border-radius: .5rem;
    background-color: ${props => props.edit ? '#a0ff9b' : '#ffe39b'};
    box-shadow: .2rem .2rem .5rem rgba(110, 96, 61, .3);

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.6rem;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            width: 100%;

            .credentials {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

        @media only screen and (max-width: 430px) {
            .credentials {
                align-items: flex-start;
            }
        }

        .img-container {
            flex-shrink: 0;
            height: 7rem;
            width: 7rem;
            border-radius: 5rem;
            overflow: hidden;
            box-shadow: .2rem .2rem .5rem rgba(110, 96, 61, .3);

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        span {
            font-weight: bold;
        }
    }

    .btns {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-left: 2rem;
        padding-left: 2rem;
        border-left: 1px solid #504426;
        
        @media only screen and (max-width: 600px) {
            gap: 0;
            justify-content: space-evenly;
            width: 80%;
            margin-left: 0;
            margin-top: 2rem;
            padding-left: 0;
            padding-top: 2rem;
            border-left: none;
            border-top: 1px solid #504426;
        }

        @media only screen and (max-width: 430px) {
            width: 100%;
        }

        button {
            font-size: 1.4rem;
            color: #504426;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid transparent;
            cursor: pointer;
            transition: all .5s;

            &:hover {
                border-bottom: 1px solid #504426;
            }
        }

        .delete:hover {
            color: #ca4040;
            border-bottom: 1px solid #ca4040;
        }

        .edit:hover {
            color: #26aa1a;
            border-bottom: 1px solid #26aa1a;
        }
    }
`

export default StyledContact;