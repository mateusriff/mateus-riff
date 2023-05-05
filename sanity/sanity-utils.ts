import { createClient, groq } from "next-sanity";

export const getProjects = async () => {
    const client = createClient({
        projectId: '3f83csl4',
        dataset: 'production',
        apiVersion: '2023-05-02',
    });

    return client.fetch(
        groq`*[_type == "project"]{ 
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            projectURL,
            githubURL,
            content,
            tools,
        }`
    )
}

export const getArticles = async () => {
    const client = createClient({
        projectId: '3f83csl4',
        dataset: 'production',
        apiVersion: '2023-05-02',
    });

    return client.fetch(
        groq`*[_type == "article"]{ 
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            articleURL,
        }`
    )
}