import styles from '../Box.module.css';
function NewsItem({article}){
    const {title,description,url,urlToImage} = article;
    return(
        <div className={styles.itemWrap}>
            <div className={styles.itemBox1}>
                <a href={url}>
                    <img src={urlToImage}></img>
                </a>
            </div>
            <div className={styles.itemBox2}>
                <div className={styles.itemTitleBox}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </div>
                <div className={styles.desBox}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default NewsItem;