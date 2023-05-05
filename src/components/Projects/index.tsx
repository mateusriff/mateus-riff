import { useEffect, useState } from 'react';
import { getProjects } from '../../../sanity/sanity-utils';
import ProjectCard from './ProjectCard';
import { ProjectsWrapper, Title } from './style';

type ProjectTypes = {
    _id: string,
    _createdAt: string,
    name: string,
    slug: string,
    image: string,
    projectURL: string,
    githubURL: string,
    content: string,
    tools: string[],
}  

const Projects = () => {
    
    const [projects, setProjects] = useState<ProjectTypes[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsList = await getProjects();
            setProjects(projectsList);
        };

        fetchProjects();
    }, []);
    
    return(
        <ProjectsWrapper>
            <Title>The projects I&apos;m proud of</Title>
            {projects.map((project: ProjectTypes) => (
                <ProjectCard 
                key={project._id}
                image={project.image}
                title={project.name}
                content={project.content}
                projectURL={project.projectURL}
                githubURL={project.githubURL}
                tools={project.tools}
                />
            ))}
        </ProjectsWrapper>
    );
}

export default Projects;