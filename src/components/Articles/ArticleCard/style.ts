import Image from "next/image";
import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 40vw;
    display: flex;
    align-items: center;
    gap: 1vw;
    padding: 2.5vh 1vw;
    background-color: white;
    border: 0.2rem solid lightgray;
    border-radius: 100px;
    transition: 0.1s ease-in-out;

    h1 {
        font-size: var(--fs-s);
    }

    :hover{
        transform: scale(1.01);
    }

    @media(max-width: 912px) {
        width: 90vw;
    }
`;

export const StyledIcon = styled(Image)`
    max-width: clamp(3rem, 5vw, 4rem);
    height: auto;
    transition: 200ms ease-in-out;
`;