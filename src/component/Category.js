import styles from '../Box.module.css';
import { Link } from 'react-router-dom';

function Category(){
    const categories = [
        {
            name:'all',
            text: '전체보기',
        },
        {
            name:'business',
            text: '비즈니스',
        },
        {
            name:'entertainment',
            text: '엔터테인먼트',
        },
        {
            name:'health',
            text: '건강',
        },
        {
            name:'science',
            text: '과학',
        },
        {
            name:'sports',
            text: '스포츠',
        },
        {
            name:'technology',
            text: '기술',
        },
    ]
    return(
        <div className={styles.categoryBox}>
            {categories.map((e)=>{
                return (<Link to={`/${e.name}`} key={e.name}>{e.text}</Link>)
            })}
        </div>
    )
}

export default Category;