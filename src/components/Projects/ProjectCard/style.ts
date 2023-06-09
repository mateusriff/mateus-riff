import styled from "styled-components";
import Image from "next/image";

export const CardWrapper = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding: 5vh 2vw;
    background-color: white;
    border-radius: 25px;
    border: 0.2rem solid lightgray;

    @media(max-width: 912px) {
        width: 90vw;
    }
`;

export const StyledImage = styled.img`
    width: 30%;
    height: auto;
    object-fit: cover;
    border-radius: 25px;

    @media(max-width: 912px) {
        width: 100%;
        margin-bottom: 1vh;
    }
`;

export const StyledContents = styled.div`
    display: flex;

    @media(max-width: 912px) {
        flex-direction: column;
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0vh 2vw;
    gap: 2vh;

    h1 {
        font-size: var(--fs-s);
    }

    p {
        font-size: var(--fs-xs);
    }
`;

export const StyledIcon = styled(Image)`
    width: clamp(2rem, 1.75vw, 3rem);
    height: auto;
    opacity: 0.5;
    transition: 200ms ease-in-out;
    margin-left: 1vw;

    :hover{
        opacity: 1;
        transform: scale(1.05);
    }

    @media(max-width: 912px) {
        opacity: 1;
    }
`;

export const StyledTags = styled.div`
    display: flex;
    padding-top: 2vh;
    flex-wrap: wrap;
    gap: 0.5vw;
`;