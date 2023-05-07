import styled from "styled-components";
import Image from "next/image";

export const AboutMeWrapper = styled.section`
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    text-align: center;
    padding: 25vh 5vw 15vh;

    h1{
        font-size: var(--fs-l);
    }

    h3{
        font-size: var(--fs-m);
    }

    p{
        font-size: var(--fs-s);
    }
`; 

export const StyledIcon = styled(Image)`
    width: clamp(2.2rem, 3vw, 3rem);
    height: auto;
    margin: 0 clamp(0.75rem, 0.5vw, 3rem);
    transition: 200ms ease-in-out;

    :hover{
        transform: scale(1.05);
    }
`;