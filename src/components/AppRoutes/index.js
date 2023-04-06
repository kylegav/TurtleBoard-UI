import OrderDetails from "../../modules/OrderDetails"
import Orders from "../../modules/Orders"
import RestaurantMenu from "../../modules/RestaurantMenu";
import NewMenuItem from "../../modules/NewMenuItem";
import OrderHistory from "../../modules/OrderHistory";
import {Routes, Route} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Orders/>}/>
            <Route path="order/:id" element={<OrderDetails/>}/>
            <Route path="menu" element={<RestaurantMenu/>}/>
            <Route path="menu/new-item" element={<NewMenuItem/>}/>
            <Route path="order-history" element={<OrderHistory/>}/>
        </Routes>
    )
}

export default AppRoutes;