import OrderDetails from "./modules/OrderDetails"
import Orders from "./modules/Orders"
import SideMenu from "./components/SideMenu"
import RestaurantMenu from "./modules/RestaurantMenu";
import NewMenuItem from "./modules/NewMenuItem";
import OrderHistory from "./modules/OrderHistory";
import {Routes, Route} from "react-router-dom";
import {Layout, Image} from "antd";

const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{backgroundColor: '#00683E'}}>
        <Image src={"GreeneTurtleLogo.jpg"}preview={false}></Image>
        <SideMenu></SideMenu>
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="" element={<Orders/>}/>
            <Route path="order/:id" element={<OrderDetails/>}/>
            <Route path="menu" element={<RestaurantMenu/>}/>
              <Route path="menu/new-item" element={<NewMenuItem/>}/>
              <Route path="order-history" element={<OrderHistory/>}/>
          </Routes>
        </Content>
        <Footer style={{textAlign: "center", backgroundColor: 'lightgray' }}>
          TurtleBoard UI v0.1.0 ©Kyle Gavin 2023
        </Footer>
      </Layout>
    </Layout>

  );
}



export default App;
