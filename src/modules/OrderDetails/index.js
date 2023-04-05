import {Button, Card, Descriptions, Divider, List} from "antd";
import dishes from "../../data/dishes.json";
import { useParams} from "react-router-dom";

const DetailedOrder = () => {
    const {id} = useParams();
    return (
        <div className="App">

            <Card title={`Order ${id}`} style={{margin: 20 }}>
                <Descriptions boardered column={{lg: 1, md: 1, sm: 1}}>
                    <Descriptions.Item label="Customer">Daddy</Descriptions.Item>
                    <Descriptions.Item label="Customer Address">100 Katrina Way</Descriptions.Item>
                </Descriptions>
                <Divider/>
                <List
                    dataSource={dishes}
                    renderItem={(dishItem) => (
                        <List.Item>
                            <div style={{fontWeight: 'bold'}}>{dishItem.quantity} {dishItem.name}</div>
                            <div>${dishItem.price}</div>
                        </List.Item>
                    )}
                />
                <Divider />
                <div style={styles.totalSumContainer}>
                    <h2>Total: </h2>
                    <h2 style={styles.totalPrice}>$52.92</h2>
                </div>
                <Divider/>
                <div style={styles.buttonsContainer}>
                    <Button block type="primary" size="large" style={styles.declineButton}>
                        Decline Order
                    </Button>
                    <Button block type="primary" size="large" style={styles.acceptButton}>
                        Accept Order
                    </Button>
                </div>
                <Button block type="primary" size="large">
                    Order is Ready
                </Button>
            </Card>
        </div>
    );
}

const styles = {
    totalSumContainer: {
        flexDirection: 'row',
        display: 'flex',
    },
    totalPrice: {
        marginLeft: 'auto',
        fontWeight: 'bold',

    },
    buttonsContainer: {
        display: 'flex',
        paddingBottom: 30,

    },
    declineButton: {
        marginRight: 20,
        marginLeft: 20,
        background: 'red',
    },
    acceptButton: {
        marginRight: 20,
        marginLeft: 20,
        background: 'darkgreen',
    },


}
export default DetailedOrder