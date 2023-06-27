import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
function NewsList({category}){
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try{
            const query = category === 'all' ? '':`&category=${category}`;
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=990c0bcfc384409289ff8287b7801fd3`,);
            setArticles(response.data.articles);
            setLoading(true);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchData();
    },[category])

    return(
        <div>
            {loading ? articles.map((e)=>{return(<NewsItem key={e.url} article={e}></NewsItem>)}):<div>로딩중</div>}
            
        </div>
    )
}

export default NewsList;