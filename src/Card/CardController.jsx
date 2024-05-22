import styles from './Card.module.css';
import Card from './Card.jsx';
import shariar from '../assets/tasin.png';
import rijon from '../assets/rijon.jpeg';
function CardController(){

    return(
       <>
        <div className={styles.Wrapper}>
           <center><h2>Example of Cards Components:</h2></center> 
        <Card name = "Shahriar" image = {shariar} details ="Software Engineer  @CodeElevate"></Card>
        <Card name = "Rokibul" image = {rijon} details ="Founder of  CodeElevate"></Card>
        <Card name = "Shahriar" image = {shariar} details ="Software Engineer  @CodeElevate"></Card>
        <Card name = "Rokibul" image = {rijon} details ="Founder of  CodeElevate"></Card>
        <Card name = "Shahriar" image = {shariar} details ="Software Engineer  @CodeElevate"></Card>
        <Card name = "Rokibul" image = {rijon} details ="Founder of  CodeElevate"></Card>
        <Card name = "Shahriar" image = {shariar} details ="Software Engineer  @CodeElevate"></Card>
        <Card name = "Rokibul" image = {rijon} details ="Founder of  CodeElevate"></Card>
        <Card name = "Shahriar" image = {shariar} details ="Software Engineer  @CodeElevate"></Card>
        <Card name = "Rokibul" image = {rijon} details ="Founder of  CodeElevate"></Card>
        <Card name = "Shahriar" image = {shariar} details ="Software Engineer  @CodeElevate"></Card>
        <Card name = "Rokibul" image = {rijon} details ="Founder of  CodeElevate"></Card>
        </div>

       </>
      
    );
}

export default CardController