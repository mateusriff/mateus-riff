import styled from "styled-components";

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