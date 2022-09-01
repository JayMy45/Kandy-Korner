import { useState, useEffect } from "react"
import "./Products.css"


// const localKandyUser = localStorage.getItem("kandy_user")
// const kandyUserObject = JSON.parse(localKandyUser)

export const ProductList = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPrice, setTopPrice] = useState(false) //in order to make button to filter topPriced items first I need to setState using this variable to false then set a useEffect hook to observe the topPriced array.

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    // console.log(kandyUserObject)

    //& topPrice
    useEffect(
        () => {
            if (topPrice) {
                const topPrices = products.filter(product => product.price > 3)
                setFilteredProducts(topPrices)
            } else {
                setFilteredProducts(products)
            }

        },
        [topPrice]
    )


    //& Fetch -PRODUCTS
    useEffect(
        () => {
            fetch(`http://localhost:8088/products/?_expand=productType&_sort=name`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
            // console.log("this is where the products are")
        },
        []
    )
    //& Product
    useEffect(
        () => {
            setFilteredProducts(products)
        },
        [products]
    )

    return <>
        {
            kandyUserObject.staff ? <>
                {<button onClick={() => {

                    if (topPrice) {

                        setTopPrice(false)

                    } else {

                        (setTopPrice(true))
                    }

                }}>Top Priced</button>}

            </>
                : <>
                    <button></button>
                </>
        }

        {
            <article className="products">
                <h2>LIST OF PRODUCTS</h2>
                {
                    filteredProducts.map(
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