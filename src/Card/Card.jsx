import styles from './Card.module.css'

function Card(props){
    return(
       
            <div className={styles.card}>
                <img src={props.image} alt="img" />
                <h3>{props.name}</h3>
                <p>{props.details}</p>
            </div>
    
    );
}

export default Card