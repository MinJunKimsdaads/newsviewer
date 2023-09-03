import styles from '../Box.module.css';
function NewsItem({article}){
    console.log(article)
    const {title,description,url,urlToImage, publishedAt} = article;
    return(
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <div className={styles.itemWrap}>
                <div className={styles.itemBox1}>
                    <a href={url}>
                        <img src={urlToImage}></img>
                    </a>
                </div>
                <div className={styles.itemBox2}>
                    <div className={styles.itemDateBox}>
                        {publishedAt.substr(0, 10)}
                    </div>
                    <div className={styles.itemTitleBox}>
                        {title}
                    </div>
                    <div className={styles.desBox}>
                        {description}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default NewsItem;