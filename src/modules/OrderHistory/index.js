import ordersHistory from '../../data/orders-history.json'
import { Card, Table, Tag } from 'antd';
import { useNavigate} from "react-router-dom";

const OrderHistory = () => {
    const navigate = useNavigate();

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const tableColumns = [
        {
            title: 'Order ID',
            dataIndex: 'orderID',
            key: 'orderID',
            // TODO: Add First and Last name to Table use sort method below
            sorter: (a, b) => a.orderID.length - b.orderID.length,
            sortDirections: ['descend']
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
            key: 'deliveryAddress'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
            render: (price) => `$${price}`

        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [
                {
                    text: "Pending",
                    value: "Pending",
                },
                {
                    text: "Accepted",
                    value: "Accepted",
                },
                {
                    text: "Declined",
                    value: "Declined",
                },

            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            render: (status) => <Tag color={status === 'Delivered' ? 'green' : 'red'}>{status}</Tag>
        }
    ];

    return (
        <Card title={'Orders History'} style={{margin: 20}}>
            <Table
                dataSource={ordersHistory}
                columns={tableColumns}
                onChange={onChange}
                onRow={(orderItem) => ({
                    onClick: () => navigate(`../order/${orderItem.orderID}`)
                })}
            />
        </Card>
    )
};

export default OrderHistory