import { FC, useState } from 'react';
import {
  Button,
  DrawerProps,
  Drawer,
  Form,
  Image,
  Input,
  Descriptions,
  DescriptionsProps,
} from 'antd';
import EmailImage from 'assets/images/email.svg';
import UserNameImage from 'assets/images/user.svg';

import * as Styled from './styles';

export const NewForm: FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps['placement']>('bottom');
  const [descriptionsItems, setDescriptionsItems] = useState<
    DescriptionsProps['items']
  >([]);

  const [form] = Form.useForm();

  const onFinish = (values: Record<string, string>) => {
    const itemsValue = Object.entries(values).map(([key, value]) => {
      return {
        key: key,
        label: key,
        children: value,
      };
    });

    setDescriptionsItems(itemsValue);
    showDrawer();
    form.resetFields();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Styled.Main>
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Styled.Column>
            <Styled.Text>Register</Styled.Text>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
                {
                  type: 'email',
                  message: 'Please enter a valid email address',
                },
              ]}
            >
              <Input
                size="large"
                suffix={<Image src={EmailImage} width={24} preview={false} />}
              />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              style={{
                width: 300,
              }}
              rules={[
                {
                  required: true,
                  message: 'Please input your username',
                },
                {
                  pattern: new RegExp('^.{4,20}$'),
                  message: 'Username must be 4-20 characters long',
                },
                {
                  pattern: new RegExp('^[^_.].*$'),
                  message: ' no _ or . at the beginning',
                },
                {
                  pattern: new RegExp('[a-zA-Z0-9._]'),
                  message: 'Not allowed characters',
                },
              ]}
            >
              <Input
                size="large"
                suffix={
                  <Image src={UserNameImage} width={24} preview={false} />
                }
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password',
                },
                {
                  pattern: new RegExp('.{8,}'),
                  message: 'Minimum eight in length',
                },
                {
                  pattern: new RegExp('.*?[A-Z]'),
                  message: 'Min 1 uppercase letter.',
                },
                {
                  pattern: new RegExp('.*?[0-9]'),
                  message: 'Min 1 number',
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Button htmlType="submit" size="large" type="primary">
              Submit
            </Button>
          </Styled.Column>
        </Form>
      </Styled.Main>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Descriptions
          layout="vertical"
          title="User Info"
          bordered
          items={descriptionsItems}
        />
      </Drawer>
    </>
  );
};
