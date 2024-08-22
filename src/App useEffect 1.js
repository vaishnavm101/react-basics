import React, { useEffect, useState } from 'react'

const App = () => {

    const [value, setValue] = useState(0);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        console.log("Component initialized!");
        getProducts();
    }, [])



    console.log("Outside useEffect()");


    return (
        <>
            <h1>App</h1>
            {/* <h2>Products: {JSON.stringify(products)}</h2> */}
            {products.length < 1 ? <h1>Loading products...</h1> :
                <>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                            <h4>{product.price}</h4>
                        </div>
                    ))}
                </>
            }
        </>
    )
}

export default App