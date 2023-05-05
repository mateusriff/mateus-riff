import { useEffect, useState } from 'react';
import { getProjects } from '../../../sanity/sanity-utils';

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
        <div>
            {projects.map((project: ProjectTypes) => (
                <div key={project._id}>
                    <p>{project.name}</p>
                    <ul>
                        {project.tools.map((tool) => (
                            <div key={tool}>{tool}</div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Projects;