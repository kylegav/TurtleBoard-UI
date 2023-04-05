import OrderDetails from "./modules/OrderDetails"
import Orders from "./modules/Orders"
import SideMenu from "./components/SideMenu"
import RestaurantMenu from "./modules/RestaurantMenu";
import {Routes, Route} from "react-router-dom";
import {Layout, Image} from "antd";


const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{height: '100vh', backgroundColor: '#00683E'}}>
        <Image src={"GreeneTurtleLogo.jpg"}preview={false}></Image>
        <SideMenu></SideMenu>
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="" element={<Orders/>}/>
            <Route path="order/:id" element={<OrderDetails/>}/>
            <Route path="menu" element={<RestaurantMenu/>}/>
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
