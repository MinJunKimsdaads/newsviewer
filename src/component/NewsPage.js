import NewsList from "./NewsList";
import Category from "./Category";
import { useParams } from "react-router-dom";
import styles from '../Page.module.css';

function NewsPage({match}){
    const params = useParams();

    return(
        <div className={styles.pageWrap}>
            <Category></Category>
            <NewsList category={params.category ? params.category:'all'}></NewsList>
        </div>
    )
}

export default NewsPage;
