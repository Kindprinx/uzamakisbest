import styles from './Post.module.css';


function Post(props) {


    return(
        <div className= {styles.Post}>
            <p className={styles.author}> {props.author} </p>
            <p className={styles.text}>  {props.body}  </p>
        </div>
    )

}

export default Post;