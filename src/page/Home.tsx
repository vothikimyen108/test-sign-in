import React from 'react';
import { Typography, Button } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../App';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const firstName = useSelector((state: RootState) => state.firstName);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography>
        <Title>Hello {firstName}, welcome to our website!</Title>
        <Paragraph>Thank you for visiting our website.</Paragraph>
      </Typography>
      <Button type="primary">Get started</Button>
    </div>
  );
};

export default HomePage;