import styled from "styled-components";

const StyledTag = styled.div`
    width: fit-content;
    padding: 0.5vh;
    background-color: gray;
    color: white;
    border-radius: 5px;
    font-size: var(--fs-xs);
    :hover{
        cursor: default;
    }
`;

export default StyledTag;