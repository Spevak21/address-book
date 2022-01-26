import styled from "styled-components";

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: fit-content;
    padding: 2rem;
    border-radius: .5rem;
    background-color: #ffd25f;
    box-shadow: .1rem .1rem .5rem rgba(63, 63, 63, 0.6);

    @media only screen and (max-width: 600px) {
        width: 100%;
    }

    @media only screen and (max-width: 430px) {
        padding: 1rem;
    }

    .empty {
        font-size: 2rem;
        text-align: center;

        @media only screen and (max-width: 430px) {
            font-size: 1.6rem;
        }
    }
`

export default StyledList;