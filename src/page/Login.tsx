import { GoogleOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Form, Input, Row, Space, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions";
import { RootState } from "../App";
import { useEffect, useState } from "react";

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state);
    const [error, setError] = useState("");

    const onFinish = (values: any) => {
        dispatch(loginRequest(values));
    };

    useEffect(() => {
        if (user.error) {
            setError(user.error);
        } else {
            setError("");
        }
    }, [user]);

    const renderLogin = () => {
        return (
            <Form
                name="basic"
                initialValues={{ usename: "", password: "" }}
                onFinish={onFinish}
                layout="vertical"
            >
                <Row>
                    <Col span={24}>
                        <h2>
                            Welcome to Panorama,<br></br> Sign in to continue.
                        </h2>
                        <p>
                            Don't have an account? <a href="#"> Creating an account</a> It
                            takes less than a minute
                        </p>
                        {error && <Alert message={error} type="error" showIcon />}
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                { required: true, message: "Please input your username!" },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Space
                            direction="horizontal"
                            style={{ width: "100%", justifyContent: "center" }}
                        >
                            <a href="#">Forgot Password?</a>
                        </Space>
                    </Col>
                    <Col span={24}>
                        <Button
                            type="primary"
                            block
                            className="submit-button"
                            size="large"
                            htmlType="submit"
                        >
                            Sign In
                        </Button>
                    </Col>
                    <Col span={24}>
                        <Button
                            type="primary"
                            block
                            className="submit-button-google"
                            icon={<GoogleOutlined />}
                            size="large"
                        >
                            Sign in with Google
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    };
    return (
        <Row className="login-layout">
            {
                user?.isLoading && (<div className={'loading-overlay'}>
                    <Spin size="large" />
                </div>)
            }
            <Col xs={24} md={12}>
                <div className="login-background"></div>
            </Col>
            <Col xs={24} md={12} className="login-right">
                <div className="login-form">{renderLogin()}</div>
            </Col>
        </Row>
    );
};

export default Login;
