import orders from '../../data/orders.json'
import { Card, Table, Tag } from 'antd';
import { useNavigate} from "react-router-dom";


const Order = () => {
    const navigate = useNavigate();

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === 'Accepted') {
            return <Tag color={'green'}>{orderStatus}</Tag>
        } else if (orderStatus === 'Pending') {
            return <Tag color={'yellow'}>{orderStatus}</Tag>
        } else if (orderStatus === 'Declined') {
            return <Tag color={'red'}>{orderStatus}</Tag>
        }
        console.log(orderStatus)
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
            key: 'deliveryAddress',
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
            render: renderOrderStatus
        }
    ];


    return (
        <Card title={'Orders'} style={{margin: 20}}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                onChange={onChange}
                onRow={(orderItem) => ({
                    onClick: () => navigate(`order/${orderItem.orderID}`)
                })}

            />
        </Card>
    )
};

export default Order