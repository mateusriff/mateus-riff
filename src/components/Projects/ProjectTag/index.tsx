import StyledTag from "./style";

type TagProps = {
    children: React.ReactNode
}

const ProjectTag = ({ children}: TagProps) => {
    return(
        <StyledTag>
            {children}
        </StyledTag>
    );
}

export default ProjectTag;