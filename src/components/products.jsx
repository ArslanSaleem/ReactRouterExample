import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const Products = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [ items, setItems ] = useState([]); 

    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get`);
        const items = await data.json();
        setItems(items.data);
    }

    const styles = {
        fontSize : 10
    }

    return ( 
        <div>
            {   items.map( item => 
                    <h1 style={styles} key={item.itemId}> 
                        <Link to={`/product/${item.itemId}`}  >{ item.item.name } </Link> 
                    </h1>
                )
            }
        </div>  
    );
}
 
export default Products;