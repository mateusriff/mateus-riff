import { MediumIcon } from "@/assets";
import { CardWrapper, StyledIcon } from "./style";

type ArticleCardProps = {
    title: string,
    articleURL: string,
}

const ArticleCard = ({title, articleURL}: ArticleCardProps) => {
    return(
        <a href={articleURL} target="_blank">
            <CardWrapper>
                <StyledIcon src={MediumIcon} alt="Project link" />
                <h1>
                    {title}
                </h1>
            </CardWrapper>  
        </a>
    );
}

export default ArticleCard;