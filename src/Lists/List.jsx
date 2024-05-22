import styles from './List.module.css'
function List(props){
 
                        //sorting

    // fruits.sort();
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabatical Order 
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical Order
    // fruits.sort((a,b) => a.calories - b.calories); //Numaric 
    // fruits.sort((a,b) => b.calories - a.calories); //Reverse Numaric

                       //filtering

    // const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalfruits = fruits.filter(fruit => fruit.calories >= 100);

    const itemList = props.items;
    const categories = props.categories;
    const listItems = itemList.map(itemList => <div key={itemList.id}> {itemList.name} : {itemList.calories}</div>);
    
    
   
    return (<>
        
        <p className={styles.titles}>{categories}:</p>
        <div className={styles.listname}> {listItems}</div>
        
    </>);
}


export default List;
