import OrderDetails from "./modules/OrderDetails"
import Orders from "./modules/Orders"
import SideMenu from "./components/SideMenu"
import {Routes, Route} from "react-router-dom";
import {Layout, Image} from "antd";


const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{height: '100vh', backgroundColor: "black" }}>
        <Image src={"https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"} preview={false}></Image>
        <SideMenu></SideMenu>
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="" element={<Orders/>}/>
            <Route path="order/:id" element={<OrderDetails/>}/>
          </Routes>
        </Content>
        <Footer style={{textAlign: "center", backgroundColor: 'lightgray' }}>
          Dashboard UI v0.1.0
        </Footer>
      </Layout>
    </Layout>

  );
}



export default App;
