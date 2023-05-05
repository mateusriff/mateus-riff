import Image from "next/image";
import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5vh 2vw;
    background-color: white;
    box-shadow: 0px 5px 25px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;

    @media(max-width: 768px) {
        width: 90%;
    }
`;

export const StyledIcon = styled(Image)`
    max-width: 1.75vw;
    height: auto;
    opacity: 0.5;
    transition: 200ms ease-in-out;
    margin: 0 0.5vw;

    :hover{
        opacity: 1;
    }

    @media(max-width: 768px) {
        max-width: 32px;
    }
`;