import React, { useState, useEffect } from 'react';
import axios from 'axios';


function DataFetched() {
    const [productos, setProds] = useState([]);

    useEffect(() => {
        axios('./data/productos.json')
            .then(res => {
                let dataFetch = res.data
                setProds(dataFetch)
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }, [])
    return productos;

    
}

export default DataFetched