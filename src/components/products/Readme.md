/*
two sibling components can not communicate with one another in the same module...  
Therefore a parent component/module needs to be created to facility the communication between two siblings.
In this case ProductSearch was created to provide a input field that will be used to find specific items by name.
  -whenever a user types in the name the list will be updated to show the names of the products searched for.

With the sibling both being routed through ApplicationViews they wont be able to communicate with one another so as said above a parent 
component must be made to facility communication.

Why are the communicating your ask...
    -in order for the field to filter items by name information from ProductList is required...
    -because the routes for both components is located in the ApplicationViews component communication isn't allowed. (why?)


create parent component named ProductContainer to maintain state between siblings (ProductList and ProductSearch).

-remove siblings from ApplicationViews.js...
- ** parent component (ProductContainer) will now return these two sibling while managing state ([searchTerms, setSearchTerms] = useState[""])
create props in the the parent component to pass state of siblings as arguments...




*/