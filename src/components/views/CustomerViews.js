import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerForm } from "../accounts/CustomerEdit"
import { CustomerProfile } from "../accounts/Profile"
import { HomePage } from "../homePage/HomePage"
import { Order } from "../orders/Order"
import { EditOrderForm } from "../orders/OrderEdit"
import { OrderForm } from "../orders/OrderForm"
import { OrderList } from "../orders/OrderList"
import "./views.css"





export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="header-tumbler-mania">Tumbler Mania</h1>
                    {/* <div>Your one-stop shop for all your custom tumbler needs</div> */}

                    <Outlet />
                </>
            }>

                <Route path="order/create" element={ < OrderForm/> } />
                <Route path="home" element={ < HomePage/> } />
                <Route path="account" element={ < CustomerProfile/> } />
                <Route path="orders" element={ < OrderList/> } />
                <Route path="account/edit" element={ < CustomerForm/> } />
                <Route path="order/edit/:orderId" element={ < EditOrderForm/> } />
                

                


            </Route>
        </Routes>
    )
}