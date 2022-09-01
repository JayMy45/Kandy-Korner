import { useState, useEffect } from "react"
import "./Products.css"


// const localKandyUser = localStorage.getItem("kandy_user")
// const kandyUserObject = JSON.parse(localKandyUser)

export const ProductList = () => {

    const [products, setProducts] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    // console.log(kandyUserObject)


    //& Fetch -PRODUCTS
    useEffect(
        () => {
            fetch(`http://localhost:8088/products/?_sort=name`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
            // console.log("this is where the products are")
        },
        []
    )

    useEffect(
        () => {
            console.log(products)
        },
        [products]
    )

    return <>
        {<button>Top Priced</button>}
        {
            <article className="products">
                <h2>LIST OF PRODUCTS</h2>
                {
                    products.map(
                        (product) => {
                            return <section className="product">
                                <header><strong>Name:</strong> {product.name}</header>
                                <footer><strong>Price:</strong> {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</footer>
                            </section>
                        }
                    )
                }
            </article >
        }
    </>
}






