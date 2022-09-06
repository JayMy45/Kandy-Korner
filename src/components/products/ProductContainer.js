import { useState } from "react"
import { CustomerLists } from "./CustomerList"
import { ProductList } from "./ProductList"
import { ProductSearch } from "./ProductSearch"


//& this component will maintain the state between  ProductSearch and ProductList...
//declare an export function to return state of Product...


export const ProductContainer = () => {
    //setup state variable for searchTerms with initial state being empty string (because the input of the Search field will be string/typed words)

    const [searchTerms, setSearchTerms] = useState("")



    //^ will return two child components (removed from applicationViews while ProductContainer is routed through applicationViews)
    return <>
        <ProductSearch setterFunction={setSearchTerms} />
        <CustomerLists searchTermState={searchTerms} />
    </>
    //   ⬆️ productSearch and productList positioning determines how it renders onto page...see above

}
