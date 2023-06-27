import styles from '../Box.module.css';
function Category({onSelect, category}){
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
                return (<span className={e.name == category ? styles.activeCategory : null} key={e.name} onClick={()=>onSelect(e.name)}>{e.text}</span>)
            })}
        </div>
    )
}

export default Category;