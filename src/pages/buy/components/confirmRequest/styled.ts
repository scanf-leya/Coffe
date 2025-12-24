import styled from "styled-components";

export const ConfirmRequestContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h3{
        font-size: 1rem;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        span{
            font-weight: 700;
            font-size: 1rem;
        }
    }
    h2{
        font-size: 1.25rem;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        span{
            font-weight: 700;
            font-size: 1.25rem;
        }
    }
    button{
        margin-top: 1.5rem;
        width: 100%;
        padding: 0.75rem 0;
        background-color: ${(props) => props.theme["yellow"]};
        color: ${(props) => props.theme["white"]};
        border: none;
        border-radius: 6px;
        font-weight: 700;
        cursor: pointer;
        &:hover{
            background-color: ${(props) => props.theme["yellow-dark"]};
            transition: background-color 0.3s;
        }
    }
    
`