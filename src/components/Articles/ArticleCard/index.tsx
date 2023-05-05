import { LinkIcon } from "@/assets";
import { CardWrapper, StyledIcon } from "./style";

type ArticleCardProps = {
    title: string,
    articleURL: string,
}

const ArticleCard = ({title, articleURL}: ArticleCardProps) => {
    return(
        <CardWrapper>
            <h1>
                {title}
            </h1>
            <a href={articleURL} target="_blank">
                <StyledIcon src={LinkIcon} alt="Repository link"/>
            </a>
        </CardWrapper>  
    );
}

export default ArticleCard;