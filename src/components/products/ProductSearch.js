//export a function that creates a  search field (input field) so Customers can find candy by name...
//update applicationView to route here (ProductSearch.js) for input field.
import "./Products.css"


export const ProductSearch = ({ setterFunction, searchTermState }) => {
    return (  //has to be parenthesis and not fragment to around input to render on page...
        //create an onChange event that will change the state in this component
        //changeEvent.target.value eventListener that will listen for changes to input field value.
        <div>

            <input
                onChange={
                    (changeEvent) => { setterFunction(changeEvent.target.value) }
                }

                type="text" placeholder="Enter search terms" className="kandyKorner__search" />
        </div>
    )
}