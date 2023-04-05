import {Card, Table, Button} from "antd";
import {Link} from "react-router-dom";

import dishes from '../../data/dishes.json'


const RestaurantMenu = () => {
  const tableColumns = [
    {
      title: "Menu Item",
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button block type={"primary"} style={styles.removeButton}>Remove</Button>
    }

  ]
  const renderNewItemButton = () => {
    return (
      <Link to={'new-item'}>
        <Button >New Item</Button>
      </Link>

    )
  }
  return (
  <Card title={"Current Menu"} style={{margin: 20}} extra={renderNewItemButton()}>
    <Table dataSource={dishes} columns={tableColumns} rowKey={"id"}/>
  </Card>
  )
}
const styles = {
  removeButton: {
    background: 'red',
    width: 80
  }
}

export default RestaurantMenu;
