import { React, useEffect, useState } from 'react';


const Product = ({match}) => {

    useEffect( () => {
        fetchItem();
    },[]);

    const [ imgUrl, setImgUrl ] = useState([]); 
    const [ itemName, setItemName ] = useState([]); 

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const jsonData = await data.json();
        setImgUrl(jsonData.data.item.images.information);
        setItemName(jsonData.data.item.name);

    }
    const styles = {
        textAlign : "center"
    }

    return ( 
        <div style={styles}>
            <h1 > {itemName} </h1>
            <img src={imgUrl}></img>
        </div>
     );
}
 
export default Product;
