
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const ProductForm = () => {

    /*
      TODO: Add the correct default properties to the
      initial state object


                "name": "Peanut Butter",
                "quantity": 25,
                "price": 2.5,
                "productTypeId": 4

  */

    // &  create new product state to be updated via form...
    const [product, setUpdate] = useState({
        name: "",
        price: "",
        productTypeId: ""
    })
    const [productType, setType] = useState([]) //in order to bring in productType data I need to make a new state...need useEffect to fetch data and update array...


    // & fetch ProductTypes from database resources
    useEffect(  //this useEffect fetches the data from API and sets the productType array to the data there...
        () => {
            fetch(`http://localhost:8088/productTypes`)
                .then(response => response.json())
                .then((productArray) => {
                    setType(productArray)
                })
        },
        []
    )

    // ! NAVIGATION...(used in to redirect after posting contents to database)
    const navigate = useNavigate()


    // TODO --BUTTON FUNCTIONALITY...
    // & This function Post form information to API...
    const handleSubmitCreationButton = (event) => {
        event.preventDefault()

        //How the data should be sent to API 
        const toBeSavedToAPI = {
            name: product.name,
            price: parseFloat(product.price),
            productTypeId: parseInt(product.productTypeId)
        }

        // & POST updates directly to database.json then Redirects employee to productList...
        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toBeSavedToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })
    }
    //TODO --BUTTON POST END...


    // & FORM layout
    return (
        <form className="productForm">
            <h2 className="productForm__title">Kandy Creator</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name Your Creation:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Name of Kandy"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = { ...product } //copy existing state of product...
                                copy.name = evt.target.value  //modify the copy...capture change event by evt parameter set the field to the target value (whatever is being inputted)
                                setUpdate(copy)  //update the copy using the setUpdate function in useState() for products
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div><h3>Choose a type: </h3></div>
                {productType.map(
                    (prodType) => {
                        return <div className="form-group" key={`prodType--${prodType.id}`}>
                            <input type="radio" name="productType" value={prodType.id} onChange={ //use value with radio buttons to target and send information to update useState()
                                (evt) => {
                                    const copy = { ...product }
                                    copy.productTypeId = evt.target.value
                                    setUpdate(copy)
                                }
                            } /> {prodType.category}
                        </div>
                    })}
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Cost:  </label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter Price"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = { ...product } //copy existing state of product...
                                copy.price = evt.target.value  //modify the copy...capture change event by evt parameter set the field to the target value (whatever is being inputted)
                                setUpdate(copy)  //update the copy using the setUpdate function in useState() for products
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSubmitCreationButton(clickEvent)}
                className="btn btn-primary">Submit Creation</button>
        </form>
    )
}



/*
   ^ Create a form for creating a new product. 
    Only employees can add new products. 

    There should be a form field for the following properties.

            - Product name
            - Product type
            - Price

    Once the POST operation is complete, navigate the employee to the listing of all products.
 */