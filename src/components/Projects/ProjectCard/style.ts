import Image from "next/image";
import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding: 5vh 2vw;
    background-color: white;
    box-shadow: 0px 5px 25px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;

    img{
        width: 30%;
        height: auto;
        object-fit: cover;
        border-radius: 25px;

        @media(max-width: 768px) {
            width: 100%;
        }
    }

    @media(max-width: 768px) {
        width: 90%;
    }
`;

export const StyledImage = styled(Image)`
    width: 10vw;
    height: auto;
    object-fit: cover;
    border-radius: 25px;
`;

export const StyledContents = styled.div`
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2vh;
    }
`;

export const StyledInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0vh 2vw;
    gap: 2vh;
`;

export const StyledIcon = styled(Image)`
    max-width: 1.75vw;
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

export const StyledTags = styled.div`
    display: flex;
    padding-top: 2vh;
    flex-wrap: wrap;
    gap: 0.5vw;
`;