import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Products.css"


// const localKandyUser = localStorage.getItem("kandy_user")
// const kandyUserObject = JSON.parse(localKandyUser)

export const ProductList = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPrice, setTopPrice] = useState(false) //in order to make button to filter topPriced items first I need to setState using this variable to false then set a useEffect hook to observe the topPriced array.
    const navigate = useNavigate()


    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    // console.log(kandyUserObject)

    //& topPrice setFilteredProducts to filtered amount (less than 3) or to product array if condition met.
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


    //& Fetch -PRODUCTS information
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
    //& Product setFilteredProducts to product array
    useEffect(
        () => {
            setFilteredProducts(products)
        },
        [products]
    )

    return <>
        {
            kandyUserObject.staff ? <>
                {<button className="button__topPrice" onClick={() => {

                    //^ 1. alternate if/else statement
                    setTopPrice(!topPrice)

                    //^ 2nd Alternate if/else statement (ternary statement)
                    // topPrice
                    //     ? setTopPrice(false)
                    //     : (setTopPrice(true))

                    //^3rd if/else statement (OG)
                    // 3.  if (topPrice) {
                    //     setTopPrice(false)
                    // } else {
                    //     (setTopPrice(true))
                    // }

                }}>Top Priced</button>}

                <button className="button__create" onClick={() => navigate("/products/create")}>Create New Kandy</button>
            </>
                : <>
                </>
        }

        {
            <article className="products">
                <h2>LIST OF PRODUCTS</h2>
                {
                    filteredProducts.map(
                        (product) => {
                            return <section className="product" key={`product--${product.id}`}>
                                <header><strong>Name:</strong> {product.name}</header>
                                <footer><strong>Price:</strong> {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</footer>
                                <footer><strong>Type:</strong>  {product.productType.category}</footer>

                            </section>
                        }
                    )
                }
            </article >
        }
    </>
}
