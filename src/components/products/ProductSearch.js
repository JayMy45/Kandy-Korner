import "./Products.css"

export const ProductSearch = ({ setterFunction }) => {
    return (  //has to be parenthesis and not fragment to around input to render on page...
        //create an onChange event that will change the state in this component
        //changeEvent.target.value eventListener that will listen for changes to input field value.

        <div className="searchbox">
            <div className="search">
                <div className="searchlabel">
                    <label>Search for a candy by name!</label>
                </div>
                <div className="searchinput">
                    <input
                        onChange={(changeEvent) => { setterFunction(changeEvent.target.value) }}
                        type="text"
                        placeholder="What candy are you looking for?"
                        className="kandyKorner__search"
                    />
                </div>
            </div>
        </div>
    )
} 