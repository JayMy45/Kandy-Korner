import { useState, useEffect } from "react"


// const localKandyUser = localStorage.getItem("kandy_user")
// const kandyUserObject = JSON.parse(localKandyUser)

export const ProductList = () => {

    const [products, setProducts] = useState([])

    //& Fetch -PRODUCTS
    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
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
        {
            <article className="products">
                <h2>LIST OF PRODUCTS</h2>
                {
                    products.map(
                        (product) => {
                            return <section className="location">
                                <header><strong>Name:</strong> {product.name}</header>
                                <footer><strong>Address:</strong> {product.address}</footer>
                            </section>
                        }
                    )
                }
            </article >
        }
    </>
}






