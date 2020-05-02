import React from 'react'
import {Form , Card ,Input ,Button, message} from 'antd'

function Edit(props) {

    // 表单通过onFinish提交
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };

    // 表单通过onFinish提交
    const onFinishFailed = values => {
        console.log('failed');
      };

    return (
        <Card title="商品编辑">
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item 
                    label="名字" 
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input placeholder="请输入商品名字"></Input>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit;
