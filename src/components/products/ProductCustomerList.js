import { useEffect, useState } from "react"

export const ProductCustomerLists = ({ searchTermState }) => {


    //set initial state to empty array
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])


    //observe initial state and display jsx code below whenever input field is not empty
    useEffect(
        () => {

            const searchedProducts = products.filter(product => {
                // the .includes method filters any string matching input field updates.
                return product.name.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredProducts(searchedProducts)
        },
        // console.log(searchTermState)
        [searchTermState]
    )

    //useEffect to return data from product database.json...
    useEffect(
        () => {
            fetch(`http://localhost:8088/products/?_expand=productType&_sort=name`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )

    //& Product setFilteredProducts to product array
    useEffect(
        () => {
            setFilteredProducts(products)
        },
        [products]
    )



    return <article className="products">
        <h2>LIST OF PRODUCTS</h2>
        {
            filteredProducts.map(
                (product) => {
                    return <section className="product" key={`product--${product.id}`}>
                        <header><strong>Name:</strong> {product.name}</header>
                        <footer><strong>Price:</strong> {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</footer>

                    </section>
                }
            )
        }
    </article >
}