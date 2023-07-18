import { useEffect, useState } from "react"

export const FindProduct = () => {


    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

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


    return (
        <>


        </>
    )


}