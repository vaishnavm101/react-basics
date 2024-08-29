import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
    useEffect( () => {
        fetchProducts()
            .then((data) => setProducts(data));

    }, [])

    return { products }

}

export default useProducts