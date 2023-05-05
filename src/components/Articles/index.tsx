import { useEffect, useState } from 'react';
import { getArticles } from '../../../sanity/sanity-utils';

type ArticleTypes = {
    _id: string,
    _createdAt: string,
    title: string,
    slug: string,
    articleURL: string,
}  

const Articles = () => {
    
    const [articles, setArticles] = useState<ArticleTypes[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const articlesList = await getArticles();
            setArticles(articlesList);
        };

        fetchArticles();
    }, []);
    
    return(
        <div>
            {articles.map((project: ArticleTypes) => (
                <div key={project._id}>
                    <p>{project.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Articles;