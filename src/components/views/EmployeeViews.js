import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerDetails } from "../accounts/CustomerDetails"
import { CustomerList } from "../accounts/CustomerList"
import { HomePage } from "../homePage/HomePage"
import { OrderList } from "../orders/OrderList"





export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="header-tumbler-mania">Tumbler Mania</h1>
                    {/* <div className="">Your one-stop shop for all your custom tumbler needs</div> */}

                    <Outlet />
                </>
            }>

    <Route path="home" element={ < HomePage/> } />
    <Route path="customers" element={ < CustomerList/> } />
    <Route path="orders" element={ < OrderList/> } />
    <Route path="customers/:customerId" element={ < CustomerDetails/> } />

                


            </Route>
        </Routes>
    )
}