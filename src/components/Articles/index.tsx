import { useEffect, useState } from 'react';
import { getArticles } from '../../../sanity/sanity-utils';
import { ArticlesWrapper, Title } from './style';
import ArticleCard from './ArticleCard';

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
        <ArticlesWrapper>
            <Title>The knowledge I share</Title>
            {articles.map((article: ArticleTypes) => (
                <ArticleCard 
                key={article._id}
                title={article.title}
                articleURL={article.articleURL}
                />
            ))}
        </ArticlesWrapper>
    );
}

export default Articles;