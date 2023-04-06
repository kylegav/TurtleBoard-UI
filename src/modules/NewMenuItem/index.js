import {Form, Card, Button, Input, InputNumber} from "antd";
import TextArea from "antd/lib/input/TextArea";


const NewMenuItem = () => {
    return (
    <Card title={"New Menu Item"} style={{margin: 20}}>
        <Form layout={"vertical"} wrapperCol={{span: 10}}>
            <Form.Item label={"Dish Name"} style={{width: 600}} required>
                <Input></Input>
            </Form.Item>
            <Form.Item label={"Description"} required>
                <TextArea rows={4}></TextArea>
            </Form.Item>
            <Form.Item label={"Price"} required>
                <InputNumber/>
            </Form.Item>
            <Form.Item>
                <Button block type={"primary"} style={{width: 100}}>Submit</Button>
            </Form.Item>
        </Form>
    </Card>
    )

}

export default NewMenuItem;