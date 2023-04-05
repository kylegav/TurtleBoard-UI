import OrderDetails from "./modules/OrderDetails"
import Orders from "./modules/Orders"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Orders/>}/>
      <Route path="order/:id" element={<OrderDetails/>}/>
    </Routes>
  );
}



export default App;
