import AppRoutes from "./components/AppRoutes"
import SideMenu from "./components/SideMenu"
import packageInfo from "../package.json"
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
              <AppRoutes/>
          </Content>
        <Footer style={{textAlign: "center", backgroundColor: 'lightgray' }}>
          TurtleBoard UI {packageInfo.version} ©Kyle Gavin 2023
        </Footer>
      </Layout>
    </Layout>

  );
}



export default App;
