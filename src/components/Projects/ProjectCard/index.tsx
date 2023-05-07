import Image from "next/image";
import ProjectTag from "../ProjectTag";
import { GitHubIcon, LinkIcon } from "@/assets";
import { 
    CardWrapper, 
    StyledContents, 
    StyledHeader, 
    StyledInfo, 
    StyledImage,
    StyledIcon,
    StyledTags,
} from "./style";

type ProjectCardProps = {
    image: string,
    title: string,
    projectURL: string,
    githubURL: string,
    content: string,
    tools?: string[],
}

const ProjectCard = ({ image, title, projectURL, githubURL,  content, tools }: ProjectCardProps) => {
    return(
        <CardWrapper>
            <StyledContents>
                <StyledImage src={image} alt="Project image"/>
                <StyledInfo>
                    <StyledHeader>
                        <h1>
                            {title}
                        </h1>
                        <div>
                            {projectURL &&                            
                            <a href={projectURL} target="_blank">
                                <StyledIcon src={LinkIcon} alt="Project link" />
                            </a>
                            }
                            {githubURL &&                            
                            <a href={githubURL} target="_blank">
                                <StyledIcon src={GitHubIcon} alt="Repository" />
                            </a>
                            }
                        </div>
                    </StyledHeader>
                    <p>{content}</p>
                    <StyledTags>
                    {tools?.map((tool: string) => (
                        <ProjectTag key={tool}>
                        {tool}
                        </ProjectTag>
                    ))}
                    </StyledTags>
                </StyledInfo>
            </StyledContents>
        </CardWrapper>
    );
}

export default ProjectCard;