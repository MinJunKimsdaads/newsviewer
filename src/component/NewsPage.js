import NewsList from "./NewsList";
import Category from "./Category";
import { useParams } from "react-router-dom";

function NewsPage({match}){
    const params = useParams();

    return(
        <div>
            <Category></Category>
            <NewsList category={params.category ? params.category:'all'}></NewsList>
        </div>
    )
}

export default NewsPage;
