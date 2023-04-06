import orders from '../../data/orders.json'
import { Card, Table, Tag } from 'antd';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';

const Order = () => {
    const navigate = useNavigate();

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
            render: (price) => `$${price}`

        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderOrderStatus
        }
    ];


    return (
        <Card title={'Orders'} style={{margin: 20}}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                onRow={(orderItem) => ({
                    onClick: () => navigate(`order/${orderItem.orderID}`)
                })}

            />
        </Card>
    )
};

export default Order