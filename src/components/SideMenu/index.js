import {Menu} from 'antd';
import {useNavigate} from 'react-router-dom';


const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "/",
      label: "Orders"
    },
    {
      key: "order-history",
      label: "Order History"
    },
    {
      key: "menu",
      label: "Menu"
    },
    {
      key: "settings",
      label: "Settings",
    }
  ]
  const onMenuClick = (menuItem) => {
    navigate(menuItem.key)
  }
  return (
    // TODO: Optimize menu styles in index.css
    // TODO: Integrate onMenuClick navigate into a lambda function in onClick
    <Menu items={menuItems} style={{backgroundColor: '#00683E', color: 'white', textAlign: 'left'}} onClick={onMenuClick}/>
  )
};
export default SideMenu
