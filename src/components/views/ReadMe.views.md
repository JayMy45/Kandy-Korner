/*
Customers and Employees should see separate views when logged in.
In fact the search bar to filter products by name should only be available to customers at the moment.
Therefore,
two views need to be made a CustomerView.js and EmployeeView.js.
The routes that are seen to either of the views will be dependent upon the user who has logged in.
If it is a customer then render/display the customerView 
else render/display the employeesView

The conditional will be determined via the ApplicationView component with a ternary/if...else statement.


1. create two files one for customerViews and the other EmployeeViews.js
2. copy and paste code from applicationView to be exported from either component adjust code as needed
        - export the routing information for views as needed.
        - Customers need access to product search and productList (*ProductContainer...)
        - Employee needs access to productList but not search field (!ProductContain...  so ProductList needed for routing.)
3. update applicationView by removing views information contained within and updating with ternary statement.



*/